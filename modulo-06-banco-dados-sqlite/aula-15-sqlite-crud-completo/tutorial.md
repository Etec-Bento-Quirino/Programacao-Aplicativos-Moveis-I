# Tutorial: CRUD Completo com SQLite

**Sugestão de execução:** Quinzena 18 | **Bimestre:** 3

> **Pré-requisitos:** [Aula 14](../aula-14-sqlite-configuracao-primeira-tabela/README.md) — banco SQLite criado e primeira tabela funcionando.
>
> **O que você vai aprender:**
> - Listar todos os registros de uma tabela com `SELECT` e exibí-los numa `FlatList`
> - Inserir novos registros via `INSERT INTO` a partir de um estado do React
> - Excluir registros pelo `id` com `DELETE WHERE`
> - Criar uma função "recarregar lista" que sincroniza o banco com a tela após cada operação

---

Vamos puxar a nossa Tela que foi erguida na Aula 14, unificando os conceitos lógicos para montar a fúria Completa de Listagem (`Flatlist` de alta performance baseada no lixeiro *Garbage collector*) + Botões Dinâmicos!

---

## Passo 1: O Funil de Listagem (Read e State Sync)
Continuando no escopo do seu Componente importando o `bancoDados`, nós forçamos o R da equação (No `useEffect` do Guardião, que ativou a Tabela, e nós acoplamos a Listagem Lógica):

```tsx
  const [listaDeMetas, setListaDeMetas] = useState<{id: number; descricao: string; status_feita: number}[]>([]);

  // Recarrega a lista buscando todos os registros do banco (sempre do mais novo para o mais antigo)
  const carregarTarefas = () => {
    const registros = bancoDados.getAllSync('SELECT * FROM metas ORDER BY id DESC');
    setListaDeMetas(registros); 
  };

  useEffect(() => {
    // ... criação das tabelas ensinada na Aula Anterior vai aqui em cima ...
    setBancoGerado(true);

    // Ao abrir a tela, carrega os dados já existentes no banco:
    carregarTarefas();
  }, []);
```

## Passo 2: Os Disparadores (Delete e Insert)

Temos a base. Crie as duas funções principais que sofrerão botões da UI. Repare que passaremos parâmetro no meio ali da string do comando usando `?` ! Isso é brutal de lindo. O SQLite entende que o `id_da_lista` que você jogou no colchetes substituirá aquela Interrogação e fará o estrago oficial!

```tsx
  // --- CREATE: adiciona um novo registro no banco
  const adicionarMeta = (texto: string) => {
    // O "?" protege contra SQL Injection: a variável é passada separadamente do comando SQL
    bancoDados.runSync('INSERT INTO metas (descricao) VALUES (?)', [texto]);
    
    // Após inserir, recarrega a lista para refletir a mudança na tela:
    carregarTarefas();
  };

  // --- DELETE: remove o registro pelo id
  const excluirMeta = (id: number) => {
    bancoDados.runSync('DELETE FROM metas WHERE id = ?', [id]);
    
    // Após excluir, recarrega a lista para remover o item da tela:
    carregarTarefas();
  };
```

---

## Passo 2.1: UPDATE — O "U" que faltava do CRUD

A Aula passou pelo Create, Read e Delete — e o Update? Ele usa o mesmo padrão de `runSync` com `?`, só que com `SET` e cláusula `WHERE`:

```tsx
  // --- UPDATE: marca a meta como feita (1) ou não feita (0)
  const alternarFeita = (id: number, feita: boolean) => {
    bancoDados.runSync(
      'UPDATE metas SET status_feita = ? WHERE id = ?',
      [feita ? 1 : 0, id]
    );
    carregarTarefas();
  };
```

## Passo 2.2: `getFirstSync` — Buscando UM Único Registro

`getAllSync` devolve um **array** com todas as linhas. Quando você quer só **um** registro (ex.: a tela de detalhe que usa o `id` vindo do Expo Router), use `getFirstSync` — ele devolve **um único objeto** (ou `null` se não achar):

```tsx
  const buscarMeta = (id: number) => {
    // Devolve um objeto { id, descricao, status_feita } ou null
    const meta = bancoDados.getFirstSync<{ id: number; descricao: string; status_feita: number }>(
      'SELECT * FROM metas WHERE id = ?',
      [id]
    );

    if (meta) {
      console.log('Achei:', meta.descricao);
    } else {
      console.log('Registro', id, 'não existe.');
    }
  };
```

> [!TIP]
> Esta é a leitura perfeita para a tela `detalhe/[id]` da Aula 06: `const { id } = useLocalSearchParams()` → `getFirstSync('SELECT * FROM metas WHERE id = ?', [Number(id)])`.

## Passo 2.3: `withTransactionSync` — O Pacote Selado (tudo ou nada)

Quando você precisa fazer **várias operações** que só fazem sentido juntas (ex.: transferência de dinheiro: tirar de uma conta E colocar na outra), use `withTransactionSync`. Ele abre um `BEGIN`, roda as operações e só executa o `COMMIT` se **todas** tiverem sucesso. Se alguma falhar, dá `ROLLBACK` e nenhuma linha muda:

```tsx
  const transferirMeta = (origemId: number, destinoId: number, valor: number) => {
    bancoDados.withTransactionSync(() => {
      bancoDados.runSync('UPDATE contas SET saldo = saldo - ? WHERE id = ?', [valor, origemId]);
      bancoDados.runSync('UPDATE contas SET saldo = saldo + ? WHERE id = ?', [valor, destinoId]);
      // Se o segundo UPDATE falhar, o primeiro é desfeito automaticamente!
    });
  };
```

## Passo 2.4: `prepareSync` — Reusando um Comando Preparado

Toda vez que você chama `runSync`, o SQLite **compila** o comando SQL de novo. Para comandos executados muitas vezes (ex.: inserir várias tarefas numa listinha), `prepareSync` compila **uma vez** e executa quantas vezes quiser — mais rápido:

```tsx
  const inserirVarias = (textos: string[]) => {
    // 1. Prepara o comando UMA vez
    const stmt = bancoDados.prepareSync('INSERT INTO metas (descricao) VALUES (?)');

    // 2. Executa N vezes só trocando os parâmetros
    for (const texto of textos) {
      stmt.executeSync([texto]);
    }

    // 3. Ao terminar, "finaliza" o comando preparado para liberar memória
    stmt.finalizeSync();
    carregarTarefas();
  };
```

> [!NOTE]
> Resumo da caixa de ferramentas do SQLite: `execSync` (DDL/DDL sem retorno), `runSync` (INSERT/UPDATE/DELETE — devolve `{ lastInsertRowId, changes }`), `getAllSync` (muitas linhas), `getFirstSync` (uma linha), `withTransactionSync` (operações em bloco), `prepareSync` + `executeSync` (comandos reutilizáveis).

---

## Passo 3: O Render Final (A Interface Crua)
Usamos a Flatlist da Aula 05 para repintar os arrays brutos em Componentes Individuais. Eles terão botões.

```tsx
{% raw %}
  return (
    <View style={{ flex: 1, padding: 20 }}>
      {/* Aqui iria um <TextInput /> charmoso apontando para a injeção... */}
      <Text style={{fontSize: 20}}>Lista de Metas</Text>
      
      <FlatList
        data={listaDeMetas}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={{ padding: 15, borderBottomWidth: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>#{item.id} — {item.descricao}</Text>
            
            <TouchableOpacity onPress={() => excluirMeta(item.id)}>
              <Text style={{ color: 'red', fontWeight: 'bold' }}>Excluir</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
{% endraw %}
```

Avance para a atividade final do bimestre — você foi exímio!

---

## Como isso se aplica ao seu projeto

As três funções criadas nesta aula (`carregarTarefas`, `adicionarMeta`, `excluirMeta`) formam o núcleo do CRUD que você replicará no **seu** projeto com os nomes adequados:

| Operação | Projeto A | Projeto B | Projeto C | Projeto D |
|---|---|---|---|---|
| Listar | `carregarTarefas()` | `carregarItens()` | `carregarNotas()` | `carregarGastos()` |
| Inserir | `adicionarTarefa(texto)` | `adicionarItem(nome, qtd)` | `adicionarNota(titulo, conteudo)` | `adicionarGasto(valor, descricao)` |
| Excluir | `excluirTarefa(id)` | `excluirItem(id)` | `excluirNota(id)` | `excluirGasto(id)` |

Na Aula 16 você conectará esses funções diretamente ao formulário da Aula 07, completando o ciclo completo de criação e listagem de dados no app.

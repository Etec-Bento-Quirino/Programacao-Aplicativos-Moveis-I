---
layout: default
render_with_liquid: false
---
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

## Passo 3: O Render Final (A Interface Crua)
Usamos a Flatlist da Aula 05 para repintar os arrays brutos em Componentes Individuais. Eles terão botões.

```tsx
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

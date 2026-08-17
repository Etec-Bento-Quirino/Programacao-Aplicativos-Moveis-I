# Tutorial: CRUD Completo com SQLite

**Sugestão de execução:** Quinzena 18 | **Bimestre:** 3

> [!NOTE]
> **O que você vai aprender hoje:**
> - Listar registros com `SELECT` e exibir numa `FlatList`
> - Inserir registros via `INSERT INTO` a partir de um estado do React
> - Excluir registros pelo `id` com `DELETE WHERE`
> - Atualizar registros com `UPDATE SET`
> - Criar a função "recarregar lista" que sincroniza banco com tela
>
> **Pré-requisitos:** [Aula 14](../aula-14-sqlite-configuracao-primeira-tabela/README.md) — banco SQLite criado e primeira tabela funcionando.

---

Vamos pegar a tela que criamos na Aula 14 e transformá-la numa **lista interativa** com botões de adicionar e excluir. A ideia é simples: tudo que o usuário faz no banco, a **tela atualiza** na hora.

Pense assim: o banco é o estoque da loja, e a tela é a prateleira que o cliente vê. Tira um produto do estoque? A prateleira tem que atualizar!

---

## Passo 1: Buscando os Dados (Read)

Vamos começar criando uma função que **busca todos** os registros da tabela e guarda no estado do React:

```tsx
const [listaDeMetas, setListaDeMetas] = useState<{id: number; descricao: string; status_feita: number}[]>([]);

// Busca todos os registros do banco (do mais novo para o mais antigo)
const carregarTarefas = () => {
  const registros = bancoDados.getAllSync('SELECT * FROM metas ORDER BY id DESC');
  setListaDeMetas(registros);
};

useEffect(() => {
  // ... criação da tabela (da Aula 14) ...
  setBancoGerado(true);

  // Ao abrir a tela, carrega os dados que já existem no banco
  carregarTarefas();
}, []);
```

Explicando:

- `getAllSync('SELECT * FROM metas ORDER BY id DESC')` → pega **todas** as linhas da tabela `metas`, ordenadas do último para o primeiro
- `setListaDeMetas(registros)` → joga os dados no estado, e o React redesenha a tela
- `carregarTarefas()` roda no `useEffect` → a tela já começa com os dados antigos aparecendo

> [!NOTE]
> `SELECT *` significa "traga **todas** as colunas". É como pedir "me mostre a planilha inteira". `ORDER BY id DESC` ordena do maior id para o menor (o mais recente primeiro).

---

## Passo 2: Adicionando e Excluindo (Create e Delete)

Agora vamos criar as funções de **inserir** e **excluir**:

```tsx
// CREATE: adiciona um novo registro no banco
const adicionarMeta = (texto: string) => {
  bancoDados.runSync('INSERT INTO metas (descricao) VALUES (?)', [texto]);
  carregarTarefas(); // recarrega a lista para mostrar o item novo
};

// DELETE: remove o registro pelo id
const excluirMeta = (id: number) => {
  bancoDados.runSync('DELETE FROM metas WHERE id = ?', [id]);
  carregarTarefas(); // recarrega a lista para remover o item da tela
};
```

Explicando:

- `adicionarMeta` → insere a tarefa e **recarrega** a lista (para o novo item aparecer na tela)
- `excluirMeta` → apaga a tarefa pelo `id` e **recarrega** (para o item sumir da tela)

> [!IMPORTANT]
> Perceba que **ambas** as funções chamam `carregarTarefas()` no final. Esse é o "Full Loop": escreve no banco → recarrega a lista → tela atualiza. Sem isso, a tela fica "desatualizada"!

---

## Passo 3: Atualizando (UPDATE)

O "U" do CRUD permite **modificar** um registro existente. Vamos criar uma função que marca uma meta como "feita":

```tsx
const alternarFeita = (id: number, feita: boolean) => {
  bancoDados.runSync(
    'UPDATE metas SET status_feita = ? WHERE id = ?',
    [feita ? 1 : 0, id]
  );
  carregarTarefas();
};
```

Explicando:

- `UPDATE metas SET status_feita = ? WHERE id = ?` → "na tabela metas, mude o campo `status_feita` do registro com este `id`"
- `feita ? 1 : 0` → se for `true` coloca 1 (feita), se for `false` coloca 0 (não feita)
- Novamente, `carregarTarefas()` atualiza a tela

> [!TIP]
> `WHERE` é a cláusula de **filtro**. Sem ela, o `UPDATE` mudaria **todos** os registros da tabela! Isso seria um desastre — imagine marcar todas as tarefas como "feitas" de uma vez!

---

## Passo 4: Buscando um Único Registro (`getFirstSync`)

`getAllSync` devolve um **array** com várias linhas. Quando você quer **um único registro** (ex.: tela de detalhe), use `getFirstSync`:

```tsx
const buscarMeta = (id: number) => {
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
> `getFirstSync` devolve **um objeto** (ou `null` se não achar). É perfeito para a tela `detalhe/[id]` do Expo Router!

---

## Passo 5: Operações em Bloco (`withTransactionSync`)

Quando você precisa fazer **várias operações** que só fazem sentido juntas, use `withTransactionSync`. Ele garante que **todas** as operações funcionem ou **nenhuma** aconteça:

```tsx
const transferirMeta = (origemId: number, destinoId: number, valor: number) => {
  bancoDados.withTransactionSync(() => {
    bancoDados.runSync('UPDATE contas SET saldo = saldo - ? WHERE id = ?', [valor, origemId]);
    bancoDados.runSync('UPDATE contas SET saldo = saldo + ? WHERE id = ?', [valor, destinoId]);
    // Se o segundo UPDATE falhar, o primeiro é desfeito automaticamente!
  });
};
```

> [!CAUTION]
> Se uma das operações dentro da transaction falhar, **todas** são desfeitas (rollback). Isso evita dados inconsistentes — como dinheiro que sumiu de uma conta mas não chegou na outra!

---

## Passo 6: Reusando Comandos (`prepareSync`)

Para comandos executados muitas vezes, `prepareSync` compila o SQL **uma vez** e executa quantas vezes quiser — mais rápido:

```tsx
const inserirVarias = (textos: string[]) => {
  // 1. Prepara o comando UMA vez
  const stmt = bancoDados.prepareSync('INSERT INTO metas (descricao) VALUES (?)');

  // 2. Executa N vezes só trocando os parâmetros
  for (const texto of textos) {
    stmt.executeSync([texto]);
  }

  // 3. Libera memória
  stmt.finalizeSync();
  carregarTarefas();
};
```

---

## Passo 7: A Interface (a lista na tela)

Agora vamos usar uma `FlatList` para mostrar as metas na tela, com botões de excluir e de marcar como feita:

```tsx
return (
  <View style={{ flex: 1, padding: 20 }}>
    <Text style={{ fontSize: 20 }}>Lista de Metas</Text>

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

Explicando:

- `FlatList` recebe o array `listaDeMetas` e renderiza **um componente** para cada item
- `keyExtractor` diz ao React qual é a chave única de cada linha (o `id`)
- `renderItem` define como cada linha é desenhada — aqui colocamos o texto + botão "Excluir"

> [!WARNING]
> `keyExtractor` precisa de uma string. Por isso usamos `String(item.id)` — o `id` é número, mas o React pede string.

---

## Checklist da Aula 15

Marque cada item quando conseguir fazer:

- [ ] Função `carregarTarefas()` usando `getAllSync` criada
- [ ] Função `adicionarMeta()` usando `runSync` + `INSERT INTO` criada
- [ ] Função `excluirMeta()` usando `runSync` + `DELETE WHERE` criada
- [ ] Função `alternarFeita()` usando `runSync` + `UPDATE SET` criada
- [ ] `FlatList` exibindo a lista com botões na tela
- [ ] Ao clicar "Excluir", o item some da lista e some do banco
- [ ] Ao clicar "Adicionar", o item aparece na lista e aparece no banco

> [!NOTE]
> Se algum item ficou sem marcar, volte no passo correspondente. Não siga em frente com pendências — a próxima aula usa tudo isso!

---

## Como isso se aplica ao seu projeto

As funções que você criou nesta aula formam o **núcleo do CRUD** que você replicará em todas as telas do seu projeto:

| Operação | Categoria 1 | Categoria 2 | Categoria 3 | Categoria 4 |
|---|---|---|---|---|
| Listar | `carregarTarefas()` | `carregarItens()` | `carregarNotas()` | `carregarGastos()` |
| Inserir | `adicionarTarefa(texto)` | `adicionarItem(nome, qtd)` | `adicionarNota(titulo, conteudo)` | `adicionarGasto(valor, descricao)` |
| Excluir | `excluirTarefa(id)` | `excluirItem(id)` | `excluirNota(id)` | `excluirGasto(id)` |

Na Aula 16, você vai conectar essas funções ao **formulário** da Aula 07, completando o ciclo: usuário preenche → salva no banco → volta para a lista atualizada. Vejo você lá!

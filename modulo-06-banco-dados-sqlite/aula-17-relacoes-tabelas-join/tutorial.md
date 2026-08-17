# Tutorial: A Matriz Super-Juntada (SQL JOIN)

**Sugestão de execução:** Quinzena 22 | **Bimestre:** 4

> [!NOTE]
> **O que você vai aprender hoje:**
> - Usar `INNER JOIN` para buscar dados de duas tabelas em uma única consulta
> - Usar aliases (`i.nome`, `c.nome AS nome_categoria`) para distinguir colunas homônimas
> - Usar `LEFT JOIN` com `COUNT` para exibir o total de itens por categoria
> - Entender a diferença entre `INNER JOIN` e `LEFT JOIN`
>
> **Pré-requisitos:** [Aula 16](../aula-16-formularios-sqlite-integracao/README.md) — duas tabelas relacionadas (`FOREIGN KEY`) criadas e populadas.

---

Nesta aula, vamos injetar o poder bruto do SQL no nosso código. Em vez de fazer duas buscas separadas (uma para itens, outra para categorias), vamos fazer **uma única consulta** que cruza tudo!

Pense assim: em vez de ir ao estoque buscar o produto, depois ir ao cadastro buscar o nome da categoria, você pede pro sistema te entregar **tudo junto** — numa única ida!

---

## Passo 1: INNER JOIN — Juntando Itens e Categorias

Vamos criar uma função que busca os itens **com o nome da categoria** ao lado:

```tsx
const carregarItensComCategoria = () => {
  const query = `
    SELECT
      i.id,
      i.nome AS nome_produto,
      i.id_categoria,
      c.nome AS nome_categoria
    FROM itens i
    INNER JOIN categorias c ON i.id_categoria = c.id
    ORDER BY i.id DESC;
  `;

  const registros = bancoDados.getAllSync(query);
  // Cada registro agora contém dados das duas tabelas:
  // [{ id: 10, nome_produto: 'Maçã', nome_categoria: 'Alimentos' }]
  setItensComplexos(registros);
};
```

Explicando linha por linha:

- `SELECT i.id, i.nome AS nome_produto` → pega o id e o nome do item, renomeando para "nome_produto"
- `i.id_categoria, c.nome AS nome_categoria` → pega o id da categoria e o nome da categoria
- `FROM itens i` → "pegue a tabela `itens` e chame de `i`"
- `INNER JOIN categorias c ON i.id_categoria = c.id` → "junte com `categorias` onde o `id_categoria` bate com o `id`"
- `ORDER BY i.id DESC` → ordena do mais recente para o mais antigo

> [!IMPORTANT]
> O resultado é **um único array** com objetos que misturam dados de **duas tabelas**. Não precisa fazer duas buscas — o SQL faz tudo numa operação!

---

## Passo 2: LEFT JOIN — Categorias Mesmo Sem Itens

E se você quer ver **todas** as categorias, inclusive as que não têm nenhum item? O `INNER JOIN` não traz essas — ele só mostra categorias que têm par.

O **LEFT JOIN** traz **todas** as categorias da tabela da esquerda, mesmo que não tenham itens:

```tsx
const carregarCategorias = () => {
  const query = `
    SELECT
      c.id,
      c.nome,
      COUNT(i.id) AS total_itens
    FROM categorias c
    LEFT JOIN itens i ON c.id = i.id_categoria
    GROUP BY c.id, c.nome;
  `;
  const categorias = bancoDados.getAllSync(query);
  setCategoriasEstado(categorias);
};
```

Explicando:

- `LEFT JOIN itens i ON c.id = i.id_categoria` → traz a categoria mesmo se não tiver itens
- `COUNT(i.id) AS total_itens` → conta quantos itens tem em cada categoria
- `GROUP BY c.id, c.nome` → agrupa os resultados por categoria (necessário para o `COUNT` funcionar)

> [!NOTE]
> Se uma categoria não tem nenhum item, `COUNT(i.id)` retorna **0** (e não `null`). Isso é perfeito para mostrar "Limpeza (0 Itens)" na tela!

| Tipo | Categoria "Limpeza" (0 itens) | Categoria "Alimentos" (3 itens) |
|------|------|------|
| `INNER JOIN` | **Não aparece** | Aparece (3 vezes) |
| `LEFT JOIN` | **Aparece** (total_itens = 0) | Aparece (total_itens = 3) |

---

## Passo 3: Renderizando na Tela

Com os dados prontos, vamos exibir na tela usando uma `FlatList`:

```tsx
return (
  <FlatList
    data={categoriasEstado}
    keyExtractor={(item) => String(item.id)}
    renderItem={({ item }) => (
      <View style={{ padding: 15, marginVertical: 3, backgroundColor: '#eee' }}>
        <Text style={{ fontWeight: 'bold' }}>
          Categoria: {item.nome}
        </Text>
        <Text style={{ color: 'gray' }}>
          {item.total_itens} {item.total_itens === 1 ? 'item' : 'itens'}
        </Text>
      </View>
    )}
  />
);
```

Explicando:

- `item.total_itens` → vem direto do `COUNT` no SQL — não precisa contar no JavaScript!
- `{item.total_itens === 1 ? 'item' : 'itens'}` → se for 1, mostra "item" (singular); senão, "itens" (plural)
- O backend (SQL) fez o trabalho pesado; o frontend (React) só exibe

> [!TIP]
> Isso é o poder do JOIN: em vez de fazer 10 buscas separadas e contar no JavaScript, o banco devolve tudo pronto numa **única operação**. É mais rápido e mais limpo!

---

## Passo 4: Consulta Completa no Seu Projeto

Aqui está o padrão que você vai usar em qualquer projeto com categorias:

```tsx
// Busca itens COM o nome da categoria (INNER JOIN)
const itensComCategoria = bancoDados.getAllSync(`
  SELECT
    i.*,
    c.nome AS nome_categoria
  FROM itens i
  INNER JOIN categorias c ON i.id_categoria = c.id
  ORDER BY i.id DESC
`);

// Busca categorias COM contagem de itens (LEFT JOIN + COUNT)
const categoriasComContagem = bancoDados.getAllSync(`
  SELECT
    c.*,
    COUNT(i.id) AS total_itens
  FROM categorias c
  LEFT JOIN itens i ON c.id = i.id_categoria
  GROUP BY c.id
`);
```

> [!NOTE]
> O `i.*` significa "traga **todas** as colunas da tabela `itens`". É um atalho que economiza digitação — mas cuidado: se as duas tabelas tiverem colunas com o mesmo nome, pode dar conflito. Prefira listar as colunas explicitamente quando usar JOIN!

---

## Checklist da Aula 17

Marque cada item quando conseguir fazer:

- [ ] Função `carregarItensComCategoria` usando `INNER JOIN` criada
- [ ] A tela mostra o **nome** da categoria ao lado do nome do item
- [ ] Função `carregarCategorias` usando `LEFT JOIN` + `COUNT` criada
- [ ] A tela mostra categorias com contagem de itens (inclusive as vazias)
- [ ] Aliases (`AS`) sendo usados para renomear colunas
- [ ] `FlatList` renderizando os dados cruzados

> [!NOTE]
> Se algum item ficou sem marcar, volte no passo correspondente. Parabéns — você completou o Módulo 06 do curso!

---

## Como isso se aplica ao seu projeto

O `JOIN` resolve um problema real em todos os projetos com tabelas relacionadas:

| Projeto | Consulta com JOIN |
|---|---|
| Categoria 2 | `SELECT itens.*, categorias.nome AS nome_categoria FROM itens INNER JOIN categorias ON itens.id_categoria = categorias.id` |
| Categoria 3 | `SELECT notas.*, categorias.nome AS nome_categoria FROM notas INNER JOIN categorias ON notas.id_categoria = categorias.id` |
| Categoria 4 | `SELECT gastos.*, categorias.nome AS nome_categoria FROM gastos INNER JOIN categorias ON gastos.id_categoria = categorias.id` |

O `LEFT JOIN + COUNT` resolve o contador na tela inicial de todos os projetos com categorias — sem múltiplas consultas, sem calcular no JavaScript.

Você completou o Módulo 06 — Banco de Dados SQLite! Na próxima aula, vamos aprender sobre **UX, Loadings e Tratamento de Erros** para deixar seu app profissional. Vejo você lá!

# Apresentação: Cruzando as Fronteiras (SQL JOIN) 🖇️

**Aula 17 — Leitura antes do Tutorial**

---

## 1. O Problema do Número Cego

Imagine que você puxa todos os itens comprados do banco. Cada item tem um `id_categoria = 2`. Mas o que significa "2"? O usuário quer ver **"Roupas"**, não o número.

A solução amadora seria: para cada item, fazer uma busca separada na tabela `categorias` para achar o nome. Mas se você tem 1000 itens, são 1000 buscas extras — isso trava o celular!

> [!WARNING]
> Fazer uma busca separada para cada item (um "loop com SELECT dentro") é um dos erros mais comuns de desenvolvedores iniciantes. O banco de dados foi feito para resolver isso com uma **única consulta**!

---

## 2. O INNER JOIN: A Fusão de Tabelas

O **INNER JOIN** cruza duas tabelas com base numa condição (chamada `ON`). Pense numa planilha onde você cola a coluna "Categoria" ao lado da coluna "Item" — mas de forma automática e instantânea.

```sql
SELECT i.nome, c.nome AS nome_categoria
FROM itens i
INNER JOIN categorias c ON i.id_categoria = c.id
```

Explicando:

- `FROM itens i` → "pegue a tabela itens e chame de `i`" (isso é um **alias** — apelido)
- `INNER JOIN categorias c` → "junte com a tabela categorias, chamada de `c`"
- `ON i.id_categoria = c.id` → "a ponte: o `id_categoria` do item **bate** com o `id` da categoria"

> [!IMPORTANT]
> **INNER JOIN** = traz **apenas** os registros que têm par nas duas tabelas. Se um item tem `id_categoria = 5` mas não existe nenhuma categoria com `id = 5`, esse item **não aparece**!

---

## 3. Aliases: Apelidos Para Não se Perder

Quando duas tabelas têm colunas com o mesmo nome (ambas têm `id` e `nome`), o SQLite fica confuso. Para evitar isso, usamos **aliases** (apelidos):

| Alias | Significado |
|-------|-------------|
| `i` | Apelido de `itens` |
| `c` | Apelido de `categorias` |
| `c.nome AS nome_categoria` | Renomeia a coluna `nome` da tabela categorias para `nome_categoria` |

> [!NOTE]
> O `AS` renomeia uma coluna no resultado. É como dar um apelido a uma pessoa: em vez de chamar "João da Silva", você chama "João". Mais prático!

Exemplo com aliases:

```sql
SELECT i.id, i.nome AS nome_produto, c.nome AS nome_categoria
FROM itens i
INNER JOIN categorias c ON i.id_categoria = c.id
```

---

## 4. LEFT JOIN: Traze Mesmo Sem Par

E se uma categoria **não tiver** nenhum item? Com `INNER JOIN`, ela some da lista. Mas e se você quer ver **todas** as categorias, mesmo as vazias?

O **LEFT JOIN** resolve isso: ele traz **todas** as linhas da tabela da esquerda, mesmo que não tenham par na direita.

```sql
SELECT c.nome, COUNT(i.id) AS total_itens
FROM categorias c
LEFT JOIN itens i ON c.id = i.id_categoria
GROUP BY c.id, c.nome
```

| Tipo de JOIN | O que traz |
|---|---|
| `INNER JOIN` | Só traz linhas com par em **ambas** as tabelas |
| `LEFT JOIN` | Traz **todas** as linhas da tabela da esquerda, mesmo sem par |

> [!NOTE]
> `COUNT(i.id)` conta quantos itens existem em cada categoria. `GROUP BY` agrupa os resultados por categoria para que o `COUNT` funcione corretamente. É como pedir "me diga quantos produtos tem em cada prateleira"!

---

## 5. O Paradoxo da Deleção Relacional

Se você apaga uma categoria que tinha 50 itens, esses 50 itens ficam com `id_categoria` apontando para lugar nenhum — dados órfãos!

Existem duas soluções:

1. **Cascading Delete:** ao apagar a categoria, apaga todos os itens filhos automaticamente
2. **Bloqueio:** o app impede a exclusão se houver itens associados, mostrando uma mensagem de erro

> [!CAUTION]
> Nunca apague uma categoria sem verificar se ela tem itens! dados órfãos quebram as consultas com `JOIN` — os itens simplesmente somem dos resultados!

---

## 6. Por Que Isso Importa Para o Seu Projeto?

O `JOIN` é usado em **toda** tela que mostra dados de duas tabelas relacionadas:

| Projeto | Consulta com JOIN |
|---|---|
| Categoria 2 | Itens com nome da categoria |
| Categoria 3 | Notas com nome da categoria |
| Categoria 4 | Gastos com nome da categoria |

E o `LEFT JOIN + COUNT` resolve o contador de itens na tela inicial — sem precisar fazer múltiplas consultas nem calcular no JavaScript.

> [!TIP]
> Se quiser se aprofundar, confira: [SQL JOIN no W3Schools](https://www.w3schools.com/sql/sql_join.asp) e a [Documentação Expo SQLite](https://docs.expo.dev/versions/latest/sdk/sqlite/)

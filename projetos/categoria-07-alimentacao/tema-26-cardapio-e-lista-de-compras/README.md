# Tema 26 – Cardápio e Lista de Compras

Cadastro de receitas e geração/controle de ingredientes para compras.

Categoria: **[Alimentação](../README.md)** · Fichas: [fase1](../../fase1-bimestre1.md) · [fase2](../../fase2-bimestre2.md) · [fase3](../../fase3-bimestre3.md) · [fase4](../../fase4-bimestre4.md)

## O que o aplicativo faz

- Cadastrar receitas com seus ingredientes (nome e quantidade).
- Gerar a lista de compras a partir dos ingredientes das receitas escolhidas.
- Marcar os itens da compra como pendentes ou comprados.
- Editar e excluir receitas, ingredientes e itens da compra.

## Telas sugeridas

| Tela | Conteúdo |
|------|----------|
| Lista | Receitas com nome e quantidade de ingredientes |
| Detalhe | Nome da receita e lista de ingredientes + botão Voltar |
| Cadastro / Edição | Formulário com campos nome da receita e ingredientes (nome + quantidade) |

## Banco de dados (SQLite)

`receitas`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| nome | TEXT | Nome da receita |

`ingredientes`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| id_receita | INTEGER | Chave estrangeira para a tabela receitas |
| nome | TEXT | Nome do ingrediente |
| quantidade | TEXT | Quantidade do ingrediente |

`compras`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| ingrediente | TEXT | Nome do ingrediente a comprar |
| quantidade | TEXT | Quantidade do ingrediente |
| status | TEXT | Pendente ou comprado |

## Escopo das 4 entregas

| Entrega | Data | Foco |
|---------|------|------|
| 1 | 24/08/2026 | Proposta + 2 telas (lista + detalhe) com dados estáticos |
| 2 | 14/09/2026 | Formulário + AsyncStorage |
| 3 | 19/10/2026 | SQLite + CRUD |
| 4 | 16/11/2026 | App completo + UX revisada; apresentação |

> Os requisitos e critérios de cada entrega estão nas fichas compartilhadas do Trabalho em Grupo (`fase1-bimestre1.md` a `fase4-bimestre4.md`).

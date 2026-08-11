# Tema 29 – Controle financeiro pessoal

Receitas, despesas e saldo por categoria.

Categoria: **[Finanças](../README.md)** · Fichas: [fase1](../../fase1.md) · [fase2](../../fase2.md) · [fase3](../../fase3.md) · [fase4](../../fase4.md)

## O que o aplicativo faz

- Cadastrar receitas e despesas com categoria, descrição, valor e data.
- Organizar os lançamentos por categoria (alimentação, transporte, salário etc.).
- Calcular o saldo (receitas menos despesas) e os totais por categoria.
- Listar as movimentações por categoria ou período.

## Telas sugeridas

| Tela | Conteúdo |
|------|----------|
| Lista | Movimentações com descrição, valor, tipo (receita/despesa), categoria e data |
| Detalhe | Todos os campos da movimentação + botão Voltar |
| Cadastro / Edição | Formulário com categoria, descrição, valor, tipo e data |

## Banco de dados (SQLite)

`categorias`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| nome | TEXT | Nome da categoria |

`movimentacoes`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| id_categoria | INTEGER | Chave estrangeira para `categorias` |
| descricao | TEXT | Descrição da movimentação |
| valor | REAL | Valor da movimentação |
| tipo | TEXT | `receita` ou `despesa` |
| data | TEXT | Data da movimentação |

## Escopo das 4 entregas

| Entrega | Data | Foco |
|---------|------|------|
| 1 | 24/08/2026 | Proposta + 2 telas (lista + detalhe) com dados estáticos |
| 2 | 14/09/2026 | Formulário + AsyncStorage |
| 3 | 19/10/2026 | SQLite + CRUD |
| 4 | 16/11/2026 | App completo + UX revisada; apresentação |

> Os requisitos e critérios de cada entrega estão nas fichas compartilhadas do Trabalho em Grupo (`fase1.md` a `fase4.md`).

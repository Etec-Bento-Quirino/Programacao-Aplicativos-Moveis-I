# Tema 23 – Cadastro de receitas

Receitas, ingredientes e modo de preparo.

Categoria: **[Alimentação](../README.md)** · Fichas: [fase1](../../fase1.md) · [fase2](../../fase2.md) · [fase3](../../fase3.md) · [fase4](../../fase4.md)

## O que o aplicativo faz

- Cadastrar receitas com nome, categoria e modo de preparo.
- Adicionar ingredientes (nome e quantidade) para cada receita.
- Editar e excluir receitas e seus ingredientes.
- Listar as receitas por categoria (doce, salgada etc.).

## Telas sugeridas

| Tela | Conteúdo |
|------|----------|
| Lista | Receitas com nome e categoria |
| Detalhe | Nome, categoria, modo de preparo, ingredientes + botão Voltar |
| Cadastro / Edição | Formulário com campos nome, categoria, modo de preparo e ingredientes (nome + quantidade) |

## Banco de dados (SQLite)

`receitas`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| nome | TEXT | Nome da receita |
| categoria | TEXT | Categoria da receita (ex.: doce, salgada) |
| modo_preparo | TEXT | Modo de preparo da receita |

`ingredientes`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| id_receita | INTEGER | Chave estrangeira para a tabela receitas |
| nome | TEXT | Nome do ingrediente |
| quantidade | TEXT | Quantidade do ingrediente |

## Escopo das 4 entregas

| Entrega | Data | Foco |
|---------|------|------|
| 1 | 24/08/2026 | Proposta + 2 telas (lista + detalhe) com dados estáticos |
| 2 | 14/09/2026 | Formulário + AsyncStorage |
| 3 | 19/10/2026 | SQLite + CRUD |
| 4 | 16/11/2026 | App completo + UX revisada; apresentação |

> Os requisitos e critérios de cada entrega estão nas fichas compartilhadas do Trabalho em Grupo (`fase1.md` a `fase4.md`).

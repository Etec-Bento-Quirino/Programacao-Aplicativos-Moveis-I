# Tema 13 – Catálogo de produtos

Itens, preços e categorias.

Categoria: **[Comércio e Serviços](../README.md)** · Fichas: [fase1](../../fase1.md) · [fase2](../../fase2.md) · [fase3](../../fase3.md) · [fase4](../../fase4.md)

## O que o aplicativo faz

- Cadastrar categorias de produtos.
- Cadastrar produtos vinculados a uma categoria.
- Listar produtos por categoria.
- Editar produtos, incluindo preço e categoria.

## Telas sugeridas

| Tela | Conteúdo |
|------|----------|
| Lista | Categorias; ao tocar, produtos da categoria com nome e preço |
| Detalhe | Todos os campos do produto + botão Voltar |
| Cadastro / Edição | Formulário de categoria (nome) e de produto (categoria, nome, preço) |

## Banco de dados (SQLite)

`categorias`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| nome | TEXT | Nome da categoria |

`produtos`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| id_categoria | INTEGER | Chave estrangeira para `categorias` |
| nome | TEXT | Nome do produto |
| preco | REAL | Preço do produto |

## Escopo das 4 entregas

| Entrega | Data | Foco |
|---------|------|------|
| 1 | 24/08/2026 | Proposta + 2 telas (lista + detalhe) com dados estáticos |
| 2 | 14/09/2026 | Formulário + AsyncStorage |
| 3 | 19/10/2026 | SQLite + CRUD |
| 4 | 16/11/2026 | App completo + UX revisada; apresentação |

> Os requisitos e critérios de cada entrega estão nas fichas compartilhadas do Trabalho em Grupo (`fase1.md` a `fase4.md`).

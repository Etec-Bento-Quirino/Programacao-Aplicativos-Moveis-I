# Tema 19 – Controle de Coleções

Gerenciamento de coleções de livros, jogos, cards, moedas ou outros objetos.

Categoria: **[Entretenimento e Cultura](../README.md)** · Fichas: [fase1](../../fase1-bimestre1.md) · [fase2](../../fase2-bimestre2.md) · [fase3](../../fase3-bimestre3.md) · [fase4](../../fase4-bimestre4.md)

## O que o aplicativo faz

- Cadastrar coleções com nome e tipo.
- Cadastrar itens vinculados a uma coleção.
- Informar o estado de conservação de cada item.
- Listar os itens de cada coleção.

## Telas sugeridas

| Tela | Conteúdo |
|------|----------|
| Lista | Coleções com nome e tipo; ao tocar, itens da coleção |
| Detalhe | Todos os campos do item + botão Voltar |
| Cadastro / Edição | Formulário de coleção (nome, tipo) e de item (coleção, nome, estado) |

## Banco de dados (SQLite)

`colecoes`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| nome | TEXT | Nome da coleção |
| tipo | TEXT | Livros, jogos, cards, moedas ou outros |

`itens`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| id_colecao | INTEGER | Chave estrangeira para `colecoes` |
| nome | TEXT | Nome do item |
| estado | TEXT | Estado de conservação do item |

## Escopo das 4 entregas

| Entrega | Data | Foco |
|---------|------|------|
| 1 | 24/08/2026 | Proposta + 2 telas (lista + detalhe) com dados estáticos |
| 2 | 14/09/2026 | Formulário + AsyncStorage |
| 3 | 19/10/2026 | SQLite + CRUD |
| 4 | 16/11/2026 | App completo + UX revisada; apresentação |

> Os requisitos e critérios de cada entrega estão nas fichas compartilhadas do Trabalho em Grupo (`fase1-bimestre1.md` a `fase4-bimestre4.md`).

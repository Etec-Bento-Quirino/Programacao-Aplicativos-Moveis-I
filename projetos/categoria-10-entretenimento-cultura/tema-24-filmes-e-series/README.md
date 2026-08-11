# Tema 24 – Filmes e séries

Títulos assistidos e lista para assistir.

Categoria: **[Entretenimento e Cultura](../README.md)** · Fichas: [fase1](../../fase1.md) · [fase2](../../fase2.md) · [fase3](../../fase3.md) · [fase4](../../fase4.md)

## O que o aplicativo faz

- Cadastrar filmes e séries com nome e tipo.
- Marcar cada título como assistido ou para assistir.
- Atribuir uma nota (avaliação) aos títulos assistidos.
- Filtrar a lista por tipo (filme/série) e por status.

## Telas sugeridas

| Tela | Conteúdo |
|------|----------|
| Lista | Títulos com nome, tipo e status |
| Detalhe | Nome, tipo, status, nota + botão Voltar |
| Cadastro / Edição | Formulário com campos nome, tipo, status e nota |

## Banco de dados (SQLite)

`titulos`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| nome | TEXT | Nome do título |
| tipo | TEXT | Filme ou série |
| status | TEXT | Assistido ou para assistir |
| nota | INTEGER | Nota de avaliação (ex.: 0 a 5) |

## Escopo das 4 entregas

| Entrega | Data | Foco |
|---------|------|------|
| 1 | 24/08/2026 | Proposta + 2 telas (lista + detalhe) com dados estáticos |
| 2 | 14/09/2026 | Formulário + AsyncStorage |
| 3 | 19/10/2026 | SQLite + CRUD |
| 4 | 16/11/2026 | App completo + UX revisada; apresentação |

> Os requisitos e critérios de cada entrega estão nas fichas compartilhadas do Trabalho em Grupo (`fase1.md` a `fase4.md`).

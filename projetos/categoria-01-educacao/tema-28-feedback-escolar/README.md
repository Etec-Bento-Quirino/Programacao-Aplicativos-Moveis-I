# Tema 28 – Feedback Escolar

Registro de sugestões, avaliações e ocorrências relacionadas à escola.

Categoria: **[Educação](../README.md)** · Fichas: [fase1](../../fase1.md) · [fase2](../../fase2.md) · [fase3](../../fase3.md) · [fase4](../../fase4.md)

## O que o aplicativo faz

- Registrar feedbacks com título e descrição.
- Escolher a categoria (sugestão, avaliação ou ocorrência).
- Editar e excluir feedbacks existentes.
- Filtrar os feedbacks por categoria.

## Telas sugeridas

| Tela | Conteúdo |
|------|----------|
| Lista | Feedbacks com categoria, título e data |
| Detalhe | Categoria, título, descrição, data + botão Voltar |
| Cadastro / Edição | Formulário com campos categoria, título, descrição e data |

## Banco de dados (SQLite)

`feedbacks`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| categoria | TEXT | Categoria do feedback (sugestão, avaliação, ocorrência) |
| titulo | TEXT | Título do feedback |
| descricao | TEXT | Descrição do feedback |
| data | TEXT | Data do feedback |

## Escopo das 4 entregas

| Entrega | Data | Foco |
|---------|------|------|
| 1 | 24/08/2026 | Proposta + 2 telas (lista + detalhe) com dados estáticos |
| 2 | 14/09/2026 | Formulário + AsyncStorage |
| 3 | 19/10/2026 | SQLite + CRUD |
| 4 | 16/11/2026 | App completo + UX revisada; apresentação |

> Os requisitos e critérios de cada entrega estão nas fichas compartilhadas do Trabalho em Grupo (`fase1.md` a `fase4.md`).

# Tema 25 – Controle de Cinema

Catálogo de filmes assistidos, avaliações, gêneros e lista para assistir.

Categoria: **[Entretenimento e Cultura](../README.md)** · Fichas: [fase1](../../fase1-bimestre1.md) · [fase2](../../fase2-bimestre2.md) · [fase3](../../fase3-bimestre3.md) · [fase4](../../fase4-bimestre4.md)

## O que o aplicativo faz

- Cadastrar filmes com título, gênero e status.
- Avaliar os filmes assistidos com uma nota.
- Manter uma lista de filmes para assistir.
- Filtrar o catálogo por gênero e por status.

## Telas sugeridas

| Tela | Conteúdo |
|------|----------|
| Lista | Filmes com título, gênero, nota e status |
| Detalhe | Título, gênero, nota, status + botão Voltar |
| Cadastro / Edição | Formulário com campos título, gênero, nota e status |

## Banco de dados (SQLite)

`filmes`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| titulo | TEXT | Título do filme |
| genero | TEXT | Gênero do filme |
| nota | INTEGER | Nota de avaliação (ex.: 0 a 5) |
| status | TEXT | Assistido ou para assistir |

## Escopo das 4 entregas

| Entrega | Data | Foco |
|---------|------|------|
| 1 | 24/08/2026 | Proposta + 2 telas (lista + detalhe) com dados estáticos |
| 2 | 14/09/2026 | Formulário + AsyncStorage |
| 3 | 19/10/2026 | SQLite + CRUD |
| 4 | 16/11/2026 | App completo + UX revisada; apresentação |

> Os requisitos e critérios de cada entrega estão nas fichas compartilhadas do Trabalho em Grupo (`fase1-bimestre1.md` a `fase4-bimestre4.md`).

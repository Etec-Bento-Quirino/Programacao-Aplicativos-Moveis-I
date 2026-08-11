# Tema 06 – Agenda de Estudos

Cadastro de disciplinas, conteúdos, atividades e prazos de estudo.

Categoria: **[Educação](../README.md)** · Fichas: [fase1](../../fase1.md) · [fase2](../../fase2.md) · [fase3](../../fase3.md) · [fase4](../../fase4.md)

## O que o aplicativo faz

- Cadastrar disciplinas.
- Cadastrar conteúdos de estudo para cada disciplina.
- Registrar atividades e prazos.
- Filtrar conteúdos por status (pendente/concluído).

## Telas sugeridas

| Tela | Conteúdo |
|------|----------|
| Lista | Disciplinas com nome e quantidade de conteúdos |
| Detalhe | Conteúdos da disciplina com título, prazo e status + botão Voltar |
| Cadastro / Edição | Formulário para disciplina (nome) e para conteúdo (título, prazo) |

## Banco de dados (SQLite)

`disciplinas`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| nome | TEXT | Nome da disciplina |

`conteudos`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| id_disciplina | INTEGER | Chave estrangeira para `disciplinas` |
| titulo | TEXT | Título do conteúdo ou atividade |
| prazo | TEXT | Data limite (prazo) |
| status | TEXT | Status do conteúdo (pendente/concluído) |

## Escopo das 4 entregas

| Entrega | Data | Foco |
|---------|------|------|
| 1 | 24/08/2026 | Proposta + 2 telas (lista + detalhe) com dados estáticos |
| 2 | 14/09/2026 | Formulário + AsyncStorage |
| 3 | 19/10/2026 | SQLite + CRUD |
| 4 | 16/11/2026 | App completo + UX revisada; apresentação |

> Os requisitos e critérios de cada entrega estão nas fichas compartilhadas do Trabalho em Grupo (`fase1.md` a `fase4.md`).

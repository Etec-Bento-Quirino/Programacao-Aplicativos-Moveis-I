# Tema 31 – Gerenciamento de eventos

Eventos, participantes, datas e custos.

Categoria: **[Eventos](../README.md)** · Fichas: [fase1](../../fase1-bimestre1.md) · [fase2](../../fase2-bimestre2.md) · [fase3](../../fase3-bimestre3.md) · [fase4](../../fase4-bimestre4.md)

## O que o aplicativo faz

- Cadastrar eventos com nome, data e local.
- Adicionar e listar participantes de cada evento.
- Registrar os custos de cada evento.
- Listar os eventos com número de participantes e data.

## Telas sugeridas

| Tela | Conteúdo |
|------|----------|
| Lista | Eventos com nome, data, local e número de participantes |
| Detalhe | Todos os campos do evento + botão Voltar |
| Cadastro / Edição | Formulário de evento (nome, data, local) e de participante (nome) |

## Banco de dados (SQLite)

`eventos`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| nome | TEXT | Nome do evento |
| data | TEXT | Data do evento |
| local | TEXT | Local onde acontece o evento |

`participantes`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| id_evento | INTEGER | Chave estrangeira para `eventos` |
| nome | TEXT | Nome do participante |

## Escopo das 4 entregas

| Entrega | Data | Foco |
|---------|------|------|
| 1 | 24/08/2026 | Proposta + 2 telas (lista + detalhe) com dados estáticos |
| 2 | 14/09/2026 | Formulário + AsyncStorage |
| 3 | 19/10/2026 | SQLite + CRUD |
| 4 | 16/11/2026 | App completo + UX revisada; apresentação |

> Os requisitos e critérios de cada entrega estão nas fichas compartilhadas do Trabalho em Grupo (`fase1-bimestre1.md` a `fase4-bimestre4.md`).

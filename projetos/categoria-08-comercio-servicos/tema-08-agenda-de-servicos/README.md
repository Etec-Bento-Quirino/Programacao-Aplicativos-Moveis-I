# Tema 08 – Agenda de Serviços

Gerenciamento de clientes, serviços agendados, horários e status.

Categoria: **[Comércio e Serviços](../README.md)** · Fichas: [fase1](../../fase1-bimestre1.md) · [fase2](../../fase2-bimestre2.md) · [fase3](../../fase3-bimestre3.md) · [fase4](../../fase4-bimestre4.md)

## O que o aplicativo faz

- Cadastrar clientes com nome e telefone.
- Agendar serviços para cada cliente.
- Registrar data, hora e descrição do serviço.
- Acompanhar o status de cada serviço (pendente/concluído/cancelado).

## Telas sugeridas

| Tela | Conteúdo |
|------|----------|
| Lista | Clientes com nome e telefone |
| Detalhe | Dados do cliente + serviços agendados com data, hora e status + botão Voltar |
| Cadastro / Edição | Formulário de cliente (nome, telefone) e de serviço (descrição, data, hora) |

## Banco de dados (SQLite)

`clientes`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| nome | TEXT | Nome do cliente |
| telefone | TEXT | Telefone do cliente |

`servicos`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| id_cliente | INTEGER | Chave estrangeira para `clientes` |
| descricao | TEXT | Descrição do serviço |
| data | TEXT | Data do serviço |
| hora | TEXT | Hora do serviço |
| status | TEXT | Status do serviço (pendente/concluído/cancelado) |

## Escopo das 4 entregas

| Entrega | Data | Foco |
|---------|------|------|
| 1 | 24/08/2026 | Proposta + 2 telas (lista + detalhe) com dados estáticos |
| 2 | 14/09/2026 | Formulário + AsyncStorage |
| 3 | 19/10/2026 | SQLite + CRUD |
| 4 | 16/11/2026 | App completo + UX revisada; apresentação |

> Os requisitos e critérios de cada entrega estão nas fichas compartilhadas do Trabalho em Grupo (`fase1-bimestre1.md` a `fase4-bimestre4.md`).

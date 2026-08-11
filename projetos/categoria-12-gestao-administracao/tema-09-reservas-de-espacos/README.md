# Tema 09 – Sistema de Reservas de Espaços

Reserva de salas, quadras, laboratórios ou outros espaços.

Categoria: **[Gestão e Administração](../README.md)** · Fichas: [fase1](../../fase1.md) · [fase2](../../fase2.md) · [fase3](../../fase3.md) · [fase4](../../fase4.md)

## O que o aplicativo faz

- Cadastrar espaços com nome e tipo (sala, quadra, laboratório etc.).
- Reservar um espaço para uma data e hora.
- Registrar o responsável pela reserva.
- Listar espaços e suas reservas.

## Telas sugeridas

| Tela | Conteúdo |
|------|----------|
| Lista | Espaços com nome, tipo e próximas reservas |
| Detalhe | Dados do espaço + reservas com data, hora e responsável + botão Voltar |
| Cadastro / Edição | Formulário de espaço (nome, tipo) e de reserva (data, hora, responsável) |

## Banco de dados (SQLite)

`espacos`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| nome | TEXT | Nome do espaço |
| tipo | TEXT | Tipo do espaço (sala, quadra, laboratório) |

`reservas`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| id_espaco | INTEGER | Chave estrangeira para `espacos` |
| data | TEXT | Data da reserva |
| hora | TEXT | Hora da reserva |
| responsavel | TEXT | Responsável pela reserva |

## Escopo das 4 entregas

| Entrega | Data | Foco |
|---------|------|------|
| 1 | 24/08/2026 | Proposta + 2 telas (lista + detalhe) com dados estáticos |
| 2 | 14/09/2026 | Formulário + AsyncStorage |
| 3 | 19/10/2026 | SQLite + CRUD |
| 4 | 16/11/2026 | App completo + UX revisada; apresentação |

> Os requisitos e critérios de cada entrega estão nas fichas compartilhadas do Trabalho em Grupo (`fase1.md` a `fase4.md`).

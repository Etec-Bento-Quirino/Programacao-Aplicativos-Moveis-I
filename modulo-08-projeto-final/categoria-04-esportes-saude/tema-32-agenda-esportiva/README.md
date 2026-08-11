# Tema 32 – Agenda esportiva

Jogos, horários, locais e resultados.

Categoria: **[Esportes e Saúde](../README.md)** · Fichas: [fase1](../../fase1.md) · [fase2](../../fase2.md) · [fase3](../../fase3.md) · [fase4](../../fase4.md)

## O que o aplicativo faz

- Cadastrar jogos com times, data, hora e local.
- Informar o placar após o jogo ser disputado.
- Listar os jogos por data (próximos e já disputados).
- Exibir o local e o horário de cada jogo.

## Telas sugeridas

| Tela | Conteúdo |
|------|----------|
| Lista | Jogos com time A, time B, data, hora, local e placar |
| Detalhe | Todos os campos do jogo + botão Voltar |
| Cadastro / Edição | Formulário com time A, time B, data, hora, local e placar |

## Banco de dados (SQLite)

`jogos`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| time_a | TEXT | Nome do primeiro time |
| time_b | TEXT | Nome do segundo time |
| data | TEXT | Data do jogo |
| hora | TEXT | Hora do jogo |
| local | TEXT | Local do jogo |
| placar | TEXT | Placar do jogo (vazio se ainda não foi disputado) |

## Escopo das 4 entregas

| Entrega | Data | Foco |
|---------|------|------|
| 1 | 24/08/2026 | Proposta + 2 telas (lista + detalhe) com dados estáticos |
| 2 | 14/09/2026 | Formulário + AsyncStorage |
| 3 | 19/10/2026 | SQLite + CRUD |
| 4 | 16/11/2026 | App completo + UX revisada; apresentação |

> Os requisitos e critérios de cada entrega estão nas fichas compartilhadas do Trabalho em Grupo (`fase1.md` a `fase4.md`).

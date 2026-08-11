# Tema 35 – Organizador de Campeonatos

Cadastro de equipes, partidas, resultados e classificação.

Categoria: **[Esportes e Saúde](../README.md)** · Fichas: [fase1](../../fase1.md) · [fase2](../../fase2.md) · [fase3](../../fase3.md) · [fase4](../../fase4.md)

## O que o aplicativo faz

- Cadastrar as equipes do campeonato.
- Registrar partidas com os placares de cada equipe.
- Calcular a classificação (pontos e vitórias por equipe).
- Listar as partidas e a tabela de classificação.

## Telas sugeridas

| Tela | Conteúdo |
|------|----------|
| Lista | Equipes com nome; partidas com equipe A, equipe B e placar |
| Detalhe | Todos os campos da equipe ou da partida + botão Voltar |
| Cadastro / Edição | Formulário de equipe (nome) e de partida (equipe A, equipe B, placar A, placar B, data) |

## Banco de dados (SQLite)

`equipes`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| nome | TEXT | Nome da equipe |

`partidas`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| equipe_a | INTEGER | Chave estrangeira para `equipes` (mandante) |
| equipe_b | INTEGER | Chave estrangeira para `equipes` (visitante) |
| placar_a | INTEGER | Placar da equipe A |
| placar_b | INTEGER | Placar da equipe B |
| data | TEXT | Data da partida |

## Escopo das 4 entregas

| Entrega | Data | Foco |
|---------|------|------|
| 1 | 24/08/2026 | Proposta + 2 telas (lista + detalhe) com dados estáticos |
| 2 | 14/09/2026 | Formulário + AsyncStorage |
| 3 | 19/10/2026 | SQLite + CRUD |
| 4 | 16/11/2026 | App completo + UX revisada; apresentação |

> Os requisitos e critérios de cada entrega estão nas fichas compartilhadas do Trabalho em Grupo (`fase1.md` a `fase4.md`).

# Tema 03 – Controle de hábitos

Acompanhamento de hábitos diários e sequências.

Categoria: **[Esportes e Saúde](../README.md)** · Fichas: [fase1](../../fase1.md) · [fase2](../../fase2.md) · [fase3](../../fase3.md) · [fase4](../../fase4.md)

## O que o aplicativo faz

- Cadastrar hábitos com nome e frequência.
- Marcar a realização do hábito no dia.
- Acompanhar sequências (dias seguidos) de cada hábito.
- Listar hábitos por status (ativo/inativo).

## Telas sugeridas

| Tela | Conteúdo |
|------|----------|
| Lista | Hábitos com nome, frequência, status e sequência atual |
| Detalhe | Nome, frequência, status e histórico do hábito + botão Voltar |
| Cadastro / Edição | Formulário com campos nome, frequência e botão salvar |

## Banco de dados (SQLite)

`habitos`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| nome | TEXT | Nome do hábito |
| frequencia | TEXT | Frequência de repetição (ex.: diário, semanal) |
| status | TEXT | Status do hábito (ativo/inativo) |

## Escopo das 4 entregas

| Entrega | Data | Foco |
|---------|------|------|
| 1 | 24/08/2026 | Proposta + 2 telas (lista + detalhe) com dados estáticos |
| 2 | 14/09/2026 | Formulário + AsyncStorage |
| 3 | 19/10/2026 | SQLite + CRUD |
| 4 | 16/11/2026 | App completo + UX revisada; apresentação |

> Os requisitos e critérios de cada entrega estão nas fichas compartilhadas do Trabalho em Grupo (`fase1.md` a `fase4.md`).

# Tema 17 – Controle de Plantas

Cadastro de plantas e acompanhamento de rega, adubação e cuidados.

Categoria: **[Casa e Meio Ambiente](../README.md)** · Fichas: [fase1](../../fase1-bimestre1.md) · [fase2](../../fase2-bimestre2.md) · [fase3](../../fase3-bimestre3.md) · [fase4](../../fase4-bimestre4.md)

## O que o aplicativo faz

- Cadastrar plantas com nome, espécie e local.
- Registrar cuidados como rega, adubação e poda.
- Listar o histórico de cuidados de cada planta.
- Atualizar ou excluir plantas e cuidados.

## Telas sugeridas

| Tela | Conteúdo |
|------|----------|
| Lista | Plantas com nome, espécie e local |
| Detalhe | Todos os campos da planta + cuidados registrados + botão Voltar |
| Cadastro / Edição | Formulário da planta (nome, espécie, local) e de cuidado (tipo, data) |

## Banco de dados (SQLite)

`plantas`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| nome | TEXT | Nome da planta |
| especie | TEXT | Espécie da planta |
| local | TEXT | Local onde a planta fica |

`cuidados`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| id_planta | INTEGER | Chave estrangeira para `plantas` |
| tipo | TEXT | Rega, adubação ou outro cuidado |
| data | TEXT | Data do cuidado |

## Escopo das 4 entregas

| Entrega | Data | Foco |
|---------|------|------|
| 1 | 24/08/2026 | Proposta + 2 telas (lista + detalhe) com dados estáticos |
| 2 | 14/09/2026 | Formulário + AsyncStorage |
| 3 | 19/10/2026 | SQLite + CRUD |
| 4 | 16/11/2026 | App completo + UX revisada; apresentação |

> Os requisitos e critérios de cada entrega estão nas fichas compartilhadas do Trabalho em Grupo (`fase1-bimestre1.md` a `fase4-bimestre4.md`).

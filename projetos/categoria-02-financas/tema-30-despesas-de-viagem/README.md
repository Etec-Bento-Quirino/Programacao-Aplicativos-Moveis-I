# Tema 30 – Controle de despesas de uma viagem

Gastos por viagem, categorias e datas.

Categoria: **[Finanças](../README.md)** · Fichas: [fase1](../../fase1-bimestre1.md) · [fase2](../../fase2-bimestre2.md) · [fase3](../../fase3-bimestre3.md) · [fase4](../../fase4-bimestre4.md)

## O que o aplicativo faz

- Cadastrar viagens com destino, data de início e data de fim.
- Registrar as despesas da viagem (transporte, hospedagem, alimentação etc.).
- Somar os gastos de cada viagem.
- Listar as despesas por viagem ou categoria.

## Telas sugeridas

| Tela | Conteúdo |
|------|----------|
| Lista | Viagens com destino e período; despesas com descrição, valor, categoria e data |
| Detalhe | Todos os campos da viagem + botão Voltar |
| Cadastro / Edição | Formulário de viagem (destino, datas) e de despesa (viagem, descrição, valor, categoria, data) |

## Banco de dados (SQLite)

`viagens`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| destino | TEXT | Destino da viagem |
| data_inicio | TEXT | Data de início da viagem |
| data_fim | TEXT | Data de fim da viagem |

`despesas`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| id_viagem | INTEGER | Chave estrangeira para `viagens` |
| descricao | TEXT | Descrição da despesa |
| valor | REAL | Valor da despesa |
| categoria | TEXT | Categoria da despesa (transporte, hospedagem etc.) |
| data | TEXT | Data da despesa |

## Escopo das 4 entregas

| Entrega | Data | Foco |
|---------|------|------|
| 1 | 24/08/2026 | Proposta + 2 telas (lista + detalhe) com dados estáticos |
| 2 | 14/09/2026 | Formulário + AsyncStorage |
| 3 | 19/10/2026 | SQLite + CRUD |
| 4 | 16/11/2026 | App completo + UX revisada; apresentação |

> Os requisitos e critérios de cada entrega estão nas fichas compartilhadas do Trabalho em Grupo (`fase1-bimestre1.md` a `fase4-bimestre4.md`).

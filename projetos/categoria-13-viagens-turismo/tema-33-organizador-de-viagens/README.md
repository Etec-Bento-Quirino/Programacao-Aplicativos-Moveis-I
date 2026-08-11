# Tema 33 – Organizador de Viagens

Planejamento de destinos, passeios, gastos e reservas.

Categoria: **[Viagens e Turismo](../README.md)** · Fichas: [fase1](../../fase1.md) · [fase2](../../fase2.md) · [fase3](../../fase3.md) · [fase4](../../fase4.md)

## O que o aplicativo faz

- Cadastrar viagens com destino, data de início e data de fim.
- Planejar os passeios de cada viagem com data e valor.
- Somar os gastos de cada viagem.
- Listar viagens, passeios e reservas em um só lugar.

## Telas sugeridas

| Tela | Conteúdo |
|------|----------|
| Lista | Viagens com destino e período; passeios com descrição, data e valor |
| Detalhe | Todos os campos da viagem + botão Voltar |
| Cadastro / Edição | Formulário de viagem (destino, datas) e de passeio (viagem, descrição, data, valor) |

## Banco de dados (SQLite)

`viagens`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| destino | TEXT | Destino da viagem |
| data_inicio | TEXT | Data de início da viagem |
| data_fim | TEXT | Data de fim da viagem |

`passeios`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| id_viagem | INTEGER | Chave estrangeira para `viagens` |
| descricao | TEXT | Descrição do passeio |
| data | TEXT | Data do passeio |
| valor | REAL | Valor do passeio |

## Escopo das 4 entregas

| Entrega | Data | Foco |
|---------|------|------|
| 1 | 24/08/2026 | Proposta + 2 telas (lista + detalhe) com dados estáticos |
| 2 | 14/09/2026 | Formulário + AsyncStorage |
| 3 | 19/10/2026 | SQLite + CRUD |
| 4 | 16/11/2026 | App completo + UX revisada; apresentação |

> Os requisitos e critérios de cada entrega estão nas fichas compartilhadas do Trabalho em Grupo (`fase1.md` a `fase4.md`).

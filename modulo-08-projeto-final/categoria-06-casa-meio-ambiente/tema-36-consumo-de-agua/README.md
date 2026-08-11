# Tema 36 – Controle de Consumo de Água

Registro diário de consumo e acompanhamento do histórico.

Categoria: **[Casa e Meio Ambiente](../README.md)** · Fichas: [fase1](../../fase1.md) · [fase2](../../fase2.md) · [fase3](../../fase3.md) · [fase4](../../fase4.md)

## O que o aplicativo faz

- Registrar o consumo diário de água em litros.
- Estimar o valor gasto por dia.
- Exibir o histórico de consumo por data.
- Calcular a média de consumo em um período.

## Telas sugeridas

| Tela | Conteúdo |
|------|----------|
| Lista | Registros com data, litros e valor estimado |
| Detalhe | Todos os campos do registro + botão Voltar |
| Cadastro / Edição | Formulário com data, litros e valor estimado |

## Banco de dados (SQLite)

`registros`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| data | TEXT | Data do registro |
| litros | REAL | Quantidade de litros consumidos |
| valor_estimado | REAL | Valor estimado do consumo |

## Escopo das 4 entregas

| Entrega | Data | Foco |
|---------|------|------|
| 1 | 24/08/2026 | Proposta + 2 telas (lista + detalhe) com dados estáticos |
| 2 | 14/09/2026 | Formulário + AsyncStorage |
| 3 | 19/10/2026 | SQLite + CRUD |
| 4 | 16/11/2026 | App completo + UX revisada; apresentação |

> Os requisitos e critérios de cada entrega estão nas fichas compartilhadas do Trabalho em Grupo (`fase1.md` a `fase4.md`).

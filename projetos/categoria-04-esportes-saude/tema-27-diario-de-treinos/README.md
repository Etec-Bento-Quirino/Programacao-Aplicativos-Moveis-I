# Tema 27 – Diário de Treinos

Registro de exercícios, séries, repetições, cargas e evolução.

Categoria: **[Esportes e Saúde](../README.md)** · Fichas: [fase1](../../fase1-bimestre1.md) · [fase2](../../fase2-bimestre2.md) · [fase3](../../fase3-bimestre3.md) · [fase4](../../fase4-bimestre4.md)

## O que o aplicativo faz

- Registrar treinos com exercício, séries, repetições e carga.
- Guardar a data de cada treino.
- Editar e excluir registros de treino.
- Acompanhar a evolução da carga por exercício.

## Telas sugeridas

| Tela | Conteúdo |
|------|----------|
| Lista | Treinos com exercício, séries, repetições e data |
| Detalhe | Exercício, séries, repetições, carga, data + botão Voltar |
| Cadastro / Edição | Formulário com campos exercício, séries, repetições, carga e data |

## Banco de dados (SQLite)

`treinos`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| exercicio | TEXT | Nome do exercício |
| series | INTEGER | Número de séries |
| repeticoes | INTEGER | Número de repetições |
| carga | TEXT | Peso utilizado (ex.: 20 kg) |
| data | TEXT | Data do treino |

## Escopo das 4 entregas

| Entrega | Data | Foco |
|---------|------|------|
| 1 | 24/08/2026 | Proposta + 2 telas (lista + detalhe) com dados estáticos |
| 2 | 14/09/2026 | Formulário + AsyncStorage |
| 3 | 19/10/2026 | SQLite + CRUD |
| 4 | 16/11/2026 | App completo + UX revisada; apresentação |

> Os requisitos e critérios de cada entrega estão nas fichas compartilhadas do Trabalho em Grupo (`fase1-bimestre1.md` a `fase4-bimestre4.md`).

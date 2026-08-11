# Tema 20 – Controle de Doação de Roupas

Cadastro de peças, tamanhos, quantidades e distribuição.

Categoria: **[Comunidade e Solidariedade](../README.md)** · Fichas: [fase1](../../fase1-bimestre1.md) · [fase2](../../fase2-bimestre2.md) · [fase3](../../fase3-bimestre3.md) · [fase4](../../fase4-bimestre4.md)

## O que o aplicativo faz

- Cadastrar peças de roupa com descrição e tamanho.
- Registrar a quantidade disponível de cada peça.
- Controlar o status da peça (disponível ou doada).
- Listar as peças disponíveis para doação.

## Telas sugeridas

| Tela | Conteúdo |
|------|----------|
| Lista | Peças com descrição, tamanho, quantidade e status |
| Detalhe | Todos os campos da peça + botão Voltar |
| Cadastro / Edição | Formulário com campos descrição, tamanho, quantidade e status |

## Banco de dados (SQLite)

`pecas`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| descricao | TEXT | Descrição da peça |
| tamanho | TEXT | Tamanho da peça |
| quantidade | INTEGER | Quantidade disponível |
| status | TEXT | Disponível ou doada |

## Escopo das 4 entregas

| Entrega | Data | Foco |
|---------|------|------|
| 1 | 24/08/2026 | Proposta + 2 telas (lista + detalhe) com dados estáticos |
| 2 | 14/09/2026 | Formulário + AsyncStorage |
| 3 | 19/10/2026 | SQLite + CRUD |
| 4 | 16/11/2026 | App completo + UX revisada; apresentação |

> Os requisitos e critérios de cada entrega estão nas fichas compartilhadas do Trabalho em Grupo (`fase1-bimestre1.md` a `fase4-bimestre4.md`).

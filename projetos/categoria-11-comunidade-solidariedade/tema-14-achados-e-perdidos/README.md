# Tema 14 – Achados e Perdidos

Cadastro de objetos encontrados e perdidos, com descrição, local e data.

Categoria: **[Comunidade e Solidariedade](../README.md)** · Fichas: [fase1](../../fase1-bimestre1.md) · [fase2](../../fase2-bimestre2.md) · [fase3](../../fase3-bimestre3.md) · [fase4](../../fase4-bimestre4.md)

## O que o aplicativo faz

- Cadastrar objetos encontrados ou perdidos.
- Informar descrição, local, data e status de cada objeto.
- Guardar contato de quem pode devolver ou reivindicar o objeto.
- Listar objetos por status (encontrado ou perdido).

## Telas sugeridas

| Tela | Conteúdo |
|------|----------|
| Lista | Objetos com descrição, local, data e status |
| Detalhe | Todos os campos do objeto + contato + botão Voltar |
| Cadastro / Edição | Formulário com campos descrição, local, data, status e contato |

## Banco de dados (SQLite)

`objetos`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| descricao | TEXT | Descrição do objeto |
| local | TEXT | Local onde foi encontrado ou perdido |
| data | TEXT | Data do registro |
| status | TEXT | Encontrado ou perdido |
| contato | TEXT | Contato para devolução ou reivindicação |

## Escopo das 4 entregas

| Entrega | Data | Foco |
|---------|------|------|
| 1 | 24/08/2026 | Proposta + 2 telas (lista + detalhe) com dados estáticos |
| 2 | 14/09/2026 | Formulário + AsyncStorage |
| 3 | 19/10/2026 | SQLite + CRUD |
| 4 | 16/11/2026 | App completo + UX revisada; apresentação |

> Os requisitos e critérios de cada entrega estão nas fichas compartilhadas do Trabalho em Grupo (`fase1-bimestre1.md` a `fase4-bimestre4.md`).

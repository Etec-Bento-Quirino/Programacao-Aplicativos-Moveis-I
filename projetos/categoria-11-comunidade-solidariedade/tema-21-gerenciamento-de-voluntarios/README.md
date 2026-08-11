# Tema 21 – Gerenciamento de Voluntários

Cadastro de voluntários, atividades e participação em eventos.

Categoria: **[Comunidade e Solidariedade](../README.md)** · Fichas: [fase1](../../fase1-bimestre1.md) · [fase2](../../fase2-bimestre2.md) · [fase3](../../fase3-bimestre3.md) · [fase4](../../fase4-bimestre4.md)

## O que o aplicativo faz

- Cadastrar voluntários com nome e contato.
- Registrar atividades e eventos de cada voluntário.
- Marcar a participação e a data de cada atividade.
- Listar as atividades de cada voluntário.

## Telas sugeridas

| Tela | Conteúdo |
|------|----------|
| Lista | Voluntários com nome e contato |
| Detalhe | Todos os campos do voluntário + atividades registradas + botão Voltar |
| Cadastro / Edição | Formulário do voluntário (nome, contato) e de atividade (nome, data, participação) |

## Banco de dados (SQLite)

`voluntarios`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| nome | TEXT | Nome do voluntário |
| contato | TEXT | Contato do voluntário |

`atividades`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| id_voluntario | INTEGER | Chave estrangeira para `voluntarios` |
| nome | TEXT | Nome da atividade ou evento |
| data | TEXT | Data da atividade |
| participacao | TEXT | Status de participação (confirmada, concluída etc.) |

## Escopo das 4 entregas

| Entrega | Data | Foco |
|---------|------|------|
| 1 | 24/08/2026 | Proposta + 2 telas (lista + detalhe) com dados estáticos |
| 2 | 14/09/2026 | Formulário + AsyncStorage |
| 3 | 19/10/2026 | SQLite + CRUD |
| 4 | 16/11/2026 | App completo + UX revisada; apresentação |

> Os requisitos e critérios de cada entrega estão nas fichas compartilhadas do Trabalho em Grupo (`fase1-bimestre1.md` a `fase4-bimestre4.md`).

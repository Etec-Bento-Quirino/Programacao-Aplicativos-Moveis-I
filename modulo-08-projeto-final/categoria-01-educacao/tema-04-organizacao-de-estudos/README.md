# Tema 04 – Organização de estudos

Matérias, horários e metas de estudo.

Categoria: **[Educação](../README.md)** · Fichas: [fase1](../../fase1.md) · [fase2](../../fase2.md) · [fase3](../../fase3.md) · [fase4](../../fase4.md)

## O que o aplicativo faz

- Cadastrar matérias com horário e meta de estudo.
- Registrar horas estudadas por matéria.
- Comparar horas estudadas com a meta.
- Listar matérias e histórico de registros de estudo.

## Telas sugeridas

| Tela | Conteúdo |
|------|----------|
| Lista | Matérias com nome, horário, meta e total de horas estudadas |
| Detalhe | Dados da matéria + registros de estudo + botão Voltar |
| Cadastro / Edição | Formulário com campos nome, horário, meta e botão salvar |

## Banco de dados (SQLite)

`materias`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| nome | TEXT | Nome da matéria |
| horario | TEXT | Horário de estudo |
| meta | REAL | Meta de horas de estudo |

`registros`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| id_materia | INTEGER | Chave estrangeira para `materias` |
| data | TEXT | Data do registro |
| horas_estudadas | REAL | Horas estudadas nesse registro |

## Escopo das 4 entregas

| Entrega | Data | Foco |
|---------|------|------|
| 1 | 24/08/2026 | Proposta + 2 telas (lista + detalhe) com dados estáticos |
| 2 | 14/09/2026 | Formulário + AsyncStorage |
| 3 | 19/10/2026 | SQLite + CRUD |
| 4 | 16/11/2026 | App completo + UX revisada; apresentação |

> Os requisitos e critérios de cada entrega estão nas fichas compartilhadas do Trabalho em Grupo (`fase1.md` a `fase4.md`).

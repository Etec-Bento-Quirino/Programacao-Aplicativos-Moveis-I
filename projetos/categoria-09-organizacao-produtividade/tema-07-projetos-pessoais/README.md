# Tema 07 – Organizador de Projetos Pessoais

Cadastro de projetos, tarefas, prazos e status de conclusão.

Categoria: **[Organização e Produtividade](../README.md)** · Fichas: [fase1](../../fase1.md) · [fase2](../../fase2.md) · [fase3](../../fase3.md) · [fase4](../../fase4.md)

## O que o aplicativo faz

- Cadastrar projetos com nome, descrição e prazo.
- Adicionar tarefas a cada projeto.
- Marcar tarefas como concluídas.
- Acompanhar o status de conclusão de cada projeto.

## Telas sugeridas

| Tela | Conteúdo |
|------|----------|
| Lista | Projetos com nome, prazo e status |
| Detalhe | Dados do projeto + lista de tarefas com status + botão Voltar |
| Cadastro / Edição | Formulário de projeto (nome, descrição, prazo) e de tarefa (título) |

## Banco de dados (SQLite)

`projetos`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| nome | TEXT | Nome do projeto |
| descricao | TEXT | Descrição do projeto |
| prazo | TEXT | Data limite (prazo) do projeto |
| status | TEXT | Status do projeto (em andamento/concluído) |

`tarefas`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| id_projeto | INTEGER | Chave estrangeira para `projetos` |
| titulo | TEXT | Título da tarefa |
| concluida | INTEGER | 0 = pendente, 1 = concluída |

## Escopo das 4 entregas

| Entrega | Data | Foco |
|---------|------|------|
| 1 | 24/08/2026 | Proposta + 2 telas (lista + detalhe) com dados estáticos |
| 2 | 14/09/2026 | Formulário + AsyncStorage |
| 3 | 19/10/2026 | SQLite + CRUD |
| 4 | 16/11/2026 | App completo + UX revisada; apresentação |

> Os requisitos e critérios de cada entrega estão nas fichas compartilhadas do Trabalho em Grupo (`fase1.md` a `fase4.md`).

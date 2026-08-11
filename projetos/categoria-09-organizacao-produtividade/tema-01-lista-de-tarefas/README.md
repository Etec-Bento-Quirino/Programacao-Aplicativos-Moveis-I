# Tema 01 – Lista de tarefas

Criação, edição e conclusão de tarefas do dia a dia.

Categoria: **[Organização e Produtividade](../README.md)** · Fichas: [fase1](../../fase1-bimestre1.md) · [fase2](../../fase2-bimestre2.md) · [fase3](../../fase3-bimestre3.md) · [fase4](../../fase4-bimestre4.md)

## O que o aplicativo faz

- Criar novas tarefas com título e descrição.
- Editar tarefas existentes.
- Marcar tarefas como concluídas ou desmarcar.
- Listar tarefas com filtro (todas, pendentes ou concluídas).

## Telas sugeridas

| Tela | Conteúdo |
|------|----------|
| Lista | Todas as tarefas com título, status (pendente/concluída) e data de criação |
| Detalhe | Título, descrição, status, data de criação + botão Voltar |
| Cadastro / Edição | Formulário com campos título, descrição e botão salvar |

## Banco de dados (SQLite)

`tarefas`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| titulo | TEXT | Título da tarefa |
| descricao | TEXT | Descrição da tarefa |
| concluida | INTEGER | 0 = pendente, 1 = concluída |
| data_criacao | TEXT | Data de criação da tarefa |

## Escopo das 4 entregas

| Entrega | Data | Foco |
|---------|------|------|
| 1 | 24/08/2026 | Proposta + 2 telas (lista + detalhe) com dados estáticos |
| 2 | 14/09/2026 | Formulário + AsyncStorage |
| 3 | 19/10/2026 | SQLite + CRUD |
| 4 | 16/11/2026 | App completo + UX revisada; apresentação |

> Os requisitos e critérios de cada entrega estão nas fichas compartilhadas do Trabalho em Grupo (`fase1-bimestre1.md` a `fase4-bimestre4.md`).

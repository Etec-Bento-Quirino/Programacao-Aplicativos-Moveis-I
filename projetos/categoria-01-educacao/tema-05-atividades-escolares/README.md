# Tema 05 – Aplicativo para organização de atividades escolares

Tarefas escolares, matérias e prazos.

Categoria: **[Educação](../README.md)** · Fichas: [fase1](../../fase1-bimestre1.md) · [fase2](../../fase2-bimestre2.md) · [fase3](../../fase3-bimestre3.md) · [fase4](../../fase4-bimestre4.md)

## O que o aplicativo faz

- Cadastrar atividades escolares com título, matéria e prazo.
- Listar atividades por matéria ou prazo.
- Marcar atividades como concluídas.
- Filtrar atividades por status (pendente/concluída).

## Telas sugeridas

| Tela | Conteúdo |
|------|----------|
| Lista | Atividades com título, matéria, prazo e status |
| Detalhe | Todos os campos da atividade + botão Voltar |
| Cadastro / Edição | Formulário com campos título, matéria, prazo e botão salvar |

## Banco de dados (SQLite)

`atividades`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| titulo | TEXT | Título da atividade |
| materia | TEXT | Matéria da atividade |
| prazo | TEXT | Data limite (prazo) da atividade |
| status | TEXT | Status da atividade (pendente/concluída) |

## Escopo das 4 entregas

| Entrega | Data | Foco |
|---------|------|------|
| 1 | 24/08/2026 | Proposta + 2 telas (lista + detalhe) com dados estáticos |
| 2 | 14/09/2026 | Formulário + AsyncStorage |
| 3 | 19/10/2026 | SQLite + CRUD |
| 4 | 16/11/2026 | App completo + UX revisada; apresentação |

> Os requisitos e critérios de cada entrega estão nas fichas compartilhadas do Trabalho em Grupo (`fase1-bimestre1.md` a `fase4-bimestre4.md`).

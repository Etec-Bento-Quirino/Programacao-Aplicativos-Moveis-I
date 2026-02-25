# Calendário – Aulas, Projetos e Extensão

**Componente:** PAM I – Programação de Aplicativos Mobile I  
**Stack:** React Native (Expo), Node/npm/npx, hooks, SQLite.  
**Estrutura:** 20 aulas de conteúdo (tutorial + atividade) + 4 aulas exclusivas de projeto (1 por bimestre) + 2 quinzenas de extensão (B2 e B3).

---

## Visão geral

| Bimestre | Quinzenas | Conteúdo | Projeto |
|----------|-----------|----------|---------|
| 1 | 6 | Aulas 01–05 | Fase 1 (um dos tipos A, B, C ou D) |
| 2 | 8 | Aulas 06–10 + 1 extensão | Fase 2 |
| 3 | 8 | Aulas 11–15 + 1 extensão | Fase 3 |
| 4 | 6 | Aulas 16–20 | Fase 4 (entrega final com SQLite) |

Total: 26 quinzenas (20 aulas + 4 projetos + 2 extensão).

---

## Datas sugeridas por quinzena

### Bimestre 1
| Quinzena | Data Inicial | Data Final | Conteúdo |
|----------|--------------|------------|----------|
| 1 | 09/02/2026 | 20/02/2026 | Aula 01 – Intro mobile + Node/npm/npx |
| 2 | 23/02/2026 | 06/03/2026 | Aula 02 – Ambiente React Native (Expo), primeiro app |
| 3 | 09/03/2026 | 20/03/2026 | Aula 03 – Layouts (View, Flexbox, StyleSheet) |
| 4 | 23/03/2026 | 02/04/2026 | Aula 04 – Texto e botões |
| 5 | 06/04/2026 | 11/04/2026 | Aula 05 – Imagens e listas (FlatList) |
| 6 | 13/04/2026 | 16/04/2026 | **Projeto B1 – Fase 1** (escolher tipo A, B, C ou D) |

### Bimestre 2
| Quinzena | Data Inicial | Data Final | Conteúdo |
|----------|--------------|------------|----------|
| 7 | 17/04/2026 | 24/04/2026 | Aula 06 – Navegação (React Navigation) |
| 8 | 27/04/2026 | 08/05/2026 | Aula 07 – Formulários |
| 9 | 11/05/2026 | 22/05/2026 | Aula 08 – Galeria/câmera |
| 10 | 25/05/2026 | 03/06/2026 | Aula 09 – Geolocalização |
| 11 | 08/06/2026 | 20/06/2026 | Aula 10 – Notificações |
| 12 | 22/06/2026 | 03/07/2026 | **Extensão / reforço** (projeto ou conteúdo) |
| 13 | 06/07/2026 | 06/07/2026 | **Projeto B2 – Fase 2** |

### Bimestre 3
| Quinzena | Data Inicial | Data Final | Conteúdo |
|----------|--------------|------------|----------|
| 14 | 27/07/2026 | 08/08/2026 | Aula 11 – Hooks (useState, useEffect) |
| 15 | 10/08/2026 | 22/08/2026 | Aula 12 – Contexto e mais hooks |
| 16 | 24/08/2026 | 04/09/2026 | Aula 13 – AsyncStorage |
| 17 | 08/09/2026 | 19/09/2026 | Aula 14 – SQLite: configuração |
| 18 | 21/09/2026 | 03/10/2026 | Aula 15 – SQLite: CRUD |
| 19 | 05/10/2026 | 09/10/2026 | **Extensão / reforço** (projeto ou conteúdo) |
| 20 | 13/10/2026 | 14/10/2026 | **Projeto B3 – Fase 3** |

### Bimestre 4
| Quinzena | Data Inicial | Data Final | Conteúdo |
|----------|--------------|------------|----------|
| 21 | 16/10/2026 | 23/10/2026 | Aula 16 – Formulários + SQLite |
| 22 | 26/10/2026 | 07/11/2026 | Aula 17 – Relações entre tabelas |
| 23 | 09/11/2026 | 19/11/2026 | Aula 18 – UX (loading, empty state, erros) |
| 24 | 23/11/2026 | 04/12/2026 | Aula 19 – Revisão e boas práticas |
| 25 | 09/12/2026 | 12/12/2026 | Aula 20 – Preparação projeto final |
| 26 | 14/12/2026 | 15/12/2026 | **Projeto B4 – Fase 4 (entrega com SQLite)** |

---

## Projetos (4 tipos, 4 fases cada)

O aluno escolhe **um** tipo no início do Bimestre 1 e desenvolve as 4 fases ao longo do ano. Ao final do Bimestre 4, entrega um app completo com SQLite.

| Tipo | Nome | Fase 1 (B1) | Fase 2 (B2) | Fase 3 (B3) | Fase 4 (B4) |
|------|------|-------------|-------------|-------------|-------------|
| A | Lista de Tarefas | Lista + detalhe (estático) | Formulário + AsyncStorage | SQLite + CRUD + filtros | Notificação + UX |
| B | Cadastro/Inventário | Categorias + itens (estático) | Formulários + AsyncStorage | SQLite (2 tabelas) | Edição/exclusão + UX |
| C | Diário/Notas | Lista notas + detalhe | Formulário + galeria + AsyncStorage | SQLite (categorias + notas) | Foto + notificação + UX |
| D | Controle de Gastos | Lista gastos + detalhe | Formulário + geolocalização + AsyncStorage | SQLite (categorias + gastos) | Totalizador/mapa + UX |

Pastas: `projetos/tipo-a-listadetarefas/`, `tipo-b-cadastro-inventario/`, `tipo-c-diario-notas/`, `tipo-d-controle-gastos/`. Cada uma contém README e fase1 a fase4.

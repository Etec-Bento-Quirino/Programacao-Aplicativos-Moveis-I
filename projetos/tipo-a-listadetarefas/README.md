# Tipo A – App Lista de Tarefas (To-Do)

App para criar, listar, editar e concluir tarefas. Ao final do 4º bimestre: persistência em SQLite, categorias (opcional) e notificação (opcional).

## Escopo geral

- **Fase 1 (B1):** Tela inicial com lista estática de 3 tarefas e tela de detalhe ao toque; botão “Adicionar” (ainda sem persistência).
- **Fase 2 (B2):** Formulário para adicionar tarefa; uso de AsyncStorage para salvar lista; tela de detalhe com opção de marcar como concluída.
- **Fase 3 (B3):** Migração para SQLite: tabela `tarefas` (id, titulo, descricao, concluida, data_criacao); CRUD completo; listagem com filtro (todas / pendentes / concluídas).
- **Fase 4 (B4):** Notificação local ao adicionar tarefa (opcional); polish de UX (loading, empty state); entrega do app completo com SQLite.

## Entregas por bimestre

| Bimestre | Entrega |
|----------|--------|
| 1 | App com 2 telas (lista + detalhe), lista estática, navegação. |
| 2 | Formulário de nova tarefa; AsyncStorage; marcar concluída. |
| 3 | SQLite com CRUD; filtros na listagem. |
| 4 | App completo: SQLite, notificação (opc.), UX revisada. |

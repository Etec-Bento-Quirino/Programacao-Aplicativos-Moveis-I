# Tipo A – Fase 4 (Bimestre 4)

**Sugestão de execução:** quinzena 26 (14/12/2026 a 15/12/2026).

## Objetivo

Entregar o app completo: SQLite como única fonte de dados, notificação local opcional ao adicionar tarefa, e polish de UX (loading, empty state, tratamento de erros).

## Requisitos

1. **SQLite**
   - Todo o fluxo (lista, adicionar, editar, concluir, excluir) usando apenas SQLite.
   - Nenhum dado crítico em AsyncStorage (AsyncStorage pode ser usado só para preferências, ex.: filtro padrão).
2. **Notificação (opcional)**
   - Ao adicionar uma nova tarefa, agendar uma notificação local para lembrar (ex.: 1 hora depois ou em horário escolhido). Usar `expo-notifications`.
3. **UX**
   - Loading ao carregar a lista (enquanto lê do SQLite).
   - Empty state quando não houver tarefas (mensagem + ilustração ou ícone).
   - Mensagem de erro amigável se falhar ao salvar ou carregar.
4. **Entrega**
   - Código fonte (repositório ou ZIP).
   - APK ou link para teste (Expo Go ou build).
   - Breve apresentação em sala.

## Conteúdos cobrados

- SQLite (Aulas 14, 15, 16).
- Notificações (Aula 10).
- UX: loading, empty state, erros (Aula 18).

## Critérios de avaliação

- App completo com SQLite; CRUD e filtros funcionando.
- Uso de recurso do dispositivo (notificação) ou justificativa de não uso.
- Interface consistente; loading e empty state presentes.
- Organização do código e clareza na apresentação.

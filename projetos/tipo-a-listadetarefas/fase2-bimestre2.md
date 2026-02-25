# Tipo A – Fase 2 (Bimestre 2)

**Sugestão de execução:** quinzena 13 (06/07/2026).

## Objetivo

Adicionar formulário de nova tarefa e persistência com AsyncStorage. Na tela de detalhe, permitir marcar tarefa como concluída.

## Requisitos

1. **Formulário**
   - Tela ou modal para adicionar tarefa: campo título e campo descrição (e opcionalmente data).
   - Validação: título obrigatório.
   - Ao salvar, adicionar à lista e persistir com AsyncStorage.
2. **Lista**
   - Carregar tarefas do AsyncStorage ao abrir o app.
   - Exibir indicador visual de “concluída” (ex.: ícone ou cor).
3. **Detalhe**
   - Botão “Marcar como concluída” / “Desmarcar”; atualizar AsyncStorage e voltar à lista atualizada.
4. **Navegação**
   - Botão “Adicionar” na lista abre o formulário (tela ou stack).

## Conteúdos cobrados

- Formulários (Aula 07).
- AsyncStorage (Aula 13).
- Estado com hooks (Aulas 11, 12).

## Critérios de avaliação

- Formulário com validação; dados salvos no AsyncStorage.
- Lista carregada do AsyncStorage ao iniciar.
- Marcar/desmarcar concluída no detalhe com persistência.

## Dica

Estrutura de dados sugerida no AsyncStorage: array de objetos `{ id, titulo, descricao, concluida }`. Use `JSON.stringify` ao salvar e `JSON.parse` ao carregar.

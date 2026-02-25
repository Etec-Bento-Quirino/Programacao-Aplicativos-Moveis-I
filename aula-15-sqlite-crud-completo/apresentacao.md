# Aula 15 - SQLite: CRUD completo

**Data:** 21/09/2026

---

## Apresentação

Listar registros (SELECT) na FlatList; formulário para INSERT; botão excluir (DELETE) e opcional editar (UPDATE). Recarregar lista após cada operação.

---

## Slides

### Objetivo

App tipo lista de tarefas ou caderno: listar do SQLite, adicionar, excluir e (opcional) editar. Interface coerente com as operações.

### Read

SELECT * FROM tarefas ORDER BY id DESC. Guardar resultado em estado; FlatList com data={itens}. Carregar no useEffect e após cada alteração.

### Create

Formulário: TextInput + botão. onPress: INSERT INTO tarefas (titulo) VALUES (?); em seguida recarregar a lista (nova consulta SELECT).

### Delete e Update

DELETE FROM tarefas WHERE id = ?. UPDATE tarefas SET titulo = ? WHERE id = ?. Confirmar exclusão com Alert; edição em modal ou tela.

### Atividade da quinzena

App lista de tarefas ou caderno com listar, adicionar e excluir (obrigatório); editar (opcional).

### Projeto Bimestre 3

Quinzenas seguintes: extensão e Projeto Fase 3 (SQLite com CRUD e filtros ou duas tabelas).

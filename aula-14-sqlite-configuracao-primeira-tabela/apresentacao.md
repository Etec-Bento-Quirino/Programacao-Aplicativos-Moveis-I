# Aula 14 - SQLite: configuração e primeira tabela

**Data:** 08/09/2026

---

## Apresentação

expo-sqlite: openDatabaseSync (ou openDatabase); CREATE TABLE IF NOT EXISTS; INSERT e SELECT para validar. Estrutura para CRUD na próxima aula.

---

## Slides

### Objetivo

Configurar expo-sqlite; abrir banco; criar uma tabela (ex.: tarefas com id, titulo, concluida); inserir um registro de teste e fazer SELECT.

### Abrir banco

const db = SQLite.openDatabaseSync('meudb.db'). Consultar documentação da sua versão do Expo (execSync vs transaction/executeSql).

### CREATE TABLE

CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT NOT NULL, concluida INTEGER DEFAULT 0).

### INSERT e SELECT

INSERT INTO tarefas (titulo) VALUES (?). SELECT * FROM tarefas. Resultado em estado para exibir na lista (Aula 15).

### Atividade da quinzena

Projeto com banco aberto, tabela criada e pelo menos um INSERT executado; opcional: exibir resultado do SELECT na tela.

### Próxima aula

SQLite CRUD completo: listar na FlatList, adicionar (formulário), excluir e opcional editar.

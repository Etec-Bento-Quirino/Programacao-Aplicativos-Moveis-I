# Aula 14 – SQLite: configuração e primeira tabela

**Sugestão de execução:** quinzena 17 (08/09/2026 a 19/09/2026).

**Base tecnológica:** Manipulação de banco de dados no dispositivo.

---

## Objetivo

Configurar **expo-sqlite** no projeto Expo, **abrir** um banco de dados, **criar** uma tabela e **inserir** um registro de teste. Ainda sem interface completa; foco em conectar e executar SQL.

---

## Parte 1 – Instalar (Expo SDK 50+)

```bash
npx expo install expo-sqlite
```

Com Expo SDK 51+, o **expo-sqlite** usa a API "next" (opcional). Para a API clássica:

```javascript
import * as SQLite from 'expo-sqlite';
```

---

## Parte 2 – Abrir o banco e criar tabela

A função **openDatabaseSync** (ou **openDatabase** em versões antigas) abre/cria o arquivo do banco. Em Expo (SDK 51+), use:

```javascript
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('meudb.db');

useEffect(() => {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS tarefas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT NOT NULL,
      concluida INTEGER DEFAULT 0
    );
  `);
}, []);
```

Se sua versão usar **openDatabase** (callback), o padrão é:

```javascript
const db = SQLite.openDatabase('meudb.db');

db.transaction((tx) => {
  tx.executeSql(
    'CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT NOT NULL, concluida INTEGER DEFAULT 0);'
  );
});
```

Consulte a documentação atual do **expo-sqlite** para a API exata da sua versão (execSync vs transaction/executeSql).

---

## Parte 3 – Inserir um registro

Com **execSync** (exemplo):

```javascript
db.runSync('INSERT INTO tarefas (titulo) VALUES (?)', ['Minha primeira tarefa']);
```

Com **transaction**:

```javascript
db.transaction((tx) => {
  tx.executeSql('INSERT INTO tarefas (titulo) VALUES (?)', ['Minha primeira tarefa']);
});
```

---

## Parte 4 – Ler e exibir (SELECT)

Com **execSync** e **getAllSync** (ou equivalente):

```javascript
const linhas = db.getAllSync('SELECT * FROM tarefas');
console.log(linhas);
```

Com **transaction**:

```javascript
db.transaction((tx) => {
  tx.executeSql('SELECT * FROM tarefas', [], (_, { rows }) => {
    console.log(rows._array);
  });
});
```

Coloque o resultado em um **useState** e exiba em uma FlatList na próxima aula (CRUD completo).

---

## Checklist

- [ ] expo-sqlite instalado; banco aberto (openDatabaseSync ou openDatabase).
- [ ] CREATE TABLE IF NOT EXISTS executado; tabela criada.
- [ ] INSERT executado; SELECT retorna o registro; sem erro no console.

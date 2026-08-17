# Apresentação: CRUD — Os Quatro Pilares do Software 🛡️

**Aula 15 — Leitura antes do Tutorial**

---

## 1. O Que é CRUD?

Não importa se você trabalha na NASA ou numa mercearia. Todo sistema que lida com dados segue o mesmo padrão, chamado **CRUD** — quatro operações que cobrem 99% do que um app precisa fazer:

| Letra | Operação | O que faz | Comando SQL |
|-------|----------|-----------|-------------|
| **C** | Create | Cria dados novos | `INSERT INTO ...` |
| **R** | Read | Lê dados que já existem | `SELECT * FROM ...` |
| **U** | Update | Altera dados existentes | `UPDATE ... SET ...` |
| **D** | Delete | Apaga dados | `DELETE FROM ...` |

> [!NOTE]
> CRUD é uma sigla que aparece em **toda** vaga de emprego para desenvolvedor. Se você dominar isso, já entende metade do que um sistema faz!

---

## 2. O Exemplo da Padaria

Imagina uma padaria que usa um sistema no tablet:

- **Create (C):** o padeiro cadastra um pão novo → `INSERT INTO pao (nome, preco) VALUES ('Pao Frances', 0.75)`
- **Read (R):** o balconista consulta a lista de pães → `SELECT * FROM pao`
- **Update (U):** o preço sobe → `UPDATE pao SET preco = 0.80 WHERE id = 1`
- **Delete (D):** o pão foi descontinuado → `DELETE FROM pao WHERE id = 1`

> [!IMPORTANT]
> **CRUD** = Create, Read, Update, Delete. São as 4 operações fundamentais de qualquer banco de dados. Memorize essa sigla — ela vai aparecer no TCC, na faculdade e no trabalho!

---

## 3. O Problema da Tela Que Não Atualiza

Imagine: você salva uma tarefa no banco, mas a **tela continua igual**. O usuário precisa fechar e reabrir o app para ver a mudança. Por quê?

Porque o banco de dados e a tela do React são "vizinhos surdos". O banco salva, mas não avisa a tela que precisa redesenhar.

### A Solução: o "Full Loop"

Logo após cada operação (INSERT, UPDATE ou DELETE), nós **recarregamos** a lista do banco e atualizamos o estado do React:

```
Usuário clica "Salvar"
    → runSync('INSERT INTO ...')
    → carregarTarefas()  ← recarrega do banco
    → setListaDeMetas(registros)  ← atualiza a tela
```

> [!TIP]
> Essa técnica se chama **recarregar após escrever**. É o padrão mais comum em apps com banco local: depois de qualquer mudança, busca tudo de novo e deixa a tela sincronizada.

---

## 4. As Ferramentas do Expo SQLite

O Expo SQLite oferece vários métodos. Aqui está o resumo:

| Método | Para que serve | Devolve |
|--------|---------------|---------|
| `execSync(...)` | Criar tabelas (DDL) | — |
| `runSync(...)` | INSERT, UPDATE, DELETE | `{ lastInsertRowId, changes }` |
| `getAllSync(...)` | Buscar **várias** linhas | Array de objetos |
| `getFirstSync(...)` | Buscar **uma** linha | Um objeto ou `null` |
| `withTransactionSync(...)` | Várias operações atômicas | — |
| `prepareSync(...)` | Comando reutilizado várias vezes | Statement |

Exemplos práticos:

```tsx
// CREATE — adicionar novo registro
db.runSync('INSERT INTO carros (modelo, ano) VALUES (?, ?)', ['Fusca', 1978]);

// READ — ler todos e devolver em formato Array JavaScript
const meusCarros = db.getAllSync('SELECT * FROM carros');
// Saída: [{ id: 1, modelo: 'Fusca', ano: 1978 }]

// UPDATE — modificar pelo ID
db.runSync('UPDATE carros SET ano = ? WHERE id = ?', [1979, 1]);

// DELETE — apagar pelo ID
db.runSync('DELETE FROM carros WHERE id = ?', [1]);
```

> [!WARNING]
> Perceba que **todas** as queries usam `?` no lugar dos valores. Isso não é opcional — é proteção contra SQL Injection. Sempre use `?`!

---

## 5. Por Que Isso Importa Para o Seu Projeto?

As três funções que você aprenderá hoje (listar, inserir, excluir) são o **núcleo** de qualquer tela do seu projeto:

| Operação | Categoria 1 | Categoria 2 | Categoria 3 | Categoria 4 |
|---|---|---|---|---|
| Listar | `carregarTarefas()` | `carregarItens()` | `carregarNotas()` | `carregarGastos()` |
| Inserir | `adicionarTarefa(texto)` | `adicionarItem(nome, qtd)` | `adicionarNota(titulo, conteudo)` | `adicionarGasto(valor, descricao)` |
| Excluir | `excluirTarefa(id)` | `excluirItem(id)` | `excluirNota(id)` | `excluirGasto(id)` |

> [!TIP]
> Se quiser se aprofundar, confira a documentação oficial: [Expo SQLite](https://docs.expo.dev/versions/latest/sdk/sqlite/)

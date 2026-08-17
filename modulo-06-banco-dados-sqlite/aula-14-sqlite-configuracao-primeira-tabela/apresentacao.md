# Apresentação: Cimentando a Segurança de Dados 🛡️

**Aula 14 — Leitura antes do Tutorial**

---

## 1. O Que é um Banco de Dados?

Antes de tudo, vamos falar com calma.

Um **banco de dados** é um arquivo especial que guarda informações de forma organizada. Pense numa planilha com várias abas: cada aba é uma **tabela**, cada linha da aba é um **registro** e cada coluna é um **campo**.

| Conceito | Analogia com planilha |
|----------|----------------------|
| **Banco de dados** | O arquivo Excel inteiro (`.xlsx`) |
| **Tabela** | Uma aba dentro do arquivo |
| **Registro** | Uma linha da aba |
| **Campo** | Uma coluna da aba |

> [!NOTE]
> No SQLite, o banco inteiro é **um único arquivo** (extensão `.db`). Ele mora numa pasta protegida do seu celular — nem outro app consegue ler!

---

## 2. Por Que o SQLite e Não Outro?

Existem bancos enormes como MySQL e PostgreSQL que rodam em servidores na internet. Mas o **SQLite** é diferente: ele roda **dentro** do celular, sem precisar de servidor, sem login, sem senha.

| Banco | Onde roda | Precisa de internet? |
|-------|-----------|---------------------|
| MySQL / PostgreSQL | Servidor remoto (cloud) | Sim |
| **SQLite** | Dentro do celular (local) | **Não** |

> [!IMPORTANT]
> **SQLite** = banco de dados local, sem servidor, que grava tudo num arquivo `.db`. É o mais usado do mundo — está dentro de 100% dos smartphones, laptops e até carros!

---

## 3. Tabelas: Organizando os Dados

No Async Storage (Aula 13), você jogava tudo numa "sopa de texto JSON". Com SQLite, precisamos criar uma **estrutura** antes — como desenhar o layout da planilha antes de escrever nela.

Essa estrutura se chama **DDL** (*Data Definition Language* — Linguagem de Definição de Dados). É o SQL que **cria** tabelas:

```sql
CREATE TABLE IF NOT EXISTS usuarios (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT NOT NULL
);
```

Explicando linha por linha:

- `CREATE TABLE IF NOT EXISTS` → "Crie uma tabela, mas só se ela ainda não existir" (seguro!)
- `id INTEGER PRIMARY KEY AUTOINCREMENT` → coluna numérica que o SQLite cria sozinha (1, 2, 3…)
- `nome TEXT NOT NULL` → coluna de texto que **não pode ficar vazia**

> [!WARNING]
> Se alguém tentar salvar um registro sem `nome`, o SQLite **rejeita** e mostra erro. Isso protege a integridade dos dados — não entra lixo no banco!

---

## 4. Síncrono vs Assíncrono: Qual Usar?

O Expo SQLite moderno (SDK 50+) oferece dois jeitos de rodar comandos:

| Método | Quando usar |
|--------|-------------|
| `db.runSync(...)` | Comandos rápidos (INSERT, UPDATE, DELETE) — resolve em milissegundos |
| `db.execSync(...)` | Comandos de criação de tabela (DDL) — também rápido |

> [!TIP]
> Operações de banco são tão rápidas que quase sempre podemos usar o modo **síncrono** (`runSync`). Não precisa de `async/await` para a maioria dos casos!

Aqui está um exemplo completo — imagine um app de heróis:

```tsx
import * as SQLite from 'expo-sqlite';

export default function BancoDeDados() {
  const db = SQLite.useSQLiteContext();

  const executarCriacao = () => {
    db.execSync(`
      CREATE TABLE IF NOT EXISTS herois (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL
      );
    `);

    db.runSync('INSERT INTO herois (nome) VALUES (?)', ['Batman']);
    console.log("Salvo no SQLite com sucesso!");
  };

  return <Button title="Criar Banco e Inserir Batman" onPress={executarCriacao} />;
}
```

Explicando:

- `SQLite.useSQLiteContext()` → pega a conexão do banco que já foi aberta
- `db.execSync(...)` → cria a tabela
- `db.runSync('... VALUES (?)', ['Batman'])` → insere um registro; o `?` protege contra ataques

> [!NOTE]
> O `?` na query é chamado de **parâmetro vinculado**. O SQLite junta o valor separadamente, como se você entregasse o ingrediente numa panela distinta — nunca mistura direto na string. Isso evita o famoso **SQL Injection** (injeção de código malicioso).

---

## 5. Por Que Isso Importa Para o Seu Projeto?

Cada categoria do Trabalho em Grupo vai ter sua própria tabela:

| Categoria | Tabela sugerida |
|-----------|----------------|
| Tarefas | `tarefas` (id, titulo, descricao, concluida) |
| Itens/Compras | `itens` (id, nome, quantidade, categoria_id) |
| Notas | `notas` (id, titulo, conteudo, data_criacao) |
| Gastos | `gastos` (id, valor, descricao, data) |

A estrutura que você aprender hoje é exatamente a que vai usar em qualquer uma dessas tabelas.

> [!TIP]
> Se quiser se aprofundar, confira a documentação oficial: [Expo SQLite](https://docs.expo.dev/versions/latest/sdk/sqlite/)

# Tutorial: A Forja da Primeira Tabela (SQLite)

**Sugestão de execução:** Quinzena 17 | **Bimestre:** 3

> [!NOTE]
> **O que você vai aprender hoje:**
> - Instalar o `expo-sqlite` no seu projeto Expo
> - Criar uma tabela com `CREATE TABLE IF NOT EXISTS` usando SQL
> - Inserir o primeiro registro com `INSERT INTO` e entender o `?` como proteção
> - Usar `SQLiteProvider` e `useSQLiteContext` (a forma React de usar banco)
>
> **Pré-requisitos:** [Aula 13](../../modulo-05-estado-persistencia/aula-13-asyncstorage-persistencia-simples/README.md) — AsyncStorage compreendido; `useEffect` e `useState` dominados.

---

Vamos começar uma nova fase! Até agora, seus dados viviam em listas simples. Mas imagine que você quer salvar 500 tarefas e buscar rapidamente só as pendentes — o Async Storage não aguenta isso com performance.

Hoje, você vai construir o **cofre** do seu aplicativo: um banco de dados SQLite. Pense nele como uma planilha que mora dentro do celular, blindada, rápida e superorganizada.

> [!TIP]
> Se você já instalou o `expo-sqlite` antes e já tem o `openDatabaseSync` funcionando, pule para o **Passo 3**. Mas eu recomendo ler tudo — a parte do `SQLiteProvider` vai te economizar muito trabalho!

---

## Passo 1: Instalando o `expo-sqlite` (a ponte para o banco)

O `expo-sqlite` é a biblioteca que conecta seu app React Native ao motor SQLite embutido no celular.

> [!CAUTION]
> Antes de rodar o comando, **pare o servidor** que está rodando no terminal (pressione `Ctrl+C`). Depois, reinstale o servidor com `npx expo start`.

1. No terminal, dentro da pasta do seu projeto, digite:

```bash
npx expo install expo-sqlite
```

O terminal vai baixar a biblioteca. Espere aparecer algo como:

```
added 1 package in Xs
```

> [!WARNING]
> Se aparecer erro de permissão, tente rodar o terminal como administrador (Windows) ou use `sudo` (Mac/Linux). Se o erro persistir, delete a pasta `node_modules` e rode `npm install` antes de tentar de novo.

2. Agora reinicie o servidor:

```bash
npx expo start
```

Pronto — a ponte entre seu app e o banco de dados está construída!

---

## Passo 2: Abrindo o Banco de Dados (o Guardião de Arranque)

Agora vamos criar uma tela nova para testar. O nome sugestivo é `BancoTest.tsx`.

No topo do arquivo, vamos importar as ferramentas e **abrir o banco de dados**:

```tsx
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import * as SQLite from 'expo-sqlite';

// Abre (ou cria) o arquivo do banco no celular
const bancoDados = SQLite.openDatabaseSync('aplicativo_v1.db');

export default function BancoTest() {
  const [bancoGerado, setBancoGerado] = useState(false);

  // O useEffect roda quando a tela abre pela primeira vez
  useEffect(() => {
    try {
      // Cria a tabela "metas" se ela ainda não existir
      bancoDados.execSync(`
        CREATE TABLE IF NOT EXISTS metas (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          descricao TEXT NOT NULL,
          status_feita INTEGER DEFAULT 0
        );
      `);
      setBancoGerado(true);
      console.log("Sucesso: Tabela criada!");
    } catch (err) {
      console.error("Erro ao criar tabela:", err);
    }
  }, []);
```

Explicando bloco por bloco:

- `openDatabaseSync('aplicativo_v1.db')` → abre (ou cria) o arquivo do banco no celular. Se o arquivo não existir, ele nasce ali
- `execSync('CREATE TABLE IF NOT EXISTS ...')` → cria a tabela; o `IF NOT EXISTS` garante que não dá erro se ela já existir
- `id INTEGER PRIMARY KEY AUTOINCREMENT` → coluna que o SQLite numera sozinha (1, 2, 3…)
- `descricao TEXT NOT NULL` → campo de texto obrigatório
- `status_feita INTEGER DEFAULT 0` → 0 = não feita, 1 = feita (começa em 0)

> [!IMPORTANT]
> O `useEffect(() => {}, [])` com array vazio roda **uma única vez** quando a tela abre. É o momento perfeito para criar tabelas — não precisa recriar toda vez que o usuário navega!

---

## Passo 3: Inserindo o Primeiro Registro (INSERT)

Ainda no mesmo arquivo, vamos criar uma função que **insere** uma tarefa no banco e um botão para testar:

```tsx
const inserirTarefa = () => {
  // O "?" protege contra SQL Injection — o valor é passado separadamente
  bancoDados.runSync(
    'INSERT INTO metas (descricao) VALUES (?)',
    ['Minha primeira tarefa no SQLite!']
  );
  Alert.alert('Sucesso', 'Tarefa salva no banco! Ela persiste mesmo ao fechar o app!');
};

return (
  <View style={styles.container}>
    <Text style={styles.titulo}>
      Status do banco: {bancoGerado ? "ABERTO E OPERACIONAL" : "INICIANDO..."}
    </Text>

    {bancoGerado && (
      <Text onPress={inserirTarefa} style={styles.botao}>
        [ TESTAR INSERT ]
      </Text>
    )}
  </View>
);
```

Explicando:

- `runSync('INSERT INTO metas ...')` → insere uma linha nova na tabela
- `VALUES (?)` → o `?` é um "espaço reservado"; o valor real (`['Minha primeira tarefa...']`) é passado num array separado
- O botão só aparece depois que `bancoGerado` vira `true` (tabela criada com sucesso)

> [!WARNING]
> **Nunca** concatene o valor direto na string SQL como `'INSERT ... VALUES ("' + texto + '")'`. Isso abre brecha para **SQL Injection**. Sempre use o `?`!

---

## Passo 3.1: O Que o `runSync` Devolve (o recibo do INSERT)

O `runSync` não devolve `undefined` — ele devolve um objeto com duas informações valiosas:

```tsx
const resultado = bancoDados.runSync(
  'INSERT INTO metas (descricao) VALUES (?)',
  ['Minha primeira tarefa no SQLite!']
);

console.log('Novo id criado:', resultado.lastInsertRowId); // ex.: 1
console.log('Linhas afetadas:', resultado.changes);        // ex.: 1
```

> [!TIP]
> Guarde o `lastInsertRowId` quando o usuário cadastra algo — com ele você pode navegar direto para o detalhe do registro recém-criado!

---

## Passo 4: A Forma React de Usar o Banco (`SQLiteProvider`)

No Passo 2, abrimos o banco com `openDatabaseSync(...)` direto no arquivo. Existe outra forma **mais organizada**: o componente `<SQLiteProvider>`.

Funciona assim: ele abre o banco **uma única vez** no topo do app e entrega a conexão a qualquer tela filha, sem precisar repetir `openDatabaseSync` em cada arquivo.

```tsx
// app/_layout.tsx — abre o banco UMA vez para o app inteiro
import { SQLiteProvider } from 'expo-sqlite';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <SQLiteProvider databaseName="aplicativo_v1.db">
      <Stack />
    </SQLiteProvider>
  );
}
```

E em qualquer tela filha:

```tsx
// app/index.tsx — usa o banco sem abrir de novo
import { useSQLiteContext } from 'expo-sqlite';

export default function Inicio() {
  const banco = useSQLiteContext(); // conexão pronta!

  const inserirTarefa = () => {
    banco.runSync('INSERT INTO metas (descricao) VALUES (?)', ['Tarefa via contexto!']);
  };

  // ... render ...
}
```

> [!NOTE]
> - `SQLiteProvider` recebe o nome do arquivo `.db` e abre o banco para todo o app
> - `useSQLiteContext()` devolve a conexão pronta — não precisa chamar `openDatabaseSync` nas telas filhas
> - A forma do **Provider** é a recomendada quando o app tem várias telas usando o mesmo banco (que é o caso do seu projeto!)

---

## Passo 5: Apagando o Banco (reset total)

Errou na estrutura da tabela e quer recomeçar do zero? O Expo expõe uma função para apagar o banco inteiro:

```tsx
import * as SQLite from 'expo-sqlite';

await SQLite.deleteDatabaseAsync('aplicativo_v1.db');
```

> [!CAUTION]
> `deleteDatabaseAsync` apaga **o banco inteiro** — todas as tabelas e dados somem. Use **apenas em testes** ou quando você mudou a estrutura da tabela e precisa recomeçar. Em produção, isso apagaria todo o trabalho do usuário!

---

## Checklist da Aula 14

Marque cada item quando conseguir fazer:

- [ ] Instalei o `expo-sqlite` com `npx expo install expo-sqlite`
- [ ] Criei uma tela `BancoTest.tsx` com `openDatabaseSync`
- [ ] Criei a tabela `metas` com `CREATE TABLE IF NOT EXISTS`
- [ ] Inseri o primeiro registro com `INSERT INTO` + `runSync`
- [ ] Vi o "Sucesso" no Alert do celular
- [ ] (Opcional) Configurei o `SQLiteProvider` no `_layout.tsx`

> [!NOTE]
> Se algum item ficou sem marcar, volte no passo correspondente. Não siga em frente com pendências — a próxima aula usa tudo isso!

---

## Como isso se aplica ao seu projeto

A tabela criada nesta aula é a **fundação** do banco de dados do seu projeto. Cada categoria tem sua própria estrutura:

| Categoria | Tabela principal | Colunas essenciais |
|---|---|---|
| Categoria 1 | `tarefas` | `id`, `titulo`, `descricao`, `concluida`, `data_criacao` |
| Categoria 2 | `itens` | `id`, `nome`, `quantidade`, `categoria_id` |
| Categoria 3 | `notas` | `id`, `titulo`, `conteudo`, `data_criacao` |
| Categoria 4 | `gastos` | `id`, `valor`, `descricao`, `categoria`, `data` |

O padrão de criar a tabela dentro do `useEffect(() => {}, [])` é o mesmo que você usará em todo o projeto. Na próxima aula, vamos aprender a **buscar**, **atualizar** e **apagar** registros — o famoso CRUD completo!

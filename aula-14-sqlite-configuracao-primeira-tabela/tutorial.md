# Tutorial: A Forja da Tabela de Tarefas

**Sugestão de execução:** Quinzena 17 | **Bimestre:** 3

> **Pré-requisitos:** [Aula 13](../aula-13-asyncstorage-persistencia-simples/README.md) — AsyncStorage compreendido; `useEffect` e `useState` dominados.
>
> **O que você vai aprender:**
> - Instalar e importar o `expo-sqlite` no projeto
> - Abrir (ou criar) um banco de dados local no dispositivo com `openDatabaseSync`
> - Criar uma tabela com `CREATE TABLE IF NOT EXISTS` usando SQL
> - Inserir o primeiro registro com `INSERT INTO` e entender o `?` como proteção contra SQL Injection

---

O StickerSmash foi nosso protótipo de Design. Mas hoje, construiremos as fundações (o Database) para o nosso projeto independente "Tarefas Diárias". Este módulo foca unicamente em construir o cofre do zero, sem construir toda a interface linda ainda. 

---

## Passo 1: Injeção de Maquinário DDL
No console de comando do terminal, acione a instalação da ponte (Lembre-se de desligar o server com Ctrl+C primeiro e ligar depois).
```bash
npx expo install expo-sqlite
```

## Passo 2: O Guardião de Arranque (`openDatabaseSync`)

Crie uma tela nova limpa para testar, chamada `BancoTest.tsx`.
No topo, importaremos a ferramenta. Ao invés da complicação de `useState`, usaremos a sintaxe pura moderna e limpa de abertura assíncrona. 

```tsx
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import * as SQLite from 'expo-sqlite';

// ABERTURA IMEDIATA DO ARQUIVO BINÁRIO (Se ikke existir, ele forja no SSD do celular agora).
const bancoDados = SQLite.openDatabaseSync('aplicativo_v1.db');

export default function BancoTest() {
  const [bancoGerado, setBancoGerado] = useState(false);

  // Lembra dele? O Guarda Noturno. Irá criar as tabelas SÓ quando a tela abrir 1 vez.
  useEffect(() => {
    try {
      bancoDados.execSync(`
        CREATE TABLE IF NOT EXISTS metas (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          descricao TEXT NOT NULL,
          status_feita INTEGER DEFAULT 0
        );
      `);
      setBancoGerado(true);
      console.log("Sucesso: A Tabela nas profundezas está montada.");
    } catch(err) {
      console.error("Pane no SQLite C++ engine:", err);
    }
  }, []);
```

## Passo 3: O Primeiro Teste Lógico (INSERT)

Ainda no mesmo arquivo, embaixo do *useEffect*, você vai criar uma função e um *Componente Button* só para socar uma tarefa pra dentro na brutalidade e ver se o banco vai engolir:

```tsx
  const inserirTarefa = () => {
    // O "?" previne SQL Injection: a variável é passada separadamente, não concatenada na string.
    bancoDados.runSync(
        'INSERT INTO metas (descricao) VALUES (?)', 
        ['Minha primeira tarefa no SQLite!']
    );
    Alert.alert('Sucesso', 'Tarefa salva no banco de dados. Ela persiste mesmo ao fechar o app!');
  };

  // --- Tela de laboratório (sem estilo final — foco na lógica):
  return (
    <View style={styles.container}>
      <Text style={styles.titulos}> 
        Status do banco: { bancoGerado ? "ABERTO E OPERACIONAL" : "INICIANDO..."  } 
      </Text>
      
      {bancoGerado && (
         <Text onPress={inserirTarefa} style={styles.botaoInserir}>
            [ TESTAR INSERT ]
         </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  titulos: { fontSize: 20, color: 'blue', marginBottom: 30 },
  botaoInserir: { padding: 15, backgroundColor: '#007AFF', color: 'white', fontWeight: 'bold' }
});
```

Na próxima aula faremos a leitura com `SELECT` e montaremos o CRUD completo. Avance para a sua atividade!

---

## Como isso se aplica ao seu projeto

A tabela criada nesta aula é o banco de dados do **seu** projeto. Cada categoria tem sua própria estrutura:

| Categoria | Tabela principal | Colunas essenciais |
|---|---|---|
| Categoria 1 | `tarefas` | `id`, `titulo`, `descricao`, `concluida`, `data_criacao` |
| Categoria 2 | `itens` | `id`, `nome`, `quantidade`, `categoria_id` |
| Categoria 3 | `notas` | `id`, `titulo`, `conteudo`, `data_criacao` |
| Categoria 4 | `gastos` | `id`, `valor`, `descricao`, `categoria`, `data` |

O padrão de abrir o banco fora do componente (`const db = SQLite.openDatabaseSync(...)`) e criar a tabela dentro do `useEffect(() => {}, [])` é o padrão que você usará em todo o projeto.

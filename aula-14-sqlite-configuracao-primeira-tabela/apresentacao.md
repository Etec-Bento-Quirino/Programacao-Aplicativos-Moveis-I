# Apresentação: Cimentando a Segurança de Dados 🛡️

**Leitura Autônoma de Engenharia Front-End e Banco Local**

Se você já estudou MySQL ou Postgres em servidores remotos, você deve estar pensando: "Onde ficam as credenciais de Root e Senha do SQLite no Celular?". A mágica é que elas não existem.

---

## 1. A Filosofia Server-less do SQLite
A regra do SQLite é imutável: **O Banco de Dados Inteiro é 1 único Arquivo Físico (`.db`)**.
O motor relacional que processa as consultas não roda num servidor AWS Cloud; ele é compilado junto com as bibliotecas do SQLite no nativo do Celular C do React. Isso gera segurança impossível de penetrar. O arquivo `.db` mora num diretório SandBox (Protegido à sete chaves) que só o App do usuário tem acesso. Nenhum outro app do celular consegue ler isso.

## 2. Tabelas vs Arquivos Texto (Storage)
No Async Storage podíamos socar "Tripas de Texto com E-mail".
No SQLite, precisamos de um martelo muito mais denso chamado de `DDL` (Data Definition Language). Antes de você salvar o E-mail de alguém, você PRECISA, obrigatoriamente, criar um esquema esqueleto sólido:
```sql
CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL
);
```
O "Esquema" significa robustez. Se algum Dev júnior no Frontend tentar injetar um cara sem "nome" (violando o NOT NULL)... o banco Rejeita e cospe o erro protegendo a integridade dos dados locais do cliente.

## 3. O Dilema Operacional: Synchronous vs Asynchronous
Desde a SDK 50/51 do Expo (O ano atual deste guia), a manipulação foi reformulada.
Operações curtas do SQLite podem ser feitas **sincronamente** `db.execSync()`.
Isso significa que, diferente da Camera Nativaz, operações de Insert em bases normais são resolvidas tão rápido (5 milissegundos) que não carecem de travar a thread de processamento JS para abrir menus de alerta de permissão!

**Exemplo Prático: Criando e Inserindo num piscar de olhos**
```tsx
import * as SQLite from 'expo-sqlite';

export default function BancoDeDados() {
  // Abre (ou cria) o arquivo do banco no celular
  const db = SQLite.useSQLiteContext(); 

  const executarCriacao = () => {
    // Roda instantaneamente
    db.execSync(`
      CREATE TABLE IF NOT EXISTS herois (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        nome TEXT NOT NULL
      );
    `);
    
    // Inserindo dados direto
    db.runSync('INSERT INTO herois (nome) VALUES (?)', ['Batman']);
    console.log("Salvo no SQLite com sucesso!");
  };

  return <Button title="Criar Banco e Inserir Batman" onPress={executarCriacao} />;
}
```

👉 **Expanda sua Cabeça Estudando a Documentação Base:** [Expo SQLite Oficial](https://docs.expo.dev/versions/latest/sdk/sqlite/)

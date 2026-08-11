# Apresentação: C.R.U.D - Os Quatro Cavaleiros do Software 🛡️

**Leitura Autônoma de Engenharia Front-End e Banco Local**

Se você dominar isso, metade de todos os empregos em Startups de Produto Mínimo Viável serão compreendidos por você de imediato. Sistemas de Banco no Brasil são todos baseados em CRUD.

---

## 1. O Que É CRUD?
Não importa se você trabalha na NASA ou numa mercearia. Dados comportam-se da mesma maneira física no Universo da programação:
- **C** (Create): O poder de forjar dados novos no banco. No SQL chamamos isso formalmente de instrução `INSERT INTO ...`. (Aprendemos a soltar isso nos botões da aula 14).
- **R** (Read): A fita de leitura. O ato de perguntar ao Cofre "Quem está aí embaixo?". A intrução formal no SQL é a malha `SELECT * FROM...`.
- **U** (Update): Alterar o tempo e a realidade editando informações passadas. No SQL operamos o cirúrgico `UPDATE X SET Y`.
- **D** (Delete): A Marreta Final. Excluir completamente os dados do SSD permanentemente. Operado via `DELETE FROM X`.

**Exemplos Práticos com Expo SQLite (`db.runSync` / `db.getAllSync`):**
```tsx
// [C]REATE: Adicionar novo (Note as Interrogações para proteger contra SQL Injection)
db.runSync('INSERT INTO carros (modelo, ano) VALUES (?, ?)', ['Fusca', 1978]);

// [R]EAD: Ler todos e devolver em formato Array JavaScript
const meusCarros = db.getAllSync('SELECT * FROM carros'); 
// Saída: [{ id: 1, modelo: 'Fusca', ano: 1978 }]

// [U]PDATE: Modificar pelo ID
db.runSync('UPDATE carros SET ano = ? WHERE id = ?', [1979, 1]);

// [D]ELETE: Marretada
db.runSync('DELETE FROM carros WHERE id = ?', [1]);
```

## 2. A Ponte Invisível (O Sincronismo)
Em um projeto sujo feito por amadores, o cara salva uma tarefa no banco usando o botão (CREATE). A resposta bate no SQLite... mas a Tela do React continua a mesma! O cliente precisa fechar e reabrir o app na marra pro dado brotar. Por quê? **Porque o SQLite e a Árvore do React são vizinhos surdos.** O banco de dados só lê. Ele não empurra a resposta ativando o Re-paint da UI. 

**Como solucionar esta deficiência nativa? (O Callback Perfeito)**
Em engenharia boa, assim que a operação do botão CRUD terminar de bater no Hardware (`runSync()`), nós chamaremos NA PRÓXIMA LINHA a nossa velha função Mestra  `verTudo() / carregarItens()` (SELECT) de novo.
Ela vai invadir o Sqlite instantaneamente, captar os Arrays Novinhos que entraram e injetar com o gancho (`useState`) devolta no React, alertando o "Pintor Autista", forçando um Refresh visual imbatível de milissegundos que o cliente mal notará! 

Isso é um Full Loop Perfeito.

👉 **Expanda sua Cabeça Estudando a Documentação Base:** [O Mestre do SQLite Nativo](https://docs.expo.dev/versions/latest/sdk/sqlite/)

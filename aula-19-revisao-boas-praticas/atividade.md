# Atividade 19: Documentação e Boas Práticas (README) 📜

**Objetivo da Atividade:**

Compreender e aplicar o processo de documentação técnica do projeto através do arquivo `README.md`, preparando o aplicativo para análise profissional.

---

## O Desafio: Criando o Manual do seu App

Sua tarefa será confeccionar o arquivo `README.md` base para o seu projeto que será desenvolvido ao final da disciplina.

Este arquivo deve residir na raiz do seu projeto. O documento precisará conter obrigatoriamente as seguintes seções estruturadas e formatadas usando Markdown:

1. **Título do Projeto e Objetivo:** O que o app faz de forma simples e direta (Ex: "Controle Financeiro: App para monitorar despesas diárias.").
2. **Estrutura de Telas:** Explique quantas telas o app possui e o que cada uma exibe (Ex: "Tela Inicial (Listagem)", "Tela de Perfil", etc).
3. **Estrutura de Banco de Dados:** Exiba os comandos DDL (`CREATE TABLE`) que compõem as tabelas utilizadas no aplicativo. Isso mostra a lógica do banco de dados sem precisar expor o código inteiro.
4. **Instruções de Inicialização:** Ensine a pessoa que acessar seu repositório a baixar e rodar o projeto localmente (os comandos de npm install, npm start, etc).

### 💡 Dica de como iniciar:

Crie o arquivo chamado `README.md` na mesma pasta onde fica o seu `package.json`. Utilize a sintaxe do Markdown (sustenidos `#` para títulos, hífens `-` para listas e crases ` ``` ` para blocos de código).

```markdown
# Nome do Seu App 🚀

**Objetivo:** Este aplicativo visa gerenciar as leituras de livros dos usuários.

## 📱 Telas do Aplicativo
- **Tela Inicial:** Lista todos os livros em andamento.
- **Formulário:** Tela de cadastro contendo 3 campos de texto.

## 🗄️ Estrutura do Banco de Dados
Abaixo estão as tabelas principais utilizadas:

\`\`\`sql
CREATE TABLE IF NOT EXISTS livros (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  titulo TEXT NOT NULL,
  status TEXT
);
\`\`\`

## 🛠️ Como Executar o Projeto

Siga os passos para rodar o aplicativo no seu computador:

1. Instale as dependências:
\`\`\`bash
npm install
\`\`\`
2. Inicie o servidor Expo:
\`\`\`bash
npm start
\`\`\`
```

## Entrega:
Você pode tirar um "print" do seu arquivo `README.md` renderizado no VS Code (clicando no botão "Open Preview to the Side"), ou simplesmente copiar e colar o conteúdo em texto bruto na área de entrega da plataforma para avaliarmos a organização.

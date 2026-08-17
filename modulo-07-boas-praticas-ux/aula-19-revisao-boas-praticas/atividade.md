# Atividade 19: Documentação e Boas Práticas (README) 📜

**Sugestão de execução:** Quinzena 24 | **Bimestre:** 4 | **Valendo XP e nota**

---

**Objetivo da Atividade:** compreender e aplicar o processo de documentação técnica do projeto através do arquivo `README.md`, preparando o aplicativo para análise profissional.

> [!NOTE]
> Se você ainda não fez o [Tutorial da Aula 19](tutorial.md), faça primeiro. Esta atividade cobra exatamente os passos de lá — só com uma pitada extra de desafio.

---

## O Desafio: Criando o Manual do seu App

Sua tarefa será confeccionar o arquivo `README.md` base para o seu projeto que será desenvolvido no Trabalho em Grupo (Módulo 8).

Este arquivo deve residir na raiz do seu projeto. O documento precisará conter obrigatoriamente as seguintes seções estruturadas e formatadas usando Markdown:

1. **Título do Projeto e Objetivo:** o que o app faz de forma simples e direta (Ex: "Controle Financeiro: App para monitorar despesas diárias.").
2. **Estrutura de Telas:** explique quantas telas o app possui e o que cada uma exibe (Ex: "Tela Inicial (Listagem)", "Tela de Perfil", etc).
3. **Estrutura de Banco de Dados:** exiba os comandos DDL (`CREATE TABLE`) que compõem as tabelas utilizadas no aplicativo. Isso mostra a lógica do banco de dados sem precisar expor o código inteiro.
4. **Instruções de Inicialização:** ensine a pessoa que acessar seu repositório a baixar e rodar o projeto localmente (os comandos de `npm install`, `npm start`, etc).

> [!TIP]
> **Dica de como iniciar:** crie o arquivo chamado `README.md` na mesma pasta onde fica o seu `package.json`. Utilize a sintaxe do Markdown (sustenidos `#` para títulos, hífens `-` para listas e crases ` ``` ` para blocos de código).

Aqui está um exemplo de como ficar o README:

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

> [!WARNING]
> **Erro comum de iniciante:** esquecer de colocar as instruções de inicialização. Se alguém clonar seu repositório e não souber como rodar, o projeto é inútil. Sempre inclua `npm install` e `npm start`.

---

## Entrega

Você pode tirar um "print" do seu arquivo `README.md` renderizado no VS Code (clicando no botão "Open Preview to the Side"), ou simplesmente copiar e colar o conteúdo em texto bruto na área de entrega da plataforma para avaliarmos a organização.

> [!TIP]
> Para ver o preview do Markdown no VS Code, pressione `Ctrl+Shift+V` (ou `Cmd+Shift+V` no Mac). Assim você vê como o arquivo vai ficar renderizado.

---

## 🎯 Bônus (XP extra): Memoização no código

Se a lista principal do seu app usa `FlatList`, aplique o que viu no tutorial:

1. Envolva o componente de cada item com `React.memo` (só re-renderiza quando as props mudam).
2. Use `useCallback` na função de toque passada para o item (senão o `memo` perde o efeito).
3. Se a tela calcula um total/filtro sobre a lista, guarde com `useMemo`.

**Entrega do bônus:** mencione no README (seção "Estrutura de Telas") que a listagem usa memoização e cite onde.

> [!NOTE]
> A memoização não é obrigatória, mas é XP bônus. Se você não se sentir confortável, pule — o básico do README já vale nota.

---

## Checklist de Entrega

Antes de enviar, confira:

- [ ] O arquivo `README.md` existe na raiz do projeto
- [ ] Tem o título e objetivo do projeto
- [ ] Descreve as telas do aplicativo
- [ ] Mostra a estrutura do banco (CREATE TABLE)
- [ ] Tem instruções de inicialização (npm install / npm start)
- [ ] (Bônus) Menciona memoização na seção de telas

> [!TIP]
> **Ordem sugerida:** leia a Apresentação (5 minutos), siga o Tutorial no computador (30–40 minutos) e por último resolva a Atividade. Não pule o tutorial — a atividade cobra exatamente o que ele ensina.

---

## Como isso se aplica ao seu projeto

Todo app do **Trabalho em Grupo** (Módulo 8) precisa de um README profissional. Este arquivo é a "carta de apresentação" do seu projeto — é o primeiro thing que o professor e os avaliadores leem. Um README bem feito demonstra organização, clareza e responsabilidade técnica. Capricho! 🚀

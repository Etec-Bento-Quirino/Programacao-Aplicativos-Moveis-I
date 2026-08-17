# Apresentação: Cimentando a Relacionalidade 🧱

**Aula 16 — Leitura antes do Tutorial**

---

## 1. O Problema da Tabela Única

Imagina que você tem uma tabela `itens` e coluna `categoria` é um texto livre. O usuário escreve "Alimentação". Outro escreve "Alimentacao" (sem til). Outro escreve "Comida". Um quarto escreve "Alimentos".

Se o dono da loja pedir "me traga tudo que é de alimentação", seu código não consegue reunir essas palavras diferentes. A tabela única **falhou**.

> [!WARNING]
> Dados em texto livre são perigosos. "Alimentação", "Alimentacao", "alimentação" e "ALIMENTAÇÃO" são **4 palavras diferentes** para o computador. Isso quebra buscas, relatórios e filtros!

---

## 2. A Solução: Duas Tabelas Conversando

A resposta dos especialistas em banco de dados é **separar** os dados em tabelas distintas e ligá-las com pontes:

| Tabela `categorias` | Tabela `itens` |
|---|---|
| id: 1, nome: Alimentação | id: 10, nome: Maçã, **id_categoria: 1** |
| id: 2, nome: Roupas | id: 11, nome: Camiseta, **id_categoria: 2** |

A coluna `id_categoria` na tabela `itens` aponta para o `id` da tabela `categorias`. Essa ponte se chama **Foreign Key** (Chave Estrangeira).

> [!IMPORTANT]
> **Foreign Key** (Chave Estrangeira) é uma coluna em uma tabela que referencia a **Primary Key** (Chave Primária) de outra tabela. É a "ponte" que liga duas tabelas — sem ela, elas são ilhas isoladas!

---

## 3. Como Funciona na Prática

O usuário não seleciona o número "1" na tela. Ele vê um seletor com "Alimentação" e "Roupas". O app internamente converte a escolha em número:

1. Usuário seleciona "Alimentação" no seletor
2. O app descobre que "Alimentação" tem `id = 1`
3. O app salva `id_categoria = 1` no banco

A palavra nunca é salva errada. O computador lida com os números.

> [!NOTE]
> É exatamente como o Expo Router funciona: em vez de salvar o texto da URL, ele salva um `id` numérico. É mais seguro e mais rápido!

---

## 4. O Fluxo de Navegação com Banco

O padrão de navegação entre listas e formulários é assim:

1. **Tela 1 (Lista de Categorias):** `SELECT * FROM categorias` → mostra as categorias
2. Usuário clica numa categoria → navega para a Tela 2 enviando o `id` por parâmetro
3. **Tela 2 (Lista de Itens daquela Categoria):** `SELECT * FROM itens WHERE id_categoria = ?` → mostra só os itens daquela categoria

> [!TIP]
> Esse padrão se repete em todos os tipos de projeto: lista de tarefas → detalhe da tarefa; lista de notas → nota específica; lista de gastos → gasto específico. Aproveite bem!

---

## 5. Por Que Isso Importa Para o Seu Projeto?

A integração entre formulário e banco é o coração da **Fase 3** do Trabalho em Grupo. Sem isso, o app não consegue cadastrar dados de verdade. Na próxima aula, vamos aprender a **consultar** dados de duas tabelas ao mesmo tempo com o `JOIN` — mas primeiro, precisamos criar essa ponte com `FOREIGN KEY`.

# Apresentação: Cimentando a Relacionalidade 🧱

**Leitura Autônoma de Arquitetura de Formulários Inteligentes**

Se você tentar inserir um "Sapato" no banco de dados na Tabela "Vestuário", você precisará não de uma, mas de duas tabelas conversando entre si.

---

## 1. O Problema da Tabela Única
Imagina que você tem a Tabela `Itens`. E todo item tem uma coluna `Categoria`.
O usuário escreve no texto `Alimentaçao` (sem til). Outro escreve `Alimentação` (com til). Outro escreve `Comida`. 
Se um dia o dono da loja falar "Me traga tudo o que englobe alimentos", o seu código será incapaz de reunir essas palavras diferentes. A Tabela Única falhou.

## 2. A Chave Estrangeira (The Foreign Key)
Para resolver isso, os Titãs do Banco de dados dividiram o mundo:
- Tabela 1: `categorias` (Id: 1, Nome: Alimentação)
- Tabela 2: `itens` (Id: 10, Nome: Maçã, id_categoria: 1)

O `id_categoria` na tabela Dois aponta para a "Primary Key" (Chave Dourada) da tabela Um! Isso blinda o erro humano. Você exibe as categorias num `Select Picker`, e quando ele envia o formulário apontando pra Alimentação, o Frontend converte internamente para a Foreign Key Numérica Oculta `1`. A palavra nunca salva errada. O computador lida com os números.

## 3. O Fluxo de Router com Banco (As Idas e Vindas)
Nós usamos o React Navigation ou o Expo Router nestes casos de forma tática.
A tela 1 é a Lista_De_Categorias (`SELECT * FROM categorias`).
Quando clica nela, a Tela 2 abre enviando o ID por parâmetro mágico de Rota.
A Tela 2 executa as engrenagens: `SELECT * FROM itens WHERE id_categoria = Parâmetro Recebido Pela Rota`! 

Isso significa que você nunca recarrega todas as coisas de uma vez só! Você carrega conforme a profundidade do caminho!

👉 **Expanda sua Cabeça Estudando a Documentação Base:** [O Mestre do SQLite e Foreign Keys](https://docs.expo.dev/versions/latest/sdk/sqlite/)

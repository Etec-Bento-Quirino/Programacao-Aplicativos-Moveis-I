# Apresentação: Cimentando Variáveis na Memória Flash 💾

**Leitura Autônoma de Engenharia Front-End Avançada**

Se você tentar usar os métodos de leitura de arquivo em txt normal da Web, seu app móvel dará Crash por infração de privacidade e IO. O Celular opera em silos fechados. Cada App tem seu feudo.

---

## 1. O Local Storage do Mundo Mobile
Na Web temos o `localStorage`. No mundo nativo, a Meta(Facebook) forjou a api **AsyncStorage**. Ela é uma camada não-SQL de Arquitetura de "Chave-Valor". O que isso significa? Significa que não existem "Tabelas e Colunas" robustas. Existe apenas um baú (Chave) e o conteúdo (Valor).

Exemplo: Você cria a chave `@meuapp_tema`. E dentro dela você guarda a string `"escuro"`. Toda vez que você pedir pra Plataforma (iOS ou Android) trazer quem está dentro de `@meuapp_tema`, ele devolverá a palavra `"escuro"`.

## 2. O Calcanhar de Aquiles: Tudo ou Nada (String Only)
O Storage não aceita Matrizes (Arrays), não aceita Listas dinâmicas ou Booleanos Puros! Ele é um burro de carga que só carrega Texto Puro Mudo (`Strings`).
Se você tentar mandar: `['Ovo', 'Farinha', 'Leite']`, o sistema colapsa alegando violação de tipo primitivo.

### Como salvar Listas então? (A Secagem JSON)
É aqui que usamos a mágica de compressão de Internet. Se o banco Storage só aceita String (Água Pura em estado Líquido), e nosso Array é feito de Objetos lógicos (Gelo Sólido Complexo), nós derretemos!

- Ao Enviar Pro Storage: Nós acionamos **`JSON.stringify(lista)`**. Isso instantaneamente pega a Lista Mágica Dinâmica JavaScript e esmaga ela secando-a em uma Tripa Imensa de puro TEXTO Bobo. O Storage engole perfeitamente.
- Ao Puxar de Volta (Ler o Storage): Nós ordenamos `await AsyncStorage.getItem`. O banco Cospe a tripa de texto cega. Nós imediatamente jogamos ela dentro de um **`JSON.parse(tripa)`**. O código reconstrói hidrata perfeitamente a matriz array viva de novo na tela!

## 3. O Padrão Guardião (`useEffect` de Novo)
Lembrando da aula 11: Se você quer que o seu App leia as pontuações antigas assim que o usuário ligar o app às 4h da manhã, quem é o melhor encarregado para acionar e gritar pelo Storage? Exato. Nosso Guarda Noturno. Nós colocamos a operação de carregar no `useEffect` Base, e na hora que a tela engatar, a primeira coisa que ela faz na vida é pedir o Storage!

👉 **Expanda sua Cabeça Estudando a Documentação Base:** [O Módulo Async Storage Oficial](https://react-native-async-storage.github.io/async-storage/docs/install/)

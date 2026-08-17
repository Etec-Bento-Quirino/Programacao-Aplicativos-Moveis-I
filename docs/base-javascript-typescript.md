---
title: Base de JavaScript / TypeScript
layout: default
nav_order: 11
---

# Base de JavaScript / TypeScript para PAM I

Este guia é o **ponto de partida de linguagem** para o curso de **Programação de Aplicativos Móveis I**. Ele não substitui o curso de Algoritmos — apenas reúne o mínimo de JavaScript/TypeScript que você usará nas aulas de React Native (Expo) e indica onde praticar cada tópico.

## Pré-requisito de linguagem

O material do curso **Algoritmos e Estruturas de Dados com Node.js** (mesmo professor, ETEC Bento Quirino) é a base ideal:

> **[Algoritmos e Estruturas de Dados com Node.js](https://github.com/Etec-Bento-Quirino/algoritmos-estruturas-dados-node)**

Destaques que preparam você para o PAM I:

- **[Módulo 01 – Fundamentos e Análise de Complexidade](https://github.com/Etec-Bento-Quirino/algoritmos-estruturas-dados-node/tree/main/modulo-01-fundamentos)**: JavaScript ES6+, variáveis, funções e a **notação Big O** — você entende por que escolher `map` em vez de loops aninhados importa.
- **[Módulo 02 – Arrays e Strings](https://github.com/Etec-Bento-Quirino/algoritmos-estruturas-dados-node/tree/main/modulo-02-arrays-strings)**: `map`, `filter`, `reduce`, `slice`, `splice` e manipulação de strings — exatamente as ferramentas usadas em listas (`FlatList`) e formulários do React Native.

> Recomenda-se concluir o **Módulo 01** (e idealmente parte do **Módulo 02**) do curso de Algoritmos **antes** da Aula 03 do PAM I. É opcional, mas torna as aulas de React Native muito mais fluidas.

## O mínimo que você precisa saber

### 1. Variáveis e tipos

Use `const` (não muda) e `let` (muda). Evite `var`.

```js
const nome = 'Maria';   // string
let idade = 17;         // number
const ativo = true;     // boolean
const lista = [1, 2, 3]; // array
const objeto = { nome: 'Maria', idade: 17 }; // objeto
```

### 2. Funções seta (arrow functions)

```js
const somar = (a, b) => a + b;
const aoQuadrado = (x) => x * x;
```

Em React Native você verá isso o tempo todo, inclusive dentro de `renderItem` da `FlatList`:

```tsx
renderItem={({ item }) => <Text>{item.titulo}</Text>}
```

### 3. Arrays: map, filter, reduce

A base do processamento de listas (Aula 05 e projetos):

```js
const numeros = [1, 2, 3, 4];

const dobrados = numeros.map((n) => n * 2);        // [2, 4, 6, 8]
const pares = numeros.filter((n) => n % 2 === 0);  // [2, 4]
const total = numeros.reduce((acc, n) => acc + n, 0); // 10
```

### 4. Desestruturação (destructuring) e spread

```js
const { nome, idade } = objeto;   // extrai propriedades
const lista2 = [...numeros, 5];   // copia e adiciona — imutabilidade
```

Em React Native o destructuring é onipresente — hooks, parâmetros de rotas e props:

```tsx
const { id } = useLocalSearchParams<{ id: string }>();
```

### 5. Assincronismo: async/await e Promises

Recursos do dispositivo (câmera, GPS, notificações) e o SQLite usam funções assíncronas (Aulas 08–10 e 14–17):

```js
async function carregarDados() {
  const resposta = await buscarDoBanco();
  console.log(resposta);
}
```

### 6. TypeScript no React Native (Expo)

Os projetos Expo deste curso usam **TypeScript** (`.tsx`). As diferenças mais comuns em relação ao JavaScript puro:

```tsx
// tipar estado
const [nome, setNome] = useState<string>('');

// tipar parâmetros de props de um componente
type Props = { titulo: string; onPress: () => void };

// tipar parâmetros de rota
const { id } = useLocalSearchParams<{ id: string }>();
```

Não se preocupe: o TypeScript aqui é **brando** — se você domina JS, consegue acompanhar com os exemplos de cada aula.

## Checklist rápido

- [ ] `const`/`let`, arrow functions
- [ ] `map`, `filter`, `reduce`
- [ ] Destructuring e spread
- [ ] `async/await`
- [ ] Types básicos no TS (`string`, `number`, `boolean`, `[]`)

## Links

- [Índice do curso](../README.md)
- [Calendário de aulas](calendario-aulas.md)
- [Guia de erros comuns](GUIA-DE-ERROS-COMUNS.md)

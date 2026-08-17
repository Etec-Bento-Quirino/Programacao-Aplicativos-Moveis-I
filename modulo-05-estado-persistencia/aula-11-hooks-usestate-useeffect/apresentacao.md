# Apresentação: Por que Variáveis Comuns Não Funcionam no React 🧠

**Sugestão de uso:** slides da Aula 11 (leia em voz alta antes do tutorial).

---

## 1. O Problema Silencioso

Imagine que você criou uma variável no JavaScript:

```js
let pontuacao = 0;
pontuacao = 5; // mudou!
```

No navegador, isso funciona. Mas no React Native **não acontece nada na tela**. Por quê?

O React é como um **pintor que desenhou a tela uma vez e foi dormir**. Ele não fica olhando suas variáveis o tempo todo. Se você mudar o valor por baixo dele, ele não sabe — o quadro continua antigo.

> [!NOTE]
> **O React é "preguiçoso de propósito."** Ele só redesenha a tela quando você avisa que algo mudou. Isso é o que chamamos de **renderização** (o pintor redesenhando o quadro).

---

## 2. A Solução: `useState` (O Alarme do Pintor)

Pense no `useState` como um **alarme** que você instala na cabeça do pintor:

1. Você cria uma variável que o React **fica vigiando**.
2. Quando o valor muda, o alarme dispara.
3. O pintor acorda, rasga o quadro antigo e pinta um novo com o valor atualizado.

Isso se chama **re-renderização** — e é a base de tudo no React.

```tsx
import { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function Contador() {
  // useState devolve duas coisas:
  // 1. A variável (para LER)
  // 2. Uma função que MUDA o valor e avisa o React (para ESCREVER)
  const [cliques, setCliques] = useState(0);

  return (
    <View>
      <Text>Você clicou {cliques} vezes!</Text>
      <Button title="Me Aperte" onPress={() => setCliques(cliques + 1)} />
    </View>
  );
}
```

> [!IMPORTANT]
> **Regra de ouro:** nunca altere o estado diretamente (ex.: `cliques = 10`). Sempre use a função de atualização (`setCliques`). Caso contrário, o pintor não fica sabendo e a tela não muda.

### E as listas? Nunca use `.push()`

Se você fizer `minhaLista.push("novo item")`, o React **não redesenha a tela**. O `.push` empilha o item no array, mas o pintor continua dormindo.

A solução é criar uma **cópia nova** do array com o operador *spread* (`...`):

```tsx
setLista([...lista, "Novo Item"]);
```

Isso cria um array novo na memória. O React detecta que a referência mudou e acorda o pintor.

> [!WARNING]
> Errinho clássico de iniciante: `lista.push("x")` depois `setLista(lista)`. Isso não funciona! O React compara referências — se o array é o mesmo objeto, ele não redesenha. Use **sempre** o spread.

---

## 3. `useEffect` (O Guarda Noturno)

Às vezes precisamos executar algo **automaticamente** quando a tela abre — como carregar dados de um banco. Mas se jogarmos isso direto no corpo do componente, o React fica num loop infinito: desenha → puxa dados → desenha de novo → puxa dados de novo…

O **`useEffect`** é o guarda noturno: ele controla **quando** o código roda.

```tsx
import { useEffect, useState } from 'react';

export default function TelaPerfil() {
  const [status, setStatus] = useState("Carregando...");

  // Roda UMA ÚNICA VEZ quando a tela abre
  useEffect(() => {
    setStatus("Dados carregados!");
  }, []); // ← Array vazio = "roda uma vez só"

  return <Text>{status}</Text>;
}
```

> [!TIP]
> **Como lembrar:** `[ ]` vazio = "uma vez". `[variavel]` = "toda vez que `variavel` mudar". É como programar o guarda noturno: ou ele faz uma rondada na abertura, ou fica vigiando uma variável específica.

### Resumo visual

| Situação | O que usar |
|----------|------------|
| Guardar um dado que muda na tela | `useState` |
| Carregar dados quando a tela abre | `useEffect(() => { ... }, [])` |
| Reagir quando uma variável muda | `useEffect(() => { ... }, [variavel])` |

---

> [!NOTE]
> **Curiosidade:** o nome "Hook" (gancho) vem do React — são "ganchos" que você encaixa no componente para conectar lógica a ele. Os dois mais usados são `useState` e `useEffect`. Existem outros, mas esses dois resolvem 90% dos casos.

---

> [!TIP]
> Para se aprofundar, consulte a [documentação oficial do React sobre Hooks](https://react.dev/reference/react). Lá tem exemplos interativos que mostram exatamente como o React redesenha a tela.

---

## Como isso se aplica ao seu projeto

`useState` e `useEffect` estão em **todas** as telas do seu projeto:

| Situação no projeto | Hook usado |
|---------------------|------------|
| Guardar a lista de itens que aparece na tela | `useState` |
| Marcar uma tarefa como concluída | `useState` |
| Carregar dados do banco assim que a tela abre | `useEffect(() => {}, [])` |
| Filtrar itens quando o usuário muda o filtro | `useEffect(() => {}, [filtro])` |

A partir da Aula 14, o `useEffect` com `[]` será o lugar onde você criará tabelas SQLite e carregará os primeiros dados.

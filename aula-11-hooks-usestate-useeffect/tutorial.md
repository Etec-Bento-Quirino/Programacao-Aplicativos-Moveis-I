# Aula 11 – Entendendo os "Hooks" (`useState` e `useEffect`)

**Sugestão de execução:** quinzena 11.
**Base tecnológica:** React Hooks, Virtual DOM, Lógica de Renderização.

---

## 1. O Problema das Variáveis Comuns

No JavaScript tradicional, se você quiser guardar um texto ou um número, você cria uma variável simples:
```js
let luzLigada = false;
luzLigada = true; // Mudou para verdadeiro!
```

Mas no React Native, nós temos um problema! Se você criar uma variável comum e mudar o valor dela quando o usuário clica num botão, **a tela NÃO muda!**
O React (que desenha o seu App) desenhou a tela uma vez lá no começo. Ele não fica olhando para as suas variáveis o tempo todo. Ele desenhou e foi dormir.

## 2. A Solução: O `useState` (A Variável com Alarme)

Para avisar o React que algo mudou e ele precisa acordar e **redesenhar a tela**, nós usamos uma invenção genial chamada **Hook** (Gancho). O mais famoso é o `useState`.

> **💡 A Analogia do Pintor:**
> Imagine que a sua tela é um quadro que um pintor acabou de pintar. A variável comum é como trocar a roupa da modelo sem avisar o pintor... o quadro já está pronto, ele não vai pintar de novo.
> O `useState` é um Alarme! Ele troca a roupa da modelo e dispara um BERRANTE! O Pintor se assusta, olha para a modelo de novo, e pinta a tela inteira rapidão com a nova roupa.

Veja como chamamos ele no código (TSX):

```tsx
import { useState } from 'react';

// O useState SEMPRE devolve duas coisas numa gaveta (Array):
// 1. A variável em si (para ler)
// 2. A função "Alarme" que altera a variável e grita pro Pintor (para escrever)

const [luzLigada, setLuzLigada] = useState<boolean>(false);

const apertarInterruptor = () => {
   // A TELA INTEIRA É REDESENHADA ASSIM QUE VOCÊ USA O ALARME (o 'set'):
   setLuzLigada(true); 
}
```

## 3. O Irmão Vigia: O `useEffect`

Se o `useState` é o pintor, o `useEffect` é o **Guarda Noturno** com uma lista de tarefas.
O `useEffect` (Efeito Colateral) permite rodar fragmentos de código de forma separada, apenas em momentos chaves.

> **💡 A Analogia do Guarda Noturno:**
> Imagine que você contratou um vigia, e deu uma prancheta de ordens pra ele:
> Ele observa o que está dentro do `[ ]` (array de dependências).
> - Se você deixar vazio `[ ]`, o Guarda roda a função **uma única vez** assim que o aplicativo abre as portas.
> - Se você colocar a variável da luz dentro, ex: `[ luzLigada ]`, o Guarda roda a função sempre que alguém alterar a luz!

```tsx
import { useEffect, useState } from 'react';

export default function Home() {
  const [acessos, setAcessos] = useState(0);

  // Exemplo A: Roda uma única vez (Ideal para abrir banco de dados nativos, pedir permissão de câmera, etc).
  useEffect(() => {
    alert("Bem-vindo! O App acabou de abrir.");
  }, []); // <-- Array vazia! Só pisca ao ligar o app.

  // Exemplo B: Roda sempre que a variável dos 'acessos' for alterada via Alarme.
  useEffect(() => {
    if (acessos > 5) {
      alert("Você clicou muitas vezes!");
    }
  }, [ acessos ]); // <-- O guarda fica vigiando os acessos.

  return ( ... );
}
```

Resumindo para novatos: **Nunca** tente atualizar a tela visualmente usando variáveis normais como `let` e `var`. Use o poder mágico do `useState` para re-renderizar, e do `useEffect` para criar automatizações de background!

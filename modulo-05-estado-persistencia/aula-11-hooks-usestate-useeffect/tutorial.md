# Tutorial: Construindo um Contador com useState e useEffect

**Sugestão de execução:** Quinzena 14 | **Bimestre:** 3

> [!NOTE]
> **O que você vai aprender hoje:**
> - Por que variáveis comuns (`let`, `var`) **não** atualizam a tela no React Native
> - Usar `useState` para criar variáveis "reativas" que redesenham a tela quando mudam
> - Usar `useEffect` para executar código em momentos específicos (ao abrir a tela, ao mudar um valor)
> - A diferença entre `useEffect(() => {}, [])` (executa 1×) e `useEffect(() => {}, [variavel])` (executa sempre que `variavel` muda)
>
> **Pré-requisitos:** [Aula 10](../../modulo-04-recursos-dispositivo/aula-10-notificacoes-locais-expo-notifications/README.md) — recursos do dispositivo.

---

Vamos usar uma analogia que vai guiar esta aula inteira: **você é o chefe de cozinha, e o React é um pintor que desenha sua tela**. O pintor desenha uma vez e vai dormir. Para acordar ele, você precisa de um alarme — e esse alarme se chama **Hook**.

---

## Passo 1: Entendendo o Problema

No JavaScript normal, você cria uma variável assim:

```js
let pontuacao = 0;
pontuacao = 5; // Mudou!
```

Funciona? Funciona. Mas no React Native **a tela não muda**. O React desenhou a tela uma vez no início e foi dormir. Ele não fica olhando suas variáveis o tempo todo.

> [!WARNING]
> Se você tentar usar `let` ou `var` para atualizar a tela, nada acontece. O botão vai ser clicado, o valor vai mudar internamente, mas o usuário não vai ver nada. Isso é o erro nº 1 de iniciantes em React.

---

## Passo 2: Criando o Contador com `useState`

O **`useState`** é um **Hook** — uma ferramenta que "pendura" lógica dentro de um componente. Ele devolve duas coisas:

1. **A variável** (para ler o valor atual)
2. **Uma função** (para mudar o valor e avisar o React)

Crie um arquivo novo chamado `Contador.tsx` (ou edite o `App.tsx` do seu projeto):

```tsx
import { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function Contador() {
  // useState(0) = valor inicial é 0
  // [cliques, setCliques] = variável + função de atualização
  const [cliques, setCliques] = useState(0);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 32 }}>Você clicou {cliques} vezes!</Text>
      <Button
        title="Me Aperte!"
        onPress={() => setCliques(cliques + 1)}
      />
    </View>
  );
}
```

> [!TIP]
> `useState(0)` significa: "comece com zero". Quando você chama `setCliques(1)`, o React acorda, rasga a tela antiga e pinta uma nova mostrando "1". É como se o pintor ouvisse o alarme e repintasse o quadro.

### O que você deve ver

Aperte o botão "Me Aperte!" várias vezes. A cada clique, o número sobe:

```
Você clicou 0 vezes!    ← antes de clicar
Você clicou 1 vezes!    ← primeiro clique
Você clicou 2 vezes!    ← segundo clique
```

> [!NOTE]
> **Por que `setCliques` e não `cliques = ...`?** Porque o React só redesenha quando você usa a função de atualização. É como o alarme do pintor — se você só trocar a roupa da modelo sem disparar o alarme, o pintor não pinta de novo.

---

## Passo 3: O erro comum — o `.push()` que ninguém avisa

Agora vamos para o erro que quase todo mundo comete. Tente adicionar itens a uma lista assim:

```tsx
// ⚠️ ERRADO — não funciona no React!
const adicionarItem = () => {
  lista.push("Item novo");
  setLista(lista);
};
```

> [!CAUTION]
> O `.push()` empilha o item no array, mas **não cria um objeto novo**. O React compara a referência na memória — como o array é o mesmo, ele acha que nada mudou e **não redesenha**. É o pintor olhando o mesmo quadro e achando que está atualizado.

A solução é criar uma **cópia nova** usando o operador *spread* (`...`):

```tsx
const adicionarItem = () => {
  setLista([...lista, "Item novo"]); // ✅ CORRETO
};
```

O `...` copia todos os itens velhos e cola o novo. Agora o array é um objeto diferente na memória — o React detecta a mudança e redesenha.

> [!IMPORTANT]
> Regra de ouro para listas no React: **nunca mutate o array original**. Sempre crie um novo com spread (`...`).

---

## Passo 4: Usando `useEffect` (o Guarda Noturno)

Imagine que você quer mostrar "Bem-vindo!" assim que a tela abre. O `useEffect` com array vazio `[]` faz exatamente isso — roda **uma única vez** quando o componente é carregado.

Adicione ao seu arquivo:

```tsx
import { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

export default function Contador() {
  const [cliques, setCliques] = useState(0);
  const [mensagem, setMensagem] = useState("");

  // Roda UMA ÚNICA VEZ quando a tela abre
  useEffect(() => {
    setMensagem("Bem-vindo ao seu contador!");
  }, []); // ← Array vazio = uma vez só

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>{mensagem}</Text>
      <Text style={{ fontSize: 32 }}>Você clicou {cliques} vezes!</Text>
      <Button
        title="Me Aperte!"
        onPress={() => setCliques(cliques + 1)}
      />
    </View>
  );
}
```

> [!TIP]
> `[]` vazio = "roda uma vez quando a tela abre". É perfeito para carregar dados de um banco, pedir permissão de câmera ou mostrar uma mensagem de boas-vindas.

---

## Passo 5: `useEffect` com dependência (o Guarda Vigia)

E se você quiser que algo aconteça **toda vez que uma variável mudar**? Coloque a variável dentro do array:

```tsx
useEffect(() => {
  if (cliques > 5) {
    alert("Cuidado! Você já clicou mais de 5 vezes!");
  }
}, [cliques]); // ← vigia a variável "cliques"
```

> [!NOTE]
> Agora o guarda noturno fica de olho em `cliques`. Toda vez que o valor muda, ele roda o código de novo. Se `cliques` não mudar, ele dorme.

### Resumo rápido

| O que você escreve | Quando roda |
|---------------------|-------------|
| `useEffect(() => {}, [])` | Uma única vez, ao carregar a tela |
| `useEffect(() => {}, [var])` | Toda vez que `var` muda |
| `useEffect(() => {}, [a, b])` | Toda vez que `a` ou `b` mudam |

---

## Passo 6: Rodando o app

1. Salve o arquivo.
2. No terminal, rode `npm start` (se já não estiver rodando).
3. Escaneie o QR Code com o Expo Go.
4. Clique no botão várias vezes e veja a mágica acontecer.

> [!WARNING]
> Se a tela não atualizar ao clicar, verifique se você está usando `setCliques(...)` e não `cliques = ...`. O React só redesenha quando a função de atualização é chamada.

---

## Checklist da Aula 11

Marque cada item quando conseguir fazer:

- [ ] Criei um componente com `useState` que guarda um número
- [ ] O contador sobe a cada clique do botão
- [ ] Entendi por que `.push()` não funciona no React
- [ ] Usei `useEffect(() => {}, [])` para rodar código na abertura da tela
- [ ] Usei `useEffect(() => {}, [variavel])` para reagir a mudanças
- [ ] O app roda sem erros no Expo Go

> [!NOTE]
> Se algum item ficou sem marcar, volte no passo correspondente. Não siga em frente com pendências — a Aula 12 usa tudo isso.

---

## Como isso se aplica ao seu projeto

`useState` e `useEffect` estão em **todas** as telas do seu projeto:

| Situação no projeto | Hook usado |
|---------------------|------------|
| Guardar a lista de itens na tela | `useState` |
| Marcar uma tarefa como concluída | `useState` |
| Carregar dados do banco ao abrir a tela | `useEffect(() => {}, [])` |
| Filtrar itens quando o filtro muda | `useEffect(() => {}, [filtro])` |

A partir da Aula 14, o `useEffect` com `[]` será o local padrão onde você criará tabelas SQLite e carregará os primeiros dados. Vejo você na Aula 12! 🚀

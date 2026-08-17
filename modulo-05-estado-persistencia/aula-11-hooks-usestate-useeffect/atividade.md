# Atividade 11: Domine o useState e o useEffect 🧠

**Sugestão de execução:** Quinzena 14 | **Bimestre:** 3 | **Valendo XP e nota**

---

**Objetivo da Atividade:** provar que você entende como o React redesenha a tela — e que `useState` e `useEffect` são os responsáveis por isso.

> [!NOTE]
> Se você ainda não fez o [Tutorial da Aula 11](tutorial.md), faça primeiro. Esta atividade cobra exatamente os passos de lá — só com um desafio extra.

---

## O Desafio: Lista que Cresce com Input

Crie um componente com as seguintes funcionalidades:

1. Um **`useState`** com uma lista (array) que começa vazia.
2. Um **`useEffect`** com array vazio `[]` que, ao carregar a tela, preenche a lista com 2 itens iniciais (ex.: "Item 1" e "Item 2").
3. Um campo de texto (`TextInput`) e um botão ("Adicionar").
4. Ao pressionar o botão, adicione o texto digitado à lista usando o operador **spread** (`...`). Em seguida, limpe o campo de texto.

### Dica de como iniciar

```tsx
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function App() {
  const [lista, setLista] = useState([]);
  const [novoItem, setNovoItem] = useState('');

  // 1. Carrega dados na inicialização
  useEffect(() => {
    setLista(["Item 1", "Item 2"]);
  }, []); // Array vazio = roda 1 vez ao carregar

  const adicionarItem = () => {
    // 2. Spread para criar cópia + novo item
    setLista([...lista, novoItem]);
    // 3. Limpa o input
    setNovoItem('');
  };

  return (
    <View style={{ flex: 1, padding: 50 }}>
      {/* Construa a interface: TextInput, Button e .map() na lista */}
    </View>
  );
}
```

> [!TIP]
> Use `.map()` para percorrer a lista e exibir cada item num `<Text>`. Lembre-se: a cada item do `.map()`, passe uma `key` única (o `index` serve para-listas simples).

> [!WARNING]
> Não use `lista.push(novoItem)` — isso não funciona no React. Use **sempre** `setLista([...lista, novoItem])`.

---

## Entrega

Rode a aplicação no Expo Go. Verifique se:

- Os 2 itens iniciais aparecem ao carregar a tela.
- O campo de texto limpa após adicionar.
- A tela atualiza instantaneamente a cada novo item.

Tire uma captura de tela (ou grave um pequeno vídeo) comprovando o funcionamento e envie na plataforma.

---

## Checklist de Entrega

- [ ] A lista começa com 2 itens ao abrir a tela (`useEffect` com `[]`)
- [ ] O botão adiciona o item digitado à lista (usando spread)
- [ ] O campo de texto é limpo após a adição
- [ ] A tela redesenha sozinha a cada clique (sem `.push()`)
- [ ] Print ou vídeo comprovando o funcionamento

---

## Como isso se aplica ao seu projeto

Todo app do Trabalho em Grupo vai ter listas — de tarefas, notas, gastos, itens… O padrão `useState` + `useEffect` + spread é a base de **qualquer** tela que mostre dados dinâmicos. Domine aqui, e as aulas seguintes ficam muito mais fáceis! 🚀

# Atividade 11: Gestão de Estados e Re-renderização 🎨

**Objetivo da Atividade:**

Compreender o fluxo de atualização de tela no React Native. A interface só é atualizada se você fornecer um novo estado através da função `set` correspondente, sem modificar diretamente o array ou objeto anterior.

---

## O Desafio: Atualização de Listas

Você criará um componente autônomo focado unicamente na lógica de re-renderização e do ciclo de vida, utilizando o VS Code.

1. No seu componente, crie um **`useEffect`** com um array de dependências vazio `[]`. Configure-o para preencher o seu estado inicial (um `useState` contendo uma lista) com 2 itens (Ex: "Item 1" e "Item 2") assim que o componente for carregado pela primeira vez.
2. Adicione na interface um botão ("Adicionar") e um campo de entrada de texto (`TextInput`).
3. Ao pressionar o botão, a função responsável deve adicionar o texto que foi digitado à lista. Para isso, utilize a sintaxe de espalhamento (spread operator: `...lista_antiga`) criando um novo array contendo os dados anteriores mais o novo item. Em seguida, limpe o valor do campo de texto (`''`).

### 💡 Dica de como iniciar:

No React, você nunca deve alterar um estado diretamente (como `lista.push(novoItem)`). Para adicionar um novo item, use a função do `useState` e desestruture a lista antiga com `...`.

```tsx
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';

export default function App() {
  const [lista, setLista] = useState([]);
  const [novoItem, setNovoItem] = useState('');

  // 1. O useEffect carrega dados na inicialização
  useEffect(() => {
    setLista(["Item 1", "Item 2"]);
  }, []); // O array vazio [] significa que roda apenas 1 vez ao carregar a tela

  const adicionarItem = () => {
    // 2. Usando o Spread Operator (...) para criar uma cópia e adicionar o novo item
    setLista([...lista, novoItem]);
    
    // 3. Limpando o input
    setNovoItem('');
  };

  return (
    <View style={{ flex: 1, padding: 50 }}>
      {/* Construa a interface aqui: TextInputs, Button e faça um .map() na lista para exibir cada texto na tela */}
    </View>
  );
}
```

## Entrega:
Rode a aplicação no seu emulador ou via Expo Go. Verifique se os itens aparecem corretamente e se a tela atualiza na hora em que o novo item é adicionado à lista. Tire capturas de tela (ou grave um pequeno vídeo) comprovando o funcionamento e envie na plataforma.

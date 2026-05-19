# Atividade 13: Persistência de Dados Básica 🗡️

**Objetivo da Atividade:**

Provar que o armazenamento no dispositivo (via `AsyncStorage`) funciona mesmo após o aplicativo ser completamente fechado pelo sistema operacional.

---

## O Desafio: A Lista Que Não Morre

Você deve montar uma tela com um botão e um input para adicionar itens em uma lista, e salvar essa lista no `AsyncStorage` (transformando os dados usando `JSON.stringify()`).

O teste de ouro para persistência é fechar o app:
1. Abra o App no Expo Go e adicione alguns itens na sua lista.
2. **Saia e Feche o Expo Go Totalmente!** (Abra a lista de multitarefas do seu celular e feche o aplicativo deslizando para cima/lado).
3. Abra novamente o Expo Go e carregue seu projeto.
4. A tela deve iniciar com a lista exatamente como você a deixou antes de fechar, resgatada através de um `useEffect` na inicialização.

### 💡 Dica de como iniciar:

Use o `useEffect` vazio `[]` para resgatar os dados do `AsyncStorage` usando `getItem` e `JSON.parse`. Sempre que modificar a lista, use `setItem` com `JSON.stringify`.

```tsx
import React, { useState, useEffect } from 'react';
import { View, Text, Button, AsyncStorage } from 'react-native';

export default function App() {
  const [lista, setLista] = useState([]);

  // 1. Carrega os dados na inicialização
  useEffect(() => {
    const carregarDados = async () => {
      const dadosSalvos = await AsyncStorage.getItem('minha_lista');
      if (dadosSalvos) {
        setLista(JSON.parse(dadosSalvos));
      }
    };
    carregarDados();
  }, []);

  // 2. Adiciona item e salva
  const adicionarItem = async () => {
    const novaLista = [...lista, "Novo Item " + (lista.length + 1)];
    setLista(novaLista);
    await AsyncStorage.setItem('minha_lista', JSON.stringify(novaLista));
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {lista.map((item, index) => <Text key={index}>{item}</Text>)}
      <Button title="Adicionar Item" onPress={adicionarItem} />
    </View>
  );
}
```

## Entrega:
Faça o teste de fechar totalmente o aplicativo e reabri-lo. Tire uma captura de tela (print) comprovando que a lista permaneceu salva após a inicialização. Adicione um breve comentário dizendo que testou o fechamento forçado e envie na plataforma.

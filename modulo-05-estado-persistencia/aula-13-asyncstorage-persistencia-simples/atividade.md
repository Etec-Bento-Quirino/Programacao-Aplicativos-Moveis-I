# Atividade 13: A Lista Que Não Morre (AsyncStorage) 🗡️

**Sugestão de execução:** Quinzena 16 | **Bimestre:** 3 | **Valendo XP e nota**

---

**Objetivo da Atividade:** provar que o armazenamento no dispositivo funciona mesmo após o aplicativo ser completamente fechado pelo sistema operacional.

> [!NOTE]
> Se você ainda não fez o [Tutorial da Aula 13](tutorial.md), faça primeiro. Esta atividade cobra exatamente os passos de lá — só com um desafio extra.

---

## O Desafio: O Teste de Fechamento

Crie uma tela com um botão e um input para adicionar itens em uma lista, e salve essa lista no `AsyncStorage` (usando `JSON.stringify`).

O teste de ouro é o **fechamento**:

1. Abra o app no Expo Go e adicione alguns itens.
2. **Feche o Expo Go totalmente** (abra o multitarefa e deslize para cima).
3. Reabra o Expo Go e carregue seu projeto.
4. A tela deve iniciar com a lista exatamente como você a deixou.

### Dica de como iniciar

Use o `useEffect` vazio `[]` para resgatar os dados com `getItem` e `JSON.parse`. Sempre que modificar a lista, use `setItem` com `JSON.stringify`.

```tsx
import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

> [!TIP]
> Não esqueça de importar `AsyncStorage` de `@react-native-async-storage/async-storage`. Se esquecer, o app vai travar com um erro de "módulo não encontrado".

> [!WARNING]
> Se o `JSON.parse` receber `null` (primeira vez que o app roda), ele vai dar erro. Por isso, sempre verifique `if (dadosSalvos !== null)` antes de fazer o parse.

---

## Entrega

Faça o teste de fechar totalmente o aplicativo e reabri-lo. Tire uma captura de tela (print) comprovando que a lista permaneceu salva após a inicialização. Adicione um breve comentário dizendo que testou o fechamento forçado e envie na plataforma.

---

## Checklist de Entrega

- [ ] A tela tem input + botão para adicionar itens
- [ ] A lista é salva no AsyncStorage com `JSON.stringify`
- [ ] A lista é carregada com `JSON.parse` ao abrir a tela
- [ ] Fechei o Expo Go completamente e reabri — os dados persistiram
- [ ] Print comprovando a persistência
- [ ] Comentário sobre o teste de fechamento

---

## Como isso se aplica ao seu projeto

O AsyncStorage é a primeira camada de persistência do seu app. Na Fase 2 do Trabalho em Grupo, ele guarda os dados enquanto o usuário usa o app. Na Fase 3 (SQLite), você migra os dados principais — mas o AsyncStorage continua útil para preferências simples (tema, idioma, nome). É como ter um caderno pequeno para anotações rápidas e um arquivo robusto para documentos importantes. 🚀

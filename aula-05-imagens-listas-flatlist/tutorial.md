# Aula 05 – Lidando com Renderização Extrema (FlatList e Modais)

**Sugestão de execução:** Quinzena 5 | **Bimestre:** 1
**Base tecnológica:** FlatList, Modais Flutuantes, Array e RenderItem.

> **Pré-requisitos:** [Aula 04](../aula-04-texto-botoes/README.md) — botões e eventos de toque funcionando.
>
> **O que você vai aprender:**
> - Usar `FlatList` para renderizar listas longas com alta performance (sem travar o app)
> - Entender por que `FlatList` é melhor que `ScrollView` para listas de dados
> - Criar um `Modal` que flutua sobre a tela e exibe uma lista de itens
> - Passar funções via `props` para comunicação entre componentes pai e filho

---

---

## 1. O Componente Modal
Nós não usamos o comando de CSS `display:none` no código React. Ao invés disso, usamos uma Regra Lógica (Se Estado é Verdadeiro, mostra, senão, apaga o trecho em memória).
Porém para Menus Flutuantes ou Gavetas que sobrepõem tudo com Z-Index infinito, a Tag nativa `<Modal>` é a ideal!

Crie uma gaveta mágica engolidora de itens no arquivo `components/EmojiPicker.tsx`:
```tsx
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import { PropsWithChildren } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

// Usamos PropsWithChildren para dizer que esse Modal pode ABRAÇAR (engolir) coisas dentro dele!
type Props = PropsWithChildren<{ isVisible: boolean; onClose: () => void; }>;

export default function EmojiPicker({ isVisible, children, onClose }: Props) {
  return (
    // animationType='slide' faz ele deslizar perfeitamente ao invocar isVisible = true
    <Modal animationType="slide" transparent={true} visible={isVisible}> {/* 👈 MÁGICA: visible=true faz o Modal brotar! */}
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Menu Especial</Text>
          <Pressable onPress={onClose}><MaterialIcons name="close" color="#fff" size={22} /></Pressable> {/* 👈 Botão de Fechar escondendo o estado! */}
        </View>
        {children} {/* 👈 Aqui ele vomitará a FlatList que vamos enfiar na barriga dele logo abaixo */}
      </View>
    </Modal>
  );
}
//... Adicione um style absoluto colocando ele bottom: 0 ...
```

## 2. A Incrível FlatList (Gerenciando RAM com Listas)
> **O que é FlatList?** Diferente do navegador Web (`Scrollview`) que segura fotos gerando lag até o celular não ter mais memória RAM, a `FlatList` joga fora as fotos velhas que saíram da borda da tela e substitui reutilizando os pixels vivos para os próximos arquivos da fila!

1. Na sua pasta `assets/images`, garanta que haja as 6 figuras de emojis (`emoji1.png` etc).
2. Crie a sua classe Lista em `components/EmojiList.tsx`:

```tsx
import { useState } from 'react';
import { StyleSheet, FlatList, Platform, Pressable } from 'react-native';
import { Image, type ImageSource } from 'expo-image';

// Tipagem das props: onSelect recebe a imagem escolhida; onCloseModal fecha o Modal pai
type EmojiListProps = {
  onSelect: (image: ImageSource) => void;
  onCloseModal: () => void;
};

export default function EmojiList({ onSelect, onCloseModal }: EmojiListProps) {
  // Os Emoticons baseados nos arquivos do seu projeto.
  const [emoji] = useState<ImageSource[]>([
    require("../assets/images/emoji1.png"),
    require("../assets/images/emoji2.png"),
    require("../assets/images/emoji3.png")
  ]);

  return (
    <FlatList horizontal showsHorizontalScrollIndicator={Platform.OS === 'web'}
      data={emoji} contentContainerStyle={styles.listContainer}
      // keyExtractor é a forma correta de fornecer chave única para cada item da FlatList:
      keyExtractor={(_, index) => String(index)}
      // renderItem é executado para cada item do array "data":
      renderItem={({ item }) => (
        <Pressable onPress={() => { onSelect(item); onCloseModal(); }}>
          <Image source={item} style={styles.image} />
        </Pressable>
      )}
    />
  );
}
```

Integre a `EmojiList` dentro do `EmojiPicker` na sua `index.tsx` e o Modal funcionará com listas de alta performance!

---

## Como isso se aplica ao seu projeto

A `FlatList` aprendida nesta aula é o componente central da **Fase 1** do seu projeto. É com ela que você exibirá os dados na tela principal: uma `FlatList` dos registros do seu tema (cada item mostrando o resumo, ex.: título + status) e, se fizer sentido, uma segunda lista na tela de detalhe.

O `Modal` visto nesta aula também é útil para filtros rápidos e menus de opções sem sair da tela.

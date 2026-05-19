# Aula 05 – Lidando com Renderização Extrema (FlatList e Modais)

**Sugestão de execução:** quinzena 5.
**Base tecnológica:** FlatList, Modais Flutuantes, Array e RenderItem.

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

export default function EmojiList({ onSelect, onCloseModal }) {
  // Os Emoticons baseados nos arquivos do seu projeto.
  const [emoji] = useState<ImageSource[]>([
    require("../assets/images/emoji1.png"),
    require("../assets/images/emoji2.png"),
    require("../assets/images/emoji3.png")
  ]);

  return (
    <FlatList horizontal showsHorizontalScrollIndicator={Platform.OS === 'web'}
      data={emoji} contentContainerStyle={styles.listContainer} // 👈 data={emoji}: É aqui que você entrega o Array cru!
      
      // renderItem é um Looping! Para cada foto do "data={emoji}" ele cospe esse desenho:
      renderItem={({ item, index }) => ( // 👈 "item" é a foto atual sendo lida da memória RAM
        <Pressable onPress={() => { onSelect(item); onCloseModal(); }}> {/* 👈 Ação: Seleciona foto e já fecha a gaveta */}
          <Image source={item} key={index} style={styles.image} />
        </Pressable>
      )}
    />
  );
}
```

Mestre a Flatlist engolida na barriga da `<EmojiPicker>` na sua ROOT `Index.tsx` e o Modal funcionará com listas de altíssima performance!

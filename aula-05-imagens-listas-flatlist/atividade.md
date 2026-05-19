# Atividade 5: Trabalhando com FlatList e Imagens 🖼️

**Objetivo da Atividade:**

Implementar uma lista de imagens renderizada eficientemente utilizando o componente `FlatList`, permitindo a interação do usuário na seleção de um item específico.

---

## O Desafio: Lista Interativa

Crie um componente que contenha uma `FlatList` na posição horizontal exibindo uma lista de emojis ou imagens curtas. 

1. Garanta que cada item da sua lista possa ser tocado (clicado).
2. O botão (`Pressable` ou `TouchableOpacity`) que envolve cada item deve chamar uma função `onSelect` passando a imagem clicada como parâmetro.

### 💡 Dica de como iniciar:

A `FlatList` requer duas propriedades principais: `data` (o array de itens) e `renderItem` (como cada item deve ser desenhado). Use o componente `Pressable` para detectar toques e o `<Image>` para exibir a foto.

```tsx
import { FlatList, Pressable, Image, StyleSheet, View, Alert } from 'react-native';

export default function EmojiList({ onSelect }) {
  // Lista de dados fictícios com arquivos locais ou URLs
  const emojis = [
    { id: '1', imagem: require('../assets/images/emoji1.png') },
    { id: '2', imagem: require('../assets/images/emoji2.png') },
  ];

  return (
    <FlatList
      horizontal={true} // Define a rolagem para a horizontal
      showsHorizontalScrollIndicator={false}
      data={emojis}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <Pressable onPress={() => onSelect(item.imagem)}>
            <Image source={item.imagem} style={styles.image} />
          </Pressable>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  image: { width: 100, height: 100, marginHorizontal: 10 },
});
```

*(Lembre-se de passar uma função para o prop `onSelect` onde esse componente é invocado para que ele exiba um Alert ou mude o estado do app).*

## Entrega:
Tire um print do aplicativo (no emulador ou Expo Go) que mostre a lista de imagens com rolagem horizontal aparecendo corretamente na tela inferior. Envie a imagem na plataforma.

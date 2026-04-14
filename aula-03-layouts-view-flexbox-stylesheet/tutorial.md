# Aula 03 – O Poder da Performance (Componentes e Flexbox)

**Sugestão de execução:** quinzena 3.
**Base tecnológica:** Image, Flexbox, Componentização, Props.

---

## Parte 1: O Conceito de Componentização
A melhor prática no React é NÃO criar telas gigantes com mil linhas. Em vez disso, transformamos pedaços isolados de código visual em **Componentes Reutilizáveis**.

Nesta Aula, vamos construir o componente que exibe a foto principal que sofrerá edições.
Por motivos de performance absurda local no iOS/Android, evitamos a tag nativa `<Image>` do react-native clássico e usamos o plugin mágico `expo-image`.

1. Crie uma pasta chamada `components` na raiz do seu projeto (mesma hierarquia da pasta `app`).
2. Crie um arquivo `ImageViewer.tsx` dentro dela.

```tsx
// components/ImageViewer.tsx
import { StyleSheet } from 'react-native';
import { Image, type ImageSource } from 'expo-image'; // ⚠️ Importação poderosa do Expo!

// As PROPS (Propriedades) são variáveis que este componente exige do Pai.
type Props = {
  imgSource: ImageSource; // Obriga quem usar a fornecer uma Imagem.
};

export default function ImageViewer({ imgSource }: Props) {
  return <Image source={imgSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: { width: 320, height: 440, borderRadius: 18 },
});
```

---

## Parte 2: Injetando no Layout e o Flexbox

No React Native, **TUDO** é automaticamente Flexbox alinhado por Colunas (diferente da Web, que alinha em Linhas).
Vamos usar isso para empurrar nossa foto no meio da Home.

Baixe uma foto qualquer na web ou utilize as da aula e chame-a de `background-image.png` colocando-a na sua pasta `/assets/images`.

Em seguida, edite o `app/(tabs)/index.tsx`:

```tsx
// app/(tabs)/index.tsx
import { View, StyleSheet } from 'react-native';
import ImageViewer from '@/components/ImageViewer'; // O símbolo '@' é um atalho configurado para a raiz do app!

// Require chama e codifica o arquivo fisicamente em disco para memória:
const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Container novo para a imagem! */}
      <View style={styles.imageContainer}>
        {/* Renderiza injetando a propridade declarada! */}
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#25292e', alignItems: 'center' },
  imageContainer: { flex: 1, paddingTop: 28 }, // Empurra o flexbox um pouquinho para baixo
});
```

---

## Checklist da Aula 03
- [ ] Criação de um Componente customizado com `<Image>`.
- [ ] Entendimento prático de *Props* (variáveis injetáveis no componente Pai).
- [ ] O `Flex: 1` faz a *View* container esticar ocupando 100% da proporção local restante.

# Aula 03 – O Poder da Performance (Componentes e Flexbox)

**Sugestão de execução:** Quinzena 3 | **Bimestre:** 1
**Base tecnológica:** Image, Flexbox, Componentização, Props.

> **Pré-requisitos:** [Aula 02](../../modulo-01-fundamentos-ambiente/aula-02-ambiente-react-native-expo/README.md) — app Expo criado e rodando no celular.
>
> **O que você vai aprender:**
> - Criar componentes reutilizáveis em arquivos separados (pasta `components/`)
> - Passar dados para componentes via `props`
> - Usar `Flexbox` para posicionar elementos na tela
> - Entender a diferença entre `alignItems` (eixo horizontal) e `justifyContent` (eixo vertical)

---

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

## Parte 3: Estilos por plataforma com o módulo `Platform`

Android e iOS têm detalhes visuais diferentes: a barra de status (relógio, bateria) tem alturas distintas, e por isso o mesmo código pode precisar de ajustes finos em cada sistema. O React Native oferece o módulo **`Platform`** para você detectar o sistema e aplicar estilos diferentes na mesma tela.

```tsx
// components/ImageViewer.tsx
import { Platform, StyleSheet } from 'react-native';
import { Image, type ImageSource } from 'expo-image';

type Props = {
  imgSource: ImageSource;
};

export default function ImageViewer({ imgSource }: Props) {
  return <Image source={imgSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
    // iOS tem uma barra de status mais alta; empurra a imagem para baixo só lá
    marginTop: Platform.OS === 'ios' ? 40 : 20,
  },
});
```

O `Platform.OS` retorna `'ios'`, `'android'` ou `'web'`. É ótimo para:

- ajustar **espaçamentos** de topo (`paddingTop`, `marginTop`) por causa da barra de status;
- usar **sombras diferentes** (`shadow*` no iOS, `elevation` no Android);
- escolher **texto alternativo** por sistema (`Platform.select({ ios: 'Feito no iPhone', android: 'Feito no Android' })`).

> 💡 **Prática:** em um projeto simples, rode o mesmo app no celular Android e no emulador iOS (ou simule trocando o valor) e observe a diferença que o `Platform.OS` faz no `marginTop`.

---

## Checklist da Aula 03
- [ ] Criação de um Componente customizado com `<Image>`.
- [ ] Entendimento prático de *Props* (variáveis injetáveis no componente Pai).
- [ ] O `Flex: 1` faz a *View* container esticar ocupando 100% da proporção local restante.
- [ ] *(Bônus)* Ajuste de estilos por plataforma com o módulo `Platform`.

---

## Como isso se aplica ao seu projeto

A estrutura de componentes que você aprendeu aqui (pasta `components/`, `props`, `StyleSheet`) é o padrão que usará para criar os blocos visuais do **seu** projeto. Crie componentes para o que se repete nas telas do seu tema:
- um componente para a **linha da lista** (ex.: `ItemRegistro.tsx` mostrando o resumo do registro);
- um componente para o **cartão de destaque** da tela inicial;
- um componente para os **campos da tela de detalhe**.

O Flexbox com `alignItems` e `justifyContent` centralizará botões e textos em todas essas telas.

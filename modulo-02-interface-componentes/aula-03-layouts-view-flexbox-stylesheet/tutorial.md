# Tutorial: O Esqueleto da Tela (Componentes, Flexbox e StyleSheet)

**Sugestão de execução:** Quinzena 3 | **Bimestre:** 1
**Base tecnológica:** View, StyleSheet.create, Flexbox, Props, expo-image, Platform.

> [!NOTE]
> **O que você vai aprender hoje:**
> - O que é um **componente** e por que dividimos a tela em peças pequenas
> - Criar um componente próprio dentro da pasta `components/`
> - Enviar informações para dentro de um componente usando **props**
> - Posicionar a foto do seu app com o **Flexbox** (a "gravidade" do React Native)
>
> **Pré-requisitos:** [Aula 02](../../modulo-01-fundamentos-ambiente/aula-02-ambiente-react-native-expo/README.md) — o app **StickerSmash** criado e rodando no Expo Go.

---

Imagine a cozinha da Aula 02: tudo funcionando, mas com a foto solta na bancada. Hoje você vai aprender a organizar essa cozinha: vamos criar **gavetas** (componentes) para cada coisa e aprender a **gravidade** que coloca cada ingrediente no lugar certo da bancada (o Flexbox).

> [!TIP]
> Se o seu StickerSmash não está mais rodando, abra o terminal dentro da pasta do projeto e digite `npx expo start`. Depois é só escanear o QR Code com o Expo Go, como fizemos na [Aula 02](../../modulo-01-fundamentos-ambiente/aula-02-ambiente-react-native-expo/tutorial.md). O Metro vai responder com o QR Code pronto para usar.

---

## Passo 1: Entendendo o que é um componente

Quando um app cresce, ninguém escreve a tela inteira num único arquivo gigante — ficaria impossível de ler e de consertar. A solução é **recortar a tela em pedaços pequenos**, e cada pedaço desenha uma parte só da interface.

> [!IMPORTANT]
> **Componente** é um pedaço de código que desenha uma parte da tela (uma foto, um botão, uma linha de lista) e pode ser **reutilizado** várias vezes. Pense num **carimbo**: você desenha o carimbo uma única vez e pode usá-lo em quantos papéis quiser.

Vamos criar o primeiro carimbo: um componente que mostra a foto principal do seu app.

### Passo 1.1: Criar a pasta `components`

1. No VS Code, abra a pasta do projeto **StickerSmash**.
2. Clique com o botão direito na raiz do projeto (a pasta que contém as pastas `app` e `assets`) e escolha **New Folder**.
3. Dê o nome `components` e pressione Enter.

A sua estrutura deve ficar assim:

```
StickerSmash/
├── app/
├── assets/
├── components/   ← a pasta nova
├── package.json
└── ...
```

> [!NOTE]
> A pasta `components` fica **ao lado** das pastas `app` e `assets` — é nela que vamos guardar todos os nossos "carimbos". O nome no plural é o padrão usado em projetos React Native.

### Passo 1.2: Criar o arquivo `ImageViewer.tsx`

1. Clique com o botão direito na pasta `components` e escolha **New File**.
2. Nomeie o arquivo como `ImageViewer.tsx` e pressione Enter.

> [!NOTE]
> A extensão `.tsx` significa que o arquivo contém **TypeScript + JSX**. O **JSX** é a "linguagem de desenho" do React: é dentro dele que escrevemos as tags que viram componentes na tela (`<View>`, `<Text>`, `<Image>`…). Não se assuste: o TypeScript usado aqui é suave, como explica o [guia de linguagem](../../docs/base-javascript-typescript.md).

3. Cole o código abaixo dentro do arquivo:

```tsx
// components/ImageViewer.tsx
import { StyleSheet } from 'react-native';
import { Image, type ImageSource } from 'expo-image'; // importação poderosa do Expo!

// As PROPS (Propriedades) são as informações que este componente
// exige de quem o usar (o "Pai").
type Props = {
  imgSource: ImageSource; // quem usar deve obrigatoriamente dar uma imagem
};

export default function ImageViewer({ imgSource }: Props) {
  return <Image source={imgSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: { width: 320, height: 440, borderRadius: 18 },
});
```

**O que esse código faz, bloco por bloco:**

- `import { StyleSheet } from 'react-native';` — traz a ferramenta de estilos do React Native. É como buscar a forma de bolo na gaveta.
- `import { Image, type ImageSource } from 'expo-image';` — traz o componente de imagem do **Expo**.

  > [!TIP]
  > Por que não usar o `<Image>` do `react-native`? O componente `expo-image` carrega as fotos de forma mais leve e rápida, economizando a memória do celular. Para um app que vai mostrar muitas imagens, isso faz diferença real de performance.

- `type Props = { imgSource: ImageSource };` — aqui declaramos as **props** do carimbo.

  > [!IMPORTANT]
  > **Prop** (abreviação de *propriedade*) é uma informação que o "Pai" (a tela que usa o componente) entrega para o "filho" (o componente). É como entregar uma **tinta** ao pintor: o componente diz *"eu só sei pintar se me derem a cor"*. Quem usar o `ImageViewer` é **obrigado** a fornecer o `imgSource`.

- `export default function ImageViewer({ imgSource }: Props)` — cria o componente chamado `ImageViewer`. O `{ imgSource }` entre chaves é a **desestruturação**: pega a prop `imgSource` e guarda numa variável de mesmo nome (revisite no [guia de JS/TS](../../docs/base-javascript-typescript.md)). Já o `export default` é o "envio" do carimbo: permite que outro arquivo o importe.
- `return <Image source={imgSource} style={styles.image} />;` — desenha a imagem na tela, usando a prop recebida como `source` e o estilo `styles.image`.
- `const styles = StyleSheet.create({...})` — cria os estilos: **320** de largura, **440** de altura e cantos **arredondados** (`borderRadius: 18`).

> [!WARNING]
> Reparou no `: ImageSource`? Isso é TypeScript. Se você esquecer de passar a prop `imgSource` na hora de usar o componente, o VS Code vai marcar o erro com um **sublinhado vermelho** antes mesmo de você rodar o app. O TypeScript é um "professor ao seu lado" que avisa os erros na hora.

---

## Passo 2: Colocando a foto na tela (e a mágica do `require`)

O nosso carimbo está pronto, mas ainda não foi usado. Vamos encaixá-lo dentro da tela principal.

### Passo 2.1: Baixar a imagem de fundo

1. Baixe uma foto qualquer (um personagem, uma paisagem) ou use uma imagem disponibilizada pela aula.
2. Salve-a na pasta `assets/images` do seu projeto com o nome **`background-image.png`**.

```
StickerSmash/
├── app/
├── assets/
│   └── images/
│       └── background-image.png   ← a imagem nova
├── components/
└── ...
```

### Passo 2.2: Abrir o arquivo da tela principal

Abra o arquivo `app/(tabs)/index.tsx` do seu projeto.

> [!NOTE]
> A pasta `(tabs)` do app criado na Aula 02 guarda as telas das abas. O `index.tsx` é a **tela inicial** — a primeira que aparece quando o app abre.

**Apague** todo o conteúdo do arquivo e cole o código abaixo:

```tsx
// app/(tabs)/index.tsx
import { View, StyleSheet } from 'react-native';
import ImageViewer from '@/components/ImageViewer'; // o símbolo '@' é um atalho configurado para a raiz do app!

// require() carrega o arquivo físico da imagem do disco para a memória:
const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  return (
    <View style={styles.container}>
      {/* Uma "gaveta" nova só para a imagem! */}
      <View style={styles.imageContainer}>
        {/* Usamos o carimbo, entregando a imagem na prop */}
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#25292e', alignItems: 'center' },
  imageContainer: { flex: 1, paddingTop: 28 }, // empurra a foto um pouco para baixo
});
```

**O que esse código faz, linha por linha:**

- `import ImageViewer from '@/components/ImageViewer';` — importa o carimbo que criamos. O símbolo **`@`** é um atalho configurado no projeto que aponta para a **raiz** do app (equivale a escrever o caminho completo desde o início).
- `const PlaceholderImage = require('@/assets/images/background-image.png');` — o **`require()`** é o jeito de carregar um arquivo físico da pasta para a memória. Depois disso, `PlaceholderImage` é a imagem pronta para usar.

  > [!WARNING]
  > O caminho do `require` é **sensível a maiúsculas/minúsculas** e precisa do nome exato do arquivo. Se digitar errado, o app para numa **tela vermelha de erro** que diz mais ou menos *"Unable to resolve module '@/assets/images/background-image.png'"*. Confira o nome do arquivo dentro de `assets/images` e digite de novo.

- `<View style={styles.container}>` — a **`View`** é a "Tupperware" do React Native: a caixa universal que agrupa e organiza outras coisas na tela. Tudo que você quiser guardar junto precisa de uma caixa.
- `<View style={styles.imageContainer}>` — uma segunda caixa dentro da primeira, só para a imagem. É como um organizador dentro da geladeira: a foto fica numa gaveta separada.
- `<ImageViewer imgSource={PlaceholderImage} />` — usamos o carimbo! Repare que entregamos a prop: `imgSource={PlaceholderImage}`.

**O que você deve VER:** ao salvar (`Ctrl+S`), o Metro recarrega sozinho e o celular mostra a foto grande, de cantos arredondados, sobre o fundo escuro (`#25292e`), levemente abaixo do topo.

---

## Passo 3: O Flexbox — a gravidade do React Native

A foto apareceu? Ótimo. Mas o que faz ela ficar **nesse** lugar? É o **Flexbox** — o motor de "gravidade" que posiciona tudo no React Native.

> [!IMPORTANT]
> Diferente da web (que alinha as coisas em linhas), no React Native **tudo** é empilhado por **colunas** automaticamente. Pense em **panquecas num prato**: a primeira fica em cima e a próxima cai para baixo. Para mudar isso, trocamos o `flexDirection`.

### Passo 3.1: O `flex: 1` — o chiclete que estica

No estilo `container` escrevemos `flex: 1`. Isso manda a View: **estique-se o máximo possível**, até encostar nas bordas da tela, expulsando o ar vazio.

> [!IMPORTANT]
> O `flex: 1` na View principal faz ela esticar **feito chiclete** e ocupar toda a tela. Sem ele, a caixa encolhe até o tamanho do conteúdo e o resto da tela fica sem "dono". É a primeira coisa que você digita quando quer preencher a tela.

### Passo 3.2: Os dois comandantes da gravidade

Com a caixa esticada, você ganha dois comandos para posicionar o conteúdo:

| Propriedade | O que controla | Exemplo |
|-------------|----------------|---------|
| **`justifyContent`** | O **eixo principal** (no padrão, o vertical — de cima para baixo) | `'center'` centraliza na vertical |
| **`alignItems`** | O **eixo cruzado** (no padrão, o horizontal — de lado a lado) | `'center'` centraliza na horizontal |

Pense no `justifyContent` como o **mestre do rio**: ele decide como as coisas flutuam pelo caminho da água (no padrão, descendo). E no `alignItems` como o **paredão lateral**: ele encosta o conteúdo na esquerda (`flex-start`), na direita (`flex-end`) ou no centro (`center`).

> [!TIP]
> Vamos fazer o teste da gravidade! No `styles.container`, troque `alignItems: 'center'` por `alignItems: 'flex-end'` e salve. A foto vai **pular para a direita**. Agora adicione `justifyContent: 'center'` ao `container` e veja a foto descer para o meio da tela. Terminou de brincar? **Reverta** para o código original antes de continuar.

> [!NOTE]
> Quer brincar à vontade? A documentação oficial do React Native tem um **playground interativo** de Flexbox — dá para trocar `flex-start` por `center` e ver o resultado na hora: [Documentação de Layout com Flexbox](https://reactnative.dev/docs/flexbox).

---

## Passo 4: Estilos diferentes por sistema (o módulo `Platform`)

Android e iOS têm detalhes visuais diferentes. Por exemplo, a **barra de status** (onde ficam o relógio e a bateria) é mais alta no iPhone do que no Android. Por isso, o mesmo código pode precisar de ajustes finos em cada sistema.

O React Native resolve isso com o módulo **`Platform`**.

### Passo 4.1: Ajustando a imagem por sistema

Abra `components/ImageViewer.tsx` e substitua todo o conteúdo pelo código abaixo:

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
    // iOS tem a barra de status mais alta; empurra a imagem mais para baixo só lá
    marginTop: Platform.OS === 'ios' ? 40 : 20,
  },
});
```

**O que mudou:**

- `import { Platform, StyleSheet } from 'react-native';` — importamos o módulo `Platform`.
- `marginTop: Platform.OS === 'ios' ? 40 : 20` — esta linha pergunta: *"estou rodando no iOS?"*. Se sim, usa `40`; se não (Android), usa `20`. É o **operador ternário**: uma "pergunta em uma linha" (o `?` separa a pergunta da resposta verdadeira, e o `:` da resposta falsa).

**O que você deve VER:** o app continua igual — mas no iOS a foto fica um pouco mais abaixo do topo do que no Android, acompanhando a altura da barra de status.

> [!TIP]
> O `Platform.OS` devolve um texto: `'ios'`, `'android'` ou `'web'`. Ele também serve para sombras diferentes (`shadow*` no iOS, `elevation` no Android) e até para trocar textos por sistema:
> ```tsx
> Platform.select({ ios: 'Feito no iPhone', android: 'Feito no Android' })
> ```

> [!NOTE]
> Não tem iPhone em casa? Sem problema: rode no Android e **simule** a troca — troque `Platform.OS === 'ios' ? 40 : 20` por `40`, veja o efeito, e depois devolva o código original. Ou teste num emulador iOS, se tiver um Mac.

---

## Checklist da Aula 03

Marque cada item quando conseguir fazer:

- [ ] Criei a pasta `components/` na raiz do projeto
- [ ] Criei o arquivo `components/ImageViewer.tsx` com o carimbo da imagem
- [ ] Entendi que **props** são as informações que o "Pai" entrega ao componente
- [ ] Baixei `background-image.png` para `assets/images`
- [ ] Usei o `<ImageViewer imgSource={...} />` dentro da tela `index.tsx`
- [ ] Entendi que `flex: 1` faz a View esticar e ocupar a tela
- [ ] Entendi a diferença entre `justifyContent` (eixo principal) e `alignItems` (eixo cruzado)
- [ ] *(Bônus)* Ajustei a imagem por sistema com `Platform.OS`

> [!WARNING]
> Se a foto não apareceu, confira nesta ordem: 1) o nome exato do arquivo no `require`; 2) a prop `imgSource` entregue ao componente; 3) se o `ImageViewer` está dentro de uma `View`. Se o erro persistir, consulte o [Guia de Erros Comuns](../../docs/GUIA-DE-ERROS-COMUNS.md).

---

## Como isso se aplica ao seu projeto

A estrutura que você montou aqui — pasta `components/`, props, `StyleSheet` e Flexbox — é o mesmo padrão que você vai usar para criar os blocos visuais do **seu** projeto final. Algumas ideias:

- um componente para a **linha da lista** (ex.: `ItemRegistro.tsx`, mostrando o resumo de cada registro);
- um componente para o **cartão de destaque** da tela inicial;
- um componente para os **campos da tela de detalhe**.

O Flexbox com `alignItems` e `justifyContent` vai centralizar botões, textos e fotos em todas essas telas — sem depender de medidas fixas que quebram em telas de tamanhos diferentes.

Na próxima aula, o carimbo de botões que você vai criar ganha vida: **toques**! 🚀

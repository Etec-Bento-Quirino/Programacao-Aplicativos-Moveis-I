# Tutorial: O Gavetão de Emojis (FlatList e Modais)

**Sugestão de execução:** Quinzena 5 | **Bimestre:** 1
**Base tecnológica:** FlatList, Modal Flutuante, Array e renderItem.

> [!NOTE]
> **O que você vai aprender hoje:**
> - Por que a `FlatList` é melhor que a `ScrollView` para listas de dados
> - Usar a `FlatList` para renderizar listas longas com alta performance (sem travar o app)
> - Criar um `Modal` que flutua sobre a tela e exibe uma lista de itens
> - Passar funções via `props` para comunicação entre pai e filho
>
> **Pré-requisitos:** [Aula 04](../aula-04-texto-botoes/README.md) — botões e eventos de toque funcionando.

---

Na Aula 03 você organizou a cozinha. Na Aula 04 você instalou a campainha. Hoje você vai construir o **gavetão de emojis**: um painel que sobe do chão da tela e mostra uma fileira de figurinhas — sem travar o celular, mesmo que existam milhares delas. A mágica se chama **`FlatList`**.

> [!TIP]
> Rode `npx expo start` na pasta do projeto e deixe o QR Code pronto no Expo Go antes de começar.

---

## Passo 1: Entendendo o problema (ScrollView vs FlatList)

Antes do código, o conceito mais importante da aula:

> [!IMPORTANT]
> A **`ScrollView`** carrega **todos** os itens da lista de uma vez — ela segura cada foto na memória, mesmo as invisíveis abaixo da borda da tela. Com milhares de itens, o celular fica sem RAM e o app trava. A **`FlatList`** é esperta: carrega **só o que cabe na tela**, e quando um item sai da borda ela o **recicla** (destrói a "casca" e reaproveita os pixels para o próximo item da fila). Resultado: lista lisinha, de 60 a 120 quadros por segundo.

Pense assim: a `ScrollView` é a pessoa que carrega o estoque inteiro do mercado na mochila de uma vez. A `FlatList` carrega só o que está na prateleira e repõe conforme você anda pelo corredor.

> [!NOTE]
> A `FlatList` trabalha com **três props**: `data` (o array de itens), `renderItem` (uma função que desenha cada linha) e `keyExtractor` (que diz qual campo identifica cada item de forma única). Você já viu o exemplo das meias na [Apresentação](apresentacao.md) — agora vamos usar na prática.

---

## Passo 2: O componente `Modal` — a gaveta que sobe do chão

No CSS da web, escondemos coisas com `display: none`. No React Native, a lógica é com **estado** (true/false). Mas para **menus flutuantes** ou gavetas que sobrepõem tudo, a tag nativa **`<Modal>`** é a ideal.

### Passo 2.1: Criar o arquivo `EmojiPicker.tsx`

1. Dentro da pasta `components`, crie o arquivo **`EmojiPicker.tsx`**.
2. Cole o código abaixo:

```tsx
// components/EmojiPicker.tsx
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import { PropsWithChildren } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

// PropsWithChildren diz que este Modal pode ABRAÇAR (engolir) coisas dentro dele!
type Props = PropsWithChildren<{ isVisible: boolean; onClose: () => void; }>;

export default function EmojiPicker({ isVisible, children, onClose }: Props) {
  return (
    // animationType='slide' faz ele deslizar ao invocar isVisible = true
    <Modal animationType="slide" transparent={true} visible={isVisible}> {/* 👈 MÁGICA: visible=true faz o Modal brotar! */}
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Menu Especial</Text>
          <Pressable onPress={onClose}><MaterialIcons name="close" color="#fff" size={22} /></Pressable> {/* 👈 Botão de Fechar */}
        </View>
        {children} {/* 👈 Aqui ele "vomitará" a FlatList que vamos enfiar na barriga dele logo abaixo */}
      </View>
    </Modal>
  );
}
//... Adicione um style absoluto colocando ele bottom: 0 ...
```

**O que esse código faz, bloco por bloco:**

- `type Props = PropsWithChildren<{ isVisible: boolean; onClose: () => void; }>` — declara as props:
  - `isVisible`: um `boolean` (`true` abre, `false` fecha);
  - `onClose`: uma **função** que o Pai manda para fechar o modal (o botão ✕ só chama essa função);
  - `PropsWithChildren`: um "presente" do TypeScript que permite o modal **abraçar** outros componentes dentro dele — é o `children`.

  > [!IMPORTANT]
  > **`children`** é uma prop superespecial: tudo o que você colocar **entre as tags** `<EmojiPicker> ... </EmojiPicker>` chega aqui dentro. É como o "recheio" de um sanduíche: o pão (o modal) fica pronto e o recheio (os emojis) pode variar.

- `<Modal animationType="slide" transparent={true} visible={isVisible}>` — a gaveta em si. O `visible={isVisible}` é o interruptor: `true` faz a gaveta brotar; `false` a guarda de volta.
- `onPress={onClose}` — o botão ✕ (ícone `close` do MaterialIcons) chama a função de fechar que o Pai forneceu.

> [!TIP]
> O comentário no final do código diz "adicione um style absoluto colocando ele `bottom: 0`". Na integração do Passo 4 vamos definir o `modalContent` com `justifyContent: 'flex-end'` — assim a gaveta fica "colada" no rodapé, como se subisse do chão.

> [!WARNING]
> Não esqueça de definir o `StyleSheet` com o `modalContent`, `titleContainer` e `title` no final do arquivo. Um componente que usa `styles.algo` sem definir esse estilo dá erro de "undefined style" — o app roda, mas sem o visual esperado. No Passo 4 mostramos a sugestão completa.

---

## Passo 3: O componente `EmojiList` — a FlatList horizontal

Agora o recheio da gaveta: a lista de emojis.

### Passo 3.1: Garantir as imagens dos emojis

Na pasta `assets/images` do seu projeto, garanta que existem as figuras dos emojis: `emoji1.png`, `emoji2.png`, `emoji3.png` (e mais, se quiser).

### Passo 3.2: Criar o arquivo `EmojiList.tsx`

1. Na pasta `components`, crie o arquivo **`EmojiList.tsx`**.
2. Cole o código abaixo:

```tsx
// components/EmojiList.tsx
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

**O que esse código faz, bloco por bloco:**

- `const [emoji] = useState<ImageSource[]>([...])` — guarda o **array** de emojis. O `useState` é o jeito do React guardar dados que podem mudar; aqui ele só guarda a lista inicial. Os `require(...)` carregam cada arquivo de imagem da pasta `assets/images`.

  > [!NOTE]
  > `useState` é um **hook** — uma "ferramenta de memória" do React que você pode visitar com calma nas próximas aulas (Módulo 05). Por enquanto, saiba que `const [emoji] = useState([...])` cria a variável `emoji` com o conteúdo entre colchetes.

- `<FlatList horizontal ...>` — a lista rolável **na horizontal**. O `horizontal` faz os emojis deslizarem de lado a lado, em vez de cima para baixo.
- `data={emoji}` — a prop `data` recebe o **array** que alimenta a lista.
- `keyExtractor={(_, index) => String(index)}` — a **chave única** de cada item. Aqui usamos a posição (`index`) do item no array, transformada em texto com `String(...)`.
- `renderItem={({ item }) => (...)}` — a função que **desenha cada linha**. Para cada item do array, ela devolve um `<Pressable>` com a imagem dentro.
- `onPress={() => { onSelect(item); onCloseModal(); }}` — ao tocar em um emoji: chama `onSelect(item)` (avisa o Pai qual foi escolhido) e em seguida `onCloseModal()` (fecha a gaveta). **Duas ações em sequência**, dentro das chaves `{ }`.

  > [!IMPORTANT]
  > Repare no padrão: a `EmojiList` **não decide** o que fazer com o emoji escolhido. Ela apenas **avisa o Pai** através das funções `onSelect` e `onCloseModal`. Essa é a **comunicação entre pai e filho**: o filho entrega a informação e o pai decide. Você verá isso em praticamente todas as telas do curso.

> [!TIP]
> Para deixar os emojis com um espaço entre eles, defina o `styles.image` (ex.: `{ width: 100, height: 100, marginHorizontal: 8 }`) e o `styles.listContainer` com um `padding`. O `contentContainerStyle` é o "estilo do conteúdo interno" da lista.

---

## Passo 4: Integrando tudo na tela principal

As duas peças estão prontas: a gaveta (`EmojiPicker`) e o recheio (`EmojiList`). Agora vamos enfiar o recheio na gaveta e a gaveta na tela.

### Passo 4.1: Integrar no `index.tsx`

No arquivo `app/(tabs)/index.tsx`, importe os dois componentes e adicione o `EmojiPicker` envolvendo o `EmojiList`:

```tsx
// app/(tabs)/index.tsx
import EmojiPicker from '@/components/EmojiPicker';
import EmojiList from '@/components/EmojiList';

// Dentro da View principal, adicione:
<EmojiPicker isVisible={true} onClose={() => {}}>
  <EmojiList
    onSelect={(imagem) => console.log('Emoji escolhido:', imagem)}
    onCloseModal={() => {}}
  />
</EmojiPicker>
```

**O que esse código faz:**

- `<EmojiPicker isVisible={true} onClose={() => {}}>` — abre a gaveta já **visível** (por enquanto fixamos `true` para testar). O `onClose` recebe uma função vazia (`() => {}`) — na Aula 06 vamos trocar isso por um estado de verdade.
- `<EmojiList onSelect={...} onCloseModal={...}>` — o **recheio** dentro da gaveta. O `onSelect` recebe uma função que, por enquanto, só imprime no terminal (`console.log`).

E no final do arquivo, adicione os estilos da gaveta no `StyleSheet`:

```tsx
const styles = StyleSheet.create({
  // ... (seus estilos existentes) ...
  modalContent: {
    height: '25%',
    width: '100%',
    backgroundColor: '#25292e',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
    padding: 20,
  },
  titleContainer: {
    height: '16%',
    backgroundColor: '#464C55',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
});
```

> [!TIP]
> O `position: 'absolute'` + `bottom: 0` é o "grude" que cola a gaveta no rodapé da tela — foi isso que o comentário do `EmojiPicker` pediu no Passo 2. Junto com o `transparent={true}` do Modal, o fundo fica escurecido e a gaveta "sobe do chão".

**O que você deve VER:** uma gaveta com fundo escuro "colada" na parte de baixo da tela, com o título "Menu Especial" e uma fileira horizontal de emojis. Arraste o dedo para os lados: a lista rola lisinha. Toque num emoji e veja no terminal do Metro: `Emoji escolhido: ...`. E toque no ✕: a gaveta fecha (por enquanto a função está vazia, então ela só "se esconde" se você trocar `isVisible`).

> [!WARNING]
> A lista **não rola**? Confira: 1) a prop `horizontal` está na `FlatList`? 2) os emojis realmente existem na pasta `assets/images` com os nomes `emoji1.png`, `emoji2.png`, `emoji3.png`? Se um `require` falhar, o app para numa tela vermelha de erro com o nome do arquivo que não foi encontrado.

> [!WARNING]
> Os emojis estão **enormes** ou **colados**? Ajuste o `styles.image` do `EmojiList` (largura/altura e `marginHorizontal`). Sem um tamanho definido, as imagens podem estourar a largura da tela.

---

## Checklist da Aula 05

Marque cada item quando conseguir fazer:

- [ ] Entendi por que a `FlatList` é melhor que a `ScrollView` para listas grandes
- [ ] Entendi as props `data`, `renderItem` e `keyExtractor` da FlatList
- [ ] Criei o `components/EmojiPicker.tsx` com `<Modal>` e a prop `visible`
- [ ] Criei o `components/EmojiList.tsx` com a `FlatList horizontal`
- [ ] Enfiei o `EmojiList` dentro do `EmojiPicker` na tela `index.tsx`
- [ ] A gaveta aparece colada no rodapé, com os emojis rolando na horizontal
- [ ] Toquei num emoji e vi o `console.log` no Metro
- [ ] Entendi que `onSelect` e `onCloseModal` são funções passadas do "Pai" para o "filho"

> [!WARNING]
> Se algo não funcionou, releia o passo correspondente. Lembra-se do [Guia de Erros Comuns](../../docs/GUIA-DE-ERROS-COMUNS.md) para os erros mais frequentes de caminho de arquivo e import?

---

## Como isso se aplica ao seu projeto

A `FlatList` aprendida nesta aula é o componente central da **Fase 1** do seu projeto. É com ela que você exibirá os dados na tela principal: uma `FlatList` dos registros do seu tema (cada item mostrando o resumo, ex.: título + status) e, se fizer sentido, uma segunda lista na tela de detalhe.

O `Modal` visto nesta aula também é útil para **filtros rápidos** e **menus de opções** sem sair da tela — um comportamento que seu app vai usar bastante. Na próxima aula, você vai aprender a **navegar** entre telas e a deixar tudo isso mais organizado! 🚀

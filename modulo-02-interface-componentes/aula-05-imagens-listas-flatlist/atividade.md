# Atividade 5: Trabalhando com FlatList e Imagens 🖼️

**Sugestão de execução:** Quinzena 5 | **Bimestre:** 1 | **Valendo XP e nota**

---

**Objetivo da Atividade:** implementar uma lista de imagens renderizada com eficiência usando o componente **`FlatList`**, permitindo que o usuário **toque** em um item e o app **saiba qual** foi escolhido.

> [!NOTE]
> Se você ainda não fez o [Tutorial da Aula 05](tutorial.md), faça primeiro. Esta atividade cobra exatamente os conceitos de lá — `data`, `renderItem`, `keyExtractor` e a comunicação por `onSelect`.

---

## O Desafio: Lista Interativa

Crie um componente que contenha uma `FlatList` na posição **horizontal**, exibindo uma lista de emojis ou imagens curtas.

1. Garanta que **cada item** da lista possa ser tocado (clicado).
2. O botão (`Pressable` ou `TouchableOpacity`) que envolve cada item deve chamar uma função **`onSelect`** passando a imagem clicada como parâmetro.

**O que você deve VER:** uma fileira de imagens deslizando horizontalmente na tela; ao tocar em uma, ela é identificada — por exemplo, com um `Alert` mostrando o nome do emoji escolhido.

### 💡 Dica de como iniciar

A `FlatList` requer duas propriedades principais: **`data`** (o array de itens) e **`renderItem`** (como cada item deve ser desenhado). Use o componente **`Pressable`** para detectar toques e o **`<Image>`** para exibir a foto.

```tsx
import { FlatList, Pressable, Image, StyleSheet, View, Alert } from 'react-native';

export default function EmojiList({ onSelect }) {
  // Lista de dados ficticios com arquivos locais ou URLs
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

> [!IMPORTANT]
> Repare no `keyExtractor={(item) => item.id}`: cada item precisa de uma **chave unica**. O `id` da nossa lista faz esse papel — e como o **numero do cracha**: a `FlatList` usa essa chave para saber qual item e qual, sem repetir nem confundir. No seu projeto, os registros viraom com um `id` de verdade vindo do banco.

> [!TIP]
> Nao esqueca de **passar uma funcao para o prop `onSelect`** onde esse componente for usado. Ela e quem decide o que fazer com a escolha — ex.: exibir um `Alert` com o nome do emoji ou guardar a imagem escolhida no estado do app. Sem essa funcao, o toque nao tem "dono".

> [!WARNING]
> Se as imagens nao aparecerem, confira se os arquivos (`emoji1.png`, `emoji2.png`) existem **de verdade** na pasta `assets/images`, com o nome exato usado no `require`. Caminho errado = tela vermelha de erro.

---

## 🎯 Bonus (XP extra): Identificando o item tocado

Faca a lista mostrar **qual** item foi tocado, de forma unica:

1. Adicione um terceiro emoji a lista (`emoji3.png`).
2. No `Alert` (ou no `console.log`) da funcao `onSelect`, inclua tambem o **`id`** do item escolhido.

**O que voce deve VER:** um aviso diferente para cada emoji, provando que o app consegue diferenciar os dados — nao e um clique "cega".

> [!TIP]
> Para passar o `id` junto, voce pode usar `onSelect(item.id, item.imagem)` ou um objeto com os dois valores. O importante e o app reconhecer **qual** item foi tocado.

---

## Questao Teorica

Responda **com suas palavras** (em um arquivo `.txt` ou direto na plataforma):

1. **Qual a diferenca entre `ScrollView` e `FlatList` para renderizar listas?**
2. **Por que a `FlatList` precisa de um `keyExtractor`? O que acontece se dois itens tiverem a mesma chave?**

> [!TIP]
> Nao precisa copiar o texto dos slides. Responder com suas palavras (mesmo com erros de portugues) mostra que voce entendeu — e vale mais nota do que uma copia perfeita. 😉

---

## Checklist de Entrega

Antes de enviar, confira:

- [ ] `FlatList` horizontal com imagens aparecendo corretamente
- [ ] Cada item envolto em `Pressable` com `onPress`
- [ ] Funcao `onSelect` recebendo a imagem clicada (e o `id`, no bonus)
- [ ] Print mostrando a lista rolando e o item identificado ao toque
- [ ] *(Bonus)* Tres emojis, cada um com aviso unico ao toque
- [ ] Respostas das 2 questoes teoricas

---

## Como isso se aplica ao seu projeto

A `FlatList` desta atividade e **exatamente** a tela principal do seu Trabalho em Grupo: uma lista de registros onde cada item e tocavel e leva a uma acao (abrir o detalhe, editar, excluir). Dominar `data`, `renderItem` e `keyExtractor` agora e a base da **Fase 1** do projeto. Capricho! 🚀

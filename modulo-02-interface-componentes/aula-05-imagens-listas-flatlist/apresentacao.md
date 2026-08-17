# Apresentação: O Desempenho Importa (Over-Rendering) 🏁

**Sugestão de uso:** slides da Aula 05 (leia em voz alta, ou leia sozinho antes do tutorial).

Hoje vamos atacar o gargalo número um da indústria mobile: o **desempenho gráfico** ao lidar com arrays e listas de dados.

---

## 1. O Problema da `<ScrollView>`

Lembra como colocamos caixas coloridas e imagens estáticas? Se o usuário precisa descer a tela, ele usa o polegar. Para ativar a rolagem, costumamos agrupar os elementos dentro de uma **`ScrollView`**.

> [!CAUTION]
> O problema é que a `ScrollView` **carrega TODOS os elementos de uma vez** — até os milhares que estão escondidos abaixo da borda da tela. Ela processa todos os gráficos, mesmo os invisíveis, e "afoga" o celular. Isso é péssimo se a sua lista for de contatos ou de produtos de e-commerce!

---

## 2. A Glória da `<FlatList>`

A `FlatList` é uma lista "burra e incrivelmente astuta". Veja o truque:

1. Ela recebe um array cru de tamanho M (imaginemos **1.000 imagens**).
2. Ela olha o tamanho da sua tela e percebe que só cabem **4 fotos** por visualização.
3. Então a `FlatList` carrega **APENAS as 4 fotos**. As outras 996 continuam como simples códigos adormecidos.
4. Quando o usuário rola o dedo para baixo, a `FlatList` **destrói** (via *Garbage Collector*) a foto que saiu da borda, recicla a "casca"/pixels dela e a reaproveita para a foto de número 5!

> [!IMPORTANT]
> Ou seja: no seu aplicativo só existem **4 fotos carregadas por vez**, para a vida toda. Resultado: taxa de quadros constante e inabalável, de **60 a 120 FPS** — tela lisinha, sem travar.

### Componentes Chave da `<FlatList>`

Você não pode colocar os `<Text>` soltos dentro dela. A `FlatList` exige três **props**:

- **`data`**: Quem me alimenta? O **array** de dados (uma variável com várias "caixas").
- **`renderItem`**: Como eu desenho cada item na tela? Aqui você cria uma função que desenha as `Views` e `Images` de cada linha.
- **`keyExtractor`**: Eu exijo saber como não processar elementos repetidos. Diga qual é a **variável única** (um "id") de cada linha.

**Exemplo Prático de FlatList:**

{% raw %}
```tsx
import { FlatList, Text, View } from 'react-native';

const meias = [
  { id: '1', cor: 'Azul' },
  { id: '2', cor: 'Vermelha' },
  { id: '3', cor: 'Amarela' }
];

export default function GavetaDeMeias() {
  return (
    <FlatList
      data={meias} // 👈 A array original
      keyExtractor={(item) => item.id} // 👈 O campo único
      renderItem={({ item }) => ( // 👈 Como desenhar cada linha
        <View style={{ padding: 10, borderBottomWidth: 1 }}>
          <Text>Meia da cor: {item.cor}</Text>
        </View>
      )}
    />
  );
}
```
{% endraw %}

> [!NOTE]
> O `renderItem` é uma **função seta** que recebe `{ item }` e devolve o "desenho" da linha. O React Native chama essa função para **cada** item do array — uma vez por linha da lista. Revisite as arrow functions no [guia de JS/TS](../../docs/base-javascript-typescript.md).

> [!TIP]
> Mergulhe no assunto na documentação oficial: [FlatList no React Native](https://reactnative.dev/docs/flatlist)

---

## 3. `<Modal>`: Telas sobre Telas

No StickerSmash do tutorial, não vamos exibir um milhão de figurinhas direto na cara do cliente. Vamos pedir que uma **gaveta flutuante** brote do piso. É o componente **`<Modal>`**.

Com a tag `Modal`, tudo o que você escreve ali ganha o chamado **"Z-Index Absoluto Elevado"**: ele **escapa do Flexbox**, salta da formatação, domina 100% da tela e **trava embaixo** todas as operações dos botões de trás — forçando total atenção do usuário para a sua janela flutuante.

> [!IMPORTANT]
> O `<Modal>` tem a prop **`visible`**: `true` para abrir, `false` para fechar. O sistema operacional cuida da animação de abertura com maestria (deslizando pelo topo no Android, como um card no iOS).

**Exemplo Básico de Modal:**

{% raw %}
```tsx
import { Modal, View, Text, Pressable } from 'react-native';

// Dentro do seu componente:
<Modal
  animationType="slide"
  transparent={true} // 👈 Permite ver o fundo meio escurecido
  visible={isModalVisible} // 👈 true para abrir, false para fechar
>
  <View style={{ flex: 1, justifyContent: 'flex-end' }}>
    <View style={{ height: 300, backgroundColor: 'white', padding: 20 }}>
      <Text>Este é um gavetão que subiu do chão!</Text>
      <Pressable onPress={() => setIsModalVisible(false)}>
        <Text>Fechar</Text>
      </Pressable>
    </View>
  </View>
</Modal>
```
{% endraw %}

> [!TIP]
> O `transparent={true}` deixa o fundo da tela aparecendo **escurinho** atrás da gaveta — assim o usuário entende que o foco agora é o modal. E o `justifyContent: 'flex-end'` "cola" a gaveta embaixo, como se ela subisse do chão.

Bora meter a mão no código e desenhar esse gavetão no **Tutorial**! 🚀

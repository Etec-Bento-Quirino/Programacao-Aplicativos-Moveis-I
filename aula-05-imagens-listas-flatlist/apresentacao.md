# Apresentação: O Desempenho Importa (Over-Rendering) 🏁

**Leitura Autônoma de Arquitetura de Interface**

Hoje nós abordamos o gargalo número um da indústria Mobile: O desempenho gráfico ao lidar com Arrays e Listas de dados.

---

## 1. O Problema da `<ScrollView>`
Lembra como colocamos algumas caixas coloridas e imagens estáticas? Se o usuário precisar descer a tela, ele usa o seu polegar. Para ativar a rolagem no celular, costumamos agrupar os elementos dentro de uma `<ScrollView>`.

O problema é que a `ScrollView` carrega TODOS os elementos (milhares deles) e processa os gráficos localmente escondidos abaixo da borda física da tela de vidro. Ela afoga o celular. Isso é péssimo se sua lista for de contatos, ou produtos de e-commerce!

## 2. A Glória da `<FlatList>`
Uma FlatList é uma lista burra e incrivelmente astuta. 
- Ela pega um array cru de tamanho M (Imaginemos, 1.000 imagens).
- Ela olha o tamanho da sua tela, e percebe que só cabem 4 Fotos por vizualização natural.
- Então a `FlatList` carrega APENAS as 4 Fotos. As outras 996 continuam puramente como pequenos códigos letárgicos.
- Quando o usuário enrolar o dedão para baixo, a `FlatList` destrói (via *Garbage Collector*) a foto número 1 que subiu pra fora da borda e não é mais visível, recicla a casca/pixels dela, e envelopa ela com a foto de número 5!

Ou seja, no seu aplicativo só existirão 4 fotos carregadas para o resto da vida. Rendendo taxa constante e inabalável de **60 a 120 FPS**.

### Componentes Chave da `<FlatList>`:
Você não pode colocar os `<Text>` direto nela de forma normal. Ela exige as Props matemáticas:
- `data`: Quem me alimenta? A Array (uma varíável em array simples)!
- `renderItem`: Como eu vomito e projeto na tela os dados que estão lá? Aqui você cria um loop desenhando suas *Views* e *Images*.
- `keyExtractor`: Eu exijo saber como não processar elementos duas vezes. Diga qual é a variável secreta única, como um "id" pra cada linha.

👉 [Mergulhe no abismo na Documentação Exaustiva da Flatlist](https://reactnative.dev/docs/flatlist)


## 3. `<Modal>`: Telas sobre Telas

No seu StickerSmash do tutorial de hoje, nós não vamos exibir um milhão de figurinhas direto na tela na cara do cliente. Vamos pedir pra uma Gaveta Flutuante brotar do piso.
É o component `<Modal>`. 

Com a tag Modal, tudo que você escrevi ali ganha o que chamamos de "**Z-Index Absoluto Elevado**". Ele escapa do Flexbox que criamos, salta da formatação, domina 100% da sua tela e trava embaixo todas as operações de botões subjacentes, forçando total e absoluta atenção do usuário para responder a sua janela flutuante!

Ele ativa uma Prop `visible={true|false}`, e o Expo faz a animação fluída com maestria baseado no sistema nativo (Deslizando pelo Topo no Android, ou como Card pelo iOS).

Bora meter a mão no Código e desenhar esse Gavetão no **Tutorial**.

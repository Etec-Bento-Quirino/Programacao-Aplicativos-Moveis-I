# Apresentação: Flexbox e a Arte de Empilhar 🧱

**Sugestão de uso:** slides da Aula 03 (leia em voz alta, ou leia sozinho antes do tutorial).

Desenvolver um aplicativo não é apenas despejar textos brilhantes na tela. A sua obra no React Native precisa de **andaimes perfeitos**. Nesta apresentação vamos desmistificar três conceitos que farão você controlar a telinha do celular de verdade.

---

## 1. A Caixa Universal: o que é uma `<View>`?

Esqueça tudo o que você já ouviu sobre `<div>` na web. No mundo nativo (celulares), os sistemas trabalham com **caixas rígidas reais**. As **`<View>`** são os containers universais baseados nas estruturas do iOS e do Android.

- Tudo o que for agrupado em um mesmo bloco deve, obrigatoriamente, estar envolto numa `<View>`.
- Pense nela como uma **Tupperware**: para guardar e carregar a salada junta, você primeiro precisa de uma caixa.
- Como customizamos essa Tupperware? Com o **`StyleSheet.create()`** — o equivalente poderoso do seu arquivo `.css`.

> [!NOTE]
> **`StyleSheet.create()`** é onde você define os "padrões de fábrica" das suas caixas: tamanho, cor, espaçamento, bordas. Uma vez definido, basta aplicar `style={styles.algo}` em qualquer View.

---

## 2. Flexbox: A Matemática da Gravidade

Se tentássemos pregar uma foto na parede usando medidas exatas (`margin-left: 200px`), o resultado quebraria: no iPad gigante o app ia ficar torto, no Galaxy pequeno tudo escaparia da tela.

**Não usamos força bruta de pixels. Usamos frações flexíveis: o Flexbox.**

> [!IMPORTANT]
> O React Native usa o Flexbox com uma regra curiosa desde o início:
> - O **eixo principal** vai por **colunas** e "anda para o chão" (`flexDirection: 'column'`). Duas caixas se **empilham para baixo**, como panquecas no prato.
> - Se trocarmos a regra para **linhas** (`row`), elas caminham em trilhos da **esquerda para a direita**.

### 2.1 A Gravidade (alinhando como mestre)

Quando criamos uma `View` com **`flex: 1`**, dizemos a ela que se estique feito **chiclete** até bater nas bordas do celular, expulsando o ar vazio. A partir daí, ela comanda os dois eixos da gravidade:

| Propriedade | Apelido | O que faz |
|-------------|---------|-----------|
| **`justifyContent`** | O Mestre do Fluxo | Decide como as coisas flutuam pelo **eixo principal** (no padrão, o vertical). `'center'` centraliza entre teto e rodapé; `'space-between'` "chicoteia" um componente para o teto e outro para o chão, simetricamente. |
| **`alignItems`** | O Paredão Lateral | Equilíbrio no **eixo cruzado** (no padrão, o horizontal). `flex-start` encosta à esquerda, `flex-end` à direita, `center` no meio. |

**Exemplo Prático: Centralizando tudo na tela**

```tsx
import { View, Text, StyleSheet } from 'react-native';

export default function MinhaTela() {
  return (
    <View style={styles.container}>
      <Text>Estou exatamente no centro da tela!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // 👈 Puxa todo o espaço vertical disponível
    justifyContent: 'center', // 👈 Centraliza no eixo vertical (Mestre)
    alignItems: 'center', // 👈 Centraliza no eixo horizontal (Lateral)
    backgroundColor: '#f0f0f0',
  }
});
```

> [!TIP]
> Se a lógica falhar na hora de criar, abra a **Bíblia Nativa**: a documentação da Expo tem um playground interativo onde você troca `flex-start` por `center` e vê o resultado em tempo real:
> 👉 [Documentação Interativa de Layout com Flexbox](https://reactnative.dev/docs/flexbox)

---

## 3. O Segredo da Componentização Visual

Em empresas gigantes, a tela "Home" de um app bancário **não** é escrita em 8.000 linhas num único arquivo `index.tsx`. Os devs **recortam** o botão de saldo, colocam numa mini-pasta da fábrica, e toda vez que alguém precisa de um botão igualzinho, é só chamar o componente — sem recriar nada.

Ou seja:

1. Criar um arquivo novo (ex.: `components/Botao.tsx`).
2. Gerar a caixa (`View`), desenhar nela.
3. Enviar isso por **exportação** (`export default`) para o arquivo chefe (`index.tsx`).

### E o que são as Props?

As **props** são como **buraquinhos** que você faz no botão. Um botão diz: *"eu só sei pintar minha tela se o chefe me der uma Tinta (Prop)"*. As props **obrigam** quem usar o componente a alimentá-lo com as informações necessárias.

> [!NOTE]
> **Prop** = *propriedade*. É uma informação que a tela "Pai" entrega para o componente "filho" na hora de usá-lo — como entregar tinta ao pintor. Você verá isso na prática no tutorial com o `ImageViewer`.

---

## 4. Pronto para o Jogo?

Bora para o **Tutorial** e ver o nosso projeto engrenar em componentes no StickerSmash! 🚀

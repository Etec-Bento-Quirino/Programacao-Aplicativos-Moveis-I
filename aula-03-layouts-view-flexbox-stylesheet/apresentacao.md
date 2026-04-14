# Apresentação Teórica: Flexbox e a Arte de Empilhar 🧱

**Leitura Autônoma de Arquitetura de Interface**

Desenvolver aplicativos não é apenas despejar texto brilhante. A sua obra no React Native exige andaimes perfeitos. Hoje nós desmistificaremos três conceitos-chave que farão você controlar 100% da telinha do celular.

---

## 1. O que é uma `<View>`?
Esqueça tudo o que você aprendeu com `<div>` no HTML clássico da engenharia web.
No mundo nativo (Celulares), os sistemas trabalham com "Caixas Rígidas Reais". As Views são containers universais baseados nas estruturas do iOS e do Android.

Tudo o que for agrupado em um mesmo bloco, deve obrigatoriamente estar envelopado numa `<View>`. Pense nela como uma Tupperware: Onde você quiser guardar e mover a salada unida, você primeiro precisa de uma caixa.

E como customizamos essa "Tupperware"? Usando o `StyleSheet.create()`, o verdadeiro equivalente poderoso ao seu arquivo `.css`. 

## 2. Flexbox: A Matemática da Gravidade

Se tentarmos pregar uma foto na "parede" esquerda de uma View no React Native usando coordenadas matemáticas exatas com régua (ex: `margin-left: 200px`), quando o app rodar no gigantesco iPad da Apple E também no pequeno Galaxy da Samsung Antigo, o layout **vai destruir os elementos da tela**, jogando tudo pra fora!
Nós não usamos força bruta de pixels. Usamos frações flexíveis: O **Flexbox**.

> O React Native usa Flexbox com um comportamento curioso logo de fábrica:
> - O **Eixo Principal** é por Colunas e anda pro chão (`flexDirection: 'column'`). Ou seja, se colocar duas caixas, vão se empilhar para baixo como panquecas no prato.
> - Se trocar a regra pra Linhas (`row`), elas andarão em trilhos da esquerda pra direita!

### 2.1 A Gravidade (Alinhando como mestre)

Quando criamos uma `View` com **`flex: 1`**, nós dizemos a ela para se esticar feito um chiclete o máximo possível até bater nas bordas das paredes do celular, expulsando o ar vazio (Ela puxa todo o espaço e se expande).
A partir desse momento, ela comanda os dois eixos de gravidade:
* **`justifyContent` (O Mestre do Fluxo Atual)**: Ele determina como as coisas flutuam pelo rio do Eixo. Se colocar `'center'`, o seu conteúdo deslizará pelo rio da tela e travará 100% estabilizado no meio do túnel (centro exato entre teto e rodapé). Se colocar `'space-between'`, ele vai bizarramente chicotear um componente pro teto e outro pro piso do celular de modo simétrico.
* **`alignItems` (O Paredão Lateral)**: Equilíbrio lateral no eixo cruzado. Quer que um texto fique encolhido no cantinho esquerdo? `flex-start`. Cantinho direito? `flex-end`. Bem no meio? `center`.

### Material Oficial para Consulta Secreta 📘
Se a lógica falhar na hora de criar, abra a Bíblia Nativa (Nesta página incrivelmente lúdica onde a Expo deixa você brincar online trocando de "flex-start" para "center" em tempo real): 
👉 [Documentação Interativa de Layout com Flexbox](https://reactnative.dev/docs/flexbox)

## 3. O Segredo da Componentização Visual

Em empresas gigantes de Big Tech, a tela "Home" de um App bancário não é escrita em 8000 linhas num único arquivo `index.tsx`. Eles recortam o botão de saldo, jogam numa mini-pasta da fábrica pra que toda vez que um desenvolvedor quiser um Botão igualzinho ele não precise recriar. 
Isto significa criar um arquivo novo, gerar a Caixa (`View`), desenhar nela, **e enviar isso por "Exportação" (`export default`) para o arquivo chefe (`index.tsx`)**. 

As **Props** são como buraquinhos que você faz no botão. Um botão diz "eu só acordo seu pintar minha tela, e o chefe me dar uma Tinta (Prop)". As Props obrigam quem usar o Componente a alimentá-lo ativamente.

### Pronto para o Jogo?
Bora para o **Tutorial** e ver o nosso projeto engrenar em Componentes no StickerSmash!

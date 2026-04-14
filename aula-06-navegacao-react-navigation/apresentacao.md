# Apresentação: O Roteamento Dinâmico (Expo Router) 🛣️

**Leitura Autônoma de Arquitetura de Interface**

Se você já usou a Web (Next.js), a premissa será similar, mas os nomes e a física nativa mudam muito. Até poucos anos atrás, programadores de React Native gastavam centenas de linhas fazendo o clássico `navigation.navigate("MinhaTela")` manualmente usando livrarias chamadas React Navigation. Agora, o maquinista de trens evoluiu.

---

## 1. File-Based Routing (O Nome do Arquivo Vira Rota)
A pasta `/app` do Expo não é uma pasta comum. Ela é vigiada ativamente por um maquinista silencioso chamado **Expo Router**.
Isso significa que, se você criar um arquivo chamado `configuracoes.tsx` e exportar nele um elemento usando `export default function Configs()`, O expo router vai detectar isso.

Magicamente, o sistema vai gerar uma rota chamada invisivelmente de `"/configuracoes"`, e a Inserção de Link nativo no App será instantânea. Se você mudar a tela de nome as coisas se organizam. Nomes viram Rotas.

## 2. A Casca da Cebola: os `_layout.tsx`
Só há um problema de criar arquivos soltos que viram tela: Telas soltas são "peladas". Elas nascem batendo nas bordas da bateria do celular, não possuem Menus Inferiores nem Header em Cima (O cabeçalho do celular no Android e no iOS).

É aqui que mora o segundo segredo supremo: O arquivo mestre chamado **`_layout.tsx`**.
Toda vez que você coloca um arquivo com _ (underline) no começo do nome `_layout.tsx` dentro de uma pasta, o maquinista (Expo Router) intercepta tudo.

Em vez de exibir as telas puras e peladas daquela pasta, ele as "Veste". O que tiver escrito no `_layout.tsx` envelopa TODAS as telas da pasta.

- Se fizermos um Layout tipo **`Stack`**, as telas serão empilhadas umas sobre as outras, herdando a famosa "Setinha de Voltar (<)" no Header superior.
- Se fizermos um Layout usando **`Tabs`**, ele vestirá as suas telas colocando um lindo Menu Inferior com ícones interativos. E é exatamente isso que faremos no nosso StickerSmash!

## 3. Parênteses Invisíveis `(tabs)`
A última mágica sutil do curso de rotas de hoje: Grupos Lógicos.
No Expo Router, se você der o nome de uma pasta contendo parênteses (exemplo: `(minhasRotas)` e colocar arquivos lá, o maquinista **desconsidera o nome da pasta e lê direto o nome dos arquivos internos**.
Isso é fenomenal porque te permite esconder `index.tsx` debaixo de uma pasta de navegação `(tabs)` sem estuprar a arquitetura da sua URL de acesso, permitindo a separação limpa do Menu de Base versus Telas Secundárias de Login!

👉 **Expanda sua cabeça estudando a Documentação Base:** [A Mágica do Expo Router](https://docs.expo.dev/router/introduction/)

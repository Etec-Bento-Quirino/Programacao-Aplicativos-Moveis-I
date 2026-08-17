# Tutorial: O Big Bang do Seu Primeiro App (StickerSmash) 💥

**Sugestão de execução:** Quinzena 2 | **Bimestre:** 1

> [!NOTE]
> **O que você vai aprender hoje:**
> - Criar um projeto Expo com o comando `create-expo-app`
> - Entender a estrutura de pastas que o projeto gera sozinho
> - Fazer o app aparecer no seu celular com o **Expo Go** (e driblar o proxy da escola)
> - Trocar a tela inicial e ver a mudança em tempo real no seu aparelho
>
> **Pré-requisitos:** [Aula 01](../aula-01-introducao-desenvolvimento-mobile/README.md) — o Node instalado e `node --version` mostrando um número.

---

Na aula passada a gente montou a **cozinha**: fogão (Node), dispensa (npm) e entregador (npx). Hoje vamos cozinhar a **primeira receita**!

Nosso prato de hoje é o **StickerSmash** — um app que você vai conhecer bem neste curso. E o melhor: você vai ver ele funcionando **no seu próprio celular** em poucos minutos.

> [!TIP]
> Se você ainda não fez a Aula 01, pare aqui e volte lá primeiro. Hoje a gente usa **tudo** que foi instalado — e um ambiente quebrado vira um começo de aula bem chato. 😅

---

## Parte 1: Inicializando o Cérebro do App

### Passo 1.1: Abrir o terminal do VS Code

1. Abra o **VS Code** no seu computador.
2. No menu superior, clique em `Terminal` → `Novo Terminal`.
3. Vai abrir uma janelinha embaixo, com um cursor piscando. É nela que a mágica acontece.

> [!NOTE]
> O **terminal** é o lugar onde você conversa com o computador por texto: você digita um comando, aperta Enter, e ele responde. Na Aula 01 você já usou ele para conferir o Node — agora ele vai trabalhar de verdade.

### Passo 1.2: Encomendar o projeto (create-expo-app)

Digite o comando abaixo e aperte Enter:

```bash
npx create-expo-app@latest StickerSmash
```

O `npx` você já conhece da Aula 01: é o **iFood do Node**. Ele entrega um pacote, usa e vai embora. O pacote de hoje é o `create-expo-app` — um **robô-pedreiro** que constrói toda a estrutura do app sozinho, em 2 minutos.

O terminal vai ficar trabalhando. No final, você deve ver algo parecido com:

```
√ Baixando o modelo de projeto...
√ Instalando as dependências...
✔ Seu projeto StickerSmash foi criado com sucesso!
```

> [!NOTE]
> O texto exato pode variar conforme a versão, mas o **sinal de que deu certo** é ver a palavra *success* (sucesso) ou *ready* (pronto) no final. Se aparecer uma mensagem vermelha de erro, leia com calma e mostre ao professor.

> [!WARNING]
> Se aparecer `npx não é reconhecido como comando interno ou externo`, a Aula 01 não terminou direito: a caixinha **"Add to PATH"** do Node não foi marcada. Consulte o [Guia de Erros Comuns](../../docs/GUIA-DE-ERROS-COMUNS.md) para resolver antes de continuar.

### Passo 1.3: Entrar dentro do projeto

O robô criou uma pasta chamada `StickerSmash`. Agora vamos **entrar nela** (lembra do `cd`?):

```bash
cd StickerSmash
```

Desta vez o terminal **não mostra mensagem nenhuma** — só volta a mostrar o cursor piscando. Isso é normal! Significa que o comando funcionou. (É o mesmo comportamento de quando você entrou na pasta `PAM1-2026` na aula passada.)

### Passo 1.4: Conhecer a estrutura de pastas

Se você olhar a barra lateral do VS Code, vai ver uma quantidade assustadora de pastas e arquivos. Respira — você não precisa conhecer todos hoje. Só três habitantes desse mundo são importantes agora:

| Habitante | O que é |
|-----------|---------|
| `node_modules` | O **buraco negro**. Lá moram milhares de bibliotecas prontas (ícones, o próprio React…). |
| `app.json` | A **certidão de nascimento** do app: nome oficial, cores padrão, e a futura "fotinha" do celular. |
| `app/` | A **pasta principal**, onde você vai morar o curso inteiro. |

> [!IMPORTANT]
> **Regra de ouro: NUNCA entre em `node_modules`. NUNCA edite nada lá dentro.** Aquilo é área de serviço de terceiros — mexe e quebra tudo. Respeite o selo: olhe, mas não toque. 🔒

### Passo 1.5: A limpeza de estreia (reset-project)

O template padrão do Expo nasce com um **exemplo de demonstração** (com abas, ícones e tela de exemplo). A gente não quer começar com a casa cheia de decoração dos outros — quer um app do **nosso jeito**. O próprio Expo criou um roteiro de limpeza para isso:

```bash
npm run reset-project
```

O terminal vai fazer uma **pergunta** e esperar sua resposta:

```
Do you want to move existing files to /app-example instead of deleting them? (Y/n):
```

Digite **n** e aperte Enter.

> [!CAUTION]
> A letra **n** aqui significa "**não** guarde uma cópia, pode apagar". Esse comando **apaga o código de exemplo** — mas fica tranquilo: você ainda vai criar tudo do zero do seu jeito. Depois da limpeza, o terminal confirma com algo parecido com:

```
✔ Removendo o código de exemplo...
✔ Sua pasta app/ foi limpa!
```

E a pasta `app/` agora tem **apenas dois arquivos**:

- `app/index.tsx` — a **tela inicial** (a primeira que abre quando o app roda);
- `app/_layout.tsx` — o **esqueleto de navegação** (o maquinista que organiza as telas — ele fica quietinho por enquanto, a gente conhece ele bem na Aula 06).

> [!TIP]
> Em tutoriais antigos da internet você ainda vê um tal de `App.js` no topo da estrutura. Hoje o Expo usa a pasta `app/` com o **Expo Router**: **cada arquivo `.tsx` que você criar dentro dela vira uma tela do celular automaticamente**. É esse padrão que seguimos o curso inteiro — grave bem essa ideia!

### Passo 1.6: Driblando o bloqueio da escola (--tunnel)

Chegou a hora do problema que já derrubou muitos alunos: o **Wi-Fi da escola**.

> [!WARNING]
> **DICA DE OURO DA REDE:** o Wi-Fi da escola e de empresas costuma ter um **firewall/proxy rígido**. Ele bloqueia seu celular de "conversar" com o notebook na mesma rede — e sem essa conversa, o app não aparece no aparelho.

Para furar esse bloqueio de forma **permanente** no seu projeto, faça assim:

1. Na barra lateral do VS Code, abra o arquivo `package.json`.
2. Procure a parte `"scripts"`.
3. Altere a linha do `"start"` para incluir `--tunnel`:

```json
"scripts": {
  "start": "expo start --tunnel",
  // ...
}
```

> [!NOTE]
> O `--tunnel` é o nosso **atalho secreto**: ele cria uma **URL pública temporária** (via ngrok) que "fura" o bloqueio do Wi-Fi. Com ela, seu celular pode carregar o app até pelo **4G**, sem depender da rede da escola. 🕳️🚀

> [!TIP]
> Esse passo é obrigatório **dentro da escola**, mas funciona em casa também. Se um dia você estiver numa rede liberada, pode remover o `--tunnel` que o app continua funcionando do mesmo jeito.

> [!WARNING]
> **Seu terminal deu erro ou travou ao rodar com `--tunnel`?** Calma, não é você! Acesse o nosso [Guia de Erros Comuns](../../docs/GUIA-DE-ERROS-COMUNS.md): lá ensinamos a forçar a instalação do `ngrok` ou a rodar o app offline via **cabo USB**.

### Passo 1.7: Ligar a televisão (npm start)

Agora sim, vamos fazer o app **acordar**:

```bash
npm start
```

O terminal vai acender a antena do **Metro Bundler** e mostrar um **QR Code**, mais ou menos assim:

```
› Metro waiting on exp://192.168.0.15:8081
› Scan the QR code above with Expo Go to open the app
```

Para ver o app, você precisa do **Expo Go** no celular:

1. Baixe o aplicativo **Expo Go** na Play Store (Android) ou na App Store (iPhone) — é grátis.
2. Ligue o Wi-Fi do celular (mesma rede do computador) ou use os dados móveis se configurou o tunnel.
3. Abra o **Expo Go** e **escaneie o QR Code** (Android escaneia pela própria câmera; no iPhone, use a câmera mesmo).

> [!NOTE]
> O **Expo Go** é como uma **televisão ao vivo** do seu app: ele não guarda o projeto, apenas recebe o sinal do Metro Bundler e mostra na tela. É por isso que seu celular — que tem hardware até mais potente que os computadores que foram à Lua 🚀 — consegue rodar o que você está escrevendo, sem precisar de um PC gigante.

Em poucos segundos o app de demonstração vai abrir no seu celular. Seu primeiro app está **vivo**! 🎉

> [!TIP]
> Se o celular não achar o QR Code, confira se os **dois aparelhos estão na mesma rede** (ou se o tunnel está ativo). Errou a rede? O celular conectado ao Wi-Fi dos alunos e o notebook no Wi-Fi dos professores não se encontram — isso derruba geral!

---

## Parte 2: A Primeira Limpeza e a Estilização (Dark Mode)

### Passo 2.1: Abrir a tela inicial

Na barra lateral do VS Code, abra o arquivo `app/index.tsx`.

Ele ainda tem o código de demonstração que sobrou do template. A gente vai **substituir tudo** por um código bem mais simples — o nosso.

### Passo 2.2: Conhecer as três peças do palco

Antes de escrever, deixa eu apresentar as três peças que usaremos (você vai conviver com elas o curso inteiro):

| Peça | É o quê? |
|------|----------|
| `<View>` | Uma **caixa** que organiza a tela (o equivalente a um contêiner). |
| `<Text>` | Um **texto** (o equivalente a um parágrafo). |
| `StyleSheet` | O **"CSS" do React Native** — onde a gente define cores, tamanhos e posições. |

> [!IMPORTANT]
> No React Native **não existe** `<div>` nem `<p>` como no HTML de sites. Em vez disso usamos os componentes nativos do aparelho: `<View>` (caixa) e `<Text>` (texto). Esse é o idioma do curso — decore essas duas palavras.

### Passo 2.3: Substituir o código

Apague **TODO** o conteúdo de `app/index.tsx` e cole o código abaixo no lugar:

```tsx
import { Text, View, StyleSheet } from 'react-native';

export default function Index() {
  return (
    // A View funciona como uma caixa limitadora. A prop "style" chama o designer.
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo ao StickerSmash! 🚀</Text>
    </View>
  );
}

// O StyleSheet.create é o "CSS" do React Native!
const styles = StyleSheet.create({
  container: {
    flex: 1, // Faz a View ocupar 100% da página puxando elásticamente.
    backgroundColor: '#25292e', // Aplica o Background Escuro Sombrio (Dark Mode base).
    alignItems: 'center', // Alinha tudo no eixo Horizontal (Eixo X) bem no meio!
    justifyContent: 'center', // Alinha tudo no eixo Vertical (Eixo Y) bem no meio!
  },
  text: {
    color: '#fff',
  },
});
```

### Passo 2.4: Entendendo o código, linha por linha

Vamos traduzir o que acabamos de escrever — é mais simples do que parece:

```tsx
import { Text, View, StyleSheet } from 'react-native';
```

**Esta linha pede emprestado** as três peças (`Text`, `View`, `StyleSheet`) que estão guardadas dentro da biblioteca `react-native`. É como abrir a gaveta e pegar as três ferramentas antes de começar o trabalho.

```tsx
export default function Index() {
```

**A tela é uma função** chamada `Index`. O `export default` avisa o app: "esta é a minha tela principal". O Expo Router encontra esse arquivo e mostra ele primeiro — é o combinado do Passo 1.5.

```tsx
  return (
```

**O `return` devolve** tudo que deve aparecer na tela. Tudo que estiver entre parênteses aqui será desenhado no celular.

```tsx
    <View style={styles.container}>
```

**Abrimos a caixa** `<View>`. A prop `style` (propriedade = característica) aponta para `styles.container` — o "designer" que vamos definir mais abaixo.

```tsx
      <Text style={styles.text}>Bem-vindo ao StickerSmash! 🚀</Text>
```

**O texto** que aparece no meio da tela. Repare que o `</Text>` no final **fecha** a tag — no React Native, toda tag aberta precisa ser fechada (igual no HTML).

```tsx
    </View>
```

**Fechamos a caixa.** Tudo que está entre `<View>` e `</View>` fica dentro dela.

```tsx
const styles = StyleSheet.create({
```

**Aqui começa o designer de estilos.** O `StyleSheet.create` é um "caderno de receitas" onde cada bloco define a aparência de uma peça. Nele existem dois "blocos": `container` (usado pela View) e `text` (usado pelo Text).

```tsx
  container: {
    flex: 1,
```

**`flex: 1`** faz a View **esticar e ocupar 100% da tela**, como um elástico puxando até os cantos. Sem isso, a caixa teria o tamanho do conteúdo e não da página.

```tsx
    backgroundColor: '#25292e',
```

**`backgroundColor`** pinta o fundo da caixa. O valor `#25292e` é um **código de cor** (hexadecimal): essa sequência é um tom escuro, quase preto — o nosso **Dark Mode** básico. É a mesma técnica que escolhe qualquer cor no canva/figma de design.

```tsx
    alignItems: 'center',
    justifyContent: 'center',
```

Essas duas linhas **centralizam o conteúdo**. A primeira (`alignItems`) alinha no **eixo horizontal (X)** — de um lado ao outro. A segunda (`justifyContent`) alinha no **eixo vertical (Y)** — de cima para baixo. Juntas, elas colocam o texto exatamente no **meio do miolo** da tela.

```tsx
  text: {
    color: '#fff',
```

**O bloco do texto.** `color` muda a cor da letra, e `#fff` é o **branco** (o jeito curto de escrever `#ffffff`). Texto branco sobre fundo escuro = contraste lindo e legível.

### Passo 2.5: A Mágica do Fast Refresh

Aperte **`Ctrl+S`** (ou `Cmd+S` no Mac) para salvar o arquivo. Agora olhe para o seu **celular**.

O fundo escureceu e o texto branco apareceu **em tempo real**, sem você tocar em nada! É o **Fast Refresh** — o primo do Hot Reload da Aula 01: o Metro Bundler detecta a mudança, entrega ao Expo Go e a tela se atualiza sozinha. O garçom trouxe o prato novo sem você levantar da mesa. 🍽️

> [!NOTE]
> **Fundo escuro é "Dark Mode"?** Sim, esse visual escuro (`#25292e`) é o estilo que os apps modernos usam para economizar bateria em telas OLED e cansar menos os olhos. Hoje você só aplicou a cor — nas próximas aulas a gente explora isso a fundo.

---

## Checklist da Aula 02

Marque cada item quando conseguir fazer:

- [ ] `npx create-expo-app@latest StickerSmash` criou o projeto sem erros
- [ ] Entrei na pasta com `cd StickerSmash`
- [ ] `npm run reset-project` limpou o exemplo (respondi **n** à pergunta)
- [ ] `app/` ficou só com `index.tsx` e `_layout.tsx`
- [ ] Alterei o script `"start"` para `expo start --tunnel` no `package.json`
- [ ] `npm start` mostrou o QR Code do Metro Bundler
- [ ] Abri o app no **Expo Go** do meu celular
- [ ] Troquei o código do `app/index.tsx` (View, Text, StyleSheet)
- [ ] Meu celular mostrou a tela escura `#25292e` com o texto "Bem-vindo ao StickerSmash! 🚀"

> [!NOTE]
> Se algum item ficou sem marcar, volte no passo correspondente. A **Parte 2** é a mais importante: `View`, `Text` e `StyleSheet` são a base de todas as telas que você vai criar este ano.

---

## Como isso se aplica ao seu projeto

O StickerSmash é o nosso **veículo de aprendizagem**, mas tudo que você fez hoje — criar o app, entender a estrutura de pastas e usar `View`, `Text` e `StyleSheet` — é exatamente o que vai montar a **tela inicial do seu Trabalho em Grupo**:

- **Categoria 1 (Lista de Tarefas):** a tela principal será uma lista de tarefas
- **Categoria 2 (Cadastro/Inventário):** a tela inicial mostrará categorias
- **Categoria 3 (Diário/Notas):** a tela inicial listará as notas
- **Categoria 4 (Controle de Gastos):** a tela inicial exibirá os gastos recentes

Ou seja: hoje você aprendeu o "molde" que qualquer tela precisa — uma caixa (`View`), um texto (`Text`) e um estilo (`StyleSheet`). Nas próximas aulas a gente preenche esse molde com a personalidade do **seu** app. Vejo você na [Aula 03](../../modulo-02-interface-componentes/aula-03-layouts-view-flexbox-stylesheet/README.md)! 🚀

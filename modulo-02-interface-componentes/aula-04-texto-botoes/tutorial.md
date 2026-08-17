# Tutorial: Dando Vida ao App (Text, Pressable e Botões)

**Sugestão de execução:** Quinzena 4 | **Bimestre:** 1
**Base tecnológica:** Pressable, onPress, Ícones Vetorizados, Merge de Estilos.

> [!NOTE]
> **O que você vai aprender hoje:**
> - Por que todo texto precisa da tag `<Text>` (e como os estilos "herdam")
> - Usar o **`Pressable`** (o botão moderno do React Native) para capturar toques
> - Criar um componente de botão reutilizável que muda de aparência com `props`
> - Usar ícones vetorizados da biblioteca `@expo/vector-icons`
>
> **Pré-requisitos:** [Aula 03](../aula-03-layouts-view-flexbox-stylesheet/README.md) — componentes, props e Flexbox compreendidos.

---

Na Aula 03 o seu app virou uma cozinha organizada, com gavetas e gravidade. Hoje a cozinha ganha **campainha**: os botões. Um botão que não faz nada é um enfeite — a magia acontece quando ele **escuta** o dedo do usuário e **reage**. Vamos lá!

> [!TIP]
> Abra o terminal na pasta do projeto e rode `npx expo start` para deixar o app no ar. O Metro vai responder com o QR Code para o Expo Go — como na [Aula 02](../../modulo-01-fundamentos-ambiente/aula-02-ambiente-react-native-expo/tutorial.md).

---

## Passo 1: O Texto Sagrado (`<Text>`)

Antes dos botões, uma regra de ouro do React Native:

> [!IMPORTANT]
> **Nada de texto solto!** No React Native, todo texto visível na tela precisa estar dentro de uma tag **`<Text>`**. Escrever `Bem-Vindo` solto dentro de uma `<View>` dá erro. O `<Text>` é o "porta-voz" de toda palavra do app.

E tem um detalhe poderoso: o estilo do `<Text>` **herda** de pai para filho. Um `<Text>` grande com negrito, quando tem outro `<Text>` dentro, passa essas propriedades para o filho — como uma receita de família que vai descendo de geração em geração.

> [!NOTE]
> Referência oficial para quando você quiser aprofundar: [Tipografia no React Native](https://reactnative.dev/docs/text). Na prática desta aula, o `<Text>` vai aparecer dentro dos nossos botões — vamos ver já já.

---

## Passo 2: Conhecendo o `Pressable`

Antigamente, os devs usavam um botão chamado **`TouchableOpacity`**. Ele cumpriu seu papel, mas foi substituído por uma versão mais moderna e poderosa:

> [!IMPORTANT]
> **`Pressable`** é o componente de botão moderno do React Native. Ele enxerga o toque "por dentro": sabe quando o dedo **encostou**, quando foi **levantado** e quando ficou **pressionado por muito tempo**. Cada momento pode disparar uma função diferente.

Os quatro momentos (eventos) principais:

| Evento | Quando dispara |
|--------|----------------|
| `onPressIn` | No instante em que o dedo **encosta** |
| `onPressOut` | Quando o dedo é **levantado** ou desliza para fora |
| `onPress` | O "clique confirmado" (dedo levantou ainda dentro do botão) |
| `onLongPress` | Quando o dedo fica **parado** por mais de ~500ms |

Vamos ver isso funcionando. No arquivo `app/(tabs)/index.tsx`, dentro da `View` principal, adicione um botão de teste:

```tsx
<Pressable
  onPressIn={() => console.log('👆 Dedo encostou!')}
  onPressOut={() => console.log('👋 Dedo saiu ou levantou!')}
  onPress={() => console.log('✅ Clique confirmado!')}
  onLongPress={() => console.log('⏱️ Pressionamento longo detectado!')}
>
  <Text>Interaja Comigo!</Text>
</Pressable>
```

**O que esse código faz:**

- `<Pressable>` é a caixa clicável — o "botão invisível" que escuta o dedo.
- `onPress={() => console.log('...')}` — cada `onPress...` recebe uma **função** que roda quando o evento acontece.
- O `() => ...` é a **arrow function** (função seta): um jeito curto de escrever "quando isso acontecer, rode isto" (revisite no [guia de JS/TS](../../docs/base-javascript-typescript.md)).
- `<Text>Interaja Comigo!</Text>` é o "rosto" do botão — o que aparece escrito na tela.

**O que você deve VER:** toque e segure o texto no celular. Abra o painel do Metro (ou o terminal do `expo start`) e observe as mensagens aparecendo conforme você encosta, segura e solta. Depois **apague** esse bloco de teste — ele serviu para mostrar o caminho.

> [!TIP]
> O `console.log` é o "gravador de voz" do desenvolvedor: mostra mensagens no terminal do Metro para você saber o que o app está fazendo por dentro. Vamos usar ele para verificar cada evento.

> [!WARNING]
> Se as mensagens não aparecerem no terminal, lembre-se de olhar a aba **Logs** do Metro (`expo start` aberto) e não o console do navegador. Em apps Expo, o `console.log` aparece no terminal do Metro ou no Expo Go.

---

## Passo 3: Criando o Botão Universal (`Button.tsx`)

Agora vem a parte profissional: em vez de escrever botões soltos por aí, vamos criar **um** carimbo de botão que muda de visual conforme a prop que receber.

Queremos dois estilos:
- **`primary`** — botão amarelo de destaque (a ação principal da tela);
- **padrão** (sem tema) — botão limpo, só com texto.

Como faríamos se fosse tinta? Não criamos dois botões. Criamos um só e **entregamos a tinta na prop** — exatamente como fizemos com `imgSource` na Aula 03.

### Passo 3.1: Criar o arquivo

1. Dentro da pasta `components` (que já existe do tutorial anterior), crie um novo arquivo: **`Button.tsx`**.
2. Cole o código abaixo:

```tsx
// components/Button.tsx
import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

// Se receber "primary", veste o botão de amarelo brilhante com o Mestre FontAwesome!
type Props = {
  label: string;
  theme?: 'primary';
};

export default function Button({ label, theme }: Props) {
  if (theme === 'primary') {
    return (
      <View style={[styles.buttonContainer, { borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18 }]}>
        <Pressable
          style={[styles.button, { backgroundColor: '#fff' }]}
          onPress={() => alert('Em Breve: Acesso a Câmera!')}
        >
          <FontAwesome name="picture-o" size={18} color="#25292e" style={styles.buttonIcon} />
          <Text style={[styles.buttonLabel, { color: '#25292e' }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  // SE NÃO RECEBER NENHUM TEMA -> Renderiza normal:
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('Em breve: Uso Desta Foto')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: { width: 320, height: 68, marginHorizontal: 20, alignItems: 'center', justifyContent: 'center', padding: 3 },
  button: { borderRadius: 10, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' },
  buttonIcon: { paddingRight: 8 },
  buttonLabel: { color: '#fff', fontSize: 16 },
});
```

**O que esse código faz, bloco por bloco:**

- `type Props = { label: string; theme?: 'primary' };` — o carimbo exige uma **`label`** (o texto do botão). Já o `theme` tem um **`?`** — o ponto de interrogação significa *"opcional"*: o botão funciona com ou sem. Se vier com o valor `'primary'`, veste o visual de destaque.

  > [!IMPORTANT]
  > O `?` em `theme?: 'primary'` torna a prop **opcional**. É a diferença entre "este campo é obrigatório" (`label`) e "este campo pode vir ou não" (`theme`). As props são como os ingredientes de uma receita: alguns são obrigatórios, outros são "a gosto".

- `if (theme === 'primary') { return (...); }` — uma **condicional**! Se o chefe entregou `theme="primary"`, o componente desenha a versão amarela. Senão, cai no `return` de baixo e desenha a versão simples. É o mesmo `if` do seu curso de Algoritmos.
- `onPress={() => alert('Em Breve: Acesso a Câmera!')}` — o **`alert()`** abre uma janelinha de aviso no celular. No momento, os botões só avisam que a função "vai chegar" (nas aulas 08–10 vamos ligar a câmera de verdade).
- `<FontAwesome name="picture-o" ... />` — um **ícone** de câmera vindo da biblioteca `@expo/vector-icons`. É o "desenho" do botão, do lado do texto.

> [!NOTE]
> O `@expo/vector-icons` já vem instalado em todo projeto Expo — não precisa de `npm install`. A biblioteca oferece milhares de ícones prontos (FontAwesome, MaterialIcons, Ionicons…) que viram componentes.

> [!TIP]
> Reparou no `style={[styles.button, { backgroundColor: '#fff' }]}`? É o **Merge de Estilos**: o array `[...]` manda o React Native **somar** o estilo base (`styles.button`) com o extra da cor branca na hora. O estilo que vier **por último** vence quando os dois brigam pela mesma propriedade.

---

## Passo 4: Conectando os botões na tela

Nosso carimbo está pronto. Agora vamos usá-lo na tela inicial.

Abra o `app/(tabs)/index.tsx` e, **dentro da `View` principal** (depois da imagem, por exemplo), adicione os dois botões:

```tsx
<Button label="Escolher foto" theme="primary" />
<Button label="Usar essa foto" />
```

Não esqueça de **importar** o componente no topo do arquivo:

```tsx
import Button from '@/components/Button';
```

**O que você deve VER:** dois botões aparecendo na tela, um amarelo com ícone de câmera ("Escolher foto") e outro só com texto ("Usar essa foto"). Toque nos dois: cada um abre a sua janelinha de aviso.

> [!WARNING]
> Se o botão não aparecer, verifique: 1) o `import Button from '@/components/Button';` está no topo do arquivo? 2) os dois `<Button ... />` estão **dentro** de uma `<View>`? 3) não existe dois componentes com o mesmo nome `Button` no arquivo? O import do `react-native` também exporta um `Button` — cuidado para não misturar os dois!

> [!TIP]
> O `@` continua sendo o atalho para a raiz do projeto (aprendido na Aula 03). O `@/components/Button` aponta para a pasta `components` do nosso carimbo.

---

## Checklist da Aula 04

Marque cada item quando conseguir fazer:

- [ ] Entendi que todo texto visível precisa estar dentro de `<Text>`
- [ ] Entendi a diferença entre `onPressIn`, `onPressOut`, `onPress` e `onLongPress`
- [ ] Testei os eventos com `console.log` e vi as mensagens no Metro
- [ ] Criei `components/Button.tsx` com `label` obrigatória e `theme` opcional
- [ ] Usei o `if (theme === 'primary')` para trocar o visual do botão
- [ ] Usei o Merge de Estilos `style={[estiloBase, estiloExtra]}`
- [ ] Conectei os dois botões na tela `index.tsx` e eles abrem `alert()`

> [!WARNING]
> Se algum passo falhou, releia o passo correspondente. O alerta não aparece? Confira se o `onPress` está dentro do `<Pressable>` e não dentro de outro componente. Erro estranho? Consulte o [Guia de Erros Comuns](../../docs/GUIA-DE-ERROS-COMUNS.md).

---

## Como isso se aplica ao seu projeto

O componente `Button.tsx` que você criou é o mesmo padrão que usará em **todas** as telas do **seu** projeto. Alguns exemplos de botões por tela:

- tela de listagem: botão **"Adicionar"** que abre o formulário de cadastro;
- tela de detalhe: botões **"Editar"**, **"Excluir"** e de alternar o **status** do registro (ex.: concluído/pendente).

O padrão de receber `theme="primary"` via props permite criar **um** componente e reutilizá-lo com aparências diferentes em todo o app — se amanhã você quiser um botão "perigo" vermelho, é só criar `theme="danger"` no mesmo carimbo. 🚀

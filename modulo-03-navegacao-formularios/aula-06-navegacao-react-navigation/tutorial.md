# Tutorial: Montando a Teia do App (Abas e Stack)

**Sugestão de execução:** Quinzena 6 | **Bimestre:** 2

> [!NOTE]
> **O que você vai aprender hoje:**
> - Usar o **Expo Router** para criar múltiplas telas sem configuração manual
> - Entender o **File-Based Routing**: criar um arquivo = criar uma tela
> - Adicionar uma barra de abas (**Tabs**) no rodapé do app
> - Criar um arquivo `_layout.tsx` para compartilhar cabeçalho e navegação entre telas
>
> **Pré-requisitos:** [Aula 05](../../modulo-02-interface-componentes/aula-05-imagens-listas-flatlist/README.md) — FlatList e componentes reutilizáveis compreendidos.

---

Vamos usar uma analogia: até agora, seu app era um **apartamento de um cômodo só**. Tudo acontecia na sala. Mas apps reais têm sala, quarto, cozinha... Precisamos de **portas** entre os cômodos. Nesta aula, vamos construir essas portas.

> [!TIP]
> Se você já tem um projeto do StickerSmash rodando, ótimo! Se não, não tem problema — o tutorial te guia do zero.

---

## Passo 1: Criando a Pasta `(tabs)`

Vamos organizar as telas do app. Em vez de deixar tudo solto na pasta `app/`, vamos criar uma pasta especial chamada `(tabs)`.

1. Dentro da pasta `app/` do seu projeto, crie uma subpasta chamada `(tabs)`:

```
app/
└── (tabs)/
```

> [!WARNING]
> **Os parênteses no nome `(tabs)` são obrigatórios!** Se você criar a pasta como `tabs` (sem parênteses), o Expo Router não vai entender que é um grupo lógico e o endereço da tela vai ficar `/tabs/index` em vez de só `/`. Não pule essa细节!

2. Agora, **arraste** o arquivo `index.tsx` que já existe dentro de `app/` para dentro de `app/(tabs)/`. A estrutura ficará assim:

```
app/
├── _layout.tsx
└── (tabs)/
    └── index.tsx
```

> [!NOTE]
> O `index.tsx` dentro de `(tabs)` continua sendo a tela inicial do app — a primeira tela que aparece quando o usuário abre o programa.

---

## Passo 2: Criando a Tela "Sobre" (`about.tsx`)

Agora vamos criar a segunda aba do nosso menu inferior. Vamos chamá-la de "Sobre".

1. Dentro da pasta `app/(tabs)/`, crie um arquivo chamado `about.tsx`.
2. Cole o código abaixo:

```tsx
import { Text, View, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela Sobre! Feito via Tabs!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
```

Vamos entender o que cada linha faz:

| Linha | O que faz |
|-------|-----------|
| `export default function AboutScreen()` | Cria uma tela chamada "About". O React Native vai renderizar essa função como uma tela inteira. |
| `<View style={styles.container}>` | Uma `<View>` é uma `<div>` do React Native — é uma "caixa" invisível que segura outros elementos. |
| `<Text style={styles.text}>` | O `<Text>` é o único jeito de mostrar texto na tela. Sem ele, nada aparece. |
| `flex: 1` | Diz à View: "ocupe **toda** a tela". Sem isso, ela encolheria só no tamanho do texto. |

> [!TIP]
> Repare que o fundo é escuro (`#25292e`). Vamos manter esse mesmo tom no cabeçalho e nas abas para o app ficar com cara profissional.

---

## Passo 3: O Cérebro das Abas — `_layout.tsx`

Agora vem a peça-chave. Sem um `_layout.tsx` dentro de `(tabs)`, as telas ficam "peladas" — sem menu inferior, sem cabeçalho bonito. Vamos vestir todas as telas da pasta.

1. Dentro de `app/(tabs)/`, crie o arquivo `_layout.tsx`.
2. Cole o código abaixo:

```tsx
{% raw %}
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    // Transformamos a pasta em um Menu de Abas
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffd33d', // Cor da aba selecionada
        headerStyle: { backgroundColor: '#25292e' }, // Fundo do cabeçalho
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: { backgroundColor: '#25292e' }, // Fundo das abas
      }}
    >
      {/* Tela Início: aponta para index.tsx */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'home-sharp' : 'home-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />

      {/* Tela Sobre: aponta para about.tsx */}
      <Tabs.Screen
        name="about"
        options={{
          title: 'Sobre',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'information-circle' : 'information-circle-outline'}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
{% endraw %}
```

Explicando bloco por bloco:

- **`<Tabs>`** — Inicia o menu inferior. Tudo dentro dele vira uma aba.
- **`screenOptions`** — Configurações gais: cor do texto ativo, fundo do cabeçalho, fundo das abas.
- **`<Tabs.Screen name="index">`** — Conecta esta aba ao arquivo `index.tsx`. O `name` deve bater **exatamente** com o nome do arquivo.
- **`tabBarIcon`** — Função que desenha o ícone. Quando a aba está selecionada (`focused = true`), mostramos o ícone preenchido. Quando não, mostramos o contorno.

> [!WARNING]
> Se você trocar o `name="index"` por `name="Inicio"` (com maiúscula), o app vai quebrar porque não existe um arquivo chamado `Inicio.tsx`. **O `name` deve ser igual ao nome do arquivo, em minúsculas.**

---

## Passo 4: O Layout Principal (`_layout.tsx` da raiz)

Agora precisamos garantir que o app carregue as Tabs como tela principal. Vamos configurar o arquivo `_layout.tsx` que já existe na pasta raiz `app/`.

1. Abra o arquivo `app/_layout.tsx` (na raiz, **não** dentro de `(tabs)`).
2. Substitua todo o conteúdo por:

```tsx
{% raw %}
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" options={{ title: 'Oops!' }} />
    </Stack>
  );
}
{% endraw %}
```

Entendendo cada linha:

| Linha | O que faz |
|-------|-----------|
| `<Stack>` | Cria um layout tipo "pilha de pratos" — uma tela sobre a outra. |
| `<Stack.Screen name="(tabs)">` | Diz: "a primeira camada da pilha são as Abas". |
| `headerShown: false` | Esconde o cabeçalho duplo (já que cada aba tem o seu próprio). |
| `<Stack.Screen name="+not-found">` | Tela de fallback caso o usuário tente acessar uma rota que não existe. |

> [!IMPORTANT]
> O arquivo `_layout.tsx` da **raiz** (`app/_layout.tsx`) é o "gerente geral" — ele decide qual tela aparece primeiro. O `_layout.tsx` de `(tabs)` é o "gerente de turno" — ele controla o menu inferior.

---

## Passo 5: Testando no Celular

Agora é a hora da verdade! Vamos ver se a mágica aconteceu.

1. Abra o terminal e rode:

```bash
npx expo start
```

O Metro Bundler vai iniciar. Abra o **Expo Go** no celular e escaneie o QR Code.

> [!WARNING]
> Se o app mostrar apenas a tela Início sem as abas, provavelmente o arquivo `_layout.tsx` dentro de `(tabs)` está com erro. Verifique se o `name` de cada `<Tabs.Screen>` bate com o nome real do arquivo (em minúsculas, sem extensão).

2. No celular, você deve ver:
   - Um **menu inferior** com dois ícones: "Início" e "Sobre".
   - Ao tocar em "Sobre", a tela muda suavemente sem "recarregar" o app.
   - O ícone da aba selecionada fica amarelo (`#ffd33d`).

> [!NOTE]
> Percebeu como a troca de tela foi fluida? Não teve "tela de carregamento". Isso é o poder do Expo Router — as telas já estão carregadas na memória, você só troca entre elas.

---

## Passo 6: Navegando com `<Link>` e `useRouter`

Além das abas, você pode criar links para outras telas. Existem duas formas:

### Forma 1: `<Link>` — o link de toque (declarativo)

Funciona como um link na web. O usuário toca e vai para outra tela.

```tsx
{% raw %}
import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Inicio() {
  return (
    <View>
      <Text>Esta é a tela Início</Text>

      {/* Link simples: tocou, navegou */}
      <Link href="/about">Ir para a tela Sobre</Link>
    </View>
  );
}
{% endraw %}
```

### Forma 2: `useRouter()` — o controle remoto (imperativo)

Quando você precisa navegar **a partir de código** — por exemplo, depois de salvar um formulário — use o hook `useRouter()`:

```tsx
{% raw %}
import { useRouter } from 'expo-router';

const router = useRouter();

// Volta para a tela anterior
router.back();

// Vai para outra tela (adiciona no histórico)
router.push('/about');

// Troca a tela atual (não dá pra voltar)
router.replace('/login');
{% endraw %}
```

> [!TIP]
> **Quando usar cada um?**
> - `<Link>` → quando o usuário **toca** em algo para navecar (como um botão de texto).
> - `useRouter()` → quando o app navega **automaticamente** (como depois de salvar um formulário ou fazer login).

---

## Passo 7: Rotas Dinâmicas — a Tela `detalhe/[id]`

Agora vamos ver algo poderoso: uma tela que se adapta ao conteúdo. Em vez de criar 100 telas para 100 itens, criamos **uma só** tela que muda conforme o `id` que recebe.

1. Crie uma pasta `app/detalhe/` e dentro dela um arquivo `[id].tsx`:

```tsx
{% raw %}
import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function DetalheItem() {
  // Lê o valor que veio na rota: /detalhe/42 → { id: '42' }
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Text>Detalhes do item #{id}</Text>
    </View>
  );
}
{% endraw %}
```

Explicação:

- **`[id].tsx`** — Os colchetes dizem ao Router: "essa tela recebe qualquer valor aqui". `/detalhe/42`, `/detalhe/99`, `/detalhe/abc` — tudo abre a mesma tela.
- **`useLocalSearchParams`** — É o hook que lê o valor enviado na URL. Se o link foi `/detalhe/42`, esse hook retorna `{ id: '42' }`.

> [!NOTE]
> Esse padrão é o que você usará na tela de detalhe do **seu** projeto. Por exemplo, `/detalhe/7` mostra o registro número 7 do banco de dados.

---

## Checklist da Aula 06

Marque cada item quando conseguir fazer:

- [ ] Criei a pasta `(tabs)` dentro de `app/` (com parênteses!)
- [ ] Movi o `index.tsx` para dentro de `app/(tabs)/`
- [ ] Criei o arquivo `about.tsx` em `app/(tabs)/`
- [ ] Criei o `_layout.tsx` dentro de `(tabs)` com `<Tabs>`
- [ ] Configurei o `app/_layout.tsx` raiz com `<Stack>`
- [ ] O menu inferior aparece com duas abas: "Início" e "Sobre"
- [ ] Ao tocar em "Sobre", a tela troca fluidamente
- [ ] Entendi a diferença entre `<Link>` e `useRouter()`

> [!WARNING]
> Se algum item ficou sem marcar, volte no passo correspondente. Não siga em frente com pendências — a Aula 07 depende dessa navegação.

---

## Como isso se aplica ao seu projeto

O sistema de navegação com Expo Router é a **espinha dorsal** do seu projeto. Após esta aula, você já sabe criar quantas telas precisar:

- A tela **inicial** (`index.tsx`) pode listar os registros do seu tema.
- A tela **detalhe** (`detalhe/[id]`) pode mostrar os detalhes de um registro específico, lendo o `id` com `useLocalSearchParams`.
- As telas de **cadastro e edição** podem ser abertas com `router.push()` e fechadas com `router.back()`.
- O arquivo `_layout.tsx` com `<Tabs>` ou `<Stack>` controla como as telas se organizam e como o botão "Voltar" funciona automaticamente.

Na próxima aula (Aula 07), vamos aprender a **capturar dados do usuário** com formulários — e integration com essa navegação que acabou de ficar pronta.

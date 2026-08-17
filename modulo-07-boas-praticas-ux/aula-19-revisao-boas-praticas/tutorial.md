# Tutorial: O Refino das Gavetas 🗄️

**Sugestão de execução:** Quinzena 24 | **Bimestre:** 4

> [!NOTE]
> **O que você vai aprender hoje:**
> - Organizar arquivos do projeto em pastas por responsabilidade (`components/`, `database/`, `contexts/`)
> - Criar componentes reutilizáveis que recebem dados via **props** sem conhecer a origem
> - Centralizar constantes (cores, chaves, textos fixos) num arquivo único
> - Entender o princípio de **responsabilidade única**: cada arquivo faz uma coisa só
>
> **Pré-requisitos:** [Aula 18](../aula-18-ux-loading-empty-state-erros/README.md) — UX de loading e empty state aplicados.

---

O tutorial de hoje não vai ser um gigantesco laboratório com novo pacote NPM e banco de dados C++. Nós vamos **organizar** o que já temos. É como arrumar a despensa depois de uma maratona de compras — nada de novo entra, mas tudo fica no lugar certo.

> [!TIP]
> Pense no seu projeto como uma cozinha profissional: os talheres ficam num drawer, os temperos numa prateleira e os pratos em outro armário. Misturar tudo num armário só funciona até alguém pedir algo específico. Aí vira bagunça.

---

## Passo 1: Construindo as Caixinhas da Hierarquia

Olhe pro lado esquerdo do seu Expo. Pare de largar `.js` no root. Vamos criar **pastas** para cada responsabilidade:

- **Pasta `bancoDeDados/`** — guardará seu arquivo base de gerenciar o SQLite.
- **Pasta `ui_componentes/`** — o lugar organizado dos seus botões, cards e elementos visuais.
- **Pasta `contextosCeu/`** — onde seu Provider global vive.
- **Arquivo `constantesCores.js`** — onde ficam suas chaves e cores fixas.

> [!WARNING]
> **Erro comum de iniciante:** jogar tudo na pasta `app/`. O Expo Router usa a pasta `app/` apenas para rotas (telas). Componentes reutilizáveis, lógica de banco e constantes **não** ficam lá. É como colocar os talheres dentro do fogão — não faz sentido.

Se a pasta não existir, crie com o botão direito no VS Code → "New Folder". Não precisa rodar nenhum comando no terminal.

---

## Passo 2: O Desacoplamento da Interface

Imagine que você tem um botão lindo que aparece em 3 telas diferentes. Se ele estiver dentro da pasta `ui_componentes/BotaoLindoCustomizado.tsx`, ele é **limpo e independente** — recebe Props (dados injetados) sem saber de onde vieram as infos.

```tsx
{% raw %}
import { TouchableOpacity, Text } from 'react-native';
import { CORES_BRAND } from '../constantesCores.js'; // Puxando o chefe das constantes!

// Olha o PROP {AcaoDoClick} injetada que os pais mandam:
type Props = { label: string; onPress: () => void };

export default function BotaoAcao({ label, onPress }: Props) {
   return (
       <TouchableOpacity 
           onPress={onPress} 
           style={{ backgroundColor: CORES_BRAND.AZUL_LAGO_MISTERIOSO, padding: 10, borderRadius: 8 }}
        >
          <Text style={{color: 'white'}}>{label}</Text>
       </TouchableOpacity>
   )
}
{% endraw %}
```

O que está acontecendo aqui:

1. O componente recebe `label` (texto do botão) e `onPress` (o que fazer ao clicar) via **props**.
2. Ele **não sabe** de onde vem o texto ou o que acontece ao clicar — só faz o que mandaram.
3. As cores vêm do arquivo de constantes, não estão hardcoded no componente.

> [!NOTE]
> **O que são Props?**
> Props (propriedades) são como **parâmetros de função** que passamos para um componente. Pense num pacote de delivery: o entregador (componente) recebe o pedido (props) sem saber quem cozinhou (donos dos dados).

---

## Passo 3: Invocações dos Pais nas Gavetas

Na tela 6 mil pastas acima, sua Home chama o componente reutilizado para brilhar sem ter medo de repetições:

```tsx
   // Nota: não inclua a extensão .tsx no import — o bundler resolve automaticamente
   import BotaoAcao from '../components/BotaoAcao';

   export default function TelaPrincipal() {
       return (
          <View>
              {/* O mesmo componente reutilizado com ações diferentes — zero duplicação de estilo */}
              <BotaoAcao label="Adicionar item" onPress={adicionarItem} />
              
              <BotaoAcao label="Ver resumo" onPress={abrirResumo} />
          </View>
       )
   }
```

Repare que o **mesmo componente** (`BotaoAcao`) aparece duas vezes, mas com textos e ações diferentes. **Zero** linhas de estilo duplicadas. Se você mudar o estilo do botão uma vez, as duas instâncias mudam junto.

> [!TIP]
> **Regra de ouro:** se você copiou e colou o mesmo componente em 2+ telas, ele precisa estar num arquivo separado. Extração agora evita manutenção caótica depois.

---

## Passo 4 (Bônus): Memoização com `React.memo`, `useMemo` e `useCallback`

Performance no React Native significa **renderizar menos vezes**. Cada re-render recalcula a tela inteira; com listas grandes ou componentes pesados, isso custa caro. A **memoização** diz ao React: "só re-renderize se algo que eu uso mudou de verdade".

### `React.memo` — evita re-render de componentes

Envolva o componente para que ele só re-renderize quando as **props** mudarem:

```tsx
import { memo } from 'react';

type Props = { item: Item; aoTocar: () => void };

function LinhaItem({ item, aoTocar }: Props) {
  return <TouchableOpacity onPress={aoTocar}><Text>{item.titulo}</Text></TouchableOpacity>;
}

export default memo(LinhaItem); // Não re-renderiza se as props forem iguais
```

### `useMemo` — evita recálculo de valores caros

Se um valor é derivado de uma lista grande (filtro, total, soma), `useMemo` só recalcula quando as dependências mudam:

```tsx
const total = useMemo(() => {
  return itens.reduce((soma, item) => soma + item.valor, 0);
}, [itens]); // Só recalcula quando `itens` muda
```

### `useCallback` — estabiliza funções passadas como props

Funções criadas no corpo do componente são **novas a cada render**, o que anula o `memo`. Use `useCallback` para manter a mesma referência:

```tsx
const aoTocarItem = useCallback((id: number) => {
  router.push(`/detalhe/${id}`);
}, []); // Mesma função em todos os renders
```

### Quando usar (e quando NÃO)

| Use | Evite |
|-----|-------|
| Listas longas com `FlatList` e itens caros | Aplicar em todo componente (complica sem ganho) |
| Cálculos pesados repetidos (filtros, totais) | Valores triviais (somar 2 números) |
| Componentes que re-renderizam demais | Componentes que já re-renderizam pouco |

> [!IMPORTANT]
> **Regra de ouro:** meça primeiro (veja lentidão real), otimize depois. A memoização prematura deixa o código confuso sem trazer ganho — no seu projeto final, aplique-a em **listas** e em **componentes que aparecem várias vezes**.

---

## Checklist da Aula 19

Marque cada item quando conseguir fazer:

- [ ] Criei a pasta `components/` no meu projeto
- [ ] Criei a pasta `database/` (ou `bancoDeDados/`) no meu projeto
- [ ] Criei um arquivo de constantes (cores, chaves)
- [ ] Extraí pelo menos 1 componente reutilizável para a pasta `components/`
- [ ] O componente usa props em vez de dados hardcoded
- [ ] (Bônus) Apliquei `React.memo` ou `useCallback` em pelo menos 1 componente

> [!WARNING]
> Se algum item ficou sem marcar, volte no passo correspondente. Não siga em frente com pendências — a atividade cobra tudo isso.

---

## Como isso se aplica ao seu projeto

Antes da entrega final, organize o seu projeto nesta estrutura:

```
seu-projeto/
├── app/               ← Telas (Expo Router)
│   ├── index.tsx
│   └── nova-item.tsx
├── components/        ← Componentes visuais reutilizáveis
│   ├── BotaoAcao.tsx
│   └── CartaoItem.tsx
├── database/          ← Lógica de banco de dados
│   └── db.ts          ← openDatabaseSync + funções de CRUD
├── contexts/          ← Providers globais (tema, auth, etc.)
│   └── TemaContext.tsx
└── constants/
    └── cores.ts       ← Cores, chaves e textos fixos
```

> [!IMPORTANT]
> Com essa estrutura, cada arquivo tem uma responsabilidade clara, é fácil de testar e apresentar na defesa do projeto. A Aula 20 exige essa organização como critério de aprovação.

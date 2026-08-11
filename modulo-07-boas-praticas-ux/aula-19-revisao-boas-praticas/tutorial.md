# Tutorial: O Refino das Gavetas 🗄️

**Sugestão de execução:** Quinzena 24 | **Bimestre:** 4

> **Pré-requisitos:** [Aula 18](../aula-18-ux-loading-empty-state-erros/README.md) — UX de loading e empty state aplicados.
>
> **O que você vai aprender:**
> - Organizar arquivos do projeto em pastas por responsabilidade (`components/`, `database/`, `contexts/`)
> - Criar componentes reutilizáveis que recebem dados via props sem conhecer a origem
> - Centralizar constantes (cores, chaves, textos fixos) num arquivo único
> - Entender o princípio de responsabilidade única: cada arquivo faz uma coisa só

---

O tutorial de hoje não engloba um gigantesco e imersivo "novo pacote NPM e banco de dados C++" que trincará nossos crânios.
Nós só englobaremos e separaremos em Pastas as bases de Ouro. Organize sua vida para entregar o App Final.

---

## Passo 1: Construindo as Caixinhas da Hierarquia

Olhe pro lado Esquerdo do seu Expo. Pare de largar `.js` no root. Nós vamos criar pastinhas para o modelo (Apesar das "Rotas" viverem na pasta App do Router, as Lógicas não).

- Pasta `bancoDeDados/` - Guardará seu aquivo Base de Gerar e Aterrisar o SQLite Base.
- Pasta `ui_componentes/` - O lixão organizado dos seus Botões soltos maravilhosos.
- Pasta `contextosCeu/` - Onde seu Provider global vive.
- Arquivo `constantesCores.js` - Onde você coloca suas Chaves e Cores Fixas!

## Passo 2: O Desacoplamento da Interface Mestra!
Se eu estiver dentro da SubPasta `ui_componentes/BotaoLindoCustomizado.tsx`, Olhe como ele é Limão Puro e Independente (Bate Props que mandaram pra ele sem saber de onde vieram as infos pra renderizar): 

```tsx
{% raw %}
import { TouchableOpacity, Text } from 'react-native';
import { CORES_BRAND } from '../constantesCores.js'; // Puxando o chefe das constantes!

// Olha o PROP {AcaoDoClick} injetada que os Paises mandam:
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

## Passo 3: Invocações dos Pais nas Gavetas

Na tela 6 Mil pastas à Cima, sua Home chama o Desacoplamento pra brilhar sem ter medo de repetições:

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

Este padrão de organização — um arquivo por responsabilidade, sem misturar banco, tela e lógica num arquivo só — é o que separa um protótipo de um projeto profissional. Avance para a atividade!

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

> 💡 **Regra de ouro:** meça primeiro (veja lentidão real), otimize depois. A memoização prematura deixa o código confuso sem trazer ganho — no seu projeto final, aplique-a em **listas** e em **componentes que aparecem várias vezes**.

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

Com essa estrutura, cada arquivo tem uma responsabilidade clara, é fácil de testar e apresentar na defesa do projeto.

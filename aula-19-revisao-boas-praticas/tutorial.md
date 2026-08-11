---
layout: default
render_with_liquid: false
---
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

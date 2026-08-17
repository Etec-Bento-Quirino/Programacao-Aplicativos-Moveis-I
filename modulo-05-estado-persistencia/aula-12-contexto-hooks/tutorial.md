# Tutorial: Montando um Dark Mode com Context API

**Sugestão de execução:** Quinzena 15 | **Bimestre:** 3

> [!NOTE]
> **O que você vai aprender hoje:**
> - Entender o problema de "passar props por muitas telas" (prop drilling)
> - Criar um `Context` para armazenar um estado global acessível por qualquer tela
> - Usar `createContext` e `useContext` para ler e alterar esse estado de qualquer lugar
> - Envolver o app com um `Provider` em `_layout.tsx` para distribuir o contexto
>
> **Pré-requisitos:** [Aula 11](../aula-11-hooks-usestate-useeffect/README.md) — `useState` e `useEffect` bem dominados.

---

Vamos usar uma analogia: a **Context API** é como um quadro de avisos na sala da escola. Todo mundo pode ler e escrever no quadro, sem precisar pedir ao colega da frente que repasse a informação. Nesta aula, vamos montar um quadro de avisos que guarda o **tema** do app (claro/escuro).

---

## Passo 1: Criando a Nuvem (o Quadro de Avisos)

Crie uma pasta `contexts/` na raiz do seu projeto. Dentro dela, crie o arquivo `TemaContext.tsx`:

```tsx
import { createContext, useState } from 'react';

// Cria o "quadro de avisos" com valores padrão
export const TemaContext = createContext({
  tema: 'claro',
  setTema: (novo_tema: string) => {}
});

// O Provider = o quadro de avisos envolvendo todas as telas
export function TemaProvider({ children }) {
  const [tema, setTema] = useState('claro');

  return (
    <TemaContext.Provider value={{ tema, setTema }}>
      {children}
    </TemaContext.Provider>
  );
}
```

> [!NOTE]
> **O que é `createContext`?** É como criar um link compartilhado no Google Drive. O link existe, mas ainda não tem nada dentro. O `Provider` é quem coloca o conteúdo (o valor de `tema`) nesse link.

> [!TIP]
> Mantenha os arquivos de contexto numa pasta separada (`contexts/`). Nunca misture com arquivos de rota do Expo Router — isso organiza o projeto e evita confusão.

---

## Passo 2: Envolvendo o App com o Provider (o Guarda-Chuva)

Agora precisamos garantir que **todas** as telas ficam "debaixo do guarda-chuva". Vá no arquivo `_layout.tsx` (ou `App.tsx`) e envolva tudo com o `TemaProvider`:

```tsx
import { TemaProvider } from '../contexts/TemaContext';
import { Stack } from 'expo-router';

export default function LayoutRaiz() {
  return (
    <TemaProvider>
      <Stack>
        {/* Suas rotas aqui */}
      </Stack>
    </TemaProvider>
  );
}
```

> [!IMPORTANT]
> O `<TemaProvider>` precisa envolver **tudo** que deve ter acesso ao tema. Se você colocar ele apenas dentro de uma tela, as outras não vão enxergar o contexto.

### O que acontece agora

O quadro de avisos está montado e cobrindo todas as telas. Qualquer componente filho pode ler o tema — sem precisar que o pai passe nada via props.

---

## Passo 3: Bebendo da Nuvem (useContext)

Agora vamos criar uma tela de Configurações que alterna o tema, e uma tela Home que reflete a mudança.

### Tela de Configurações (ConfigScreen.tsx)

```tsx
import { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TemaContext } from '../contexts/TemaContext';

export default function ConfigScreen() {
  // Puxa dados do quadro de avisos — sem props!
  const { tema, setTema } = useContext(TemaContext);

  const isDark = tema === 'escuro';

  return (
    <View style={{ flex: 1, backgroundColor: isDark ? '#111' : '#fff', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: isDark ? '#fff' : '#000', fontSize: 24 }}>
        Tema atual: {tema}
      </Text>

      <TouchableOpacity
        onPress={() => setTema(isDark ? 'claro' : 'escuro')}
        style={{ padding: 15, backgroundColor: 'blue', borderRadius: 8, marginTop: 20 }}
      >
        <Text style={{ color: '#fff' }}>
          Alternar para {isDark ? 'Claro' : 'Escuro'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
```

> [!TIP]
> Repare que não há nenhuma prop vindo do componente pai. O `useContext` puxa o dado diretamente do quadro de avisos. É como ir ao quadro e ler — não precisa que o professor grite a informação para você.

### Tela Home (HomeScreen.tsx)

```tsx
import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TemaContext } from '../contexts/TemaContext';

export default function HomeScreen() {
  const { tema } = useContext(TemaContext);

  const isDark = tema === 'escuro';

  return (
    <View style={{ flex: 1, backgroundColor: isDark ? '#111' : '#fff', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: isDark ? '#fff' : '#000', fontSize: 28 }}>
        {isDark ? 'Modo Escuro Ativado' : 'Modo Claro Ativado'}
      </Text>
    </View>
  );
}
```

> [!WARNING]
> Se a Home não mudar quando você alterna o tema na Configurações, verifique se o `TemaProvider` está envolvendo **todas** as rotas no `_layout.tsx`. Se ele estiver apenas dentro de uma rota, as outras não vão enxergar o contexto.

---

## Passo 4: Testando a Mágica

1. Salve todos os arquivos.
2. Rode `npm start` no terminal.
3. Abra a tela de Configurações no Expo Go e toque no botão "Alternar".
4. Navegue até a Home — o fundo e o texto devem mudar instantaneamente.

> [!NOTE]
> **O que aconteceu?** Você alterou o tema na Tela de Configurações. O `setTema` atualizou o valor na "nuvem" (o Context). A Home, que estava "bebendo" da mesma nuvem via `useContext`, redesenhou automaticamente — sem nenhuma prop sendo passada entre elas.

### O que você deve ver

```
Tela Configurações:                    Tela Home:
┌─────────────────────┐               ┌─────────────────────┐
│ Tema atual: claro   │  → toque →    │ Modo Claro Ativado  │
│ [Alternar para      │               │ (fundo branco)      │
│  Escuro]            │               │                     │
└─────────────────────┘               └─────────────────────┘

Tela Configurações:                    Tela Home:
┌─────────────────────┐               ┌─────────────────────┐
│ Tema atual: escuro  │  → volta →   │ Modo Escuro Ativado │
│ [Alternar para      │               │ (fundo preto)       │
│  Claro]             │               │                     │
└─────────────────────┘               └─────────────────────┘
```

---

## Checklist da Aula 12

Marque cada item quando conseguir fazer:

- [ ] Criei o arquivo `TemaContext.tsx` com `createContext` e o Provider
- [ ] Envolvei o app com `<TemaProvider>` no `_layout.tsx`
- [ ] Usei `useContext(TemaContext)` na tela de Configurações
- [ ] Usei `useContext(TemaContext)` na tela Home
- [ ] Ao trocar o tema na Configurações, a Home muda sozinha
- [ ] O app roda sem erros no Expo Go

> [!NOTE]
> Se algum item ficou sem marcar, volte no passo correspondente. O Context API é uma das ferramentas mais poderosas do React — domine-a aqui e o resto do curso fica mais fácil.

---

## Como isso se aplica ao seu projeto

O `useContext` é mais útil quando você precisa de dados compartilhados entre telas sem passar props manualmente:

| Situação no projeto | Como o Context ajuda |
|---------------------|----------------------|
| Tema do app (claro/escuro) | `TemaContext` aplica em todas as telas |
| Usuário logado | `AuthContext` mantém o nome/foto acessível em qualquer tela |
| Lista de tarefas | `TarefasContext` permite editar na Home e nos Detalhes |
| Categoria selecionada | Filtra a lista sem recarregar do banco a cada troca de aba |

Para a **Entrega 4** do projeto, se o app crescer em complexidade (múltiplas telas editando o mesmo dado), migrar para um `Context` evita bugs de dados desatualizados entre telas. Vejo você na Aula 13! 🚀

# Tutorial: O Domínio do Sol e da Lua (Dark Mode)

**Sugestão de execução:** Quinzena 15 | **Bimestre:** 3

> **Pré-requisitos:** [Aula 11](../aula-11-hooks-usestate-useeffect/README.md) — `useState` e `useEffect` bem dominados.
>
> **O que você vai aprender:**
> - Entender o problema de "passar props por muitas telas" (prop drilling)
> - Criar um `Context` para armazenar um estado global acessível por qualquer tela
> - Usar `createContext` e `useContext` para ler e alterar esse estado de qualquer lugar
> - Envolver o app com um `Provider` em `_layout.tsx` para distribuir o contexto

---

Nós iremos montar a nuvem de Tema do zero. Esse sistema será seu passaporte base para quando for criar coisas como "*Autenticação em Login*", em que o usuário precisa ser lido no app todo.

---

## Passo 1: Construindo o Céu (A Arquitetura de Nuvem)

Use uma pasta separada no projeto (Por exemplo `/contexts/TemaContext.tsx`).
Você nunca deve misturar nuvens com arquivos de Rota do Expo.

```tsx
import { createContext, useState } from 'react';

// O ESQUELETO DA NUVEM (O que tem dentro do buraco?)
export const TemaContext = createContext({ 
    tema: 'claro', 
    setTema: (novo_tema: string) => {} // Tipagem TS de brincadeira só pra prever as coisas
});

// A NUVEM MATERNA QUE ENVOLVERÁ O APLICATIVO
export function TemaProvider({ children }) {
  
  // Esse será o cérebro Oficial e único de pintura deste tema!
  const [tema, setTema] = useState('claro');
  
  return (
    <TemaContext.Provider value={{ tema, setTema }}>
      {/* Esse "Children" mágico é o Seu App Inteiro injetado no meio do Provider! */}
      {children}
    </TemaContext.Provider>
  );
}
```

---

## Passo 2: O Guarda-Chuva (Provider Injetado)

Agora nós precisamos garantir que todas as coisas operam embaixo da Nuvem do Passo 1.
Vá na Raíz máxima da sua compilação. (No Expo Router seria seu famigerado `app/_layout.tsx`, ou `App.tsx` global).

```tsx
// O topo
import { TemaProvider } from '../contexts/TemaContext';

// A injeção em volta do roteador:
export default function LayoutRaiz() {
  return (
    <TemaProvider>  { /* Aqui, abraçamos forte */ }
        <Stack> ... </Stack>
    </TemaProvider>
  );
}
```

---

## Passo 3: Sugando a Água da Nuvem das Telas

Com isso rodando, abra o código da sua Tela "Configurações.tsx" ou "Home.tsx". Em qualquer botão de profundidade, invoque O Gancho do Contexto:

```tsx
import { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TemaContext } from '../contexts/TemaContext'; // 👈 Importa a estrutura da Nuvem

export default function ConfigScreen() {
  // 1. Invoca a Ponte
  const { tema, setTema } = useContext(TemaContext); // 👈 SUGANDO OS DADOS DA NUVEM: Repare que não há Props enviadas do Pai!

  // 2. Condicionais Dinâmicos de Render Baseado na variável suprema:
  const isDark = tema === 'escuro';

  return (
    <View style={{ flex: 1, backgroundColor: isDark ? '#111' : '#fff' }}>
      
      <Text style={{ color: isDark ? '#fff' : '#000' }}>
         Tema Cósmico atual: {tema}
      </Text>
      
      <TouchableOpacity 
         onPress={() => setTema(isDark ? 'claro' : 'escuro')}
         style={{ padding: 15, backgroundColor: 'blue'}}
      >
        <Text>Alternar Modo do Computador</Text>
      </TouchableOpacity>
    </View>
  );
}
```

O botão altera o contexto global. O contexto alterado faz todas as telas que o consomem se redesenharem automaticamente — sem precisar passar nenhuma prop entre elas.

---

## Como isso se aplica ao seu projeto

O `useContext` é mais útil no projeto quando precisar de dados compartilhados entre telas sem passar props manualmente:

- **Tipo A/B/C/D — Tema do app:** o usuário pode escolher tema claro/escuro nas configurações e o `TemaContext` aplica em todas as telas simultaneamente
- **Tipo A (Lista de Tarefas):** um contexto de "tarefas" pode tornar a lista acessível na tela principal e na tela de detalhes sem navegação por parâmetros
- **Tipo D (Controle de Gastos):** um contexto de "categoria selecionada" permite filtrar a lista sem recarregar do banco toda vez que o usuário muda de aba

Para a **Fase 4**, se o projeto crescer em complexidade (múltiplas telas editando o mesmo dado), migrar para um `Context` evita bugs de dados desatualizados entre telas.

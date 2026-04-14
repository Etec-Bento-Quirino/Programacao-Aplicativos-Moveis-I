# Tutorial: O Domínio do Sol e da Lua (Dark Mode)

**Sugestão de execução:** Quinzena 15.

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
import { TemaContext } from '../contexto/TemaContext'; // Puxe sempre quem exportamos

export default function ConfigScreen() {
  // 1. Invoca a Ponte
  const { tema, setTema } = useContext(TemaContext);

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

Mágica? Sim. Engenharia Pura. O botão muda a nuvem. A nuvem muda a propriedade do StyleSheet, que força o motor do celular pintar tudo de preto na mesma hora.
Prossiga para a atividade!

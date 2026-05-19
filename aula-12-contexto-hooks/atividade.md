# Atividade 12: Context API (Variáveis Globais) ⛅

**Objetivo da Atividade:**

Aplicar o conceito de injeção de dependências em nuvem usando a `Context API`. Você provará que uma variável global pode contornar o problema de "Prop Drilling" (passagem infinita de propriedades) ao ser lida por componentes distintos e separados pela navegação.

---

## O Desafio: Compartilhar Dados Entre Telas Isoladas

Você deve criar duas telas completamente distintas usando rotas e permitir que elas consumam o mesmo estado global.

1. Construa e envolva sua aplicação com um `Context` (Nuvem Global) que mantenha o estado do tema (ex: claro ou escuro) e forneça também uma função de troca (`toggleTheme`).
2. Acesse sua "Tela 1" (ex: Configurações). Esta tela terá um botão que irá acionar a função que alterna o estado do tema contido no contexto.
3. Acesse sua "Tela 2" (ex: Home). **Sem enviar a variável via parâmetro de navegação**, puxe os dados usando `useContext` diretamente do Context global. Renderize nela uma mensagem condicional como *"Modo Escuro Ativado"* ou *"Modo Claro Ativado"*, juntamente com o fundo modificado correspondente.

### 💡 Dica de como iniciar:

Para utilizar o `Context`, você precisará criar um arquivo para instanciar a "Nuvem". Envolva o `_layout.tsx` (ou o `App.js` base) com o `<ThemeProvider>` criado. Use `useContext(ThemeContext)` dentro das telas-filha para consumir ou modificar os dados.

```tsx
// 1. Exemplo do Arquivo de Contexto (ThemeContext.tsx)
import React, { createContext, useState } from 'react';

// Exportando o "Mapa/Nuvem" vazio
export const ThemeContext = createContext();

// Componente englobador responsável pelo estado
export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

```tsx
// 2. Exemplo da sua Tela "Home" que lê do Contexto
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from './ThemeContext'; // Ajuste o caminho

export default function Home() {
  // Puxa a variável diretamente da nuvem
  const { isDark } = useContext(ThemeContext);

  return (
    <View style={{ flex: 1, backgroundColor: isDark ? '#222' : '#FFF', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: isDark ? '#FFF' : '#222' }}>
        {isDark ? "Modo Escuro Ativado 🌙" : "Modo Claro Ativado ☀️"}
      </Text>
    </View>
  );
}
```

## Entrega:
Navegue para a Tela 1, alterne o botão mudando para o tema desejado, e depois vá para a Tela 2. Tire um print da Tela 2 mostrando que o tema e o texto refletiram corretamente o valor global recém alterado, provando que as rotas estão devidamente integradas à Nuvem (`Context`). Envie na plataforma!

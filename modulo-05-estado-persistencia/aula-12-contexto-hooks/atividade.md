# Atividade 12: Context API — Tema Compartilhado Entre Telas ⛅

**Sugestão de execução:** Quinzena 15 | **Bimestre:** 3 | **Valendo XP e nota**

---

**Objetivo da Atividade:** provar que uma variável global pode ser lida e alterada por duas telas distintas, sem passar props entre elas.

> [!NOTE]
> Se você ainda não fez o [Tutorial da Aula 12](tutorial.md), faça primeiro. Esta atividade cobra exatamente os passos de lá — só com um desafio extra.

---

## O Desafio: Duas Telas, Um Tema

Crie duas telas completamente distintas usando rotas e permita que ambas consumam o mesmo estado global do tema.

1. Crie um **Context** que mantenha o estado do tema (claro ou escuro) e forneça uma função `toggleTheme` para alternar.
2. **Tela 1 (Configurações):** tenha um botão que aciona o `toggleTheme` para trocar o tema.
3. **Tela 2 (Home):** sem enviar nenhuma prop, leia o tema do Context via `useContext` e renderize:
   - Mensagem: "Modo Escuro Ativado" ou "Modo Claro Ativado"
   - Fundo modificado (preto para escuro, branco para claro)

### Dica de como iniciar

```tsx
// 1. Arquivo do Contexto (ThemeContext.tsx)
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

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
// 2. Tela Home que lê do Contexto
import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { ThemeContext } from './ThemeContext'; // Ajuste o caminho

export default function Home() {
  const { isDark } = useContext(ThemeContext);

  return (
    <View style={{ flex: 1, backgroundColor: isDark ? '#222' : '#FFF', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: isDark ? '#FFF' : '#222' }}>
        {isDark ? "Modo Escuro Ativado" : "Modo Claro Ativado"}
      </Text>
    </View>
  );
}
```

> [!TIP]
> Não esqueça de envolver o `_layout.tsx` com o `<ThemeProvider>`. Sem isso, as telas não vão enxergar o contexto.

> [!WARNING]
> Se a Home não reagir à mudança de tema, verifique se o `ThemeContext` importado é o **mesmo** arquivo nas duas telas. Se você criar dois arquivos diferentes, são duas nuvens separadas — e isso não funciona.

---

## Entrega

Navegue para a Tela 1, alterne o tema, depois vá para a Tela 2. Tire um print da Tela 2 mostrando que o tema refletiu a mudança. Envie na plataforma!

---

## Checklist de Entrega

- [ ] Criei o arquivo do Context com `createContext` e o Provider
- [ ] Envolvei o app com o Provider no layout raiz
- [ ] Tela 1 tem um botão que alterna o tema
- [ ] Tela 2 lê o tema via `useContext` (sem props)
- [ ] O fundo e o texto mudam ao alternar o tema
- [ ] Print ou vídeo comprovando o funcionamento

---

## Como isso se aplica ao seu projeto

A Context API é a ferramenta certa para dados que precisam ser compartilhados entre várias telas — tema, usuário logado, idioma, filtros globais. No Trabalho em Grupo, se você tiver mais de 3 telas acessando o mesmo dado, Context API evita o "prop drilling" e mantém o código limpo. 🚀

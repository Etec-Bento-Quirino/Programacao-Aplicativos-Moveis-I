# Aula 12 – Contexto e mais hooks (createContext, useContext)

**Sugestão de execução:** quinzena 15 (10/08/2026 a 22/08/2026).

**Base tecnológica:** Gerenciamento de estado dos componentes; compartilhamento entre telas.

---

## Objetivo

Usar **createContext** e **useContext** para compartilhar um valor (ex.: tema claro/escuro ou preferência do usuário) entre vários componentes **sem** passar props em cada nível. Conhecer resumo de **useCallback** e **useMemo**.

---

## Parte 1 – Criar o Context e o Provider

Crie um arquivo, ex.: **contexto/TemaContext.js**:

```javascript
import { createContext, useState } from 'react';

export const TemaContext = createContext({ tema: 'claro', setTema: () => {} });

export function TemaProvider({ children }) {
  const [tema, setTema] = useState('claro');
  return (
    <TemaContext.Provider value={{ tema, setTema }}>
      {children}
    </TemaContext.Provider>
  );
}
```

---

## Parte 2 – Envolver o app com o Provider

No **App.js**:

```javascript
import { TemaProvider } from './contexto/TemaContext';

export default function App() {
  return (
    <TemaProvider>
      <NavigationContainer>
        <Stack.Navigator>...</Stack.Navigator>
      </NavigationContainer>
    </TemaProvider>
  );
}
```

Assim, qualquer tela dentro de **TemaProvider** pode acessar **tema** e **setTema**.

---

## Parte 3 – Usar o contexto em uma tela

```javascript
import { useContext } from 'react';
import { TemaContext } from '../contexto/TemaContext';

export default function ConfigScreen() {
  const { tema, setTema } = useContext(TemaContext);

  return (
    <View style={styles.container}>
      <Text>Tema atual: {tema}</Text>
      <TouchableOpacity onPress={() => setTema(tema === 'claro' ? 'escuro' : 'claro')}>
        <Text>Alternar tema</Text>
      </TouchableOpacity>
    </View>
  );
}
```

Em outra tela, use o mesmo **useContext(TemaContext)** e aplique cores diferentes conforme `tema` (ex.: backgroundColor: tema === 'escuro' ? '#333' : '#fff').

---

## Parte 4 – useCallback e useMemo (resumo)

- **useCallback(função, [deps])** – devolve a mesma função enquanto as dependências não mudarem; evita recriação em cada render (útil para funções passadas a filhos ou a FlatList renderItem).
- **useMemo(() => valor, [deps])** – calcula o valor uma vez e só recalcula quando deps mudar; evita cálculos pesados em todo render.

Para esta aula, o foco é Context; useCallback/useMemo podem ser usados depois para otimização.

---

## Checklist

- [ ] createContext e Provider criados; valor (ex.: tema, setTema) no value do Provider.
- [ ] App (ou navegação) envolvido pelo Provider.
- [ ] useContext usado em pelo menos uma tela para ler e alterar o valor; alteração refletida (ex.: tema alternando).

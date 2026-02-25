# Aula 03 – Layouts em React Native (View, Flexbox, StyleSheet)

**Sugestão de execução:** quinzena 3 (09/03/2026 a 20/03/2026).

**Base tecnológica:** Desenvolvimento de layout de aplicativo mobile; criação e configuração de componentes básicos – Layouts.

---

## Objetivo

Usar **View**, **StyleSheet** e **Flexbox** para organizar elementos na tela: container centralizado, linhas e colunas.

---

## Parte 1 – View e StyleSheet

No React Native não existe “div” nem CSS de navegador. Usamos:
- **View** – “caixa” que agrupa outros componentes (como um div).
- **StyleSheet.create** – define estilos (objetos JavaScript) e aplica com `style={styles.nome}`.

Exemplo mínimo em `App.js`:

```javascript
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Olá, Mobile!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

- **flex: 1** – o container ocupa toda a tela.
- **alignItems: 'center'** – alinha os filhos no eixo transversal (horizontal, em coluna).
- **justifyContent: 'center'** – centraliza no eixo principal (vertical, em coluna).

---

## Parte 2 – Flexbox: direção e alinhamento

Por padrão, **flexDirection** é **'column'** (de cima para baixo). Para uma “linha” horizontal use **'row'**.

Exemplo com duas caixas em linha:

```javascript
<View style={styles.linha}>
  <View style={[styles.caixa, { backgroundColor: '#4CAF50' }]} />
  <View style={[styles.caixa, { backgroundColor: '#2196F3' }]} />
</View>
```

```javascript
linha: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: 20,
},
caixa: {
  width: 80,
  height: 80,
  borderRadius: 8,
},
```

- **flexDirection: 'row'** – elementos um ao lado do outro.
- **justifyContent: 'space-around'** – espaço entre os itens.
- **alignItems: 'center'** – centraliza na vertical (em relação à linha).

---

## Parte 3 – Prática guiada

1. Abra o projeto `OláMobile` (ou crie um novo com `npx create-expo-app@latest LayoutDemo --template blank`).
2. Em `App.js`, substitua o conteúdo por um layout com:
   - Um container principal (flex: 1, fundo claro).
   - Um título no topo (Text com "Meu layout").
   - Uma “linha” com duas Views coloridas (ex.: verde e azul), como no exemplo acima.
3. Salve e veja no emulador/Expo Go. Ajuste padding, tamanhos e cores até ficar como desejar.

---

## Checklist

- [ ] Usou View e StyleSheet.create.
- [ ] Entendeu flex: 1, alignItems, justifyContent.
- [ ] Testou flexDirection: 'row' com pelo menos dois blocos.

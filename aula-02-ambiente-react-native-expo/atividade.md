# Atividade 2: O Primeiro Aplicativo (Hello World) 🚀

**Objetivo da Atividade:**

Validar que você consegue executar o aplicativo gerado pelo Expo na sua máquina e no seu celular, e realizar alterações básicas de estilo no React Native.

---

## O Desafio: Alterando Cores e Textos

1. Inicie o servidor do seu aplicativo utilizando o comando adequado no terminal.
2. Abra o projeto no **Expo Go** do seu celular ou no emulador.
3. Altere o arquivo principal do aplicativo para exibir o texto *"Bem-vindo ao StickerSmash! 🚀"* e mude a cor de fundo (background) da tela para o tom escuro `#25292e`.

### 💡 Dica de como iniciar:

Para alterar o texto e o estilo do fundo, modifique o arquivo principal do projeto (geralmente `App.js` ou `index.tsx`). Encontre o componente `<Text>` e o contêiner `<View>` principal. Lembre-se de utilizar a folha de estilos `StyleSheet`.

```tsx
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // Aplique o estilo de fundo aqui
    <View style={styles.container}>
      <Text>Bem-vindo ao StickerSmash! 🚀</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e', // Altere a cor do fundo aqui
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

## Entrega:
Tire uma captura de tela (print) do aplicativo rodando no seu celular ou emulador, exibindo claramente o novo texto com a cor de fundo alterada. Envie a imagem na plataforma.

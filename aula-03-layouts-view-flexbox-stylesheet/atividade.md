# Atividade 3: Dominando o Flexbox 

**Objetivo da Atividade:**

Neste desafio, você irá praticar o uso do Flexbox para criar layouts responsivos no React Native. Em vez de usar medidas fixas, você utilizará as propriedades do Flexbox para alinhar e distribuir elementos na tela.

---

## O Desafio do Alinhamento

Crie um novo projeto no VS Code (ou utilize um projeto de testes existente) e desenvolva um layout contendo 3 blocos (`Views`) com cores distintas.

Siga estas instruções:
1. **Não utilize larguras ou alturas fixas (pixels)**. O layout deve ser construído inteiramente utilizando as propriedades de `flex`.
2. O seu componente principal deve conter uma `View` contêiner e 3 `Views` filhas coloridas.
3. **Bloco A:** Deve ocupar toda a metade superior da tela.
4. **Blocos B e C:** Devem dividir igualmente a metade inferior da tela, ficando posicionados lado a lado.
*(Dica: Para posicionar os blocos B e C lado a lado, você pode colocá-los dentro de uma nova `View` contêiner com `flexDirection: 'row'`).*

### 💡 Dica de como iniciar:

Para começar, crie um componente funcional básico. Lembre-se de que a `View` principal precisa ter `flex: 1` para ocupar toda a tela do dispositivo.

```tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Adicione o Bloco A aqui */}
      {/* Adicione o contêiner para os Blocos B e C aqui */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Faz a View principal ocupar a tela inteira
  },
  // Crie os estilos para os blocos usando flex: 1, flexDirection: 'row', etc.
});
```

## Entrega:
Quando o layout estiver funcionando corretamente no seu emulador ou dispositivo físico via Expo Go, tire uma captura de tela (print) e envie na plataforma com o nome `FlexTest`.

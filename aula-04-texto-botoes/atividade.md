# Atividade 4: Eventos e Botões 🚨

**Objetivo da Atividade:**

Criar botões interativos e capturar eventos de toque (`onPress`) do usuário. Um botão não tem utilidade sem uma ação vinculada a ele.

---

## O Desafio: Interatividade Básica

Adicione um evento de clique no botão principal do seu aplicativo que dispare um alerta nativo na tela.

1. No seu arquivo principal (ex: `index.tsx`), adicione um botão utilizando o componente `<Button>` ou uma implementação customizada.
2. Passe a propriedade `onPress` para acionar um alerta no dispositivo.

### 💡 Dica de como iniciar:

Para criar a interatividade, passe uma função anônima ou uma referência de função para a propriedade `onPress`. Importe o `Alert` nativo do `react-native` em vez da função `alert()` tradicional do navegador.

```tsx
import { View, Button, Alert, StyleSheet } from 'react-native';

export default function App() {
  const exibirAlerta = () => {
    Alert.alert("Aviso", "Em Breve: Acesso à Câmera!");
  };

  return (
    <View style={styles.container}>
      {/* Botão simples que chama a função */}
      <Button 
        title="Usar essa foto" 
        onPress={exibirAlerta} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
});
```

## Entrega:
Tire uma captura de tela (print) no exato momento em que o aviso (Pop-up do `Alert.alert`) aparecer no centro da tela após você tocar no botão. Envie a imagem na plataforma.

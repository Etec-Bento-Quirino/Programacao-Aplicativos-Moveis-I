# Atividade 8: Câmera e Galeria de Fotos 📷

**Objetivo da Atividade:**

Nesta atividade, você vai praticar o uso do `expo-image-picker` para abrir a galeria do dispositivo, e também exercitar a alteração de estado (`useState`) substituindo uma imagem estática pela foto selecionada pelo usuário.

---

## O Desafio: Imagem Dinâmica

Você deve substituir a foto padrão do seu componente por uma imagem que vem diretamente da galeria do celular.

1. No seu arquivo principal (ex: `index.tsx`), crie um estado (`useState`) para armazenar a URI da foto selecionada. O valor inicial pode ser nulo ou uma imagem padrão usando `require()`.
2. Dentro da função que processa o resultado do `ImagePicker` (onde você valida `if (!result.canceled)`), atualize esse estado para receber a URI da foto do cliente: `result.assets[0].uri`.
3. Edite o seu componente de Imagem (ou o componente `ImageViewer` customizado) para receber essa nova imagem dinâmica que está guardada no estado.

### 💡 Dica de como iniciar:

Para realizar essa troca, o estado deve gerenciar o caminho da imagem. Lembre-se de configurar a propriedade `source` da `<Image>` adequadamente, pois variáveis dinâmicas de URI usam um formato ligeiramente diferente (`{ uri: variavel }`) das imagens estáticas importadas via `require()`.

```tsx
import { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  // 1. O estado começa com a foto nula (podemos checar depois para exibir a estática)
  const [imagemSelecionada, setImagemSelecionada] = useState(null);

  const abrirGaleria = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    // 2. Se o usuário escolheu uma foto, nós jogamos ela pro estado!
    if (!result.canceled) {
      setImagemSelecionada(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      {/* 3. Renderizamos a imagem. Se tiver imagem do estado, usa ela. Se não, usa nulo ou uma local. */}
      {imagemSelecionada && (
        <Image source={{ uri: imagemSelecionada }} style={styles.image} />
      )}
      <Button title="Escolher da Galeria" onPress={abrirGaleria} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: 200, height: 200, marginBottom: 20 },
});
```

## Entrega:
Rode a aplicação e clique no botão para abrir a galeria nativa. Escolha uma foto do seu dispositivo (ou emulador). Quando voltar ao app, a foto selecionada deve aparecer na tela no lugar da anterior.
Tire uma captura de tela (print) do aplicativo exibindo a imagem selecionada e envie na plataforma!

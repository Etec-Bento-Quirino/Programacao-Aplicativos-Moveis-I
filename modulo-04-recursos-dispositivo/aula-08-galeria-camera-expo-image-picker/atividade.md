# Atividade 8: Imagem Dinâmica da Galeria 📷

**Sugestão de execução:** Quinzena 9 | **Bimestre:** 2 | **Valendo XP e nota**

---

**Objetivo da Atividade:** praticar o uso do `expo-image-picker` para abrir a galeria do dispositivo e exibir a foto escolhida pelo usuário na tela.

> [!NOTE]
> Se você ainda não fez o [Tutorial da Aula 08](tutorial.md), faça primeiro. Esta atividade cobra exatamente os passos de lá — com um desafio extra de troca dinâmica de imagem.

---

## O Desafio: Imagem Dinâmica

Você deve substituir a foto padrão do seu componente por uma imagem que vem **diretamente da galeria** do celular.

1. No seu arquivo principal (ex: `index.tsx`), crie um estado (`useState`) para armazenar a URI da foto selecionada. O valor inicial pode ser `null` ou uma imagem padrão usando `require()`.
2. Dentro da função que processa o resultado do `ImagePicker` (onde você valida `if (!result.canceled)`), atualize esse estado para receber a URI da foto: `result.assets[0].uri`.
3. Edite o seu componente de Imagem (ou o componente `ImageViewer` customizado) para receber essa nova imagem dinâmica guardada no estado.

> [!TIP]
> **Dica de como iniciar:** lembre-se de configurar a propriedade `source` da `<Image>` adequadamente. Variáveis dinâmicas de URI usam um formato ligeiramente diferente (`{ uri: variavel }`) das imagens estáticas importadas via `require()`.

### Código de Referência

```tsx
import { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const [imagemSelecionada, setImagemSelecionada] = useState(null);

  const abrirGaleria = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImagemSelecionada(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
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

> [!WARNING]
> O código acima usa `mediaTypes: ['images']` (formato atual). Em tutoriais antigos você verá `ImagePicker.MediaTypeOptions.Images` — essa constante foi **deprecada** e não funciona mais no SDK 54.

---

## Entrega

Rode a aplicação e clique no botão para abrir a galeria nativa. Escolha uma foto do seu dispositivo (ou emulador). Quando voltar ao app, a foto selecionada deve aparecer na tela no lugar da anterior.

Tire uma captura de tela (print) do aplicativo exibindo a imagem selecionada e envie na plataforma!

---

## Checklist de Entrega

Antes de enviar, confira:

- [ ] O `expo-image-picker` está instalado e funcionando
- [ ] A galeria abre ao clicar no botão
- [ ] A foto escolhida aparece na tela no lugar da anterior
- [ ] A foto não some ao navegar entre telas (estado persistente)
- [ ] Print enviado na plataforma

---

## Como isso se aplica ao seu projeto

Essa troca dinâmica de imagem é usada em vários temas do Trabalho em Grupo: foto de perfil, comprovante de compra, nota fiscal fotografa. Na Entrega 4, você pode usar a câmera como recurso bônus. O padrão que você praticou aqui (`pickImageAsync` → `!result.canceled` → `setImagemSelecionada`) é o mesmo que aparece em qualquer app que usa galeria. Capricho no print! 🚀

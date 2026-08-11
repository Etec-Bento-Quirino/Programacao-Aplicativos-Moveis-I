# Aula 08 – Galeria, Câmera e o Assincronismo

**Sugestão de execução:** Quinzena 9 | **Bimestre:** 2
**Base tecnológica:** expo-image-picker, Image URIs, Async/Await.

> **Pré-requisitos:** [Aula 07](../../modulo-03-navegacao-formularios/aula-07-formularios-entrada-dados/README.md) — formulários com `TextInput` e validação funcionando.
>
> **O que você vai aprender:**
> - Instalar `expo-image-picker` e abrir a galeria ou câmera do dispositivo
> - Entender `async/await`: por que pausar o código sem travar a tela enquanto o usuário escolhe uma foto
> - Salvar a URI (caminho) da imagem escolhida num `useState` para exibir na tela
> - Verificar se o usuário cancelou a seleção com `result.canceled`

---

---

## 1. Abrindo a Ponte de Câmera Oficial
O React Native não fala direto de forma tão fácil com a Galeria porque Android e iOS funcionam muito diferente sob o capô. A livraria `expo-image-picker` é a "tradutora".
No terminal, adicione: `npx expo install expo-image-picker`

## 2. A Mágica de "Parar o Tempo": async / await

Para garantir que o Celular não vai travar enquanto o cara demora pra escolher a foto na gaveta dele, nós abrimos a ponte com o comando `async` numa variável Assíncrona.
Volte ao seu Botão Genérico Yellow em `components/Button.tsx` e passe uma Arrow Function dinâmica que ele receberá nas Props! `onPress?: () => void`. Abrace isso no onPress.

Em seguida, na `(tabs)/index.tsx`:

```tsx
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react'; // Guardião local de variável volátil!

  // Função Assíncrona! 
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'], // 👈 Força a galeria a exibir SOMENTE FOTOS (impede vídeos)
      allowsEditing: true, // 👈 Libera o Crop de Imagem (Formato Instagram)
      quality: 1,
    });

    if (!result.canceled) {
      // SALVAR A VARIÁVEL DE ESTADO SE TIVER SUCESSO AQUI:
      // result.assets[0].uri = O Caminho Absoluto local do disco da foto do cara (file:///C:/Users...)
    }
  };
```

E simplesmente ligue isso no construtor do `<Button theme="primary" label="Escolher uma foto" onPress={pickImageAsync} />`.
Quando você apertar o botão, o sistema nativo exibirá a janela de permissão e abrirá a galeria.

> [!TIP]
> Note que usamos `mediaTypes: ['images']` — **um array** com a string `'images'`. Em tutoriais antigos você verá `mediaTypes: ImagePicker.MediaTypeOptions.Images`, mas essa constante foi **deprecada** e removida no SDK atual. Sempre prefira o array `['images']` (ou `['images', 'videos']` para aceitar os dois tipos).

---

## 1.1 Escolhendo entre Galeria ou Câmera

O `expo-image-picker` expõe **duas** portas: uma para a galeria e outra para a câmera real. O padrão é o mesmo — só muda a função chamada:

```tsx
import * as ImagePicker from 'expo-image-picker';

// 📁 Abre a GALERIA de fotos do celular:
const pickImageAsync = async () => {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ['images'],
    allowsEditing: true,
    quality: 1,
  });
  if (!result.canceled) {
    // result.assets[0].uri → caminho local da foto
  }
};

// 📸 Abre a CÂMERA do celular (só Android/iOS físico ou emulador):
const tirarFotoAsync = async () => {
  const result = await ImagePicker.launchCameraAsync({
    mediaTypes: ['images'],
    allowsEditing: true,
    quality: 1,
  });
  if (!result.canceled) {
    // result.assets[0].uri → caminho local da foto recém-tirada
  }
};
```

## 1.2 Pedindo Permissão na Mão (opcional, mas didático)

A galeria/câmera pedem permissão automaticamente quando você chama `launchImageLibraryAsync`/`launchCameraAsync`. Mas o SDK também expõe funções próprias de permissão, caso você queira pedir **antes** e reclamar com o usuário educadamente:

```tsx
// Câmera:
const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
if (!cameraPermission.granted) {
  Alert.alert('Sem acesso', 'Habilite a câmera nas configurações do dispositivo.');
}

// Galeria:
const libraryPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();
if (!libraryPermission.granted) {
  Alert.alert('Sem acesso', 'Habilite as fotos nas configurações do dispositivo.');
}
```

## 1.3 Opções de picker que você usará no projeto

| Opção | Efeito |
|---|---|
| `mediaTypes: ['images']` | Só fotos (bloqueia vídeos) — veio de `['images', 'videos']` se quiser os dois |
| `allowsEditing: true` | Habilita o recorte (crop) estilo Instagram após selecionar |
| `aspect: [4, 3]` | Proporção do recorte no Android |
| `quality: 1` | Qualidade da compressão (de `0` a `1`; `0.5` economiza espaço) |
| `base64: true` | Inclui os dados da imagem em Base64 no objeto retornado |
| `allowsMultipleSelection: true` | Permite escolher **várias** fotos de uma vez |
| `selectionLimit: 5` | Limite de fotos quando a seleção múltipla está ligada |

> [!IMPORTANT]
> Com `allowsMultipleSelection: true`, o resultado vem em **`result.assets`** (um array) — acesse `result.assets[0].uri` para a primeira foto ou use um loop (`for` / `map`) para percorrer todas. E `allowsEditing` é **ignorado** nesse modo: os dois são mutuamente exclusivos.

## 1.4 O que a função retorna (o troféu do picker)

O objeto `result` tem sempre duas formas, dependendo do que o usuário fez:

- **Cancelou:** `{ canceled: true, assets: null }`
- **Escolheu:** `{ canceled: false, assets: [{ uri, width, height, fileName, fileSize, ... }] }`

Cada item de `assets` é um `ImagePickerAsset` com campos úteis além do `uri`:

```tsx
const asset = result.assets[0];
console.log(asset.uri);          // caminho local: file:///...
console.log(asset.width);        // largura em pixels
console.log(asset.height);       // altura em pixels
console.log(asset.fileName);     // nome do arquivo, ex.: "foto_2026.jpg"
console.log(asset.fileSize);     // tamanho em bytes
console.log(asset.type);         // 'image' | 'video'
```

---

## Como isso se aplica ao seu projeto

O padrão `async/await` com `expo-image-picker` é usado em vários temas do Trabalho em Grupo (ex.: nota com foto, comprovante de despesa). A câmera/galeria pode ser opcional (recurso bônus para a Entrega 4). Em todos os casos o padrão é o mesmo: `pickImageAsync()` → verificar `!result.canceled` → salvar `result.assets[0].uri` num `useState` → exibir o `Image` passando no atributo `source` o objeto `{ uri: imagemSelecionada }`.

# Aula 08 – Galeria, Câmera e o Assincronismo

**Sugestão de execução:** quinzena 8.
**Base tecnológica:** expo-image-picker, Image URIs, Async/Await.

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
Quando você apertar o botão, o sistema nativo bloqueado vai rasgar a sua tela e soltar a ponte pedindo as permissões oficiais pro usuário!

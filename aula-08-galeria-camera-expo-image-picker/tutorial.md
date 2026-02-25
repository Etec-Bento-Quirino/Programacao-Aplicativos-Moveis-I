# Aula 08 – Galeria e câmera (expo-image-picker)

**Sugestão de execução:** quinzena 9 (11/05/2026 a 22/05/2026).

**Base tecnológica:** Manipulando recursos do dispositivo – galerias; imagens.

---

## Objetivo

Usar **expo-image-picker** para abrir a **galeria** (ou câmera), escolher uma **imagem** e **exibir** no app. Tratar **permissões** quando o usuário negar.

---

## Parte 1 – Instalar e pedir permissão

No terminal, na pasta do projeto:

```bash
npx expo install expo-image-picker
```

No código, importe e solicite permissão ao montar (ou ao tocar no botão):

```javascript
import * as ImagePicker from 'expo-image-picker';
import { Image } from 'react-native';

const [imagemUri, setImagemUri] = useState(null);
const [erroPermissao, setErroPermissao] = useState(null);

const pedirPermissaoGaleria = async () => {
  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (status !== 'granted') {
    setErroPermissao('Permissão para acessar a galeria foi negada.');
    return false;
  }
  setErroPermissao(null);
  return true;
};
```

---

## Parte 2 – Abrir a galeria e exibir a imagem

```javascript
const escolherDaGaleria = async () => {
  const ok = await pedirPermissaoGaleria();
  if (!ok) return;

  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 0.8,
  });

  if (!result.canceled) {
    setImagemUri(result.assets[0].uri);
  }
};
```

- **result.assets[0].uri** – URI da imagem escolhida (arquivo local no dispositivo).
- **allowsEditing** – permite recortar; **aspect** – proporção do recorte.

Para exibir:

```javascript
{imagemUri && (
  <Image source={{ uri: imagemUri }} style={styles.imagem} />
)}
```

Estilo:

```javascript
imagem: {
  width: 200,
  height: 200,
  borderRadius: 8,
  resizeMode: 'cover',
  marginTop: 16,
},
```

---

## Parte 3 – Câmera (opcional)

Permissão de câmera:

```javascript
const { status } = await ImagePicker.requestCameraPermissionsAsync();
```

Abrir câmera:

```javascript
const result = await ImagePicker.launchCameraAsync({
  allowsEditing: true,
  aspect: [4, 3],
  quality: 0.8,
});
```

Uso igual: `result.assets[0].uri` e exibir com `<Image source={{ uri: ... }} />`.

---

## Parte 4 – Tratamento quando permissão é negada

Se o usuário negar, não chame `launchImageLibraryAsync`; mostre uma mensagem na tela ou em Alert:

```javascript
{erroPermissao && (
  <Text style={styles.erro}>{erroPermissao}</Text>
)}
```

Ou: `Alert.alert('Atenção', erroPermissao);`

---

## Checklist

- [ ] expo-image-picker instalado; permissão solicitada antes de abrir a galeria.
- [ ] Imagem escolhida exibida na tela (Image com uri).
- [ ] Tratamento quando permissão é negada (mensagem ou Alert).

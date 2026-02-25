# Aula 08 - Galeria e câmera (expo-image-picker)

**Data:** 11/05/2026

---

## Apresentação

expo-image-picker: solicitar permissão (requestMediaLibraryPermissionsAsync, requestCameraPermissionsAsync); launchImageLibraryAsync e launchCameraAsync; exibir URI no Image.

---

## Slides

### Objetivo

Abrir galeria (ou câmera), escolher uma imagem e exibir no app. Tratar quando o usuário nega a permissão.

### Permissão

Antes de abrir galeria/câmera, chamar requestMediaLibraryPermissionsAsync (ou requestCameraPermissionsAsync). Se status !== 'granted', exibir mensagem e não abrir.

### Escolher imagem

launchImageLibraryAsync({ mediaTypes: Images, allowsEditing: true, aspect: [4,3], quality: 0.8 }). Resultado: result.assets[0].uri.

### Exibir

Guardar URI em useState; .

### Atividade da quinzena

App com botão que abre galeria, escolhe foto e exibe na tela. Mensagem clara quando permissão for negada.

### Próxima aula

Geolocalização: expo-location; obter latitude e longitude; exibir em texto (ou mapa).

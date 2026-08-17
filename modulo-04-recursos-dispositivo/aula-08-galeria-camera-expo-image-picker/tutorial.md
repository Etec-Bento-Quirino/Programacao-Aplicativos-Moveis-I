# Tutorial: Instalando a Câmera no StickerSmash

**Sugestão de execução:** Quinzena 9 | **Bimestre:** 2

> [!NOTE]
> **O que você vai aprender hoje:**
> - Instalar `expo-image-picker` e abrir a galeria ou câmera do dispositivo
> - Entender `async/await`: por que pausar o código sem travar a tela enquanto o usuário escolhe uma foto
> - Salvar a URI (caminho) da imagem escolhida num `useState` para exibir na tela
> - Verificar se o usuário cancelou a seleção com `result.canceled`
>
> **Pré-requisitos:** [Aula 07](../../modulo-03-navegacao-formularios/aula-07-formularios-entrada-dados/README.md) — formulários com `TextInput` e validação funcionando.

---

Vamos usar uma analogia: até agora você montou a tela do app como um quadro vazio. Hoje você vai **colocar uma foto nesse quadro** — mas não qualquer foto: uma que o **usuário escolhe** direto da galeria do celular dele. É como transformar seu app num Instagram rudimentar.

Para isso, precisamos de um tradutor: o JavaScript fala uma coisa, o hardware fala outra, e o `expo-image-picker` faz a ponte.

---

## Passo 1: Instalando o Tradutor (expo-image-picker)

Abra o terminal e **pare o servidor** do Expo (se estiver rodando) com `Ctrl+C`. Agora instale o pacote:

```bash
npx expo install expo-image-picker
```

> [!TIP]
> O `npx expo install` é diferente do `npm install`. Ele escolhe automaticamente a versão compatível com o Expo SDK do seu projeto. Sempre use esse quando for instalar pacotes Expo!

O terminal vai mostrar algo parecido com:

```
✔ Installed expo-image-picker
```

Ligue o servidor novamente:

```bash
npm start
```

> [!WARNING]
> Se o terminal mostrar um erro de "version mismatch", pare o servidor, delete a pasta `node_modules` e rode `npm install` antes de tentar de novo.

---

## Passo 2: O Estado para Guardar a Foto

Abra o arquivo `index.tsx` (ou o componente principal do seu projeto). Vamos criar um **estado** para guardar o caminho da foto escolhida.

> [!NOTE]
> **Lembrete rápido:** `useState` é como um **guardião de variável** — ele guarda um valor e avisa o React quando esse valor muda, para que a tela repinte.

No topo do arquivo, adicione a importação:

```tsx
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
```

Dentro do componente, crie o estado:

```tsx
const [imagemSelecionada, setImagemSelecionada] = useState(null);
```

**O que acontece aqui:** criamos uma caixa chamada `imagemSelecionada`. Ela começa vazia (`null`). Quando o usuário escolher uma foto, jogamos o caminho da foto dentro dela — e a tela repinta sozinha.

---

## Passo 3: A Função que Abre a Galeria (async/await)

Agora vem a mágica. Vamos criar uma função que:
1. Pedir **permissão** ao sistema
2. **Esperar** o usuário escolher a foto
3. **Guardar** o caminho da foto no estado

```tsx
const pickImageAsync = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ['images'], // Só fotos (bloqueia vídeos)
    allowsEditing: true, // Libera o recorte estilo Instagram
    quality: 1,
  });

  if (!result.canceled) {
    // result.assets[0].uri = caminho local da foto no celular
    setImagemSelecionada(result.assets[0].uri);
  }
};
```

> [!IMPORTANT]
> **Por que `async` e `await`?**
> Porque o JavaScript é impatient — ele roda em milissegundos. Sem `await`, o código tentaria pintar a foto **antes** de o usuário escolher. O `await` diz: "para aqui, senta nessa cadeira, e só volte quando o usuário decidir". O app não trava porque o React continua gerenciando a tela normalmente.

> [!TIP]
> Note que usamos `mediaTypes: ['images']` — um array com a string `'images'`. Em tutoriais antigos você verá `ImagePicker.MediaTypeOptions.Images`, mas essa constante foi **deprecada** (removida) no SDK atual. Sempre prefira o array `['images']`.

---

## Passo 4: Conectando o Botão à Função

Agora ligue o `pickImageAsync` no botão do seu app. Dentro do return, coloque:

```tsx
<Button title="Escolher uma foto" onPress={pickImageAsync} />
```

**O que acontece quando o usuário aperta o botão:**
1. O sistema nativo (Android ou iOS) mostra um popup pedindo permissão
2. Se o usuário conceder, a galeria abre
3. O usuário escolhe uma foto
4. O código continua do `await` e joga o caminho da foto no estado
5. A tela repinta com a foto exibida

---

## Passo 5: Exibindo a Foto na Tela

Para mostrar a imagem, use o componente `<Image>` do React Native. A chave está no formato do `source`:

```tsx
{imagemSelecionada && (
  <Image source={{ uri: imagemSelecionada }} style={{ width: 200, height: 200 }} />
)}
```

> [!WARNING]
> **Atenção no formato!** Quando a imagem vem de uma variável dinâmica (URI), o `source` é **um objeto** `{ uri: variavel }`. Quando a imagem é um arquivo importado (`require('./foto.png')`), o `source` é direto o `require`. Não troque os dois formatos — é o erro mais comum de iniciantes!

> [!CAUTION]
> Se você esquecer o `{}` em `{ uri: imagemSelecionada }`, o app vai crashar com um erro vermelho. Sempre lembre: URI dinâmica = objeto com chave `uri`.

---

## Passo 6: Abrindo a Câmera (Opcional, mas Diferente)

O `expo-image-picker` também abre a câmera real. A lógica é idêntica, só muda a função:

```tsx
const tirarFotoAsync = async () => {
  const result = await ImagePicker.launchCameraAsync({
    mediaTypes: ['images'],
    allowsEditing: true,
    quality: 1,
  });
  if (!result.canceled) {
    setImagemSelecionada(result.assets[0].uri);
  }
};
```

> [!NOTE]
> A câmera só funciona em **dispositivo físico** ou **emulador com câmera**. No Expo Go do computador, `launchCameraAsync` pode não funcionar — use a galeria para testar.

---

## Passo 7: Pedindo Permissão Antecipadamente (Opcional)

A galeria pede permissão automaticamente quando você chama `launchImageLibraryAsync`. Mas se quiser pedir **antes** (por exemplo, para mostrar uma mensagem explicativa), use:

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

> [!TIP]
> Pedir permissão antecipadamente é uma boa prática de UX: em vez de o popup aparecer de surpresa, você explica ao usuário **por que** precisa do acesso antes de ele ver o pedido. Isso aumenta a chance de concessão!

---

## Resumo das Opções do Picker

| Opção | Efeito |
|---|---|
| `mediaTypes: ['images']` | Só fotos (bloqueia vídeos) |
| `allowsEditing: true` | Habilita o recorte (crop) estilo Instagram |
| `aspect: [4, 3]` | Proporção do recorte no Android |
| `quality: 1` | Qualidade da compressão (0 a 1; 0.5 economiza espaço) |
| `base64: true` | Inclui dados da imagem em Base64 no retorno |
| `allowsMultipleSelection: true` | Permite escolher várias fotos de uma vez |

> [!IMPORTANT]
> Com `allowsMultipleSelection: true`, o resultado vem em `result.assets` (um array). Acesse `result.assets[0].uri` para a primeira foto ou use um laço `for` / `map` para percorrer todas. E `allowsEditing` é **ignorado** nesse modo: os dois são mutuamente exclusivos.

---

## O que a Função Retorna?

O objeto `result` tem duas formas possíveis:

- **Usuário cancelou:** `{ canceled: true, assets: null }`
- **Usuário escolheu:** `{ canceled: false, assets: [{ uri, width, height, fileName, fileSize, ... }] }`

Cada item de `assets` é um objeto com campos úteis:

```tsx
const asset = result.assets[0];
console.log(asset.uri);        // caminho local: file:///...
console.log(asset.width);      // largura em pixels
console.log(asset.height);     // altura em pixels
console.log(asset.fileName);   // nome do arquivo, ex.: "foto_2026.jpg"
console.log(asset.fileSize);   // tamanho em bytes
console.log(asset.type);       // 'image' | 'video'
```

---

## Checklist da Aula 08

Marque cada item quando conseguir fazer:

- [ ] Instalei o `expo-image-picker` com `npx expo install`
- [ ] Criei o estado `imagemSelecionada` com `useState`
- [ ] Criei a função `pickImageAsync` com `async` e `await`
- [ ] Conectei o botão ao `onPress={pickImageAsync}`
- [ ] A galeria abre ao apertar o botão
- [ ] A foto escolhida aparece na tela com `<Image>`
- [ ] (Opcional) Testei `launchCameraAsync` para abrir a câmera

> [!NOTE]
> Se algum item ficou sem marcar, volte no passo correspondente. Não siga em frente com pendências — a próxima aula usa o padrão `async/await` com permissões de novo!

---

## Como isso se aplica ao seu projeto

O padrão `async/await` com `expo-image-picker` é usado em vários temas do Trabalho em Grupo: nota com foto, comprovante de despesa, perfil de usuário. A câmera/galeria pode ser opcional (recurso bônus para a Entrega 4).

O fluxo é sempre o mesmo: `pickImageAsync()` → verificar `!result.canceled` → salvar `result.assets[0].uri` num `useState` → exibir o `<Image source={{ uri: imagemSelecionada }} />`. Esse padrão aparece de novo na Aula 09 (GPS) e na Aula 10 (notificações) — permissão, await, resultado. Você já está ficando especialista nisso! 🚀

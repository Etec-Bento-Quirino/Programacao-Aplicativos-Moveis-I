# Apresentação: A Câmera e o Assincronismo 📸

**Sugestão de uso:** slides da Aula 08 (leia em voz alta antes do tutorial).

---

## 1. De Where and Where: Por que precisamos de uma "ponte"?

Até agora, o React Native só desenhava coisas na tela. Mas e quando você quer **abrir a câmera** ou **acessar a galeria de fotos** do celular? O JavaScript sozinho não fala com o hardware do Android ou do iOS — eles são vizinhos que falam idiomas diferentes.

É aí que entra a **API** (Application Programming Interface). Pense numa API como um **intérprete** num aeroporto: o turista (JavaScript) fala português, o piloto (hardware) fala coreano, e o intérprete (API) traduz os dois lados.

> [!NOTE]
> **O que é uma API?**
> É um conjunto de funções prontas que alguém já escreveu para você. Em vez de inventar como abrir a câmera do zero, você chama a API e ela faz o trabalho pesado. A `expo-image-picker` é uma API que traduz comandos JavaScript em ordens nativas para o Android e o iOS.

---

## 2. O `expo-image-picker`: O Tradutor da Câmera

O React Native puro não abre a câmera de forma tão fácil — ele deixaria você configurar pontes em Java ou Swift. A Expo simplifica tudo: com o `expo-image-picker`, um único comandoJavaScript abre a galeria independentemente se o celular é um Android 9 antigo ou o último iPhone de Titânio.

> [!TIP]
> O `expo-image-picker` serve tanto para abrir a **galeria** quanto para ativar a **câmera** real do dispositivo. Só muda a função chamada: `launchImageLibraryAsync` (galeria) ou `launchCameraAsync` (câmera).

---

## 3. A Barreira de Segurança: Permissões

Imagine se qualquer app que você baixasse pudesse olhar suas fotos bancárias secretas sem pedir nada? O iOS e o Android **barram** isso em nível de sistema operacional.

Sempre que formos acessar algo de hardware, precisamos pedir **permissão** com caixas do sistema. Usamos a requisição `requestMediaLibraryPermissionsAsync`. Se o status não for `granted` (concedido), nosso app não pode abrir a galeria.

> [!IMPORTANT]
> **O que é permissão?**
> É o "ok" do usuário (e do sistema) para que o app acesse algo sensível: câmera, GPS, notificações, contatos. Se o usuário negar, o app precisa tratar isso com elegância — mostrar uma mensagem amigável, não travar.

---

## 4. O Assincronismo: Parando o Tempo (`async` e `await`)

Se você mandar o JavaScript abrir a galeria e na **próxima linha** já tentar pintar a foto, o app trava. Por quê? Porque o código corre mais rápido do que o dedo do usuário — ele tentaria pintar uma foto que **você ainda não escolheu**!

A solução é o **assincronismo**: dizemos ao JavaScript que aquela função vai **esperar**. Ele cruza os braços, senta numa cadeira e só volta quando o usuário escolher a foto ou fechar a janela.

```tsx
// 1. Função async = "promete esperar"
const abrirGaleria = async () => {
  // 2. Pedimos permissão — ESPERA a resposta do sistema
  const permissao = await ImagePicker.requestMediaLibraryPermissionsAsync();
  
  if (permissao.granted === false) {
    alert("Precisamos da permissão para acessar suas fotos!");
    return;
  }

  // 3. Abre a galeria — ESPERA até o usuário escolher
  const resultado = await ImagePicker.launchImageLibraryAsync();
  
  if (!resultado.canceled) {
    // 4. Agora sim! O usuário escolheu. Salvamos o caminho da foto.
    setMinhaFoto(resultado.assets[0].uri);
  }
};
```

> [!NOTE]
> **async/await traduzido:**
> - **`async`** = "essa função pode demorar, então não bloqueie o resto do app".
> - **`await`** = "pare aqui e espere essa operação terminar antes de seguir".

---

## 5. O Retorno do Picker: Onde está a foto?

Quando o usuário escolhe uma imagem, a função retorna um objeto com o campo `assets[0].uri` — esse é o **caminho local** da foto no celular (tipo `file:///C:/Users/...`). É esse URI que você coloca no componente `<Image>` para exibir na tela.

Se o usuário **cancelar**, o objeto vem com `canceled: true` e `assets: null`. Por isso sempre verificamos `!resultado.canceled` antes de usar a foto.

> [!TIP]
> Quer praticar? Abra o [tutorial.md](tutorial.md) e siga passo a passo. Lá você vai instalar o `expo-image-picker`, montar a galeria e ver a foto aparecer na tela do seu celular! 🚀

> [!NOTE]
> **Curiosidade:** O `expo-image-picker` também pode abrir a câmera real do dispositivo com `launchCameraAsync`. A lógica é exatamente a mesma — só muda a função. Veremos isso no tutorial!

# Apresentação: O Assincronismo e a Câmera 📸

**Leitura Autônoma de Arquitetura Dispositivo-Software**

Você já usou React para criar componentes de Interface. Mas quando você quer ligar a lanterna do celular, pegar a localização de GPS ou abrir a Galeria de Fotos, você precisa de bibliotecas tradutoras e algo muito mais profundo: paciência cronológica.

---

## 1. Instalando os Tradutores (O Expo Image Picker)
O React Native Puro não abre a câmera de forma tão fácil, ele deixaria você configurar nativamente escrevendo pontes em Java. É aí que a genialidade da empresa Expo brilha. Ao instalarmos o `expo-image-picker`, ele nos dá uma API limpa: um único código chama a Câmera independente se o celular for um tijolo antigo com Android 9 ou o último iPhone de Titânio.

## 2. A Barreira de Segurança Nativa
Imagine que trágico seria se um App de "Lanterna" baixado na lojinha pudesse olhar a galeria das suas fotos bancárias secretas sem te pedir nada? O iOs e o Android barram isso em nível de Sistema Operacional.

Sempre que formos acessar algo de Hardware, precisaremos pedir permissão com caixas mágicas do sistema usando a requisição `requestMediaLibraryPermissionsAsync`. Se o status não for `granted` (concedido), nosso aplicativo não pode abrir as pontes. E se tentar hackear e acessar na marra? O Android suspende ou fecha seu app abruptamente por falha de Segurança.

## 3. O Assincronismo: Parando o Tempo (`async` e `await`)
Se você tentar rodar o código para abrir a galeria e mandar ele injetar a Foto na tela do usuário instantaneamente, seu aplicativo vai falhar miseravelmente.
*Por quê?*
Porque o código JavaScript corre na velocidade da luz (milissegundos). Se você mandar ele abrir a galeria, o código continuará executando para a linha de baixo (que pinta a foto) imediatamente! Ele tentará pintar uma foto que **VOCÊ AINDA NÃO TEVE TEMPO DE ESCOLHER COM O SEU DEDO!**

Isso tranca telas com `null pointer exception`. Como consertamos? Nós informamos o motor de código Javascript de que aquela determinada função terá paciência infinita:

- Criamos uma função **`async`**.
- E dentro dela, colocamos a palavra mágica **`await`** na frente do comando que abre a Galeria. 
- O Await para a execução do seu projeto temporalmente. O Javascript cruza os braços e senta numa cadeira lá atrás no processador. Ele não vai para a linha de baixo enquanto **O Usuário não escolher a foto ou fechar a janela calmamente com a mão humana dele.**

Quando a pessoa escolhe, o *await* avisa, tira ele da cadeira e a Linha 3 executa recebendo a foto maravilhosa de 5 Megabytes!

👉 **Expanda sua Cabeça Estudando a Documentação Base:** [A Poderosa API ImagePicker](https://docs.expo.dev/versions/latest/sdk/imagepicker/)

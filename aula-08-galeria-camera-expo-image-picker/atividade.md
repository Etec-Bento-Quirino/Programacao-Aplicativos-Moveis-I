# Missão 8: A Substituição Crítica (State Mutation) 🎭

**Sua Validação Autônoma de Estudo:**

No tutorial desta aula, instalamos o tradutor Expo-image-picker no seu StickerSmash, e colocamos as amarras da arquitetura assíncrona para segurar o processamento de código.

Nesta Missão nós vamos aferir a sua capacidade lógica de lidar com o estado. Você vai ter que jogar fora o coelho branco estático `require(...)` na tela e substituir pela foto viva em tempo real vinda da Galeria.

---

## O Desafio: Acoplar as Pontes da Variável Mestra

A foto da galeria virá de volta pro Javascript na nossa variável constante ali do *ImagePicker* que diz `result.assets[0].uri`. Só que como já aprendemos, atribuir variável não repinta o React.

Sua Missão:
1. Revise sua Tela Raiz (`index.tsx`). Crie um hook guardião `useState` que aceita a tipagem em string na parte superior. 
2. Dentro do IF positivo do seu Async (`if (!result.canceled)`), você fará o Berrante (*O Set state do arquivo*) apontar para a URI da foto do cliente e explodir a tela com Alarme.
3. Edite nosso componente importado no View principal, para que ele condicionalmente mude. Ou seja, repare que no StickerSmash você configurou que o seu ImageViewer consiga receber duas fotos diferentes dinâmicas! Então mude injetando a URI viva.

## A Regra Sagrada:
A tela do seu Expo Go não deve travar! Ao clicar, ela congela a aplicação sem erros, a sua ponte Nativa subindo a tela pedindo as fotos. Escolha qualquer "print" ou foto engraçada da sua Galeria real do celular físico. O Celular voltará para o app onde Mágicamente as coisas rolaram!

Você domina o Tempo (Hardware Assíncrono). Colhe aquele glorioso screenshot (PrintScreen) dessa proeza tecnológica do seu sticker e deixe no ambiente da aula para garantir XP.

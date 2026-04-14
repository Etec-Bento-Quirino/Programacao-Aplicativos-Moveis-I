# Apresentação: O Big Bang do seu App 💥

**Data:** 23/02/2026

---

## 1. A Ferramenta de Criação Universal
Lembra do `npx` da primeira aula? Aquele delivery virtual? Hoje nós acionaremos ele para encomendar `create-expo-app`. Esse é um robô gigante. Ele baixa silenciosamente as pontes nativas do Google (Android) e da Apple (iOS) pra você, configura o Babel (um tradutor de código), junta o React, e monta uma Estrutura de Pastas robusta. 

## 2. A Anatomia do que Acabou de Nascer
Se você olhar a pasta que o robô cria, pode se assustar com a quantidade de arquivos. Mas como desenvolvedor/arquiteto, existem três guardiões que você precisa conhecer hoje:

- `node_modules`: É o buraco negro. Lá dentro moram milhares de pastas das bibliotecas de terceiros que usamos (como ícones, o próprio React, etc). **Regra de Ouro: Nunca entre no node_modules. Nunca edite nada dentro do node_modules. Respeite o selo.**
- `app.json`: É a Certidão de Nascimento do seu App. Lá você diz a cor padrão dele, se a tela de pé/deitada é bloqueada, o Nome Oficial de Loja dele, e coloca um PNG pra ser a fotinho mágica do celular.
- `/app (Pasta principal)`: Antigamente existia só um `App.js`. Hoje, nós temos o poderoso `Expo Router`. Qualquer arquivo `.tsx` que você criar dentro da pasta `app/` vira magicamente uma tela do seu celular! A primeira tela a ser construída é o nosso sagrado `index.tsx`.

## 3. Expo Go (Sua Televisão ao vivo)
Você não precisa de um supercomputador para criar apps. O seu celular de bolso possui hardware dezenas de vezes mais forte que as cápsulas que foram pra lua, basta usar o App do **Expo Go** (baixe da PlayStore/AppStore).

No terminal, quando você der `npx expo start`, o Metro Bundler aciona uma antena. O aplicativo **Expo Go** do seu celular pega a mesma rede Wi-Fi, puxa seu código para a memória RAM do smartphone e compila visualmente na hora. 

*(E se o Wi-Fi da escola bloquear? Calma, usaremos o salvador `--tunnel` no tutorial)*.

Vejo você programando a nossa tela escura no tutorial!

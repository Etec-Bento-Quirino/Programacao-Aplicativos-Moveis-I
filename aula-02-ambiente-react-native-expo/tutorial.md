# Aula 02 – Ambiente React Native (Expo) e Primeiro App

**Sugestão de execução:** quinzena 2.
**Base tecnológica:** Conceitos do modelo e plataforma de desenvolvimento; ferramentas (SDK, CLI); criação do app; roteamento básico.

---

## Objetivo da aula
Nesta aula, começaremos nosso curso mergulhando no **StickerSmash**, um projeto universal usando Expo. Ao final, você terá o ambiente rodando sem erros de proxy e uma tela escurecida inicial.

---

## Parte 1: Inicializando o Cérebro do App

O projeto será criado usando a ferramenta de linha de comando `create-expo-app`. Ela gera a espinha dorsal de um aplicativo nativo que funciona em sistemas diferentes.
Abra o seu **VS Code**. No menu superior, clique em `Terminal -> Novo Terminal`. Com a janela piscando embaixo, execute:

```bash
npx create-expo-app@latest StickerSmash
cd StickerSmash
```

> [!WARNING]
> **DICA DE OURO DA REDE:** O Wi-Fi da escola ou de empresas geralmente possui um Firewall / Proxy rígido, o que bloqueia o seu celular de achar o Notebook na mesma rede para espelhar o app.
> Para driblar esse bloqueio de forma permanente no seu projeto, edite o arquivo `package.json` e altere o script `"start"` adicionando `--tunnel`:
> ```json
>   "scripts": {
>     "start": "expo start --tunnel",
>     // ...
>   }
> ```
> Depois disso, basta iniciar o app rodando:
> ```bash
> npm start
> ```
> O `--tunnel` cria uma URL pública temporária (ngrok) que fura o bloqueio, permitindo que seu celular carregue o app por 4G ou por qualquer rede!

---

## Parte 2: A Primeira Limpeza e a Estilização (Dark Mode)

A pasta principal que manda em tudo nos apps modernos do Expo chama-se `/app`.
Todo arquivo lá dentro vira uma Tela automaticamente graças ao `Expo Router` (o maquinista de trens do seu app).

### 1. Limpando o terreno
Abra o arquivo gerado de fábrica `app/index.tsx`. Ele vem com códigos padrão e ícones que não precisamos.
A imagem central e a lógica inicial do aplicativo começam exigindo que a cor de fundo seja esteticamente polida, para dar a ideia de tela nativa.

### 2. O Código do Index Modificado
No React Native, não usamos HTML `<div>` ou `<p>`. Usamos tags nativas empacotadas do próprio aparelho: `<View>` e `<Text>`.
Substitua TODO o código do seu `app/index.tsx` pelo código cru abaixo:

```tsx
import { Text, View, StyleSheet } from 'react-native';

export default function Index() {
  return (
    // A View funciona como uma caixa limitadora. A prop "style" chama o designer.
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo ao StickerSmash! 🚀</Text>
    </View>
  );
}

// O StyleSheet.create é o "CSS" do React Native! 
const styles = StyleSheet.create({
  container: {
    flex: 1, // Faz a View ocupar 100% da página puxando elásticamente.
    backgroundColor: '#25292e', // Aplica o Background Escuro Sombrio (Dark Mode base).
    alignItems: 'center', // Alinha tudo no eixo Horizontal (Eixo X) bem no meio!
    justifyContent: 'center', // Alinha tudo no eixo Vertical (Eixo Y) bem no meio!
  },
  text: {
    color: '#fff',
  },
});
```

Olhe no emulador ou no celular! A mágica do *Fast Refresh* alterou as cores em Tempo Real!

---

## Checklist da Aula 02
- [ ] Aplicativo criado via Npx.
- [ ] Execução bem sucedida via `npm start` (com `--tunnel` configurado) rompendo o proxy local.
- [ ] Tela do `index.tsx` alterada e conceito de CSS/StyleSheet absorvido.

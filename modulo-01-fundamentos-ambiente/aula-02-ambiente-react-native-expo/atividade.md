# Atividade 2: O Primeiro Aplicativo (Hello World) 🚀

**Sugestão de execução:** Quinzena 2 | **Bimestre:** 1 | **Valendo XP e nota**

---

**Objetivo da Atividade:** validar que você consegue **rodar o app Expo na sua máquina e no seu celular**, e fazer alterações básicas de estilo no React Native usando `View`, `Text` e `StyleSheet`.

> [!NOTE]
> Se você ainda não fez o [Tutorial da Aula 02](tutorial.md), faça primeiro. Esta atividade cobra exatamente os passos de lá — só com uma pitada extra de desafio.

---

## O Desafio: Alterando Cores e Textos

1. **Ligue o servidor** do seu aplicativo. No terminal, dentro da pasta `StickerSmash`, execute:

```bash
npm start
```

**O que você deve VER:** o Metro Bundler acendendo, um **QR Code** e uma URL começando com `exp://...`, parecida com:

```
› Metro waiting on exp://192.168.0.15:8081
› Scan the QR code above with Expo Go to open the app
```

> [!TIP]
> **Dica de como iniciar:** abra o projeto no **Expo Go** do seu celular (escaneando o QR Code) ou no emulador. Lembre-se: se estiver na escola, o `--tunnel` configurado no tutorial garante que o app carregue mesmo com o firewall bloqueando a rede.

2. **Abra o arquivo principal** do projeto: `app/index.tsx`.

3. **Altere o texto e o estilo** para exibir *"Bem-vindo ao StickerSmash! 🚀"* com o fundo escuro `#25292e`. No código abaixo, o ponto de atenção é o `backgroundColor`:

```tsx
import { StyleSheet, Text, View } from 'react-native';

export default function Index() {
  return (
    // Aplique o estilo de fundo aqui
    <View style={styles.container}>
      <Text>Bem-vindo ao StickerSmash! 🚀</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e', // Altere a cor do fundo aqui
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

**O que você deve VER:** a tela do seu celular (ou emulador) **escura** (tom `#25292e`, quase preto) com o texto *"Bem-vindo ao StickerSmash! 🚀"* no centro — atualizada em tempo real pelo **Fast Refresh**, sem você reiniciar nada.

> [!WARNING]
> **A tela não mudou?** Confira: (1) você **salvou** o arquivo com `Ctrl+S`? (2) o `backgroundColor` está com as aspas e o `#` no lugar certo? (3) o celular e o notebook estão na mesma rede (ou o tunnel está ativo)? Se o terminal travou no `--tunnel`, consulte o [Guia de Erros Comuns](../../docs/GUIA-DE-ERROS-COMUNS.md).

---

## O Desafio Extra: Brincando de Designer (valendo XP)

Você aprendeu que `color` muda a cor do texto. Agora prove que entendeu:

1. Escolha **qualquer outra cor** (ex.: `'#ffd33d'`, um amarelo) e aplique no `color` do texto.
2. Salve o arquivo com `Ctrl+S`.
3. Observe o celular: o texto deve mudar de cor **sozinho**, em tempo real.

**O que você deve VER:** o texto branco virando a cor que você escolheu, sem tocar no celular.

> [!TIP]
> Esse é o coração da Aula 02: salvar → Metro entrega → celular atualiza. Se você viu a cor mudar sozinha, você viveu o **Fast Refresh** na prática — e é exatamente isso que vamos usar o ano inteiro.

---

## Checklist de Entrega

Antes de enviar, confira:

- [ ] Print do app aberto no **Expo Go** (ou emulador) com o texto *"Bem-vindo ao StickerSmash! 🚀"*
- [ ] Fundo da tela na cor escura `#25292e`
- [ ] Print do desafio extra mostrando o texto em uma **cor diferente**
- [ ] (Bônus) Print do terminal mostrando o QR Code / a URL `exp://...`

---

## Como isso se aplica ao seu projeto

Rodar o app e mudar a tela inicial é a **mesma rotina** do seu Trabalho em Grupo: criar o projeto, abrir no celular e começar a estilizar a tela com `View`, `Text` e `StyleSheet`. Todo app do Módulo 8 começa assim — e agora você já sabe fazer isso sozinho. Capricho nos prints! 🚀

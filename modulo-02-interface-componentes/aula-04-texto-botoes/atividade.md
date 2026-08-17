# Atividade 4: Eventos e Botões 🚨

**Sugestão de execução:** Quinzena 4 | **Bimestre:** 1 | **Valendo XP e nota**

---

**Objetivo da Atividade:** criar botões interativos e capturar eventos de toque (`onPress`) do usuário. Um botão não tem utilidade sem uma ação vinculada a ele — e é exatamente essa ligação que você vai fazer agora.

> [!NOTE]
> Se você ainda não fez o [Tutorial da Aula 04](tutorial.md), faça primeiro. Esta atividade cobra exatamente os conceitos de lá — `Pressable`, `onPress` e a "máquina" de eventos.

---

## O Desafio: Interatividade Básica

Adicione um evento de clique no botão principal do seu aplicativo que dispare um **alerta nativo** na tela do celular.

1. No seu arquivo principal (ex.: `index.tsx`), adicione um botão utilizando o componente `<Button>` do `react-native` ou a implementação customizada `Button.tsx` do tutorial.
2. Passe a propriedade `onPress` para acionar um alerta no dispositivo.

**O que você deve VER:** ao tocar no botão, uma janelinha de aviso do próprio celular aparece no centro da tela, com título e mensagem — e fecha ao tocar em OK.

### 💡 Dica de como iniciar

Para criar a interatividade, passe uma **função** para a propriedade `onPress`. Importe o **`Alert`** nativo do `react-native` em vez da função `alert()` tradicional do navegador — assim o aviso tem a cara do sistema operacional.

```tsx
import { View, Button, Alert, StyleSheet } from 'react-native';

export default function App() {
  const exibirAlerta = () => {
    Alert.alert("Aviso", "Em Breve: Acesso à Câmera!");
  };

  return (
    <View style={styles.container}>
      {/* Botão simples que chama a função */}
      <Button
        title="Usar essa foto"
        onPress={exibirAlerta}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
});
```

> [!TIP]
> Reparou que passamos `onPress={exibirAlerta}` **sem** os parênteses? Isso é importante: `exibirAlerta` (sem `()`) entrega a função pronta para ser chamada quando o toque acontecer. Com `exibirAlerta()` (com `()`), a função rodaria na hora de desenhar a tela — errado!

> [!IMPORTANT]
> O **`Alert.alert("Aviso", "Em Breve: Acesso à Câmera!")`** tem dois argumentos: o **título** do aviso e a **mensagem**. É como a placa de "Comunicado" na porta da escola: primeiro o assunto, depois o detalhe.

> [!WARNING]
> Se você usar a função `alert()` do navegador, o aviso pode não aparecer (ou aparecer esquisito) no celular. O `Alert` do `react-native` é o jeito certo — ele usa a janela nativa de avisos do Android/iOS.

---

## 🎯 Bônus (XP extra): Explorando os Eventos do Toque

Experimente os outros momentos do toque que o `Pressable` captura:

1. Troque o botão por um `<Pressable>` com `onPressIn` e `onPressOut` disparando `Alert.alert` (ou `console.log`) com mensagens diferentes.
2. Segure o dedo por mais de meio segundo para testar o `onLongPress`.

**O que você deve VER:** mensagens diferentes aparecendo conforme o dedo encosta, segura e solta — provando que o app "enxerga" o toque por dentro.

> [!TIP]
> **Entrega do bônus:** descreva no print (ou num comentário da entrega) qual evento disparou cada mensagem.

---

## Questão Teórica

Responda **com suas palavras** (em um arquivo `.txt` ou direto na plataforma):

1. **Qual a diferença entre `onPress` e `onLongPress` no `Pressable`?**
2. **Por que usamos `Alert.alert` do `react-native` em vez da função `alert()` do navegador?**

> [!TIP]
> Não precisa copiar o texto dos slides. Responder com suas palavras (mesmo com erros de português) mostra que você entendeu — e vale mais nota do que uma cópia perfeita. 😉

---

## Checklist de Entrega

Antes de enviar, confira:

- [ ] Botão criado na tela principal com `onPress` conectado
- [ ] `Alert.alert` aparecendo no centro da tela ao tocar no botão
- [ ] Print do aviso aberto no celular/emulador (momento exato do pop-up)
- [ ] *(Bônus)* Teste de `onPressIn`/`onPressOut`/`onLongPress` descrito
- [ ] Respostas das 2 questões teóricas

---

## Como isso se aplica ao seu projeto

Todo botão do **Trabalho em Grupo** (Módulo 8) vai seguir este padrão: um `onPress` apontando para uma **função**. Hoje a função só abre um aviso; no projeto, ela vai abrir formulários, salvar dados no banco e trocar de tela. Entender a "máquina de eventos" do toque é a ponte para tudo isso. Capricho! 🚀

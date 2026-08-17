# Atividade 3: Dominando o Flexbox 🧱

**Sugestão de execução:** Quinzena 3 | **Bimestre:** 1 | **Valendo XP e nota**

---

**Objetivo da Atividade:** praticar o uso do **Flexbox** para criar layouts responsivos no React Native. Em vez de medidas fixas, você usará as propriedades do Flexbox para alinhar e distribuir elementos na tela — do mesmo jeito que faria no seu projeto real.

> [!NOTE]
> Se você ainda não fez o [Tutorial da Aula 03](tutorial.md), faça primeiro. Esta atividade cobra exatamente os conceitos de lá — `flex: 1`, `flexDirection` e os dois "comandantes" da gravidade.

---

## O Desafio do Alinhamento

Crie um novo projeto no VS Code (ou utilize o projeto de testes do módulo) e desenvolva um layout com **3 blocos (`Views`) de cores distintas**.

Siga estas instruções:

1. **Não utilize larguras ou alturas fixas (pixels).** O layout deve ser construído inteiramente com as propriedades de `flex`.
2. O componente principal deve conter uma `View` contêiner e **3 `Views` filhas coloridas**.
3. **Bloco A:** deve ocupar toda a **metade superior** da tela.
4. **Blocos B e C:** devem dividir igualmente a **metade inferior**, ficando lado a lado.

**O que você deve VER:** uma tela com três retângulos coloridos — um em cima ocupando metade da tela, e dois embaixo dividindo a outra metade igualmente, um ao lado do outro.

### 💡 Dica de como iniciar

Para começar, crie um componente funcional básico. Lembre-se: a `View` principal precisa ter `flex: 1` para ocupar a tela inteira do dispositivo.

```tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Adicione o Bloco A aqui */}
      {/* Adicione o contêiner para os Blocos B e C aqui */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Faz a View principal ocupar a tela inteira
  },
  // Crie os estilos para os blocos usando flex: 1, flexDirection: 'row', etc.
});
```

> [!TIP]
> Para posicionar os **Blocos B e C lado a lado**, coloque-os dentro de uma nova `View` contêiner com `flexDirection: 'row'`. Lembre-se da analogia das panquecas: o padrão é empilhar para baixo (`column`); para caminhar em trilhos da esquerda para a direita, usamos `row`.

> [!WARNING]
> Se os blocos ficarem com altura zero ou "colados", verifique se o `flex: 1` está presente **na View principal** e nas **Views que dividem o espaço**. Sem `flex`, as caixas encolhem até o tamanho do conteúdo (que está vazio).

---

## 🎯 Bônus (XP extra): Estilos por plataforma

Aplique o módulo **`Platform`** para que o seu layout se comporte bem nos dois sistemas:

1. No `StyleSheet`, use `Platform.OS` para dar um `paddingTop` **maior no iOS** (barra de status mais alta) do que no **Android**.
2. Use `Platform.select` para mudar a cor do Bloco A por sistema, por exemplo:
   ```tsx
   backgroundColor: Platform.select({ ios: '#ffcc00', android: '#33cc66' }),
   ```
3. Teste o app no Android (celular via Expo Go). Se tiver iOS (iPhone ou emulador), compare os dois. Sem iOS disponível, simule trocando o valor retornado.

> [!TIP]
> **Entrega do bônus:** mencione no print enviado qual diferença o `Platform` causou na tela (mudou a cor do Bloco A? o espaçamento do topo?).

---

## Questão Teórica

Responda **com suas palavras** (em um arquivo `.txt` ou direto na plataforma):

1. **Qual a diferença entre `justifyContent` e `alignItems` no React Native?**
2. **Por que usamos `flex: 1` em vez de definir `width` e `height` em pixels? O que acontece quando o app roda em telas de tamanhos diferentes?**

> [!TIP]
> Não precisa copiar o texto dos slides. Responder com suas palavras (mesmo com erros de português) mostra que você entendeu — e vale mais nota do que uma cópia perfeita. 😉

---

## Checklist de Entrega

Antes de enviar, confira:

- [ ] Bloco A ocupando toda a metade superior da tela
- [ ] Blocos B e C dividindo igualmente a metade inferior, lado a lado
- [ ] Nenhuma largura/altura fixa em pixels — só `flex`
- [ ] Print do layout funcionando no Expo Go ou emulador (nome do arquivo: `FlexTest`)
- [ ] *(Bônus)* Diferença do `Platform` mencionada no print
- [ ] Respostas das 2 questões teóricas

---

## Como isso se aplica ao seu projeto

Todo layout do **Trabalho em Grupo** (Módulo 8) vai nascer assim: uma View com `flex: 1` e, dentro dela, outras Views dividindo o espaço com `flex`. Em vez de tentar adivinhar pixels, você deixa o Flexbox "somar os espaços" para você — e o app fica certo em qualquer celular, do menor ao maior. Capricho! 🚀

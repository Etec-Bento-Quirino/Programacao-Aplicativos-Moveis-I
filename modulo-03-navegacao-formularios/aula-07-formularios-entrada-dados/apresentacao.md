# Apresentação: O Tratado de Entrada de Dados

**Sugestão de uso:** slides da Aula 07 (leia em voz alta antes do tutorial).

---

## 1. O Camaleão Ciber-Tátil: `<TextInput>`

Na Web, usamos `<input type="text">`. No React Native, o rei absoluto é o **`<TextInput>`**. É ele que abre o teclado do celular e permite ao usuário digitar.

Mas os celulares têm um truque: o teclado **sobe por cima da tela** e pode tapar seus componentes. Além disso, podemos mudar o "rosto" do teclado injetando props de formatação:

| Prop | O que faz | Exemplo |
|------|-----------|---------|
| `keyboardType="email-address"` | Mostra um botão de **@** gigante | Campo de e-mail |
| `keyboardType="numeric"` | Fecha as letras e mostra só números | CPF, CEP, telefone |
| `secureTextEntry={true}` | Esconde os caracteres com bolinhas `●●●●` | Senha |

> [!NOTE]
> Pense no `<TextInput>` como um garçom que se adapta ao pedido. Para e-mail, ele traz uma caneta com `@`. Para senha, ele vira um mágico que esconde as letras. Para CPF, ele traz só os números.

---

## 2. O Estado Controlado: a Dança do `value`

Nunca deixe um `<TextInput>` com vida própria. Quem manda no formulário é a **memória do App** (o `useState`). Isso se chama **Componente Controlado**.

Funciona assim: toda vez que o usuário digita uma letra, a função `onChangeText` percebe, joga a letra no `useState`, e o `useState` devolve a letra para a prop `value` do campo. Tudo isso em menos de 1 milissegundo.

O benefício? Se você quiser que o usuário nunca digite espaços num campo de CPF, basta programar o `onChangeText` para apagar espaços **antes** de devolver para a tela.

> [!IMPORTANT]
> **Componente Controlado** significa que o React controla o que aparece no campo. O campo não "guenta" o valor sozinho — ele sempre pede ao `useState`: "o que eu devo mostrar agora?"

---

## 3. Validação: a Lei da Trincheira

Não crie botões de "Salvar" que escrevem os dados no banco de dados sem verificar nada. E se o cara preencher o nome com vários espaços em branco? O banco salva `"          "` e seu app fica com dados lixo.

A solução são **filtros lógicos** no JavaScript:

1. **Limpe os espaços** usando o método `.trim()` — ele remove espaços do início e do fim.
2. **Verifique se ficou vazio**: `if (!nome.trim()) return erro;`
3. **Valide o formato**: `if (!email.includes('@')) return erro;`

Somente depois de passar por todas as armadilhas é que liberamos o `Alert.alert()` (o pop-up nativo) confirmando o sucesso.

> [!CAUTION]
> A validação **nunca** deve ser feita apenas no app. Em produção, você sempre valida de novo no servidor. Mas no celular, a validação é a **primeira barreira** — e evita que o usuário envie dados incompletos sem perceber.

---

## 4. Código Completo: um Formulário Blindado

```tsx
{% raw %}
import { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

export default function FormularioSeguro() {
  const [email, setEmail] = useState('');

  const salvar = () => {
    // 1. Limpa os espaços fantasmas e valida
    const emailLimpo = email.trim();
    if (!emailLimpo.includes('@')) {
      Alert.alert('Erro', 'Por favor, digite um e-mail válido com @!');
      return; // Interrompe a execução aqui, blindando o banco!
    }
    Alert.alert('Sucesso', 'E-mail salvo: ' + emailLimpo);
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
        placeholder="Digite seu e-mail..."
        keyboardType="email-address" // Teclado com "@"
        value={email}                // Componente controlado
        onChangeText={setEmail}      // Atualiza a memória a cada tecla
      />
      <Button title="Salvar" onPress={salvar} />
    </View>
  );
}
{% endraw %}
```

> [!NOTE]
> Repare no `return;` dentro do `if`. Ele é o **porteiro**: se a validação falhar, o código para na hora. O `Alert.alert()` é exibido e o dado **nunca** chega ao banco.

---

## 5. Resumo Visual

| Conceito | Analogia | O que faz |
|----------|----------|-----------|
| **`<TextInput>`** | O garçom que anota o pedido | Captura o texto que o usuário digita |
| **`useState`** | A memória do app | Guarda o valor digitado |
| **`onChangeText`** | O ouvido do garçom | Escuta cada tecla e atualiza a memória |
| **`value`** | O papel onde está escrito | Mostra na tela o que está na memória |
| **`.trim()`** | A borracha de erros | Remove espaços em branco extras |
| **`Alert.alert()`** | O aviso na tela | Mostra mensagem de erro ou sucesso |

> [!TIP]
> Quer se aprofundar? Leia a documentação oficial: [A Mágica do TextInput](https://reactnative.dev/docs/textinput)

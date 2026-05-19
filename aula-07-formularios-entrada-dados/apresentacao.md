# Apresentação: O Tratado de Entrada de Dados ⌨️

**Leitura Autônoma de Arquitetura de Interface**

Se você construir um buraco no chão esperando água, alguém vai jogar terra. Programar formulários não é apenas colocar caixas na tela, é arquitetar defesas psicológicas contra usuários distraídos ou mal intencionados.

---

## 1. O Camaleão Ciber-Tátil (`<TextInput>`)
Na Web, usamos `<input type="text">`. No React Native, o rei absoluto é o `<TextInput>`. 
Porém, os celulares possuem um truque de hardware brutal: O teclado sobe sob a tela tapando componentes.

Além disso, nós podemos comandar o "rosto" do Teclado Nativo do usuário injetando as **Props** de formatação:
- `keyboardType='email-address'`: Faz nascer um botão de **@** gigantesco no teclado para facilitar a vida do cliente.
- `keyboardType='numeric'`: Oblítera as letras. O celular abre direto o NumPad como se fosse um telefone!
- `secureTextEntry={true}`: Imediatamente encripta visualmente os caracteres em *Bolinhas Negras* para Senhas.

## 2. O Estado Controlado (A Dança do `value`)
Você nunca deve deixar um componente `TextInput` com vida própria. Quem manda no formulário é a memória do App (o `useState`).
Isso se chama **Componente Controlado**.

A mecânica é simples: Toda vez que o usuário encosta no teclado, a função `onChangeText` percebe, pega a letra "A", joga na memória do `useState`, e a memória devolve a letra "A" para a prop `value` da caixa, renderizando na tela. Tudo isso ocorre em 1 milissegundo. O benefício? Se você quiser que o usuário nunca digite espaços num campo de PIS, você programa o `onChangeText` para apagar espaços ANTES de devolver para a tela!

## 3. Validação: A Lei da Trincheira
Não crie Botões de *"Salvar"* que apenas escrevem as coisas cegamente no Banco de Dados. E se o cara tiver preenchido nome como `"          "`? (Vários espaços em branco).

Nós usamos filtros lógicos no JavaScript. 
1. Limpamos os espaços fantasmas usando o método string `.trim()`.
2. Vemos se ficou vazio: `if (!nome.trim()) return err;`.
3. Validamos engenharia reversa no E-mail: `if (!email.includes('@')) ...`.

Somente depois de passar pelas armadilhas é que liberamos o *Alert.alert()* (O pop-up majestoso Nativo) confirmando o sucesso da operação.

**Exemplo Prático: Um Input Controlado Blindado**
```tsx
import { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

export default function FormularioSeguro() {
  const [email, setEmail] = useState('');

  const salvar = () => {
    // 1. Limpa os espaços fantasmas e valida
    const emailLimpo = email.trim();
    if (!emailLimpo.includes('@')) {
      Alert.alert('Erro', 'Por favor, digite um e-mail válido com @!');
      return; // 👈 Interrompe a execução aqui, blindando o banco!
    }
    Alert.alert('Sucesso', 'E-mail salvo: ' + emailLimpo);
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput 
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
        placeholder="Digite seu e-mail..."
        keyboardType="email-address" // 👈 Invoca o teclado com "@"
        value={email}                // 👈 O componente é escravo da memória
        onChangeText={setEmail}      // 👈 A cada tecla, atualiza a memória
      />
      <Button title="Salvar" onPress={salvar} />
    </View>
  );
}
```

👉 **Expanda sua Cabeça Estudando a Documentação Base:** [A Mágica do TextInput](https://reactnative.dev/docs/textinput)

# Atividade 7: Validação de Formulários 🕵️‍♂️

**Objetivo da Atividade:**

Nesta atividade, você irá praticar a criação de interfaces com formulários e a implementação de validações para as entradas de dados do usuário.

---

## O Desafio: Validação de Entradas

Implemente o layout de um formulário (`TextInput` com placeholder, bordas arredondadas e um botão) no seu projeto usando o VS Code, e teste no seu celular via Expo Go ou no emulador.

Sua tarefa é implementar validações antes de permitir o envio:

1. Ao pressionar o botão, verifique se os campos estão preenchidos. Não permita envios **absolutamente vazios**.
2. Exija que o campo de "Senha" tenha *no mínimo* 6 caracteres (utilize `senha.length < 6` na lógica de validação).
3. Valide o formato do E-mail. Por exemplo, verifique se ele possui o caractere `@`.

### 💡 Dica de como iniciar:

Para implementar a validação antes do envio, crie uma função que verifica o estado antes de prosseguir. Se a validação falhar, você chama o `Alert.alert`.

```tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const validarFormulario = () => {
    // 1. Verificar se estão vazios
    if (email === '' || senha === '') {
      Alert.alert("Erro", "Nenhum campo pode estar vazio!");
      return;
    }
    // 2. Verificar a senha
    if (senha.length < 6) {
      Alert.alert("Erro", "A senha deve ter no mínimo 6 caracteres!");
      return;
    }
    // 3. Verificar o e-mail
    if (!email.includes('@')) {
      Alert.alert("Erro", "E-mail inválido! Faltou o @.");
      return;
    }

    Alert.alert("Sucesso", "Formulário validado com sucesso!");
  };

  return (
    <View style={styles.container}>
      {/* Construa seus TextInputs aqui usando o estado de email e senha */}
      <Button title="Enviar" onPress={validarFormulario} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
});
```

## Entrega:
Capture uma Screenshot exibindo o alerta de erro nativo (utilizando `Alert.alert`) com uma mensagem clara sobre qual foi a falha de validação (ex: "A senha deve ter no mínimo 6 caracteres" ou "E-mail inválido"). 

Anexe a imagem da comprovação na plataforma!

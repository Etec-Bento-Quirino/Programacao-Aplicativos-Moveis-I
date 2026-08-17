# Atividade 7: Validação de Formulários

**Sugestão de execução:** Quinzena 7 | **Bimestre:** 2 | **Valendo XP e nota**

---

**Objetivo da Atividade:** praticar a criação de formulários com `TextInput` e implementar validações para garantir que os dados do usuário estejam corretos antes de serem enviados.

> [!NOTE]
> Se você ainda não fez o [Tutorial da Aula 07](tutorial.md), faça primeiro. Esta atividade cobra exatamente os passos de lá — só com uma pitada extra de desafio.

---

## O Desafio: Validação de Entradas

Implemente o layout de um formulário no seu projeto usando o VS Code, e teste no celular via Expo Go ou no emulador.

Seu formulário deve ter:
- Um campo de e-mail com `TextInput`
- Um campo de senha com `TextInput` e `secureTextEntry`
- Um botão de enviar

> [!TIP]
> **Dica de como iniciar:** copie o esqueleto do formulário do [Tutorial da Aula 07](tutorial.md) e adapte para este desafio. Use os mesmos estilos de `StyleSheet`.

Sua tarefa é implementar **três validações** antes de permitir o envio:

1. **Campos vazios:** ao pressionar o botão, verifique se os campos estão preenchidos. Não permita envios com campos vazios ou com apenas espaços.
2. **Senha curta:** exija que o campo "Senha" tenha **no mínimo 6 caracteres** (use `senha.length < 6`).
3. **E-mail inválido:** verifique se o e-mail possui o caractere `@`.

> [!WARNING]
> Lembre-se de usar `.trim()` nos campos de texto para remover espaços em branco antes de validar. Um usuário pode digitar vários espaços e o campo parecer "preenchido" — mas `"".trim()` retorna `""`, que é vazio.

### Código de referência para a função de validação:

```tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const validarFormulario = () => {
    // 1. Verificar se estão vazios
    if (email.trim() === '' || senha.trim() === '') {
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
      {/* Construa seus TextInputs aqui */}
      {/* Use secureTextEntry no campo de senha */}
      <Button title="Enviar" onPress={validarFormulario} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
});
```

> [!IMPORTANT]
> No campo de senha, adicione `secureTextEntry` para que os caracteres apareçam como bolinhas. É a mesma prop que apps como WhatsApp e Instagram usam para esconder senhas.

---

## Entrega

Capture uma **screenshot** exibindo o Alert de erro nativo (`Alert.alert`) com uma mensagem clara sobre qual foi a falha de validação. Por exemplo:
- "Nenhum campo pode estar vazio!"
- "A senha deve ter no mínimo 6 caracteres!"
- "E-mail inválido! Faltou o @."

Anexe a imagem da comprovação na plataforma.

> [!TIP]
> Tire pelo menos **duas** screenshots: uma mostrando o erro de campo vazio, outra mostrando o erro de e-mail inválido. Assim você prova que todas as validações funcionam.

---

## Checklist de Entrega

Antes de enviar, confira:

- [ ] O formulário tem dois campos: e-mail e senha
- [ ] O campo de senha usa `secureTextEntry` (bolinhas)
- [ ] Enviar com campos vazios mostra Alert de erro
- [ ] Enviar com senha com menos de 6 caracteres mostra Alert de erro
- [ ] Enviar com e-mail sem `@` mostra Alert de erro
- [ ] Enviar corretamente mostra Alert de sucesso
- [ ] Tenho pelo menos 1 screenshot do Alert de erro

---

## Como isso se aplica ao seu projeto

A validação de formulários é uma das habilidades mais usadas no desenvolvimento Mobile. No seu Trabalho em Grupo, você vai precisar de um formulário de cadastro — e ele **deve** ter validação para evitar dados incompletos no banco de dados. Essa é uma prática profissional que separa apps amadores de apps de verdade.

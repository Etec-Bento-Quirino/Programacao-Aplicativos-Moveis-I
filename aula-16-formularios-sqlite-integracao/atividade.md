# Atividade 16: Integração de Formulários e Banco 📝

**Objetivo da Atividade:**

Integrar um formulário à sua tabela do banco de dados, e provar que a lista de dados principal atualiza automaticamente após um novo cadastro, graças à navegação reversa (GoBack/Router.back).

---

## O Desafio: Cadastrando Itens Dinâmicos

Nesta etapa, você deve criar uma tela separada apenas para preencher o formulário, e após salvar no banco, retornar para a listagem para ver o item novo.

1. Abra ou crie sua tela de "Listagem". Nela, coloque um botão "Adicionar Novo" que navegue (via Expo Router ou React Navigation) para a tela de Formulário.
2. Na tela de Formulário, receba os dados (ex: Nome do Produto) no estado e salve no banco de dados SQLite (`INSERT`).
3. Logo após o `INSERT` ser executado com sucesso no banco, chame a função de voltar à tela anterior (`router.back()` ou `navigation.goBack()`).
4. Ao retornar à listagem, o aplicativo deve buscar os dados atualizados novamente no banco (usando, por exemplo, o evento `useFocusEffect` do React Navigation).

### 💡 Dica de como iniciar:

Para salvar e voltar, vincule a lógica de "fechar" diretamente dentro do método de salvamento, mas apenas após confirmar o `runSync`.

```tsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
// Importe a lógica do seu banco

export default function TelaFormulario() {
  const [nome, setNome] = useState('');
  const router = useRouter();
  // const db = useSQLiteContext();

  const salvarItem = () => {
    if (nome.trim() === '') return;

    // 1. Executa a inserção
    // db.runSync('INSERT INTO itens (nome) VALUES (?)', [nome]);

    // 2. Após salvar, obriga o celular a voltar pra tela anterior de listagem
    router.back();
  };

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        placeholder="Nome do Item..." 
        value={nome}
        onChangeText={setNome} 
      />
      <Button title="Salvar e Voltar" onPress={salvarItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 15 }
});
```

## Entrega:
Grave um pequeno vídeo, ou tire duas capturas de tela (uma preenchendo o formulário e outra mostrando o item já listado na tela anterior após o app fechar o formulário). Envie na plataforma para avaliação.

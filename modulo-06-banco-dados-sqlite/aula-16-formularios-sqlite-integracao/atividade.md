# Atividade 16: Integração de Formulários e Banco 📝

**Sugestão de execução:** Quinzena 21 | **Bimestre:** 4 | **Valendo XP e nota**

---

**Objetivo da Atividade:** integrar um formulário à tabela do banco de dados e comprovar que a lista de dados atualiza automaticamente após um novo cadastro, graças à navegação reversa (`router.back()`).

> [!NOTE]
> Se você ainda não fez o [Tutorial da Aula 16](tutorial.md), faça primeiro. Esta atividade cobra exatamente os passos de lá — só com uma pitada extra de desafio.

---

## O Desafio: Cadastrando Itens Dinâmicos

Nesta etapa, você deve criar uma tela separada para preencher o formulário e, após salvar no banco, retornar para a listagem para ver o item novo.

1. Abra ou crie sua tela de "Listagem". Nela, coloque um botão "Adicionar Novo" que navegue para a tela de Formulário.
2. Na tela de Formulário, receba os dados (ex: Nome do Produto) no estado e salve no banco de dados SQLite (`INSERT`).
3. Logo após o `INSERT`, chame `router.back()` para voltar à tela anterior.
4. Ao retornar à listagem, o aplicativo deve buscar os dados atualizados novamente no banco.

### 💡 Dica de como iniciar:

Para salvar e voltar, vincule a lógica de "fechar" diretamente dentro do método de salvamento:

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

    // 2. Após salvar, volta para a listagem
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

> [!TIP]
> **Dica extra:** use `useFocusEffect` (do React Navigation) na tela de listagem para recarregar os dados toda vez que o usuário volta do formulário. Assim a lista nunca fica desatualizada!

> [!WARNING]
> Se o `INSERT` não tiver a `id_categoria` correta, o item será salvo na categoria errada. Verifique se o `useLocalSearchParams` está retornando o valor correto!

---

## Checklist de Entrega

Antes de enviar, confira:

- [ ] Botão "Adicionar Novo" na tela de listagem
- [ ] Tela de formulário com `TextInput` e `Button`
- [ ] `INSERT INTO` salvando o item no banco
- [ ] `router.back()` voltando automaticamente após salvar
- [ ] Item novo aparecendo na lista após voltar
- [ ] Print (ou vídeo) provando o fluxo completo

---

## Como isso se aplica ao seu projeto

O formulário é a porta de entrada de dados no seu projeto. Sem ele, o usuário não consegue cadastrar nada — nem tarefas, nem notas, nem gastos. O padrão "preencher → salvar → voltar" é o fluxo mais comum em apps mobile, e você agora domina ele!

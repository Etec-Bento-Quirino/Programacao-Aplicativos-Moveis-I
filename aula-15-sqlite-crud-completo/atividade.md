# Atividade 15: Exclusão de Dados (DELETE) 🔨

**Objetivo da Atividade:**

Concluir as operações de CRUD integrando a ação de Exclusão (DELETE) juntamente com a visualização dos dados em uma lista.

---

## O Desafio: Deletando Itens Dinâmicos

Nesta etapa, os itens do banco de dados já estarão renderizados na tela (através de uma `FlatList`). Você precisa implementar o fluxo correto para excluir um item pelo ID.

1. Na sua visualização dos itens da lista, adicione um botão de "Excluir" ao lado do nome da tarefa.
2. O botão de "Excluir" deve disparar a query `DELETE FROM` utilizando o ID específico do item (`item.id`).
3. Após o comando de delete ocorrer com sucesso no SQLite, o sistema deve automaticamente buscar novamente a lista no banco e atualizar o estado do React, para que o item suma instantaneamente da tela.

### 💡 Dica de como iniciar:

Garanta que no `renderItem` o botão chame a função passando corretamente o id do `item`. A query SQL deve utilizar parâmetros dinâmicos (`?`).

```tsx
import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

export default function ListaMetas({ metas_do_banco, apagarMetaSQL }) {
  
  const deletarItem = (id) => {
    // 1. Você executaria db.runSync('DELETE FROM metas WHERE id = ?', [id]);
    // 2. Em seguida, faria o setMetas(bancoDeDadosNovo) para limpar a tela
    apagarMetaSQL(id);
  };

  return (
    <FlatList 
      data={metas_do_banco}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => (
        <View style={styles.linha}>
          <Text>{item.nome}</Text>
          {/* Botão de Excluir consumindo o ID em uma função anônima */}
          <Button title="Excluir" color="red" onPress={() => deletarItem(item.id)} />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  linha: { flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1 }
});
```

## Entrega: 
No seu emulador ou aparelho real, adicione alguns registros e, logo depois, apague-os através do seu novo botão. Tire uma captura de tela (print) da interface provando que a lista está sem os itens removidos. Envie na plataforma.

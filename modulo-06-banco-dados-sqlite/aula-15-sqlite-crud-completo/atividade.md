# Atividade 15: Exclusão de Dados e FlatList 🔨

**Sugestão de execução:** Quinzena 18 | **Bimestre:** 3 | **Valendo XP e nota**

---

**Objetivo da Atividade:** integrar a operação de Exclusão (DELETE) com uma lista visual (`FlatList`), provando que a tela atualiza automaticamente após apagar um item.

> [!NOTE]
> Se você ainda não fez o [Tutorial da Aula 15](tutorial.md), faça primeiro. Esta atividade cobra exatamente os passos de lá — só com uma pitada extra de desafio.

---

## O Desafio: Deletando Itens Dinâmicos

Nesta etapa, os itens do banco de dados já estarão renderizados na tela (através de uma `FlatList`). Você precisa implementar o botão de exclusão.

1. Na sua visualização dos itens, adicione um botão de "Excluir" ao lado do nome da tarefa.
2. O botão deve disparar a query `DELETE FROM` utilizando o `id` específico do item (`item.id`).
3. Após o DELETE, o sistema deve automaticamente buscar novamente a lista no banco e atualizar o estado, para que o item suma da tela.

### 💡 Dica de como iniciar:

Garanta que no `renderItem` o botão chame a função passando corretamente o `id` do `item`. A query SQL deve utilizar parâmetros dinâmicos (`?`):

```tsx
import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

export default function ListaMetas({ metas_do_banco, apagarMetaSQL }) {

  const deletarItem = (id) => {
    // 1. Executa: db.runSync('DELETE FROM metas WHERE id = ?', [id]);
    // 2. Em seguida, recarrega a lista
    apagarMetaSQL(id);
  };

  return (
    <FlatList
      data={metas_do_banco}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => (
        <View style={styles.linha}>
          <Text>{item.nome}</Text>
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

> [!TIP]
> **Dica extra:** adicione um terceiro botão "Concluir" que alterna o `status_feita` de 0 para 1. Use o `UPDATE` que você aprendeu no tutorial!

> [!WARNING]
> Se você esquecer de chamar `carregarTarefas()` depois do `DELETE`, o item some do banco mas continua aparecendo na tela até o usuário fechar e reabrir o app. Sempre recarregue a lista!

---

## Checklist de Entrega

Antes de enviar, confira:

- [ ] `FlatList` exibindo os itens do banco
- [ ] Botão "Excluir" ao lado de cada item
- [ ] Ao clicar "Excluir", o item some da tela E do banco
- [ ] Print da tela mostrando a lista **sem** os itens que você apagou
- [ ] (Bônus) Botão "Concluir" alternando `status_feita`

---

## Como isso se aplica ao seu projeto

A operação de exclusão é usada em **toda** tela que lista dados no seu projeto. Tarefa concluída? Excluir. Compra cancelada? Excluir. Nota apagada? Excluir. O padrão é sempre o mesmo: `DELETE WHERE id = ?` + `carregarTarefas()`. Domine isso aqui e você domina em qualquer tela.

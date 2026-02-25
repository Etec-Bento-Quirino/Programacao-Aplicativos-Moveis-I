# Aula 13 - AsyncStorage (persistência simples)

**Data:** 24/08/2026

---

## Apresentação

@react-native-async-storage/async-storage: setItem e getItem; salvar e carregar array com JSON.stringify e JSON.parse; carregar no useEffect, salvar ao alterar.

---

## Slides

### Objetivo

Salvar dados no dispositivo (nome ou lista) e recuperar ao abrir o app. Dados persistem após fechar e reabrir.

### setItem e getItem

await AsyncStorage.setItem(CHAVE, valor). valor é sempre string. await AsyncStorage.getItem(CHAVE) retorna a string ou null.

### Array/objeto

Salvar: JSON.stringify(itens). Carregar: JSON.parse(await AsyncStorage.getItem(CHAVE)) ou [] se null.

### Integração

useEffect ao montar: getItem e setState. Ao adicionar/remover: atualizar estado e setItem com a nova lista.

### Atividade da quinzena

App que salva e recupera um nome ou uma lista; ao reabrir o app, o valor deve continuar lá.

### Próxima aula

SQLite: abrir banco, criar tabela, inserir e consultar (expo-sqlite).

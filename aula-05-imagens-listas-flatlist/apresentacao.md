# Aula 05 - Imagens e listas (Image, FlatList)

**Data:** 06/04/2026

---

## Apresentação

Exibir imagem (URL ou local) com Image; criar lista com FlatList (data, renderItem, keyExtractor); reagir ao toque em um item.

---

## Slides

### Objetivo

Exibir uma imagem e uma lista de itens; ao tocar em um item, executar uma ação (Alert ou navegar para detalhe).

### Image

source={{ uri: 'URL' }} ou source={require('./assets/logo.png')}. Estilo: width, height, resizeMode, borderRadius.

### FlatList

- data: array de objetos
- keyExtractor: (item) => item.id
- renderItem: ({ item }) => ... retorna o componente de cada linha

### Toque no item

Envolver cada item em TouchableOpacity; onPress chama função que recebe o item (ex.: Alert com item.nome). Prepara a navegação da Aula 06.

### Atividade da quinzena

App com duas telas: lista de 3 itens + tela de detalhe ao tocar (ou estado no mesmo App.js). Incluir uma imagem.

### Projeto Bimestre 1

Na próxima quinzena: Projeto Fase 1 (escolher tipo A, B, C ou D). Mínimo 2 telas, lista ou imagem, navegação.

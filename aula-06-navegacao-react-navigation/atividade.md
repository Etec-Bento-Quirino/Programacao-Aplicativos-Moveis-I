# Aula 06 – Atividade

**Sugestão de entrega:** até o final da quinzena 7 (24/04/2026).

---

## Objetivo

Criar um app com **três telas** e **navegação com parâmetros**: (1) lista de categorias, (2) lista de itens da categoria escolhida, (3) tela de detalhe do item.

---

## Requisitos

1. **Tela 1 – Categorias**
   - Lista com pelo menos 3 categorias (ex.: Livros, Eletrônicos, Esportes).
   - Ao tocar em uma categoria, navegar para a Tela 2 passando a categoria (nome ou id).

2. **Tela 2 – Itens da categoria**
   - Recebe a categoria por **route.params**.
   - Exibe uma lista de 2 ou 3 itens **dessa** categoria (dados podem ser fixos no código, ex.: objeto categorias → itens).
   - Ao tocar em um item, navegar para a Tela 3 passando o item.

3. **Tela 3 – Detalhe do item**
   - Recebe o item por **route.params**.
   - Exibe nome e pelo menos mais um dado (ex.: descrição, preço).
   - Botão "Voltar" que retorna à lista de itens (e, a partir dela, novo "Voltar" para categorias).

4. Use **React Navigation** (stack) e organize as telas em uma pasta **screens/**.

**Entrega:** print das três telas (categorias, itens de uma categoria, detalhe de um item) ou envio do código das telas e do App.js (navigator).

---

## Critérios de avaliação

- Três telas implementadas; passagem de parâmetros correta (categoria → itens, item → detalhe); navegação e Voltar funcionando; uso de React Navigation.

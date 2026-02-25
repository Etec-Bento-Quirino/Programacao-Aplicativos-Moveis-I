# Aula 15 – Atividade

**Sugestão de entrega:** até o final da quinzena 18 (03/10/2026).

---

## Objetivo

Criar um app "**Lista de tarefas**" ou "**Caderno de anotações**" com **persistência em SQLite**: listar, adicionar e excluir (obrigatório); editar (opcional).

---

## Requisitos

1. **Listagem:** ao abrir o app, carregar os itens do SQLite e exibir em uma lista (FlatList). Se não houver itens, a lista pode estar vazia.
2. **Adicionar:** campo de texto e botão "Adicionar"; ao clicar, inserir no banco (INSERT) e atualizar a lista na tela.
3. **Excluir:** em cada item da lista, botão ou gesto para excluir; ao confirmar, executar DELETE no banco e atualizar a lista.
4. (Opcional) **Editar:** ao tocar em um item, abrir tela ou modal para editar o texto; ao salvar, executar UPDATE e atualizar a lista.

**Entrega:** print do app com a lista preenchida e, se possível, um print após adicionar e outro após excluir um item (ou envio do trecho de código do CRUD).

---

## Critérios de avaliação

- Operações CRUD (pelo menos Create, Read, Delete) funcionando; interface coerente com as operações; organização do código.

# Aula 16 – Atividade

**Sugestão de entrega:** até o final da quinzena 21 (23/10/2026).

---

## Objetivo

Criar um app com **duas entidades** relacionadas no SQLite (ex.: **categorias** e **itens** ou **produtos**): listagem de categorias, listagem de itens por categoria, formulário que insere no banco e opção de editar/excluir.

---

## Requisitos

1. **Tabelas:** pelo menos duas tabelas no SQLite, com relação (ex.: itens.id_categoria → categorias.id).
2. **Tela 1:** lista de categorias (SELECT * FROM categorias); ao tocar, abre a lista de itens daquela categoria.
3. **Tela 2:** lista de itens da categoria (SELECT * FROM itens WHERE id_categoria = ?); botão "Adicionar" abre formulário.
4. **Formulário:** cadastro de item com seleção de categoria (e campos como nome, quantidade); ao salvar, INSERT no SQLite e voltar à lista atualizada.
5. **Editar e/ou excluir:** em cada item, opção de editar (UPDATE) ou excluir (DELETE); lista atualizada após a ação.

**Entrega:** print da lista de categorias, da lista de itens de uma categoria e do formulário (ou da tela de edição); ou envio do trecho de código das consultas e do INSERT/UPDATE/DELETE.

---

## Critérios de avaliação

- Duas entidades relacionadas; consultas corretas (listagem por categoria); formulário inserindo no banco; edição e/ou exclusão funcionando.

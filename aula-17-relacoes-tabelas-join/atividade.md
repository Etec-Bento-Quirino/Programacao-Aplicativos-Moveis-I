# Aula 17 – Atividade

**Sugestão de entrega:** até o final da quinzena 22 (07/11/2026).

---

## Objetivo

Implementar ou revisar um app com **categorias e itens** no SQLite, usando **JOIN** nas consultas e exibindo o **nome da categoria** (ou outro dado relacionado) na listagem de itens.

---

## Requisitos

1. **Modelo:** duas tabelas com relação (id_categoria em itens referenciando categorias.id).
2. **Consulta com JOIN:** em pelo menos uma tela, usar SELECT com INNER JOIN (ou LEFT JOIN) para trazer o nome da categoria junto dos itens (ex.: "Item A – Categoria: Livros").
3. **Listagem:** exibir itens com o nome da categoria visível (não só o id); ou exibir categorias com contagem de itens (usando JOIN + GROUP BY ou subconsulta).
4. (Opcional) Ao excluir categoria, tratar itens vinculados (excluir em cascata ou avisar o usuário).

**Entrega:** print da tela onde a listagem mostra o dado da tabela relacionada (nome da categoria ou contagem); ou trecho do SQL com JOIN.

---

## Critérios de avaliação

- Relação entre tabelas; uso de JOIN na consulta; listagem e detalhe coerentes com o modelo.

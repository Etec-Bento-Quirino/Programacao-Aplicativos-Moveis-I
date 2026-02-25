# Aula 17 - Relações entre tabelas (JOIN)

**Data:** 26/10/2026

---

## Apresentação

SELECT com INNER JOIN para trazer nome da categoria junto dos itens; listar categorias com contagem de itens (GROUP BY); tratamento ao excluir categoria.

---

## Slides

### Objetivo

Usar JOIN nas consultas para exibir dados da tabela relacionada (ex.: nome da categoria na lista de itens). Tratar exclusão de categoria (cascata ou aviso).

### JOIN

SELECT i.*, c.nome AS nome_categoria FROM itens i INNER JOIN categorias c ON i.id_categoria = c.id. Cada linha traz o nome da categoria.

### Contagem

SELECT c.id, c.nome, COUNT(i.id) AS total FROM categorias c LEFT JOIN itens i ON c.id = i.id_categoria GROUP BY c.id.

### Excluir categoria

Opção 1: DELETE dos itens depois DELETE da categoria. Opção 2: se COUNT(itens) > 0, avisar "Exclua os itens antes".

### Atividade da quinzena

Pelo menos uma tela com consulta JOIN; listagem mostrando dado da tabela relacionada (nome da categoria ou contagem).

### Próxima aula

UX: loading (ActivityIndicator), empty state e mensagens de erro na tela.

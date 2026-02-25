# Aula 16 - Formulários + SQLite (integração)

**Data:** 16/10/2026

---

## Apresentação

Duas tabelas (ex.: categorias e itens com FK); formulário que insere no SQLite; listagem que lê do banco; editar e excluir com interface.

---

## Slides

### Objetivo

Integrar formulário de cadastro com SQLite; listagem vinda do SELECT. App com duas entidades (categorias e itens) e CRUD em ambas.

### Modelo

categorias (id, nome); itens (id, id_categoria, nome, quantidade). FOREIGN KEY id_categoria REFERENCES categorias(id).

### Fluxo

Lista categorias → toque abre lista de itens da categoria (SELECT WHERE id_categoria = ?). Formulário novo item: INSERT. Detalhe: UPDATE ou DELETE.

### Atividade da quinzena

App com duas entidades relacionadas; listagem por categoria; formulário que insere; editar e/ou excluir funcionando.

### Próxima aula

Relações entre tabelas: JOIN para listar itens com nome da categoria; integridade ao excluir.

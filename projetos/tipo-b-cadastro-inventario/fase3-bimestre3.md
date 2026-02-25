# Tipo B – Fase 3 (Bimestre 3)

**Sugestão de execução:** quinzena 20 (13/10/2026 a 14/10/2026).

## Objetivo

Migrar para SQLite: tabelas `categorias` e `itens` (com chave estrangeira). CRUD completo em ambas. Listagem de itens por categoria via consulta SQL.

## Requisitos

1. **SQLite:** tabela `categorias` (id, nome); tabela `itens` (id, id_categoria, nome, quantidade, observacao). FK id_categoria → categorias(id).
2. **CRUD categorias:** criar, listar, editar, excluir (ao excluir categoria, excluir ou avisar sobre itens vinculados).
3. **CRUD itens:** criar (com seleção de categoria), listar por categoria, editar, excluir.
4. **Telas:** lista categorias → lista itens da categoria → detalhe/edição item (e opcionalmente edição categoria).

## Conteúdos cobrados

Aulas 14, 15, 16, 17.

## Critérios de avaliação

Duas tabelas relacionadas; CRUD em ambas; navegação e listagem corretas.

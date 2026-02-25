# Aula 17 – Relações entre tabelas (FK, JOIN)

**Sugestão de execução:** quinzena 22 (26/10/2026 a 07/11/2026).

**Base tecnológica:** Banco de dados no dispositivo; relações simples; consultas com JOIN.

---

## Objetivo

Reforçar o uso de **chave estrangeira** (FK) e **JOIN** em SQL para listar itens **com** o nome da categoria (ou outro dado da tabela relacionada), em vez de só o id_categoria.

---

## Parte 1 – Modelo com FK

```sql
CREATE TABLE categorias (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT NOT NULL);
CREATE TABLE itens (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  id_categoria INTEGER NOT NULL,
  nome TEXT NOT NULL,
  FOREIGN KEY (id_categoria) REFERENCES categorias(id)
);
```

---

## Parte 2 – SELECT com JOIN

Para listar itens **com** o nome da categoria:

```sql
SELECT i.id, i.nome, i.id_categoria, c.nome AS nome_categoria
FROM itens i
INNER JOIN categorias c ON i.id_categoria = c.id
WHERE i.id_categoria = ?
ORDER BY i.id DESC;
```

Assim cada linha retornada tem **nome_categoria** para exibir na interface sem fazer outra consulta.

---

## Parte 3 – Listar todas as categorias com contagem de itens

```sql
SELECT c.id, c.nome, COUNT(i.id) AS total_itens
FROM categorias c
LEFT JOIN itens i ON c.id = i.id_categoria
GROUP BY c.id, c.nome;
```

Útil para mostrar na tela principal "Categoria X (3 itens)".

---

## Parte 4 – Integridade ao excluir categoria

Ao excluir uma categoria, decidir: **excluir em cascata** os itens (DELETE FROM itens WHERE id_categoria = ? antes de DELETE FROM categorias) ou **impedir** exclusão se houver itens (SELECT COUNT primeiro e mostrar "Exclua os itens antes").

---

## Checklist

- [ ] Tabelas com FK definida; consultas usando JOIN para trazer dados da tabela relacionada.
- [ ] Listagem por categoria e listagem com nome da categoria (ou contagem) na interface.
- [ ] Tratamento ao excluir (cascata ou aviso).

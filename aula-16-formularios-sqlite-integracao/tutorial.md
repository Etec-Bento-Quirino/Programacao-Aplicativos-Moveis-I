# Aula 16 – Formulários + SQLite (integração)

**Sugestão de execução:** quinzena 21 (16/10/2026 a 23/10/2026).

**Base tecnológica:** Manipulação de banco de dados no dispositivo; integração com formulários e listagem.

---

## Objetivo

Integrar **formulário de cadastro** com **SQLite**: ao salvar, fazer INSERT; a **listagem** deve vir do SELECT. Incluir **editar** e **excluir** com interface (telas ou modais) para um app com **duas entidades** (ex.: categorias e itens).

---

## Parte 1 – Duas tabelas (exemplo: categorias e itens)

```sql
CREATE TABLE categorias (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT NOT NULL);
CREATE TABLE itens (id INTEGER PRIMARY KEY AUTOINCREMENT, id_categoria INTEGER, nome TEXT, quantidade INTEGER, FOREIGN KEY (id_categoria) REFERENCES categorias(id));
```

---

## Parte 2 – Fluxo de telas

1. **Lista de categorias** – SELECT * FROM categorias; cada item leva à lista de itens daquela categoria.
2. **Lista de itens da categoria** – SELECT * FROM itens WHERE id_categoria = ?; botão "Adicionar item" abre formulário.
3. **Formulário novo item** – campos: nome, quantidade, picker/lista para escolher categoria; ao salvar: INSERT INTO itens.
4. **Detalhe/Edição item** – carrega o item por id; formulário pré-preenchido; ao salvar: UPDATE itens SET ... WHERE id = ?.
5. **Excluir** – DELETE FROM itens WHERE id = ? (e recarregar lista).

---

## Parte 3 – Formulário que insere no SQLite

```javascript
const salvarItem = (nome, quantidade, idCategoria) => {
  db.runSync('INSERT INTO itens (id_categoria, nome, quantidade) VALUES (?, ?, ?)', [idCategoria, nome, quantidade]);
  navigation.goBack();
  carregarItens();
};
```

Chame **salvarItem** no onPress do botão "Salvar", passando os valores dos TextInputs e do Picker.

---

## Parte 4 – Listagem que lê do SQLite

Na tela de itens da categoria:

```javascript
const [itens, setItens] = useState([]);
const { idCategoria } = route.params;

useEffect(() => {
  const linhas = db.getAllSync('SELECT * FROM itens WHERE id_categoria = ? ORDER BY id DESC', [idCategoria]);
  setItens(linhas);
}, [idCategoria]);
```

Exiba em FlatList; cada item com botão Editar (navigate com id) e Excluir (DELETE + recarregar).

---

## Checklist

- [ ] Duas entidades (categorias e itens) com tabelas no SQLite.
- [ ] Formulário de cadastro que faz INSERT; listagem que faz SELECT (com filtro por categoria quando aplicável).
- [ ] Editar (UPDATE) e excluir (DELETE) com interface; lista atualizada após cada operação.

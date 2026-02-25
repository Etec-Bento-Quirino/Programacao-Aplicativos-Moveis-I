# Aula 15 – SQLite: CRUD completo

**Sugestão de execução:** quinzena 18 (21/09/2026 a 03/10/2026).

**Base tecnológica:** Manipulação de banco de dados no dispositivo; leitura e escrita.

---

## Objetivo

Implementar **CRUD** (Create, Read, Update, Delete) usando SQLite: **listar** na tela (FlatList), **adicionar** (formulário + INSERT), **editar** e **excluir** (UPDATE e DELETE). App tipo "Lista de tarefas" ou "Caderno de anotações".

---

## Parte 1 – Estrutura da tela

- **FlatList** com os itens vindos do banco (estado `itens`, carregado com SELECT no useEffect).
- **Formulário:** TextInput + botão "Adicionar" (INSERT; depois recarregar a lista).
- **Cada item:** texto + botão "Excluir" (DELETE) e, opcional, "Editar" (navegar para tela de edição ou modal com UPDATE).

---

## Parte 2 – Carregar lista (Read)

```javascript
const [itens, setItens] = useState([]);

const carregarItens = useCallback(() => {
  db.getAllSync('SELECT * FROM tarefas ORDER BY id DESC'); // ou runAsync + resultado
  setItens(linhas);
}, []);

useEffect(() => {
  carregarItens();
}, [carregarItens]);
```

(Ajuste para a API da sua versão: getAllSync, runAsync, ou transaction com executeSql e callback que chama setItens.)

---

## Parte 3 – Adicionar (Create)

```javascript
const adicionar = async (titulo) => {
  db.runSync('INSERT INTO tarefas (titulo) VALUES (?)', [titulo]);
  carregarItens();
};
```

Chame **adicionar** no onPress do botão, passando o texto do input; depois limpe o input.

---

## Parte 4 – Excluir (Delete)

```javascript
const excluir = (id) => {
  db.runSync('DELETE FROM tarefas WHERE id = ?', [id]);
  carregarItens();
};
```

No renderItem da FlatList, botão "Excluir" que chama excluir(item.id). Opcional: Alert.alert de confirmação antes.

---

## Parte 5 – Editar (Update)

```javascript
const atualizar = (id, novoTitulo) => {
  db.runSync('UPDATE tarefas SET titulo = ? WHERE id = ?', [novoTitulo, id]);
  carregarItens();
};
```

Pode ser um modal com TextInput pré-preenchido e botão "Salvar" que chama atualizar(id, valorDoInput).

---

## Checklist

- [ ] Listar itens do SQLite na FlatList; carregar ao abrir e após cada alteração.
- [ ] Adicionar: INSERT e recarregar lista.
- [ ] Excluir: DELETE e recarregar lista.
- [ ] (Opcional) Editar: UPDATE e recarregar lista; interface coerente (modal ou tela).

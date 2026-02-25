# Aula 18 – UX: loading, empty state e tratamento de erros

**Sugestão de execução:** quinzena 23 (09/11/2026 a 19/11/2026).

**Base tecnológica:** Padrões de interface; feedback ao usuário; tratamento de erros na UI.

---

## Objetivo

Melhorar a experiência do usuário com **loading** (indicador durante operações), **empty state** (mensagem quando a lista está vazia) e **mensagens de erro** amigáveis na tela (em vez de só console ou travamento).

---

## Parte 1 – Loading (ActivityIndicator)

Exibir um indicador enquanto carrega dados (SQLite, API ou AsyncStorage):

```javascript
const [carregando, setCarregando] = useState(true);
const [itens, setItens] = useState([]);

useEffect(() => {
  const carregar = async () => {
    setCarregando(true);
    try {
      const dados = await carregarDoBanco();
      setItens(dados);
    } finally {
      setCarregando(false);
    }
  };
  carregar();
}, []);

if (carregando) {
  return (
    <View style={styles.centralizado}>
      <ActivityIndicator size="large" color="#2196F3" />
      <Text style={styles.textoLoading}>Carregando...</Text>
    </View>
  );
}
```

---

## Parte 2 – Empty state

Quando a lista está vazia, mostrar mensagem e, se quiser, ícone ou ilustração:

```javascript
if (itens.length === 0) {
  return (
    <View style={styles.centralizado}>
      <Text style={styles.emptyTitle}>Nenhum item ainda</Text>
      <Text style={styles.emptySubtitle}>Toque em "Adicionar" para criar o primeiro.</Text>
    </View>
  );
}
```

Ou dentro da tela, acima da FlatList:

```javascript
{itens.length === 0 && (
  <View style={styles.emptyBox}>
    <Text>Lista vazia. Adicione um item!</Text>
  </View>
)}
<FlatList data={itens} ... ListEmptyComponent={<Text>Lista vazia.</Text>} />
```

**ListEmptyComponent** da FlatList exibe quando data.length === 0.

---

## Parte 3 – Tratamento de erro na tela

Em vez de só try/catch com console.log, guarde a mensagem em estado e exiba:

```javascript
const [erro, setErro] = useState(null);

try {
  await salvarNoBanco(dados);
  navigation.goBack();
} catch (e) {
  setErro('Não foi possível salvar. Tente novamente.');
}

return (
  <View>
    {erro && <Text style={styles.erro}>{erro}</Text>}
    ...
  </View>
);
```

Estilo para destaque de erro (ex.: texto vermelho):

```javascript
erro: { color: '#c62828', padding: 12, fontSize: 14 },
```

---

## Checklist

- [ ] ActivityIndicator (ou texto "Carregando...") exibido enquanto busca dados.
- [ ] Empty state quando a lista está vazia (mensagem clara).
- [ ] Mensagem de erro na tela em caso de falha (try/catch + setErro); estilo que chame atenção.

# Aula 11 – Hooks: useState e useEffect

**Sugestão de execução:** quinzena 14 (27/07/2026 a 08/08/2026).

**Base tecnológica:** Gerenciamento de estado dos componentes.

---

## Objetivo

Usar **useState** para manter dados na tela (lista de itens, formulário) e **useEffect** para executar algo ao **montar** o componente (ex.: carregar lista inicial) ou quando uma dependência mudar.

---

## Parte 1 – useState (revisão e aprofundamento)

**useState** retorna um valor e uma função para atualizá-lo. Toda vez que a função é chamada, o componente re-renderiza.

```javascript
const [itens, setItens] = useState([]);
const [texto, setTexto] = useState('');
```

Atualizar lista (adicionar item):

```javascript
const adicionar = () => {
  if (!texto.trim()) return;
  setItens([...itens, { id: Date.now().toString(), nome: texto.trim() }]);
  setTexto('');
};
```

Remover item:

```javascript
const remover = (id) => {
  setItens(itens.filter((i) => i.id !== id));
};
```

Regra: **nunca** altere o estado diretamente (ex.: `itens.push(x)`). Sempre use a função set com **novo** array ou objeto.

---

## Parte 2 – useEffect: executar ao montar

**useEffect** roda após a renderização. Com array de dependências vazio `[]`, roda **uma vez** ao montar.

Exemplo: carregar lista inicial ao abrir a tela.

```javascript
useEffect(() => {
  setItens([
    { id: '1', nome: 'Item inicial 1' },
    { id: '2', nome: 'Item inicial 2' },
  ]);
}, []);
```

---

## Parte 3 – useEffect com dependência

Se você passar uma variável no array, o efeito roda quando essa variável mudar:

```javascript
useEffect(() => {
  console.log('Itens atualizados:', itens.length);
}, [itens]);
```

Útil para sincronizar com AsyncStorage ou banco (ver Aula 13).

---

## Parte 4 – Exemplo completo: lista que carrega ao abrir e permite adicionar

```javascript
const [itens, setItens] = useState([]);
const [input, setInput] = useState('');

useEffect(() => {
  setItens([{ id: '1', nome: 'Primeiro' }, { id: '2', nome: 'Segundo' }]);
}, []);

const adicionar = () => {
  if (!input.trim()) return;
  setItens([...itens, { id: Date.now().toString(), nome: input.trim() }]);
  setInput('');
};

return (
  <View style={styles.container}>
    <FlatList data={itens} keyExtractor={(i) => i.id} renderItem={({ item }) => <Text>{item.nome}</Text>} />
    <TextInput value={input} onChangeText={setInput} placeholder="Novo item" style={styles.input} />
    <TouchableOpacity onPress={adicionar}><Text>Adicionar</Text></TouchableOpacity>
  </View>
);
```

---

## Checklist

- [ ] useState para lista e para campo de texto; atualização com set usando novo array.
- [ ] useEffect com [] para "carregar" dados ao montar (ou simular).
- [ ] Adicionar item à lista e ver a tela atualizar.

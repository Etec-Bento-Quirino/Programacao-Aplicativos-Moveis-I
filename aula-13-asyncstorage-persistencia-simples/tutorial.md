# Aula 13 – AsyncStorage (persistência simples)

**Sugestão de execução:** quinzena 16 (24/08/2026 a 04/09/2026).

**Base tecnológica:** Armazenamento de dados offline; persistência no dispositivo.

---

## Objetivo

Usar **@react-native-async-storage/async-storage** para **salvar** e **recuperar** dados no dispositivo (string ou objeto em JSON). Carregar dados ao abrir o app e salvar quando o usuário alterar.

---

## Parte 1 – Instalar

```bash
npx expo install @react-native-async-storage/async-storage
```

---

## Parte 2 – Salvar e carregar uma string

```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

const CHAVE = '@meuapp:nome';

const salvarNome = async (nome) => {
  try {
    await AsyncStorage.setItem(CHAVE, nome);
  } catch (e) {
    console.warn('Erro ao salvar:', e);
  }
};

const carregarNome = async () => {
  try {
    const valor = await AsyncStorage.getItem(CHAVE);
    return valor;
  } catch (e) {
    console.warn('Erro ao carregar:', e);
    return null;
  }
};
```

---

## Parte 3 – Salvar e carregar um array (lista)

Só é possível guardar **string**. Para array de objetos, use **JSON.stringify** ao salvar e **JSON.parse** ao carregar.

```javascript
const CHAVE_LISTA = '@meuapp:itens';

const salvarLista = async (itens) => {
  try {
    await AsyncStorage.setItem(CHAVE_LISTA, JSON.stringify(itens));
  } catch (e) {
    console.warn('Erro ao salvar lista:', e);
  }
};

const carregarLista = async () => {
  try {
    const str = await AsyncStorage.getItem(CHAVE_LISTA);
    return str ? JSON.parse(str) : [];
  } catch (e) {
    console.warn('Erro ao carregar lista:', e);
    return [];
  }
};
```

---

## Parte 4 – Integrar com a tela (useEffect e ao adicionar)

Ao montar, carregar a lista:

```javascript
const [itens, setItens] = useState([]);

useEffect(() => {
  const init = async () => {
    const dados = await carregarLista();
    setItens(dados);
  };
  init();
}, []);
```

Ao adicionar um item, atualizar estado e salvar:

```javascript
const adicionar = async (novoItem) => {
  const novaLista = [...itens, novoItem];
  setItens(novaLista);
  await salvarLista(novaLista);
};
```

---

## Checklist

- [ ] AsyncStorage instalado; setItem e getItem com chave única.
- [ ] JSON.stringify ao salvar array/objeto; JSON.parse ao carregar.
- [ ] Carregar ao abrir (useEffect); salvar ao alterar dados; dados persistem após fechar e abrir o app.

# Apresentação: Salvando Dados no Celular (AsyncStorage) 💾

**Sugestão de uso:** slides da Aula 13 (leia em voz alta antes do tutorial).

---

## 1. O Que É AsyncStorage?

Na web temos o `localStorage`. No mundo mobile, a Meta (Facebook) criou o **AsyncStorage** — uma "gaveta" permanente dentro do celular.

Funciona como um **dicionário**: você guarda um **chave** (o nome do documento) e um **valor** (o conteúdo). Toda vez que pedir a chave de volta, o conteúdo retorna.

> [!NOTE]
> **Analogia:** pense num armário com gavetas rotuladas. Cada gaveta tem um nome (a chave) e guarda algo dentro (o valor). Você pode escrever "tema" numa gaveta e colocar "escuro" lá dentro. Depois, quando abrir a gaveta "tema", vai encontrar "escuro".

### Exemplo simples

```tsx
// Salvar
await AsyncStorage.setItem('@meuapp_tema', 'escuro');

// Ler
const tema = await AsyncStorage.getItem('@meuapp_tema');
// tema === "escuro"
```

---

## 2. O Problema: Só Aceita Texto (Strings)

O AsyncStorage é um "burro de carga" — ele só carrega **texto puro**. Não aceita arrays, objetos, booleanos ou números diretamente.

Se você tentar mandar um array:

```tsx
// ❌ NÃO FUNCIONA!
await AsyncStorage.setItem('@lista', ['Ovo', 'Leite']);
```

O celular vai reclamar. A solução é **transformar o array em texto** antes de salvar, e **transformar de volta** ao ler.

### A mágica: `JSON.stringify` e `JSON.parse`

| O que fazer | Função | Analogia |
|-------------|--------|----------|
| Array → Texto (para salvar) | `JSON.stringify(lista)` | Derreter o gelo complexo em água |
| Texto → Array (para ler) | `JSON.parse(texto)` | Reconstruir o gelo a partir da água |

```tsx
// SALVAR: array vira texto
const texto = JSON.stringify(['Ovo', 'Leite', 'Farinha']);
await AsyncStorage.setItem('@lista', texto);

// LER: texto volta a ser array
const textoDeVolta = await AsyncStorage.getItem('@lista');
const array = JSON.parse(textoDeVolta); // ['Ovo', 'Leite', 'Farinha']
```

> [!IMPORTANT]
> **Sempre use `JSON.stringify` para salvar** e **`JSON.parse` para ler**. Esquecer um dos dois é o erro nº 1 de iniciantes com AsyncStorage.

---

## 3. O Guarda Noturno de Volta (useEffect)

Lembra da Aula 11? O `useEffect` com `[]` roda quando a tela abre. Perfeito para carregar dados salvos do AsyncStorage!

```tsx
useEffect(() => {
  const carregar = async () => {
    const dados = await AsyncStorage.getItem('@lista');
    if (dados) setLista(JSON.parse(dados));
  };
  carregar();
}, []); // Roda uma vez ao abrir
```

E quando o usuário adicionar um item, você salva imediatamente:

```tsx
const adicionarItem = async (novoItem) => {
  const novaLista = [...lista, novoItem];
  setLista(novaLista);          // atualiza a tela
  await AsyncStorage.setItem('@lista', JSON.stringify(novaLista)); // salva no celular
};
```

> [!TIP]
> **Padrão completo:** `useEffect` carrega ao abrir → `useState` guarda o estado → ao modificar, `setLista` atualiza a tela e `AsyncStorage.setItem` salva no celular. São 3 peças trabalhando juntas.

---

## 4. AsyncStorage vs SQLite

| | AsyncStorage | SQLite |
|---|---|---|
| **Formato** | Chave-valor (texto) | Tabelas com colunas |
| **Complexo** | Simples (listas, preferências) | Complexo (relações, consultas) |
| **Performance** | Rápido para poucos dados | Rápido para muitos dados |
| **Quando usar** | Tema, nome, preferências | Listas grandes, dados relacionados |

> [!NOTE]
> **No curso:** usamos AsyncStorage nas Aulas 13 (este módulo) para dados simples. A partir da Aula 14, migramos para SQLite — que é o banco de dados "de verdade" para apps maiores.

---

## Como isso se aplica ao seu projeto

- **Fase 2 do projeto:** AsyncStorage para dados simples (tema, nome do perfil, configurações)
- **Fase 3 (Aulas 14–15):** migração para SQLite para os dados principais (listas, itens, gastos)

O AsyncStorage continua sendo útil para **preferências do usuário** mesmo depois de ter SQLite — coisas que não precisam de tabelas complexas.

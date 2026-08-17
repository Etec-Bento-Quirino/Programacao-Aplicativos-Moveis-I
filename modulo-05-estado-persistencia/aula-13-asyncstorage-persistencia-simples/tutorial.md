# Tutorial: Criando uma Lista que Sobrevive ao Fechar o App

**Sugestão de execução:** Quinzena 16 | **Bimestre:** 3

> [!NOTE]
> **O que você vai aprender hoje:**
> - Instalar `@react-native-async-storage/async-storage` e salvar dados que persistem ao fechar o app
> - Converter um array JavaScript para texto com `JSON.stringify` (para salvar) e de volta com `JSON.parse` (para ler)
> - Criar funções assíncronas separadas de salvar e carregar, com tratamento de erro
> - Entender a diferença entre AsyncStorage (chave–valor simples) e SQLite (banco relacional)
>
> **Pré-requisitos:** [Aula 12](../aula-12-contexto-hooks/README.md) — `useState`, `useEffect` e `useContext` dominados.

---

Nesta aula usamos uma analogia nova: **o diário de bordo**. Enquanto o `useState` é a memória de curto prazo (esquece tudo quando você dorme), o AsyncStorage é o **diário** — você escreve nele, fecha o caderno, e quando abrir de novo, a história ainda está lá.

---

## Passo 1: Instalando o AsyncStorage (o Diário)

Precisamos instalar a biblioteca que acessa a gaveta permanente do celular. No terminal, rode:

```bash
npx expo install @react-native-async-storage/async-storage
```

> [!TIP]
> O comando `npx expo install` é preferível ao `npm install` porque ele escolhe a versão compatível com a sua versão do Expo. É como pedir ao garçom o prato certo para o seu prato — ele sabe o que combina.

O terminal deve mostrar algo como:

```
✔ Installed @react-native-async-storage/async-storage
```

Depois, reinicie o servidor:

```bash
npm start
```

> [!WARNING]
> Se o terminal mostrar erro de instalação, verifique se o app Expo Go está fechado no celular e tente novamente. Se o erro persistir, consulte o [Guia de Erros Comuns](../../docs/GUIA-DE-ERROS-COMUNS.md).

---

## Passo 2: Criando as Funções de Salvar e Carregar

Crie (ou edite) um arquivo chamado `PersistenciaTest.tsx`. Vamos criar duas funções: uma para **salvar** e outra para **carregar**.

```tsx
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const CHAVE_LISTA = '@lista_de_itens';

export default function PersistenciaTest() {
  const [lista, setLista] = useState<string[]>([]);
```

Agora, dentro do componente, adicione as duas funções gêmeas:

```tsx
  // Função que SALVA: transforma o array em texto e guarda no diário
  const salvarLista = async (novaLista: string[]) => {
    try {
      const json = JSON.stringify(novaLista);
      await AsyncStorage.setItem(CHAVE_LISTA, json);
    } catch (e) {
      console.warn('Erro ao salvar:', e);
    }
  };

  // Função que CARREGA: lê o texto do diário e transforma de volta em array
  const carregarLista = async (): Promise<string[]> => {
    try {
      const dadosSalvos = await AsyncStorage.getItem(CHAVE_LISTA);

      if (dadosSalvos !== null) {
        return JSON.parse(dadosSalvos);
      }
      return []; // Primeira vez: não tem nada salvo
    } catch (e) {
      console.warn('Erro ao carregar:', e);
      return [];
    }
  };
```

> [!NOTE]
> **Por que `JSON.stringify`?** Porque o AsyncStorage só aceita texto. O `JSON.stringify` "derrete" o array em uma string enorme. O `JSON.parse` "reconstrói" o array a partir dessa string. É como congelar e descongelar comida — o formato muda, mas o conteúdo é o mesmo.

> [!IMPORTANT]
> As funções de salvar e carregar são **assíncronas** (`async/await`). Isso porque o celular demora um pouquinho para escrever/ler na memória flash — não podemos travar a tela enquanto isso acontece.

---

## Passo 3: Ligando o Guarda Noturno (useEffect)

Agora vamos usar o `useEffect` para carregar os dados assim que a tela abre, e criar uma função para adicionar itens:

```tsx
  // Carrega os dados ao abrir a tela
  useEffect(() => {
    const inicializar = async () => {
      const dadosRecuperados = await carregarLista();
      setLista(dadosRecuperados);
    };

    inicializar();
  }, []); // Array vazio = roda 1 vez ao carregar

  // Adiciona um item e salva imediatamente
  const adicionarItem = async () => {
    const novoItem = "Item #" + (lista.length + 1);

    // Cria novo array com spread (não mutation!)
    const novaLista = [...lista, novoItem];

    setLista(novaLista);             // atualiza a tela
    await salvarLista(novaLista);    // salva no diário
  };
```

> [!TIP]
> Repare no padrão: primeiro `setLista` atualiza a tela (o pintor acorda), depois `salvarLista` grava no diário. São duas ações separadas — e isso é de propósito. Se a gravação falhar, pelo menos o usuário vê o item na tela.

---

## Passo 4: Montando a Interface

Agora vamos exibir a lista e o botão. Complete o `return` do componente:

```tsx
  const [novoItem, setNovoItem] = useState('');

  const adicionarComInput = async () => {
    if (novoItem.trim() === '') return; // Não adiciona vazio

    const novaLista = [...lista, novoItem];
    setLista(novaLista);
    await salvarLista(novaLista);
    setNovoItem('');
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Minha Lista Persistente</Text>

      <View style={estilos.linha}>
        <TextInput
          style={estilos.input}
          placeholder="Digite um item..."
          value={novoItem}
          onChangeText={setNovoItem}
        />
        <TouchableOpacity style={estilos.botao} onPress={adicionarComInput}>
          <Text style={estilos.botaoTexto}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={lista}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={estilos.item}>{item}</Text>
        )}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 50 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  linha: { flexDirection: 'row', marginBottom: 20 },
  input: { flex: 1, borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 8, marginRight: 10 },
  botao: { backgroundColor: '#4630eb', padding: 12, borderRadius: 8 },
  botaoTexto: { color: '#fff', fontWeight: 'bold' },
  item: { padding: 12, borderBottomWidth: 1, borderBottomColor: '#eee', fontSize: 16 },
});
```

> [!TIP]
> O `trim()` no `novoItem.trim() === ''` verifica se o texto não é só espaços em branco. Evita que o usuário adicione itens vazios acidentalmente.

---

## Passo 5: Testando a Persistência (o Teste Definitivo)

1. Salve o arquivo e rode `npm start`.
2. Abra o app no Expo Go.
3. Adicione 3 ou 4 itens na lista.
4. **Feche o Expo Go completamente** (abra o multitarefa do celular e deslize o app para cima).
5. Reabra o Expo Go e carregue seu projeto.

> [!CAUTION]
> **Este é o teste mais importante desta aula.** Se os itens aparecerem novamente após reabrir o app, significa que o AsyncStorage está funcionando. Se sumirem, verifique se `JSON.stringify` e `JSON.parse` estão nos lugares certos.

### O que você deve ver

```
Antes de fechar:              Depois de reabrir:
┌──────────────────────┐     ┌──────────────────────┐
│ Minha Lista          │     │ Minha Lista          │
│                      │     │                      │
│ Item #1              │     │ Item #1              │
│ Item #2              │     │ Item #2              │
│ Item #3              │     │ Item #3              │
│ [____________] [Add] │     │ [____________] [Add] │
└──────────────────────┘     └──────────────────────┘
     ↑ Fechei o app...            ↑ Reabri e PERSISTIU!
```

---

## Checklist da Aula 13

Marque cada item quando conseguir fazer:

- [ ] Instalei `@react-native-async-storage/async-storage`
- [ ] Criei a função `salvarLista` com `JSON.stringify` + `setItem`
- [ ] Criei a função `carregarLista` com `getItem` + `JSON.parse`
- [ ] Usei `useEffect` com `[]` para carregar ao abrir a tela
- [ ] Adicionei itens e salvei no AsyncStorage
- [ ] Fechei o app completamente e reabri — os dados persistiram

> [!NOTE]
> Se algum item ficou sem marcar, volte no passo correspondente. A persistência é a base de qualquer app real — sem ela, seu app perde os dados do usuário toda vez que fecha.

---

## Como isso se aplica ao seu projeto

O AsyncStorage é a tecnologia de persistência da **Fase 2** do seu projeto — antes do SQLite:

| Categoria do Projeto | O que salvar no AsyncStorage |
|----------------------|------------------------------|
| 1 — Lista de Tarefas | Array de tarefas `[{id, titulo, concluida}]` |
| 2 — Lista de Compras | Array de itens `[{id, nome, categoria}]` |
| 3 — Notas / Diário | Array de notas `[{id, titulo, conteudo}]` |
| 4 — Controle de Gastos | Array de gastos `[{id, valor, descricao, data}]` |

> [!IMPORTANT]
> Na **Fase 3** (Aulas 14–15), você vai migrar do AsyncStorage para o SQLite. O AsyncStorage continua útil para **preferências simples** (tema, nome do perfil), enquanto o SQLite assume os dados principais do app. Vejo você na Aula 14! 🚀

# Tutorial: A Arte do Acolhimento 🎩

**Sugestão de execução:** Quinzena 23 | **Bimestre:** 4

> [!NOTE]
> **O que você vai aprender hoje:**
> - Exibir um **spinner** (`ActivityIndicator`) enquanto os dados do banco carregam
> - Usar o **early return** para trocar toda a tela pelo spinner, sem if/else aninhados
> - Usar a prop `ListEmptyComponent` da `FlatList` para mostrar uma mensagem quando a lista estiver vazia
> - Entender por que essas três situações (carregando / vazio / com dados) são estados distintos e precisam ser tratados separadamente
>
> **Pré-requisitos:** [Aula 17](../../modulo-06-banco-dados-sqlite/aula-17-relacoes-tabelas-join/README.md) — CRUD com SQLite e JOIN funcionando; `FlatList` dominada.

---

Vamos imaginar uma analogia: seu app é um restaurante. Quando o cliente pede (o usuário clica), a cozinha prepara (o banco busca dados). Enquanto isso, o garçom (você) precisa avisar: "estamos preparando, aguarde um momento". Se o garçom some sem explicação, o cliente fica puto e vai embora.

Vamos aplicar essa lógica nas nossas listagens do CRUD das últimas aulas.

---

## Passo 1: O ActivityIndicator de Espera

Vamos criar dois novos `useState` no topo do componente que acessa o banco. Um controla se está **carregando**, o outro guarda os **itens**.

> [!NOTE]
> O **`useState`** é um hook do React que guarda um valor que pode mudar ao longo do tempo. Pense nele como uma caixa etiquetada: você coloca um valor dentro e pode trocar o conteúdo depois.

```tsx
import { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

export default function ListagemDeluxe() {
  const [carregandoStatus, setCarregando] = useState(true); // Começa true pra girar de cara!
  const [itensArray, setItens] = useState([]);

  useEffect(() => {
    const carregarDados = async () => {
      setCarregando(true); // Ativa o spinner antes de buscar
      
      try {
        // Simulação de 1,5s para você conseguir VER o spinner girando antes dos dados chegarem
        await new Promise(resolve => setTimeout(resolve, 1500)); 
        
        const registros = bancoDados.getAllSync("SELECT * FROM metas");
        setItens(registros);
      } finally {
        // O bloco "finally" executa sempre — com erro ou sem — garantindo que o spinner para
        setCarregando(false);
      }
    };
    carregarDados();
  }, []);
```

Vamos entender linha por linha:

- `useState(true)` — o estado inicial é `true`, ou seja, o app começa carregando.
- `setCarregando(true)` — assim que o useEffect roda, ativamos o spinner.
- `try { ... } finally { ... }` — o `finally` **sempre** executa, mesmo se der erro. É como o garçom que sempre volta pra mesa avisar que o pedido saiu, mesmo que tenha caído no caminho.

> [!WARNING]
> Se você esquecer o `finally` e usar só o `try/catch`, pode acontecer do spinner ficar girando para sempre se der erro. O `finally` é o segurança que garante que o spinner vai parar.

---

## Passo 2: O Desvio de Render (**Early Return**)

O **early return** é um padrão onde a função "corta" a execução antes de chegar ao return final. Se o app está carregando, não tem nada pra mostrar na tela além do spinner — então retornamos só ele e pronto.

> [!TIP]
> Em vez de colocar `if/else` dentro do JSX (o que fica feio e confuso), fazemos o `return` antecipado. É como um semáforo: "enquanto estiver vermelho, pare aqui. Quando ficar verde, siga em frente."

```tsx
{% raw %}
  // Early return: enquanto carrega, exibe só o spinner e ignora todo o resto do componente
  if (carregandoStatus) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#FF0000" />
        <Text>Acordando o Cofre...</Text>
      </View>
    );
  }
{% endraw %}
```

O que acontece aqui:

1. Se `carregandoStatus` for `true`, a função retorna **só** o spinner e para.
2. Se for `false`, ela continua e mostra a lista normalmente.
3. O usuário vê a bolinha girando enquanto os dados chegam.

---

## Passo 3: O Fantasma (**ListEmptyComponent**)

Agora seus dados já carregaram. Mas e se a lista estiver vazia? O `FlatList` tem uma propriedade mágica chamada `ListEmptyComponent` que mostra algo automaticamente quando o array tem 0 itens.

> [!NOTE]
> O **`ListEmptyComponent`** é como um "aviso de ausência automático". Quando não tem ninguém na sala, ele aparece com uma mensagem engraçada em vez de deixar a tela em branco.

```tsx
{% raw %}
  return (
      <FlatList
        data={itensArray}
        keyExtractor={(item) => String(item.id)}

        // AQUI ESTÁ A MÁGICA PSICOLÓGICA do EMPTY:
        ListEmptyComponent={
            <View style={{ padding: 40, alignItems: 'center' }}>
               <Text>🏜️</Text>
               <Text style={{fontWeight: 'bold', fontSize: 18}}>Nenhum item ainda.</Text>
               <Text style={{color: 'gray'}}>Toque no botão abaixo para adicionar o primeiro.</Text>
            </View>
        }

        renderItem={({ item }) => (
          <View style={{ padding: 15 }}>
            <Text>Meta Real: {item.nome}</Text>
          </View>
        )}
      />
  );
}
{% endraw %}
```

O que está acontecendo:

1. Se `itensArray` tiver itens, o `renderItem` desenha cada um normalmente.
2. Se `itensArray` estiver vazio (0 itens), o `ListEmptyComponent` aparece automaticamente.
3. O emoji 🏜️ e a mensagem "Nenhum item ainda" criam um empty state amigável.

> [!TIP]
> **Personalize o empty state para cada tela.** Um app de tarefas pode mostrar "Nenhuma tarefa cadastrada. Adicione a primeira!". Um app financeiro pode mostrar "Nenhum gasto registrado neste período." Quanto mais específico, melhor a experiência do usuário.

---

## Checklist da Aula 18

Marque cada item quando conseguir fazer:

- [ ] Adicionei `useState(true)` para controlar o estado de carregamento
- [ ] Usei `try/finally` no `useEffect` para garantir que o spinner para
- [ ] Criei um early return que mostra o `ActivityIndicator` quando está carregando
- [ ] Adicionei `ListEmptyComponent` na minha `FlatList`
- [ ] O empty state tem uma mensagem amigável (não só "lista vazia")
- [ ] Testei os 3 estados: carregando, vazio e com dados

> [!WARNING]
> Se algum item ficou sem marcar, volte no passo correspondente. Não siga em frente com pendências — a atividade cobra tudo isso.

---

## Como isso se aplica ao seu projeto

Os três padrões desta aula devem estar presentes em **todas** as telas com `FlatList` do seu projeto final:

**1. Loading state** — sempre que buscar do banco:
```tsx
if (carregandoStatus) return <ActivityIndicator />;
```

**2. Empty state** — personalizado para o contexto:
| Categoria do projeto | Mensagem do empty state |
|---|---|
| Categoria 1 | "Nenhuma tarefa cadastrada. Adicione a primeira!" |
| Categoria 2 | "Esta categoria está vazia. Adicione um item." |
| Categoria 3 | "Nenhuma nota ainda. Comece a escrever!" |
| Categoria 4 | "Nenhum gasto registrado neste período." |

**3. Exibição dos dados** — a `FlatList` com `keyExtractor` e `renderItem` da Aula 15.

> [!IMPORTANT]
> A Aula 20 exige que esses três estados estejam presentes no projeto como critério de aprovação. Se você não tem loading, empty state e exibição de dados, o projeto **não passa** na entrega final.

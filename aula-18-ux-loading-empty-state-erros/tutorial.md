---
layout: default
render_with_liquid: false
---
# Tutorial: A Arte do Acolhimento 🎩

**Sugestão de execução:** Quinzena 23 | **Bimestre:** 4

> **Pré-requisitos:** [Aula 17](../aula-17-relacoes-tabelas-join/README.md) — CRUD com SQLite e JOIN funcionando; `FlatList` dominada.
>
> **O que você vai aprender:**
> - Exibir um spinner (`ActivityIndicator`) enquanto os dados do banco carregam
> - Usar o early return para trocar toda a tela pelo spinner, sem if/else aninhados
> - Usar a prop `ListEmptyComponent` da `FlatList` para mostrar uma mensagem quando a lista estiver vazia
> - Entender por que essas três situações (carregando / vazio / com dados) são estados distintos e precisam ser tratados separadamente

---

Temos lógicas brutais para aplicar nas nossas listagens antigas que fizemos na área CRUD das últimas 3 aulas. O nosso Frontend precisa acompanhar as complexidades. Puxe suas Telas de banco e insira essas travas.

---

## Passo 1: O ActivityIndicator de Espera

Crie dois novos `useState` na cabeça do Componente que possui o DB de requisição: A "Chavinha" pra bolinha girar e o "Error" de mensagem.

```tsx
import { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

export default function ListagemDeluxe() {
  const [carregandoStatus, setCarregando] = useState(true); // Começa true pra girar de cara!
  const [itensArray, setItens] = useState([]);

  useEffect(() => {
    const carregarDados = async () => {
      setCarregando(true);
      
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

## Passo 2: O Desvio de Render (Render Early Return)

Podemos simplesmente esconder a lista se estiver rodando e devolver apenas o Spinner gigante:

```tsx
  // Early return: enquanto carrega, exibe só o spinner e ignora todo o resto do componente
  if (carregandoStatus) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#FF0000" />
        <Text>Acordando o Cofre C++...</Text>
      </View>
    );
  }
```

## Passo 3: O Fantasma (ListEmptyState)
Com a Lista Finalmente Baixada. Usaremos um truque majestoso exclusivo da tecnologia da Matriz `Flatlist` Nativa para detectar arrays contendo 0 Items!
A Extensa propriedade `ListEmptyComponent` aciona na hora uma View Secundária.

```tsx
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
```

Esses três estados (carregando / vazio / com dados) fazem seu app parecer profissional. Avance para a atividade desta quinzena!

---

## Como isso se aplica ao seu projeto

Os três padrões desta aula devem estar presentes em **todas** as telas com `FlatList` do seu projeto final:

**1. Loading state** — sempre que buscar do banco:
```tsx
if (carregandoStatus) return <ActivityIndicator />;
```

**2. Empty state** — personalizado para o contexto:
| Projeto | Mensagem do empty state |
|---|---|
| Categoria 1 | "Nenhuma tarefa cadastrada. Adicione a primeira!" |
| Categoria 2 | "Esta categoria está vazia. Adicione um item." |
| Categoria 3 | "Nenhuma nota ainda. Comece a escrever!" |
| Categoria 4 | "Nenhum gasto registrado neste período." |

**3. Exibição dos dados** — a `FlatList` com `keyExtractor` e `renderItem` da Aula 15.

A Aula 20 exige que esses três estados estejam presentes no projeto como critério de aprovação.

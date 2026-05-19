# Tutorial: A Arte do Acolhimento 🎩

**Sugestão de execução:** Quinzena 23.

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
    const rebobinarServidorPesado = async () => {
      // 1. CUIDADO: Cimentamos a Bolinha girante Acesa via State.
      setCarregando(true);
      
      try {
        // 👈 Simulando uma lentidão de rede para que você consiga VER o spinner de carregamento girando!
        await new Promise(resolve => setTimeout(resolve, 1500)); 
        
        const dadosDoSQLite = bancoDados.getAllSync("SELECT * FROM metas");
        setItens(dadosDoSQLite)
      } finally {
        // O finally acontece SEMPRE não importa se teve Erro C++ ou Acerto Absoluto.
        // Ele vai vir aqui e obrigar a bolinha de carregar a parar!
        setCarregando(false);
      }
    };
    rebobinarServidorPesado();
  }, []);
```

## Passo 2: O Desvio de Render (Render Early Return)

Podemos simplesmente esconder a lista se estiver rodando e devolver apenas o Spinner gigante:

```tsx
  // Essa malha bloqueia todas as outras mil linhas do Arquivo abaixo caso a internet ou SSD tiver demorando as requisições ali de cima!
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
               <Text style={{fontWeight: 'bold', fontSize: 18}}>A Cidade está vazia.</Text>
               <Text style={{color: 'gray'}}>Você nunca adicionou nenhuma Meta do Mês aqui. Clique no Form abaixo para Forjar o primeiro!</Text>
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

Esta foi sua Reta Final de Inteligência de UX! Avance para a Sua Missão Mestre.

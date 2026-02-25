# Aula 05 – Imagens e listas (Image, FlatList)

**Sugestão de execução:** quinzena 5 (06/04/2026 a 11/04/2026).

**Base tecnológica:** Criação e configuração de componentes básicos – imagens; listas; views.

---

## Objetivo

Exibir uma **imagem** (local ou URL) e uma **lista** de itens com **FlatList**, e ao tocar em um item navegar para uma tela de detalhe (a navegação será aprofundada na Aula 06; aqui pode ser um Alert com o nome do item).

---

## Parte 1 – Imagem (Image)

Importe **Image** de `react-native`:

```javascript
import { Image, StyleSheet, View } from 'react-native';
```

**Imagem da rede (URL):**
```javascript
<Image
  source={{ uri: 'https://via.placeholder.com/200x100' }}
  style={styles.imagem}
/>
```

**Imagem local (pasta do projeto):** coloque o arquivo, por exemplo, em `assets/logo.png` e use:
```javascript
<Image source={require('./assets/logo.png')} style={styles.imagem} />
```

Estilo:
```javascript
imagem: {
  width: 200,
  height: 100,
  resizeMode: 'cover',
  borderRadius: 8,
},
```

---

## Parte 2 – Lista com FlatList

**FlatList** exibe uma lista a partir de um array de dados. Propriedades principais: **data**, **renderItem**, **keyExtractor**.

Exemplo com array de itens:

```javascript
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ITENS = [
  { id: '1', nome: 'Item Um' },
  { id: '2', nome: 'Item Dois' },
  { id: '3', nome: 'Item Três' },
];

export default function App() {
  const mostrarDetalhe = (item) => {
    Alert.alert('Detalhe', item.nome);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={ITENS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.linha} onPress={() => mostrarDetalhe(item)}>
            <Text style={styles.texto}>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  linha: { padding: 16, borderBottomWidth: 1, borderBottomColor: '#eee' },
  texto: { fontSize: 16 },
});
```

- **data={ITENS}** – array de objetos.
- **keyExtractor** – retorna um id único para cada item (evita warnings e melhora desempenho).
- **renderItem** – recebe `{ item }` e retorna o componente de cada linha (aqui: TouchableOpacity + Text). Ao tocar, chama `mostrarDetalhe(item)` (por enquanto um Alert).

---

## Parte 3 – Combinar imagem e lista

No mesmo app você pode ter:
- No topo: um **Image** (logo ou banner).
- Abaixo: uma **FlatList** com 3 itens; ao tocar, Alert com o nome do item.

Isso prepara a Aula 06, onde a “tela de detalhe” será uma segunda tela de verdade (React Navigation).

---

## Checklist

- [ ] Exibiu uma imagem (URL ou local) com Image e style.
- [ ] Usou FlatList com data, keyExtractor e renderItem.
- [ ] Ao tocar em um item, algo acontece (Alert ou console.log).

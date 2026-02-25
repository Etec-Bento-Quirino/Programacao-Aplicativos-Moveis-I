# Aula 06 – Navegação de telas (React Navigation)

**Sugestão de execução:** quinzena 7 (17/04/2026 a 24/04/2026).

**Base tecnológica:** Navegação de telas; passagem de dados entre telas.

---

## Objetivo

Usar **React Navigation** (stack) para ter duas ou mais telas e **passar parâmetros** de uma tela para outra (ex.: lista → detalhe).

---

## Parte 1 – Instalar React Navigation

No terminal, na pasta do seu projeto Expo:

```bash
npx expo install @react-navigation/native @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context
```

---

## Parte 2 – Estrutura: Navigator e Screens

1. Crie uma pasta **screens** (se ainda não tiver): dentro do projeto, crie `screens/`.
2. Crie dois arquivos de tela, por exemplo:
   - **screens/ListaScreen.js** – tela com uma lista de itens.
   - **screens/DetalheScreen.js** – tela que recebe um item (por parâmetro) e exibe o nome.

Exemplo **ListaScreen.js**:

```javascript
import { TouchableOpacity, FlatList, StyleSheet, Text, View } from 'react-native';

const ITENS = [
  { id: '1', nome: 'Item Um' },
  { id: '2', nome: 'Item Dois' },
  { id: '3', nome: 'Item Três' },
];

export default function ListaScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={ITENS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.linha}
            onPress={() => navigation.navigate('Detalhe', { item })}
          >
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

Exemplo **DetalheScreen.js**:

```javascript
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function DetalheScreen({ route, navigation }) {
  const { item } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Detalhe</Text>
      <Text style={styles.nome}>{item?.nome || 'Sem nome'}</Text>
      <TouchableOpacity style={styles.botao} onPress={() => navigation.goBack()}>
        <Text style={styles.textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
  nome: { fontSize: 16, marginBottom: 24 },
  botao: { backgroundColor: '#2196F3', padding: 12, borderRadius: 8, alignSelf: 'flex-start' },
  textoBotao: { color: '#fff', fontWeight: '600' },
});
```

- **navigation.navigate('Detalhe', { item })** – vai para a tela "Detalhe" e passa o objeto **item**.
- **route.params** – na tela Detalhe, os parâmetros vêm em **route.params** (aqui, **item**).
- **navigation.goBack()** – volta para a tela anterior.

---

## Parte 3 – Configurar o Navigator em App.js

No **App.js** (ou **App.tsx**), importe o Navigator e as telas e monte a pilha:

```javascript
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListaScreen from './screens/ListaScreen';
import DetalheScreen from './screens/DetalheScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lista">
        <Stack.Screen name="Lista" component={ListaScreen} options={{ title: 'Lista' }} />
        <Stack.Screen name="Detalhe" component={DetalheScreen} options={{ title: 'Detalhe' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

- **Stack.Navigator** – define a pilha de telas (voltar com gesto ou botão).
- **Stack.Screen** – cada tela: **name** (usado em navigate), **component**, **options** (título, etc.).

---

## Parte 4 – Testar

1. Rode o app: `npx expo start`.
2. Na tela Lista, toque em um item: deve abrir a tela Detalhe com o nome do item.
3. Toque em "Voltar": deve retornar à lista.

---

## Checklist

- [ ] Instalou @react-navigation/native e native-stack (e dependências).
- [ ] Criou pelo menos duas telas (lista e detalhe).
- [ ] Passou parâmetro com navigation.navigate('NomeTela', { ... }).
- [ ] Leu o parâmetro em route.params na tela de destino.
- [ ] Botão ou gesto "Voltar" funcionando (goBack).

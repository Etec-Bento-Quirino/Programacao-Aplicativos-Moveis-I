# Aula 06 – Navegação (Abas e Expo Router)

**Sugestão de execução:** quinzena 6.
**Base tecnológica:** App Routing (Substituto Nativo Inteligente do React Navigation).

---

## O Poder do Roteamento de Arquivos
Nós usaremos o **Expo Router** ao invés do React Navigation manual. Se você cria um arquivo, ele virou a tela e a teia de rotas no background já amarra e injeta o `Header` por conta própria! Não tem linhas confusas de configuração.

1. Baixamos nossa página oficial para uma sub-pasta chamada Tab, que controla um Footer embaixo pra navegar entre telas de forma bonita.

- Crie uma pasta `(tabs)` dentro de `app/`. (Sim, o nome precisa ter os parênteses, pois no Roteador, Parênteses oculta o nome e transforma aquilo num Layout de Casca).
- Arraste `index.tsx` lá para dentro.
- Crie a tela Extra `about.tsx`:

```tsx
import { Text, View, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela Sobre! Feito via Tabs!</Text>
    </View>
  );
}
const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: '#25292e', justifyContent: 'center', alignItems: 'center' }, text: { color: '#fff' } });
```

### O Cérebro das Abas: _layout.tsx
Sempre que uma pasta tem o arquivo mágico `_layout.tsx`, todo componente daquela pasta veste as propriedades dele invés de rodar pelado.
Crie `app/(tabs)/_layout.tsx`:

```tsx
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    // Transformamos a Root desta pasta em um Elemento TABS:
    <Tabs // 👈 Inicia o Menu Inferior Mágico
      screenOptions={{
        tabBarActiveTintColor: '#ffd33d', // Amarelo chique quando selecionado
        headerStyle: { backgroundColor: '#25292e' }, // Topo negro
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: { backgroundColor: '#25292e' },
      }}
    >
      {/* 👈 As Telas: 'name' aponta para index.tsx, 'title' é o texto escrito, 'tabBarIcon' é o desenho. */}
      <Tabs.Screen name="index" options={{ title: 'Início', tabBarIcon: ({ color, focused }) => ( <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} /> ) }} />
      <Tabs.Screen name="about" options={{ title: 'Sobre', tabBarIcon: ({ color, focused }) => ( <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} /> ) }} />
    </Tabs>
  );
}
```

E no seu App Master `app/_layout.tsx`, garantimos que o NotFound não mate seu app e carregue as Tabs primeiro:
```tsx
import { Stack } from 'expo-router';
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> 
      <Stack.Screen name="+not-found" options={{ title: 'Oops!' }} />
    </Stack>
  );
}
```
Massa, não?

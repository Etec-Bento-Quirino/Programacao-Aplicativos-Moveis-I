# Aula 06 – Navegação com Expo Router (Abas e Stack)

**Sugestão de execução:** Quinzena 6 | **Bimestre:** 2
**Base tecnológica:** Expo Router — File-Based Routing, Tabs, Stack.

> **Pré-requisitos:** [Aula 05](../aula-05-imagens-listas-flatlist/README.md) — FlatList e componentes reutilizáveis compreendidos.
>
> **O que você vai aprender:**
> - Usar o **Expo Router** para criar múltiplas telas sem configuração manual de rotas
> - Entender "File-Based Routing": criar um arquivo = criar uma tela
> - Adicionar uma barra de abas (`Tabs`) no rodapé do app
> - Criar um arquivo `_layout.tsx` para compartilhar cabeçalho e navegação entre telas

---

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
{% raw %}
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
{% endraw %}
```

E no seu App Master `app/_layout.tsx`, garantimos que o NotFound não mate seu app e carregue as Tabs primeiro:
```tsx
{% raw %}
import { Stack } from 'expo-router';
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> 
      <Stack.Screen name="+not-found" options={{ title: 'Oops!' }} />
    </Stack>
  );
}
{% endraw %}
```
Massa, não?

---

## Como isso se aplica ao seu projeto

O sistema de navegação com Expo Router é a espinha dorsal de todas as telas do **seu** projeto. Após esta aula, você já sabe criar quantas telas precisar: a tela `index` (listagem dos registros do seu tema), a tela `detalhe/[id]` (detalhes de um registro) e as telas de formulário de cadastro/edição.

O arquivo `_layout.tsx` com `<Tabs>` ou `<Stack>` controla como as telas são empilhadas e como o botão "Voltar" funciona automaticamente.

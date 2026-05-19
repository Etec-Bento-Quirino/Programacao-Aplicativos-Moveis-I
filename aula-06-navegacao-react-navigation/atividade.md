# Atividade 6: Navegação com Expo Router ⛴️

**Objetivo da Atividade:**

Configurar a arquitetura de navegação utilizando o Expo Router, estruturando abas interativas (Tabs) para o projeto.

---

## O Desafio: Abas Inferiores (Tabs)

Configure o seu projeto para possuir uma navegação baseada em Tabs (abas) no rodapé da tela.

1. Garanta que o arquivo `app/_layout.tsx` seja o núcleo que invoca as suas rotas.
2. Crie ou configure os arquivos da pasta `app/(tabs)/` contendo pelo menos duas abas: `index` (página inicial) e `about` (página sobre).
3. Na sua página "Sobre" (`about.tsx`), adicione uma cor de fundo primária escura e um texto informando a versão do aplicativo (ex: "App v1.0") com o seu nome assinado.

### 💡 Dica de como iniciar:

Para criar o Layout de Tabs com estilo customizado, modifique o `_layout.tsx` dentro da pasta `(tabs)` para utilizar o `Tabs` do `expo-router` e especificar as cores base.

No arquivo `app/(tabs)/_layout.tsx`:
```tsx
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffd33d', // Cor amarela da aba ativa
        tabBarStyle: {
          backgroundColor: '#25292e', // Fundo da barra de abas
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: 'Início' }}
      />
      <Tabs.Screen
        name="about"
        options={{ title: 'Sobre' }}
      />
    </Tabs>
  );
}
```

No seu arquivo `app/(tabs)/about.tsx`:
```tsx
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>App v1.0 - Desenvolvido por [Seu Nome]</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#25292e', alignItems: 'center', justifyContent: 'center' },
  text: { color: '#fff', fontSize: 18 },
});
```

## Entrega:
Navegue pelo aplicativo e acesse a aba "Sobre" tocando no botão inferior direito. Tire uma captura de tela garantindo que é possível ver o fundo escuro, a sua assinatura na tela e a aba inferior realçada com a cor ativa. Envie a imagem na plataforma.

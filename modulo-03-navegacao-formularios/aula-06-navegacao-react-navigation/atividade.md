# Atividade 6: Navegação com Expo Router

**Sugestão de execução:** Quinzena 6 | **Bimestre:** 2 | **Valendo XP e nota**

---

**Objetivo da Atividade:** configurar a arquitetura de navegação do seu projeto utilizando o Expo Router, criando abas interativas (Tabs) no rodapé da tela.

> [!NOTE]
> Se você ainda não fez o [Tutorial da Aula 06](tutorial.md), faça primeiro. Esta atividade cobra exatamente os passos de lá.

---

## O Desafio: Abas Inferiores (Tabs)

Configure o seu projeto para possuir uma navegação baseada em **Tabs** (abas) no rodapé da tela. Siga os três passos:

1. Garanta que o arquivo `app/_layout.tsx` seja o núcleo que invoca as suas rotas com `<Stack>`.
2. Crie ou configure os arquivos dentro de `app/(tabs)/` contendo pelo menos duas abas: `index` (página inicial) e `about` (página sobre).
3. Na sua página "Sobre" (`about.tsx`), adicione uma cor de fundo escura e um texto informando a versão do aplicativo (ex: "App v1.0") com o seu nome assinado.

> [!TIP]
> **Dica de como iniciar:** para criar o Layout de Tabs com estilo customizado, modifique o `_layout.tsx` dentro da pasta `(tabs)` para utilizar o `Tabs` do `expo-router` e especificar as cores base.

### Código de referência para `app/(tabs)/_layout.tsx`:

```tsx
{% raw %}
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
        tabBarStyle: {
          backgroundColor: '#25292e',
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
{% endraw %}
```

### Código de referência para `app/(tabs)/about.tsx`:

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
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
});
```

> [!WARNING]
> Lembre-se: o `name` em `<Tabs.Screen>` deve bater **exatamente** com o nome do arquivo (em minúsculas, sem extensão `.tsx`). Se der erro de tela não encontrada, verifique essa correspondence.

---

## Entrega

Navegue pelo aplicativo e acesse a aba "Sobre" tocando no botão inferior direito. Tire uma captura de tela garantindo que é possível ver:
- O fundo escuro da tela
- A sua assinatura (nome) na tela
- A aba inferior realçada com a cor ativa

Envie a imagem na plataforma.

---

## Checklist de Entrega

Antes de enviar, confira:

- [ ] O menu inferior aparece com duas abas
- [ ] Ao tocar em "Sobre", a tela troca fluidamente
- [ ] A tela Sobre mostra "App v1.0" com o seu nome
- [ ] O fundo da tela Sobre está escuro
- [ ] A aba ativa está destacada na cor amarela

---

## Como isso se aplica ao seu projeto

A navegação com Tabs é a base da interface do seu Trabalho em Grupo. Pense: uma aba pode listar os registros, outra pode mostrar configurações, e uma terceira pode ser o formulário de cadastro. Essa organização com abas é o padrão que apps como Instagram, WhatsApp e Spotify usam — e agora você também sabe fazer!

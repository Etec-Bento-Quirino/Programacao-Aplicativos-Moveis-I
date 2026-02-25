# Aula 06 - Navegação (React Navigation)

**Data:** 17/04/2026

---

## Apresentação

React Navigation (stack): instalação, Navigator e Screens; passagem de parâmetros entre telas (navigation.navigate, route.params); botão Voltar (goBack).

---

## Slides

### Objetivo

Ter duas ou mais telas com React Navigation; passar dados de uma tela para outra (ex.: lista → detalhe); botão ou gesto para voltar.

### Instalação

npx expo install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context.

### Estrutura

NavigationContainer envolve Stack.Navigator; cada Stack.Screen tem name, component e options. name é usado em navigation.navigate('Nome', { params }).

### Parâmetros

Enviar: navigation.navigate('Detalhe', { item }). Receber: const { item } = route.params. Voltar: navigation.goBack().

### Atividade da quinzena

App com 3 telas: lista de categorias → lista de itens da categoria → detalhe do item. Passagem de parâmetros correta.

### Próxima aula

Formulários: TextInput, validação e diálogo de confirmação; opcional splash.

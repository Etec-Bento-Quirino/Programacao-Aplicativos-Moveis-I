# Aula 02 - Ambiente React Native (Expo) e primeiro app

**Data:** 23/02/2026

---

## Apresentação

Configuração do ambiente com Expo; criação do primeiro projeto (npx create-expo-app); estrutura de pastas; execução no emulador ou no celular com Expo Go.

---

## Slides

### Objetivo

Criar um projeto React Native com Expo; alterar o texto para "Olá, Mobile!"; rodar no emulador ou no celular; conhecer a estrutura do projeto.

### Criar o projeto

Comando: npx create-expo-app@latest NomeDoApp --template blank. Escolher npm e JavaScript (ou TypeScript).

### Estrutura do projeto

- App.js ou App.tsx: componente principal (o que aparece na tela)
- package.json: dependências e scripts
- app.json: configuração do Expo (nome, ícone)
- node_modules: pacotes instalados

### Rodar o app

npx expo start. No terminal: pressionar 'a' para Android (emulador ou dispositivo); no celular: escanear QR code com Expo Go. O Metro envia o código em tempo real.

### Alterar o texto

Editar App.js: trocar o conteúdo do componente Text por "Olá, Mobile!". Salvar e ver o app atualizar (hot reload).

### Atividade da quinzena

Entregar print do app com "Olá, Mobile!" e documento com o comando usado e onde rodou (emulador ou celular).

### Próxima aula

Layouts em React Native: View, StyleSheet e Flexbox (container, alignItems, justifyContent).

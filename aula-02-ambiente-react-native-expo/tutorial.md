# Aula 02 – Ambiente React Native (Expo) e primeiro app

**Sugestão de execução:** quinzena 2 (23/02/2026 a 06/03/2026).

**Base tecnológica:** Conceitos do modelo e plataforma de desenvolvimento; filosofia e arquitetura; fundamentos da plataforma; ciclo de vida e processo de desenvolvimento; ferramentas (SDK, IDE/CLI, emuladores); configuração do aplicativo e permissões.

---

## Objetivo da aula

Ao final você terá:
- Um projeto React Native criado com **Expo** (CLI).
- O app rodando no **emulador** ou no **celular** (Expo Go).
- A tela exibindo a mensagem **"Olá, Mobile!"**.
- Noção da **estrutura de pastas** do projeto e do **ciclo de vida** (Metro + app).

**Pré-requisito:** Aula 01 concluída (Node, npm e npx instalados).

---

## Parte 1 – Criar o projeto com Expo

### Passo 1 – Abrir o terminal na pasta do curso

**Windows (PowerShell):**
```bash
cd $env:USERPROFILE\Desktop\PAM1-2026
```

**macOS/Linux:**
```bash
cd ~/Desktop/PAM1-2026
```

(Ajuste o caminho se você tiver criado a pasta em outro lugar.)

### Passo 2 – Criar o app com o template padrão

Execute **um** dos comandos abaixo. O primeiro usa o template "blank" (mais simples).

```bash
npx create-expo-app@latest OláMobile --template blank
```

Durante a criação podem aparecer perguntas:
- **"Would you like to use TypeScript?"** – Pode responder **No** (N) para usar só JavaScript, ou **Yes** (Y) se quiser TypeScript.
- **"Which package manager do you want to use?"** – Escolha **npm** (já que usamos npm no curso).

Se aparecer algum aviso sobre versão do npm ou do Node, anote e avise o professor; em geral o projeto é criado mesmo assim.

### Passo 3 – Entrar na pasta do projeto

```bash
cd OláMobile
```

A partir daqui, todos os comandos serão **dentro** da pasta `OláMobile`.

### Passo 4 – Conferir a estrutura de pastas

No terminal (Windows):
```bash
dir
```

No terminal (macOS/Linux):
```bash
ls -la
```

Você deve ver, entre outros:
- **`App.js`** (ou `App.tsx`) – componente principal que aparece na tela.
- **`package.json`** – lista de dependências e scripts (npm usa isso).
- **`node_modules/`** – pasta com as bibliotecas instaladas (não edite).
- **`app.json`** – configuração do Expo (nome do app, ícone, etc.).

---

## Parte 2 – Alterar o texto para "Olá, Mobile!"

### Passo 1 – Abrir o arquivo principal

Abra o arquivo **`App.js`** (ou **`App.tsx`**) no editor de código (VS Code, Cursor, etc.).

O conteúdo inicial pode ser algo assim (Expo SDK 50+):

```javascript
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

### Passo 2 – Trocar o texto

Substitua a linha do `<Text>` por:

```javascript
<Text>Olá, Mobile!</Text>
```

Ou, para um texto um pouco maior e centralizado:

```javascript
<Text style={styles.titulo}>Olá, Mobile!</Text>
```

E adicione o estilo `titulo` no `StyleSheet.create`:

```javascript
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
```

Salve o arquivo (Ctrl+S ou Cmd+S).

---

## Parte 3 – Rodar o app

### Opção A – Emulador Android (recomendado se tiver Android Studio)

1. Instale o **Android Studio** e, pelo AVD Manager, crie um dispositivo virtual (emulador).
2. Inicie o emulador (abrir o Android Studio e dar "Play" no dispositivo).
3. No terminal, na pasta `OláMobile`, execute:

```bash
npx expo start
```

4. Quando abrir o menu no terminal, pressione **`a`** para abrir no Android (emulador). O app será instalado e aberto no emulador; você deve ver "Olá, Mobile!".

### Opção B – Celular físico com Expo Go

1. Instale o app **Expo Go** na loja (Google Play ou App Store).
2. No terminal, na pasta `OláMobile`:

```bash
npx expo start
```

3. Aparecerá um **QR code** no terminal (e às vezes no navegador).
4. **Android:** abra o Expo Go e escaneie o QR code.
5. **iPhone:** abra o app Câmera e aponte para o QR code; toque na notificação para abrir no Expo Go.

O app "OláMobile" será carregado e você verá "Olá, Mobile!" no celular.

### Comandos úteis durante o desenvolvimento

- **`npx expo start`** – inicia o servidor Metro e mostra o QR code / menu.
- **`npx expo start --clear`** – inicia limpando o cache (use se algo travar).
- No terminal onde o Expo está rodando:
  - **`a`** – abre no Android (emulador ou dispositivo conectado).
  - **`i`** – abre no simulador iOS (apenas macOS com Xcode).
  - **`r`** – recarrega o app.
  - **`m`** – abre o menu de desenvolvimento.

---

## Parte 4 – Estrutura do projeto (resumo)

| Item | Função |
|------|--------|
| `App.js` / `App.tsx` | Componente raiz; o que aparece na tela. |
| `package.json` | Dependências e scripts (ex.: `expo start`). |
| `app.json` | Nome do app, slug, ícone, splash (configuração Expo). |
| `node_modules/` | Pacotes instalados pelo npm; não editar. |
| `babel.config.js` | Configuração do Babel (transpilação). |

O **Metro** (servidor que sobe com `npx expo start`) lê seu código, empacota e envia para o app. Por isso, ao salvar `App.js`, o app atualiza sozinho (hot reload).

---

## Parte 5 – Documentar os passos (para a atividade)

Para a **atividade da Aula 02** você precisará entregar um pequeno documento com os passos que seguiu. Anote:

1. Comando exato que usou para criar o projeto (`npx create-expo-app@latest ...`).
2. Onde você rodou o app (emulador Android, iPhone, celular físico com Expo Go).
3. Se apareceu algum erro, qual foi e como resolveu (ou que ainda não resolveu).

Exemplo de redação:

- "Criei o projeto com: npx create-expo-app@latest OláMobile --template blank. Rodei no emulador Android. Alterei o texto em App.js para 'Olá, Mobile!' e salvei; o app atualizou sozinho."

---

## Checklist da Aula 02

- [ ] Projeto criado com `npx create-expo-app@latest` (template blank).
- [ ] Pasta do projeto aberta no editor; `App.js` (ou `App.tsx`) alterado para exibir "Olá, Mobile!".
- [ ] App rodando em emulador ou no celular (Expo Go).
- [ ] Anotados os passos para o documento da atividade.

---

## Próxima aula

Na **Aula 03** você verá **layouts** em React Native: `View`, `StyleSheet`, Flexbox (container, alignItems, justifyContent), para organizar textos e botões na tela.

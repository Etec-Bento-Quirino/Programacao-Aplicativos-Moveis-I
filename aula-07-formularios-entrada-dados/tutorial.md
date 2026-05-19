# Tutorial: O Cofre de Informações e o Splash Screen

**Sugestão de execução:** Quinzena 8.

Sente-se à mesa, prepare o café. Hoje construiremos um formulário que seria digno de tela inicial de e-mail e amarraremos uma pequena introdução cinematográfica para quando as portas abrirem.

---

## Passo 1: Construindo o Splash Screen (A Cortina do Teatro)
Antes de pedir os dados, é legal que a Logo da sua empresa apareça por 2 segundos e depois passe o controle para a área de Login.

Crie no seu `index.tsx` fundamental um temporizador de montagem.

```tsx
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppForm() {
  const [splashSeca, setSplashSeca] = useState(true);

  // O "Guarda Noturno" (useEffect) roda essa lógica ao iniciar:
  useEffect(() => {
    // Liga o cronômetro nuclear para 2000 milissegundos
    const timer = setTimeout(() => setSplashSeca(false), 2000);
    return () => clearTimeout(timer); // Prevenção de lixo de memória
  }, []);

  if (splashSeca) {
    return (
      <View style={styles.splash}>
        <Text style={styles.tituloSplash}>Iniciando Matrix...</Text>
      </View>
    );
  }

  // Se passou de 2 segundos... Ele ignora o if acima e devolve o resto do app!
  return <MeuFormulario />
}
```

---

## Passo 2: O Componente Controlado de Input

Para o formulário, importamos o `TextInput`:

```tsx
import { TextInput, Alert, TouchableOpacity } from 'react-native';

function MeuFormulario() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

// ...
```
E nós os montamos na `View` ordenando que os Teclados assumam caras diferentes. (Repare abaixo que nós desligamos a primeira letra maiúscula automática para E-mails, pois as vezes atazana o cliente).

```tsx
  <TextInput
    style={styles.caixaTexto}
    placeholder="Seu nome glorioso"
    value={nome}
    onChangeText={setNome}
    autoCapitalize="words" // Faz de Fábio junior virar Fábio Junior sozinho!
  />

  <TextInput
    style={styles.caixaTexto}
    placeholder="e-mail de contato"
    value={email}
    onChangeText={setEmail}
    keyboardType="email-address" // Adiciona um enorme @ no teclado.
    autoCapitalize="none"
  />
```

---

## Passo 3: O Porteiro de Validação (O Gatilho do Botão)

Se você colocar um botão de envio agora, ele engolirá tudo. Precisamos criar o funil lógico:

```tsx
  const validarTudo = () => {
    // 1. O Trim() decepa espaços puros do lado esquerdo e direito.
    if (!nome.trim()) {
      Alert.alert('Erro Primário', 'Nós precisamos do seu nome, amigo!');
      return false; // Mata o ciclo.
    }
    
    // 2. Se o Email não contiver a arroba, é fraude.
    if (!email.includes('@')) {
      Alert.alert('Erro Primário', 'Este E-mail é inválido. Aonde está a arroba?');
      return false; // Mata o ciclo.
    }
    
    return true; // Se o cara foi perfeito, retorna True!
  };

  const handleEnviar = () => {
    // Se a validação bater no "return false", esse 'if' barra o script.
    if (!validarTudo()) return; // 👈 EARLY RETURN: Se cair aqui, a execução morre na hora e o app não salva dados furados.
    
    // SE NÃO FOI BARRADO:
    Alert.alert('Glória', `Bem vindo à base de dados, ${nome}!`);
    setNome(''); // Limpamos a gaveta por educação.
    setEmail('');
  };
```

Anexe `handleEnviar` ao `onPress` do seu botão e observe esse guardião barrar usuários teimosos!

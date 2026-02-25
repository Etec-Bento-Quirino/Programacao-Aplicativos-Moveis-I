# Aula 07 – Formulários e entrada de dados (TextInput, validação)

**Sugestão de execução:** quinzena 8 (27/04/2026 a 08/05/2026).

**Base tecnológica:** Layouts e estilização; componentes para entrada de dados (campo de texto, seleção); splash; diálogos.

---

## Objetivo

Criar um **formulário** com campos de texto (nome, e-mail), **validação** básica e **diálogo de confirmação** (Alert). Opcional: tela de **splash** ao abrir o app.

---

## Parte 1 – TextInput

Importe **TextInput** de `react-native`:

```javascript
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
```

Exemplo de campo controlado (valor no estado):

```javascript
const [nome, setNome] = useState('');
const [email, setEmail] = useState('');

<TextInput
  style={styles.input}
  placeholder="Digite seu nome"
  value={nome}
  onChangeText={setNome}
  autoCapitalize="words"
/>
<TextInput
  style={styles.input}
  placeholder="Digite seu e-mail"
  value={email}
  onChangeText={setEmail}
  keyboardType="email-address"
  autoCapitalize="none"
/>
```

Estilo do input:

```javascript
input: {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 8,
  paddingHorizontal: 12,
  paddingVertical: 10,
  fontSize: 16,
  marginBottom: 12,
  width: '100%',
},
```

---

## Parte 2 – Validação simples

Antes de enviar, verifique se os campos estão preenchidos e se o e-mail tem "@":

```javascript
const validar = () => {
  if (!nome.trim()) {
    Alert.alert('Erro', 'Preencha o nome.');
    return false;
  }
  if (!email.trim()) {
    Alert.alert('Erro', 'Preencha o e-mail.');
    return false;
  }
  if (!email.includes('@')) {
    Alert.alert('Erro', 'E-mail inválido.');
    return false;
  }
  return true;
};

const handleEnviar = () => {
  if (!validar()) return;
  Alert.alert('Confirmação', `Olá, ${nome}! Cadastro recebido.`, [
    { text: 'OK', onPress: () => { setNome(''); setEmail(''); } },
  ]);
};
```

No botão: `onPress={handleEnviar}`.

---

## Parte 3 – Splash (opcional)

Para uma tela de splash que some após 2 segundos:

```javascript
const [mostrarSplash, setMostrarSplash] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => setMostrarSplash(false), 2000);
  return () => clearTimeout(timer);
}, []);

if (mostrarSplash) {
  return (
    <View style={styles.splash}>
      <Text style={styles.splashTexto}>Meu App</Text>
    </View>
  );
}
```

Depois renderize o formulário normalmente.

---

## Checklist

- [ ] TextInput com value e onChangeText (estado controlado).
- [ ] Validação: nome e e-mail obrigatórios; e-mail com "@".
- [ ] Alert de confirmação ao enviar.
- [ ] (Opcional) Splash exibido ao abrir.

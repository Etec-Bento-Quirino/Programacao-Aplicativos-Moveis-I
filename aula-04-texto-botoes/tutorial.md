# Aula 04 – Texto e botões (Text, TouchableOpacity, eventos)

**Sugestão de execução:** quinzena 4 (23/03/2026 a 02/04/2026).

**Base tecnológica:** Criação e configuração de componentes básicos – Texto; Botões.

---

## Objetivo

Exibir textos estilizados e um **botão** que reage ao toque (ex.: mostra um Alert ou muda um texto na tela).

---

## Parte 1 – Text e estilo

- **Text** é o único componente que pode exibir texto; não se coloca texto solto dentro de View.
- Estilos comuns: fontSize, fontWeight, color.

Exemplo:

```javascript
import { StyleSheet, Text, View } from 'react-native';

<View style={styles.container}>
  <Text style={styles.titulo}>Título da tela</Text>
  <Text style={styles.subtitulo}>Subtítulo ou descrição.</Text>
</View>

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  titulo: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 8 },
  subtitulo: { fontSize: 16, color: '#666' },
});
```

---

## Parte 2 – Botão com TouchableOpacity

Em React Native não se usa `<button>`. Use **TouchableOpacity** (ou **Pressable**): envolve o conteúdo que será clicável.

1. Importe:
```javascript
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
```

2. Coloque o conteúdo “clicável” dentro de **TouchableOpacity** e use **onPress**:
```javascript
<TouchableOpacity style={styles.botao} onPress={() => Alert.alert('Aviso', 'Você tocou no botão!')}>
  <Text style={styles.textoBotao}>Clique aqui</Text>
</TouchableOpacity>
```

3. Estilos do botão:
```javascript
botao: {
  backgroundColor: '#2196F3',
  paddingHorizontal: 24,
  paddingVertical: 12,
  borderRadius: 8,
  alignSelf: 'center',
  marginTop: 16,
},
textoBotao: {
  color: '#fff',
  fontSize: 16,
  fontWeight: '600',
},
```

---

## Parte 3 – Estado na tela (useState)

Para o botão **mudar um texto na tela** (ex.: contador ou mensagem), use **useState**:

```javascript
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [mensagem, setMensagem] = useState('Aguardando toque...');

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Olá, Mobile!</Text>
      <Text style={styles.mensagem}>{mensagem}</Text>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => setMensagem('Você tocou no botão!')}
      >
        <Text style={styles.textoBotao}>Clique aqui</Text>
      </TouchableOpacity>
    </View>
  );
}
```

Assim, ao tocar no botão, o texto na tela é atualizado.

---

## Checklist

- [ ] Usou Text com estilos (fontSize, color).
- [ ] Usou TouchableOpacity com onPress (Alert ou setState).
- [ ] (Opcional) Usou useState para alterar um texto ao clicar.

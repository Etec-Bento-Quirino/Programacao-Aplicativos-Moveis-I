import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

// ============================================================================
//  app/index.tsx
//  Tela inicial do Módulo 2 — interface e componentes.
//  ÁREAS que você vai preencher aqui conforme avança nas aulas:
//
//  Aula 03 — layout com View + Flexbox + StyleSheet (esta tela!).
//  Aula 04 — Text e TouchableOpacity (botões que reagem ao toque).
//
//  Dica: rode `npm start` e complete uma área por aula. O Metro recarrega
//  sozinho enquanto você edita.
// ============================================================================

export default function Index() {
  // TAREFA (Aula 04): adicionar estado aqui, ex.:
  //   const [contador, setContador] = useState(0);
  //   const [nome, setNome] = useState('');

  return (
    <View style={styles.container}>
      {/* TAREFA (Aula 04): trocar este texto estático por dados do estado,
          ex.: <Text style={styles.titulo}>Olá, {nome || 'visitante'}!</Text> */}
      <Text style={styles.titulo}>Bem-vindo ao Módulo 2!</Text>

      <Text style={styles.subtitulo}>
        Complete esta tela aos poucos, área por área, acompanhando as aulas.
      </Text>

      {/* TAREFA (Aula 04): adicionar botões com <TouchableOpacity> ou
          <Pressable>, ex.: um botão "+1" que incrementa o contador. */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitulo: {
    color: '#b0b0b0',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 12,
  },
});

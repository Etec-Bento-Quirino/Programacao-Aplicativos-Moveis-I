import { StyleSheet, Text, View } from 'react-native';

// ============================================================================
//  app/index.tsx
//  Tela inicial — a "porta de entrada" do seu app.
//  ÁREA que você vai preencher neste módulo:
//
//  Aula 02 — primeiro app rodando + estrutura de pastas do Expo.
//  Aula 03 — layout com View + StyleSheet (é desta tela que falamos).
//
//  Dica: rode `npm start` e edite este arquivo — o Metro recarrega sozinho.
// ============================================================================

export default function Index() {
  // TAREFA (Aula 03): explorar o layout — mude as cores, o espaçamento e o
  // alinhamento para ver o Flexbox agindo em tempo real.

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Olá, Mobile!</Text>
      <Text style={styles.subtitulo}>
        Este app foi criado no Módulo 1 (Aula 02) e cresce aula após aula.
      </Text>
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
    fontSize: 28,
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

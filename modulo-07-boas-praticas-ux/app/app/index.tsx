import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

// ============================================================================
//  app/index.tsx
//  Tela inicial do Módulo 7 — UX e Projeto Final (Aulas 18 a 20).
//  Este é o "esqueleto" do seu app final: uma tela inicial que dá acesso
//  a cada área do curso. Complete seguindo a Aula 20.
// ============================================================================

export default function Index() {
  // TAREFA (Aula 18): adicionar loading, empty state e mensagens de erro.
  // TAREFA (Aula 20): criar a identidade do seu projeto final aqui.

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meu Projeto Final</Text>

      {/* TAREFA (Aula 06, Módulo 3): links para as telas do app, ex.:
          <Link href="/lista" style={styles.link}>Minha Lista</Link>
          <Link href="/formulario" style={styles.link}>Novo Registro</Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#25292e',
    padding: 20,
  },
  titulo: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  link: {
    color: '#4a90d9',
    fontSize: 18,
    marginVertical: 8,
  },
});

import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

// ============================================================================
//  app/index.tsx
//  Tela inicial do Módulo 6 — banco de dados SQLite (Aulas 14 a 17).
// ============================================================================

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>SQLite</Text>

      {/* TAREFA (Aula 06): links para as telas do módulo, ex.:
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

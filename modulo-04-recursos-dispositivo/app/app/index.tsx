import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

// ============================================================================
//  app/index.tsx
//  Tela inicial do Módulo 4 — recursos do dispositivo (Aulas 08, 09 e 10).
// ============================================================================

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Recursos do Dispositivo</Text>

      {/* TAREFA (Aula 06): links para as telas de recursos, ex.:
          <Link href="/galeria" style={styles.link}>Galeria / Câmera</Link>
          <Link href="/localizacao" style={styles.link}>Localização</Link>
          <Link href="/notificacoes" style={styles.link}>Notificações</Link> */}
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

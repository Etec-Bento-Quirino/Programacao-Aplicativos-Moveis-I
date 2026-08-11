import { Link, router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// ============================================================================
//  app/index.tsx
//  Tela inicial do Módulo 3 — Aula 06 (navegação).
//
//  Com o Expo Router, cada arquivo em app/ vira uma rota. Para navegar entre
//  telas você tem duas opções: <Link> (declarativo) ou router.push (imperativo).
// ============================================================================

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Módulo 3</Text>

      {/* TAREFA (Aula 06): criar links para as telas do app, ex.:
          <Link href="/lista" style={styles.link}>Ver lista</Link> */}

      {/* TAREFA (Aula 06): navegação com parâmetro, ex.:
          <Link href="/detalhe/7" style={styles.link}>Abrir detalhe 7</Link> */}

      {/* TAREFA (Aula 07): link para o formulário, ex.:
          <TouchableOpacity onPress={() => router.push('/formulario')}>
            <Text style={styles.link}>Novo registro</Text>
          </TouchableOpacity> */}
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

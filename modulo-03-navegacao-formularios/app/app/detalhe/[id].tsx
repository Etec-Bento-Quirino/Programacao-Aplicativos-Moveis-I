import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

// ============================================================================
//  app/detalhe/[id].tsx
//  ÁREA: ROTA DINÂMICA — Aula 06 (Expo Router).
//
//  Os colchetes no nome do arquivo fazem o Router capturar qualquer valor:
//  /detalhe/1, /detalhe/42, /detalhe/abc → todas abrem esta mesma tela.
//  O hook useLocalSearchParams lê o valor que veio na URL.
// ============================================================================

export default function Detalhe() {
  // Lê o valor enviado na rota, ex.: /detalhe/7 → { id: '7' }
  const { id } = useLocalSearchParams<{ id: string }>();

  // TAREFA (Aula 06): exibir aqui os detalhes do registro com o id recebido.
  // TAREFA (Aula 15, Módulo 6): buscar o registro no banco com getFirstSync().

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Detalhe do registro</Text>
      <Text style={styles.texto}>ID recebido pela rota: {id}</Text>
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
    fontSize: 22,
    fontWeight: 'bold',
  },
  texto: {
    color: '#b0b0b0',
    fontSize: 16,
    marginTop: 12,
  },
});

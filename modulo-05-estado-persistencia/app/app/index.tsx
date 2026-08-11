import { ActivityIndicator, Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useEffect, useState } from 'react';

// ============================================================================
//  app/index.tsx
//  Tela inicial do Módulo 5 — estado (Aulas 11 e 12).
// ============================================================================

export default function Index() {
  // TAREFA (Aula 11): adicionar estado e efeitos, ex.:
  //   const [contador, setContador] = useState(0);
  //   const [carregando, setCarregando] = useState(true);
  //
  //   useEffect(() => {
  //     const timer = setTimeout(() => setCarregando(false), 1000);
  //     return () => clearTimeout(timer);
  //   }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Estado do app</Text>

      {/* TAREFA (Aula 11): exibir {carregando ? <ActivityIndicator /> : contador}. */}

      {/* TAREFA (Aula 12): ler o valor do Contexto aqui, ex.:
          const { nome } = useContext(MeuContexto); */}

      {/* TAREFA (Aula 12): atualizar o Contexto com um botão, ex.:
          <TouchableOpacity onPress={() => Alert.alert('Aula 12', 'Atualize o contexto!')}>
            <Text style={styles.link}>Mudar nome</Text>
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

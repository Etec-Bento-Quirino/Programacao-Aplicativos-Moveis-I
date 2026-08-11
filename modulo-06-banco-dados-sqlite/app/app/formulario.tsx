import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// ============================================================================
//  app/formulario.tsx
//  ÁREA: FORMULÁRIOS + SQLite — Aulas 15 e 16 (integração com o banco).
// ============================================================================

export default function Formulario() {
  // TAREFA (Aula 07, Módulo 3): criar os estados dos campos, ex.:
  //   const [titulo, setTitulo] = useState('');
  //
  // TAREFA (Aula 15): ao salvar, inserir no SQLite com runSync(), ex.:
  //   import { banco } from '../lib/database';
  //   banco.runSync('INSERT INTO metas (descricao) VALUES (?)', [titulo]);
  //   router.back(); // volta para a lista (Aula 06)
  //
  // TAREFA (Aula 16): validar, tratar erro e mostrar feedback do cadastro.
  // TAREFA (Aula 17): adicionar um campo para escolher a categoria (relação).

  const salvar = () => {
    // TAREFA (Aula 07): validar antes de salvar, ex.:
    //   if (!titulo.trim()) {
    //     Alert.alert('Atenção', 'Preencha o título.');
    //     return;
    //   }
    //   ... salvar no banco (Aula 15) ...
    Alert.alert('Em construção', 'Implemente o salvamento no SQLite (Aula 15).');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título</Text>
      {/* TAREFA (Aula 07): ligar o value e o onChangeText ao estado. */}
      <TextInput style={styles.input} placeholder="Digite o título" placeholderTextColor="#888" />

      <TouchableOpacity style={styles.botao} onPress={salvar}>
        <Text style={styles.botaoTexto}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#25292e',
  },
  label: {
    color: '#ffffff',
    fontSize: 16,
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#3a3f47',
    color: '#ffffff',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  botao: {
    backgroundColor: '#4a90d9',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
    marginTop: 24,
  },
  botaoTexto: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// ============================================================================
//  app/formulario.tsx
//  ÁREA: FORMULÁRIOS — Aula 07 (TextInput e entrada de dados).
//
//  Base para os formulários de cadastro/edição do seu app.
// ============================================================================

export default function Formulario() {
  // TAREFA (Aula 07): criar os estados dos campos, ex.:
  //   const [titulo, setTitulo] = useState('');
  //   const [descricao, setDescricao] = useState('');
  //
  // TAREFA (Aula 15, Módulo 6): ao salvar, inserir no SQLite com runSync().
  //   router.back(); // volta para a lista (Aula 06)

  const salvar = () => {
    // TAREFA (Aula 07): validar antes de salvar, ex.:
    //   if (!titulo.trim()) {
    //     Alert.alert('Atenção', 'Preencha o título.');
    //     return;
    //   }
    //   ... salvar ...
    Alert.alert('Em construção', 'Implemente o salvamento na Aula 07.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título</Text>
      {/* TAREFA (Aula 07): ligar o value e o onChangeText ao estado, ex.:
          <TextInput
            style={styles.input}
            value={titulo}
            onChangeText={setTitulo}
            placeholder="Digite o título"
            placeholderTextColor="#888"
          /> */}
      <TextInput style={styles.input} placeholder="Digite o título" placeholderTextColor="#888" />

      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={[styles.input, styles.areaTexto]}
        placeholder="Detalhes (opcional)"
        placeholderTextColor="#888"
        multiline
      />

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
  areaTexto: {
    minHeight: 100,
    textAlignVertical: 'top',
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

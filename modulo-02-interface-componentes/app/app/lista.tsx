import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

// ============================================================================
//  app/lista.tsx
//  ÁREA: LISTAS — Aula 05 (Image, FlatList).
//
//  Aqui você monta a lista principal do seu app (ex.: metas, contatos, itens).
//  O padrão é o mesmo do exemplo da Aula 05.
// ============================================================================

// DADOS FICTÍCIOS — Aula 05: substitua por dados reais vindo do estado
// (Módulo 5) ou do banco SQLite (Módulo 6). O formato "id" + "titulo"
// é proposital: depois você vai navegar para a tela de detalhe com o id.
const DADOS_INICIAIS = [
  { id: '1', titulo: 'Exemplo 1' },
  { id: '2', titulo: 'Exemplo 2' },
  { id: '3', titulo: 'Exemplo 3' },
];

export default function Lista() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minha Lista</Text>

      <FlatList
        data={DADOS_INICIAIS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            {/* TAREFA (Aula 05): adicionar uma <Image> ao item, ex.:
                <Image source={{ uri: 'https://...' }} style={styles.imagem} /> */}
            <Text style={styles.itemTexto}>{item.titulo}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#25292e',
  },
  titulo: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    padding: 15,
    backgroundColor: '#3a3f47',
    borderRadius: 8,
    marginBottom: 10,
  },
  itemTexto: {
    color: '#ffffff',
    fontSize: 16,
  },
  imagem: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
});

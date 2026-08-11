import { FlatList, StyleSheet, Text, View } from 'react-native';

// ============================================================================
//  app/lista.tsx
//  ÁREA: LISTAS + BANCO — Aulas 15 e 17 (expo-sqlite).
// ============================================================================

// TAREFA (Aula 14): importar o banco e criar as tabelas antes de listar, ex.:
//   import { banco, criarTabelas } from '../lib/database';
//   criarTabelas();

export default function Lista() {
  // TAREFA (Aula 15): buscar os itens no SQLite, ex.:
  //   const [itens, setItens] = useState<{ id: number; descricao: string }[]>([]);
  //   useEffect(() => {
  //     setItens(banco.getAllSync('SELECT * FROM metas ORDER BY id DESC'));
  //   }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minha Lista</Text>

      {/* TAREFA (Aula 15): trocar [] pelos itens do banco.
          TAREFA (Aula 17): se houver JOIN, exibir também o nome da categoria. */}
      <FlatList
        data={[]}
        keyExtractor={(item: { id: number }) => String(item.id)}
        renderItem={({ item }: { item: { id: number; descricao: string } }) => (
          <View style={styles.item}>
            <Text style={styles.itemTexto}>{item.descricao}</Text>
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
});

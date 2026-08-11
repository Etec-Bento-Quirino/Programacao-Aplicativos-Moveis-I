import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// ============================================================================
//  app/galeria.tsx
//  ÁREA: RECURSOS DO DISPOSITIVO — Aula 08 (expo-image-picker).
//
//  Câmera e galeria de fotos. A dependência `expo-image-picker` já vem
//  instalada no package.json deste projeto.
// ============================================================================

export default function Galeria() {
  // TAREFA (Aula 08): descomente o import do expo-image-picker e
  // implemente a função de escolher foto, ex.:
  //
  //   import * as ImagePicker from 'expo-image-picker';
  //
  //   const [imagemUri, setImagemUri] = useState<string | null>(null);
  //
  //   const escolherFoto = async () => {
  //     const result = await ImagePicker.launchImageLibraryAsync({
  //       mediaTypes: ['images'],
  //       allowsEditing: true,
  //       quality: 1,
  //     });
  //     if (!result.canceled) {
  //       setImagemUri(result.assets[0].uri);
  //     }
  //   };
  //
  //   // Para a CÂMERA, troque por launchCameraAsync + permissão
  //   // requestCameraPermissionsAsync (veja a Aula 08).

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Galeria / Câmera</Text>

      {/* TAREFA (Aula 08): exibir a imagem escolhida, ex.:
          {imagemUri && (
            <Image source={{ uri: imagemUri }} style={styles.imagem} />
          )} */}

      <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('Aula 08', 'Implemente o picker!')}>
        <Text style={styles.botaoTexto}>Escolher foto</Text>
      </TouchableOpacity>
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
    marginBottom: 20,
  },
  imagem: {
    width: 200,
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#4a90d9',
    borderRadius: 8,
    padding: 14,
  },
  botaoTexto: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

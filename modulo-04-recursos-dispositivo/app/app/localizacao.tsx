import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// ============================================================================
//  app/localizacao.tsx
//  ÁREA: RECURSOS DO DISPOSITIVO — Aula 09 (expo-location).
//
//  GPS / geolocalização. A dependência `expo-location` já vem instalada
//  no package.json deste projeto.
// ============================================================================

export default function Localizacao() {
  // TAREFA (Aula 09): implemente a leitura da localização, ex.:
  //
  //   import * as Location from 'expo-location';
  //
  //   const [coordenadas, setCoordenadas] = useState<Location.LocationObjectCoords | null>(null);
  //   const [carregando, setCarregando] = useState(false);
  //   const [erro, setErro] = useState<string | null>(null);
  //
  //   const obterLocalizacao = async () => {
  //     setCarregando(true);
  //     const { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== 'granted') {
  //       setErro('Permissão negada.');
  //       setCarregando(false);
  //       return;
  //     }
  //     const posicao = await Location.getCurrentPositionAsync({
  //       accuracy: Location.Accuracy.Balanced,
  //     });
  //     setCoordenadas(posicao.coords);
  //     setCarregando(false);
  //   };
  //
  //   Bônus (Aula 09): getLastKnownPositionAsync, watchPositionAsync e
  //   reverseGeocodeAsync (transforma coordenadas em endereço).

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Localização</Text>

      {/* TAREFA (Aula 09): exibir latitude/longitude ou um
          <ActivityIndicator /> enquanto o GPS processa. */}

      <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('Aula 09', 'Implemente o GPS!')}>
        <Text style={styles.botaoTexto}>Obter minha localização</Text>
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

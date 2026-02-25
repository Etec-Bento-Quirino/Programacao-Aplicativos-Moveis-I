# Aula 09 – Geolocalização (expo-location)

**Sugestão de execução:** quinzena 10 (25/05/2026 a 03/06/2026).

**Base tecnológica:** Manipulando recursos do dispositivo – geolocation.

---

## Objetivo

Usar **expo-location** para obter a **localização atual** (latitude e longitude) e **exibir** em texto na tela. Tratar **permissão** de localização.

---

## Parte 1 – Instalar

```bash
npx expo install expo-location
```

---

## Parte 2 – Pedir permissão e obter localização

```javascript
import * as Location from 'expo-location';
import { useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const [localizacao, setLocalizacao] = useState(null);
const [carregando, setCarregando] = useState(false);
const [erro, setErro] = useState(null);

const obterLocalizacao = async () => {
  setCarregando(true);
  setErro(null);
  try {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErro('Permissão de localização negada.');
      setCarregando(false);
      return;
    }
    const loc = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Balanced,
    });
    setLocalizacao(loc.coords);
  } catch (e) {
    setErro('Não foi possível obter a localização: ' + e.message);
  }
  setCarregando(false);
};
```

- **requestForegroundPermissionsAsync** – pede permissão para usar a localização com o app em primeiro plano.
- **getCurrentPositionAsync** – retorna um objeto com **coords**: latitude, longitude, altitude, etc.

---

## Parte 3 – Exibir na tela

```javascript
<View style={styles.container}>
  <TouchableOpacity style={styles.botao} onPress={obterLocalizacao} disabled={carregando}>
    <Text style={styles.textoBotao}>
      {carregando ? 'Obtendo...' : 'Obter minha localização'}
    </Text>
  </TouchableOpacity>
  {carregando && <ActivityIndicator size="large" style={{ marginTop: 16 }} />}
  {erro && <Text style={styles.erro}>{erro}</Text>}
  {localizacao && (
    <View style={styles.caixa}>
      <Text>Latitude: {localizacao.latitude}</Text>
      <Text>Longitude: {localizacao.longitude}</Text>
    </View>
  )}
</View>
```

---

## Parte 4 – Mapa (opcional)

Para exibir em mapa, use **react-native-maps** ou **expo** com mapa. No Expo, pode usar um WebView com URL do Google Maps estática passando lat e lng, ou instalar `react-native-maps` (requer configuração). Para esta aula, exibir em texto é suficiente.

---

## Checklist

- [ ] expo-location instalado; permissão solicitada.
- [ ] getCurrentPositionAsync chamado; latitude e longitude exibidas.
- [ ] Tratamento de erro e de permissão negada; loading durante a obtenção.

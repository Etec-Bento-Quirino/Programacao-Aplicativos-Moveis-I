# Tutorial: Capturando um Satélite com seu Código

**Sugestão de execução:** Quinzena 10.

Vamos colocar a mão na graxa. Se você estava brincando no seu StickerSmash, abra uma nova tela secundária (Como a Tela de `About` que fizemos no Expo Router) para abrigar nossa engenhoca de captura, ou crie isso num novo App via Expo Snack.

---

## Passo 1: Injetando a Livraria de Georreferenciamento

Nós precisamos do tradutor de hardware. No terminal rodando, pressione Control+C para fechar temporariamente, e baixe o conector.
```bash
npx expo install expo-location
```
Ligue novamente o servidor executando `npm start` (com o tunnel previamente configurado).

## Passo 2: O Estado Duplo e a Lógica Assíncrona

No seu arquivo (`index.tsx` se for novo, ou `.tsx` qualquer do seu estudo), precisamos salvar 3 coisas fundamentais na nossa memória do frontend. A Latitude/Longitude, os erros (se o cliente não deixar rodar e teremos que avisar) e o Spinner Gráfico de Carga! 

```tsx
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';

export default function RastreioMobile() {
  const [coordenadas, setCoordenadas] = useState(null);
  const [motorRodando, setMotorRodando] = useState(false);
  const [mensagemErro, setMensagemErro] = useState(null);

  // A Função de tempo congelado!
  const puxarSatelite = async () => {
    setMotorRodando(true);
    setMensagemErro(null);

    try {
      // 1. Pare. Abra o pop-up Oficial de IOS/Android e peça licença para monitorar.
      const { status } = await Location.requestForegroundPermissionsAsync();
      
      if (status !== 'granted') {
        setMensagemErro('Você nos negou o acesso. O GPS falhou miseravelmente.');
        setMotorRodando(false);
        return; // Interrompe a execução aqui!
      }

      // 2. Se a permissão passou... Pare de novo. Acorde a Placa-mãe de GPS do Celular 
      // e diga a ela extrair a Geometria num esfoço balanceado de processamento/bateria.
      const sinal = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });

      // 3. Devolva pego a variável final em formato matemático.
      setCoordenadas(sinal.coords);

    } catch (e) {
      setMensagemErro('Erro brutal da placa: ' + e.message);
    }
    setMotorRodando(false);
  };
```

## Passo 3: O Render Final Visual

Agora conecte o seu estado (que estava em `null`) e exploda na tela usando `&&` (Mágica React pra exibir as coisas se elas baterem positivos):

```tsx
  return (
    <View style={styles.corpo}>
      <TouchableOpacity onPress={puxarSatelite} disabled={motorRodando}>
         <Text style={styles.titulos}> 
            {motorRodando ? 'Buscando satélites...' : 'Descobrir Onde Estou'}
         </Text>
      </TouchableOpacity>
      
      {/* Esse Componente é a Bolinha de Carregamento Nativa */}
      {motorRodando && <ActivityIndicator size="large" color="#0000ff" />}
      
      {/* Se o erro foi setado para Cima... Exibe Vermelho! */}
      {mensagemErro && <Text style={{color: 'red'}}>{mensagemErro}</Text>}

      {/* Se ele conseguiu enxergar coordenadas, Puf! A Parede do React cai e o bloco compila! */}
      {coordenadas && (
        <View style={styles.respostas}>
          <Text>🌐 Latitude: {coordenadas.latitude}</Text>
          <Text>🌐 Longitude: {coordenadas.longitude}</Text>
        </View>
      )}
    </View>
  );
}
```

Faça a CSS à sua moda. Rode essa obra prima e prepare-se pra Atividade dessa semana!

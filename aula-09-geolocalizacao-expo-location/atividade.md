# Atividade 9: Rastreamento e Permissões (Location) 🚀

**Objetivo da Atividade:**

Validar o entendimento sobre a biblioteca `expo-location` e o gerenciamento de estados assíncronos. Além de extrair a latitude e longitude, o aluno deve demonstrar que sabe lidar com cenários onde o usuário **nega** a permissão do GPS.

---

## O Desafio: Capturando o Erro de GPS

Nós desenhamos uma tela de localização no tutorial utilizando o `ActivityIndicator` (aquele círculo nativo girando que indica "carregamento"). Agora, vamos focar nos cenários de recusa.

Sua tarefa de campo é forçar um erro de permissão e exibir a mensagem amigável na tela.

1. Implemente a lógica base de permissões e coordenadas da aula (com `requestForegroundPermissionsAsync`).
2. Acesse as configurações do seu celular ou emulador e revogue manualmente a permissão de localização do aplicativo Expo Go (ou simplesmente recuse ativamente ao clicar no botão no app se ele perguntar de novo).
3. Ao tentar rastrear e ter o acesso negado, o aplicativo deve capturar o erro e mostrar na tela a mensagem em vermelho: *"Acesso negado ao GPS"*.

### 💡 Dica de como iniciar:

Para testar cenários negativos, seu estado precisa conseguir rastrear as mensagens de erro. Utilize um bloco `try...catch` ou apenas avalie a variável `status` retornada pela requisição de permissão, atualizando o estado do erro se for diferente de `granted`.

```tsx
import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Location from 'expo-location';

export default function Rastreio() {
  const [localizacao, setLocalizacao] = useState(null);
  const [mensagemErro, setMensagemErro] = useState(null);

  const rastrear = async () => {
    // 1. Pede a permissão pro celular
    const { status } = await Location.requestForegroundPermissionsAsync();
    
    // 2. Se for negado, define a mensagem de erro e aborta (return)
    if (status !== 'granted') {
      setMensagemErro('Acesso negado ao GPS');
      return; 
    }

    // 3. Se deu certo, tenta pegar a posição
    const location = await Location.getCurrentPositionAsync({});
    setLocalizacao(location.coords);
  };

  return (
    <View style={styles.container}>
      {/* Exibe o erro se ele existir */}
      {mensagemErro && <Text style={styles.errorText}>{mensagemErro}</Text>}
      
      {/* Exibe a localização se ela existir */}
      {localizacao && (
        <Text>Latitude: {localizacao.latitude} | Longitude: {localizacao.longitude}</Text>
      )}

      <Button title="Rastrear GPS" onPress={rastrear} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  errorText: { color: 'red', fontWeight: 'bold' },
});
```

## Entrega:
Com a permissão revogada/negada, clique no botão de rastreio. Tire uma captura de tela (print) evidenciando o texto vermelho de erro indicando a negação da localização e envie na plataforma.

# Atividade 9: Capturando o Erro de GPS 🚀

**Sugestão de execução:** Quinzena 10 | **Bimestre:** 2 | **Valendo XP e nota**

---

**Objetivo da Atividade:** validar o entendimento sobre a biblioteca `expo-location` e o gerenciamento de estados assíncronos. Além de extrair a latitude e longitude, você deve demonstrar que sabe lidar com cenários onde o usuário **nega** a permissão do GPS.

> [!NOTE]
> Se você ainda não fez o [Tutorial da Aula 09](tutorial.md), faça primeiro. Esta atividade cobra exatamente os passos de lá — com foco no tratamento de erros.

---

## O Desafio: Forçando o Erro de Permissão

No tutorial, criamos uma tela de localização com o `ActivityIndicator` (o círculo girando que indica "carregamento"). Agora, vamos focar nos cenários de **recusa**.

Sua tarefa de campo é **forçar** um erro de permissão e exibir a mensagem amigável na tela.

1. Implemente a lógica base de permissões e coordenadas da aula (com `requestForegroundPermissionsAsync`).
2. Acesse as configurações do seu celular ou emulador e **revogue manualmente** a permissão de localização do aplicativo Expo Go (ou simplesmente recuse ativamente ao clicar no botão no app se ele perguntar de novo).
3. Ao tentar rastrear e ter o acesso negado, o aplicativo deve capturar o erro e mostrar na tela a mensagem em vermelho: **"Acesso negado ao GPS"**.

> [!TIP]
> **Dica de como iniciar:** para testar cenários negativos, seu estado precisa rastrear as mensagens de erro. Utilize um bloco `try...catch` ou avalie a variável `status` retornada pela requisição de permissão, atualizando o estado do erro se for diferente de `granted`.

### Código de Referência

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
    
    // 2. Se for negado, define a mensagem de erro e aborta
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
      {mensagemErro && <Text style={styles.errorText}>{mensagemErro}</Text>}
      
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

> [!WARNING]
> Se você não revogar a permissão manualmente, o app pode lembrar que já concedeu antes. Para testar o erro de negação, vá em **Configurações → Apps → Expo Go → Permissões → Localização** e marque como "Negar".

---

## Entrega

Com a permissão revogada/negada, clique no botão de rastreio. Tire uma captura de tela (print) evidenciando o texto vermelho de erro indicando a negação da localização e envie na plataforma!

---

## Checklist de Entrega

Antes de enviar, confira:

- [ ] O `expo-location` está instalado e funcionando
- [ ] A permissão GPS é solicitada ao apertar o botão
- [ ] Ao negar a permissão, a mensagem vermelha "Acesso negado ao GPS" aparece
- [ ] O app não trava ao negar a permissão
- [ ] Print enviado na plataforma

---

## Como isso se aplica ao seu projeto

Tratar erros de permissão é uma habilidade essencial. No Trabalho em Grupo, se o usuário negar o acesso à câmera, GPS ou notificações, seu app precisa mostrar uma mensagem amigável — não um erro vermelho do React. O padrão que você praticou aqui (`status !== 'granted'` → mensagem amigável) é o mesmo usado nas Aulas 08 e 10. Capricho! 🚀

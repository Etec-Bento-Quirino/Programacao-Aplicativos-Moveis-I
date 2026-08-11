# Atividade 10: Notificações em Background 🌌

**Objetivo da Atividade:**

Comprovar o funcionamento prático de notificações locais do `expo-notifications`, demonstrando que elas funcionam mesmo se o aplicativo estiver minimizado ou rodando em segundo plano.

---

## O Desafio: A Notificação Fora do App

Sua tarefa é testar o fluxo completo do *Push Notification Local* disparado via Timeout, comprovando que o alerta chega mesmo que o usuário não esteja olhando ativamente para a tela do aplicativo.

1. Implemente a função que agenda uma notificação para ocorrer em 5 ou 10 segundos, conforme visto no tutorial.
2. Inicie o teste clicando no botão do aplicativo recém-criado. Permita o envio de notificações se for solicitado pelo celular.
3. Após acionar o temporizador clicando no botão, aperte a tecla `Home` (ou deslize o dedo da parte inferior para cima na tela inicial) minimizando totalmente o aplicativo Expo Go.
4. Aguarde na tela de início do seu sistema (ou na tela de bloqueio).

### 💡 Dica de como iniciar:

Para garantir a permissão das notificações, utilize as configurações padrão do expo-notifications no início do arquivo, fora do seu componente. Para agendar, invoque `Notifications.scheduleNotificationAsync`.

```tsx
import * as Notifications from 'expo-notifications';
import { View, Button, StyleSheet } from 'react-native';

// 1. Define o comportamento global do Notification (Obrigatório)
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function App() {
  
  const dispararNotificacao = async () => {
    // 2. Agenda a notificação
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Bem-vindo ao Submundo! 🕵️‍♂️",
        body: "Sua notificação local chegou via Background.",
      },
      trigger: {
        seconds: 5, // Notifica em exatos 5 segundos
      },
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Notificar em 5 Segundos" onPress={dispararNotificacao} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
```

## Entrega:
Ao aguardar com o aplicativo minimizado, a notificação deve surgir no topo do celular. Capture uma captura de tela (print) nesse exato instante, exibindo a notificação "Push" caindo sobre a tela inicial nativa do dispositivo. Envie na plataforma!

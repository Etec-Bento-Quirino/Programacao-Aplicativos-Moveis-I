# Atividade 10: Notificação Fora do App 🌌

**Sugestão de execução:** Quinzena 11 | **Bimestre:** 2 | **Valendo XP e nota**

---

**Objetivo da Atividade:** comprovar o funcionamento prático de notificações locais do `expo-notifications`, demonstrando que elas funcionam mesmo se o aplicativo estiver minimizado ou rodando em segundo plano.

> [!NOTE]
> Se você ainda não fez o [Tutorial da Aula 10](tutorial.md), faça primeiro. Esta atividade cobra exatamente os passos de lá — com foco em testar com o app minimizado.

---

## O Desafio: A Notificação Fora do App

Sua tarefa é testar o fluxo completo do *Push Notification Local* disparado via Timeout, comprovando que o alerta chega mesmo que o usuário não esteja olhando ativamente para a tela do aplicativo.

1. Implemente a função que agenda uma notificação para ocorrer em 5 ou 10 segundos, conforme visto no tutorial.
2. Inicie o teste clicando no botão do aplicativo recém-criado. Permita o envio de notificações se for solicitado pelo celular.
3. Após acionar o temporizador clicando no botão, aperte a tecla `Home` (ou deslize o dedo da parte inferior para cima na tela inicial) minimizando totalmente o aplicativo Expo Go.
4. Aguarde na tela de início do seu sistema (ou na tela de bloqueio).

> [!TIP]
> **Dica de como iniciar:** para garantir a permissão das notificações, utilize as configurações padrão do `expo-notifications` no início do arquivo, fora do seu componente. Para agendar, invoque `Notifications.scheduleNotificationAsync`.

### Código de Referência

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
        title: "Lembrete do App! 📱",
        body: "Sua notificação local chegou via Background.",
      },
      trigger: {
        seconds: 5,
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

> [!WARNING]
> Se a notificação não aparecer, verifique: (1) a permissão foi concedida? (2) O canal foi criado no Android? (3) O app estava em primeiro plano quando agendou? No Android, abra as configurações de notificação do Expo Go e confirme que os alerts estão ligados.

---

## Entrega

Ao aguardar com o aplicativo minimizado, a notificação deve surgir no topo do celular. Capture uma captura de tela (print) nesse exato instante, exibindo a notificação "Push" caindo sobre a tela inicial nativa do dispositivo. Envie na plataforma!

---

## Checklist de Entrega

Antes de enviar, confira:

- [ ] O `expo-notifications` está instalado e funcionando
- [ ] O `setNotificationHandler` está configurado fora do componente
- [ ] A permissão de notificação foi concedida
- [ ] A notificação é agendada para 5 segundos
- [ ] O app foi minimizado antes da notificação chegar
- [ ] A notificação aparece na tela inicial ou de bloqueio
- [ ] Print enviado na plataforma

---

## Como isso se aplica ao seu projeto

As notificações locais são o recurso obrigatório da **Entrega 4** em pelo menos um projeto do Trabalho em Grupo. O padrão que você praticou aqui (`agendarNotificacao` → minimizar → notificação chega) é o mesmo usado em apps de lembrete, entregas e alarmes. Basta mudar o `title`, `body` e `trigger` para o momento adequado do seu tema. Parabéns por completar o Módulo 04 — agora você domina câmera, GPS e notificações! 🔔🚀

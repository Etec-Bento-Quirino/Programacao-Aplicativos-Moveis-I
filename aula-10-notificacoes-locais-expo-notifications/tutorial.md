# Aula 10 – Notificações locais (expo-notifications)

**Sugestão de execução:** quinzena 11 (08/06/2026 a 20/06/2026).

**Base tecnológica:** Serviços; notificações.

---

## Objetivo

Usar **expo-notifications** para **agendar uma notificação local** que aparece após alguns segundos (ou em um horário). Configurar **permissão** e **canal** (Android).

---

## Parte 1 – Instalar

```bash
npx expo install expo-notifications
```

---

## Parte 2 – Configurar permissão e canal (Android)

No código, ao iniciar o app (ex.: em useEffect no App.js ou na tela que agenda):

```javascript
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const configurarNotificacoes = async () => {
  const { status: existing } = await Notifications.getPermissionsAsync();
  let finalStatus = existing;
  if (existing !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== 'granted') {
    Alert.alert('Aviso', 'Permissão para notificações negada.');
    return false;
  }
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'Padrão',
      importance: Notifications.AndroidImportance.DEFAULT,
    });
  }
  return true;
};
```

---

## Parte 3 – Agendar notificação

Agendar para daqui a 5 segundos (para teste):

```javascript
const agendarNotificacao = async () => {
  const ok = await configurarNotificacoes();
  if (!ok) return;

  await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Lembrete',
      body: 'Esta é uma notificação agendada pelo app!',
      data: { qualquer: 'dado' },
    },
    trigger: { seconds: 5, type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL },
  });
  Alert.alert('Ok', 'Notificação agendada para 5 segundos.');
};
```

Para agendar em data/hora específica (ex.: amanhã às 10h), use trigger com **type: Notifications.SchedulableTriggerInputTypes.DATE** e **date** em milissegundos.

---

## Parte 4 – Botão na tela

```javascript
<TouchableOpacity style={styles.botao} onPress={agendarNotificacao}>
  <Text style={styles.textoBotao}>Agendar notificação (5 seg)</Text>
</TouchableOpacity>
```

---

## Checklist

- [ ] expo-notifications instalado; permissão e canal (Android) configurados.
- [ ] scheduleNotificationAsync com trigger (seconds ou date); notificação aparece no dispositivo.
- [ ] Tratamento quando permissão é negada.

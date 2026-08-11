import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// ============================================================================
//  app/notificacoes.tsx
//  ÁREA: RECURSOS DO DISPOSITIVO — Aula 10 (expo-notifications).
//
//  Notificações locais agendadas. A dependência `expo-notifications` já vem
//  instalada no package.json deste projeto.
// ============================================================================

export default function Notificacoes() {
  // TAREFA (Aula 10): implemente o agendamento de notificações, ex.:
  //
  //   import * as Notifications from 'expo-notifications';
  //
  //   Notifications.setNotificationHandler({
  //     handleNotification: async () => ({
  //       shouldShowAlert: true,
  //       shouldPlaySound: false,
  //       shouldSetBadge: false,
  //     }),
  //   });
  //
  //   const agendar = async () => {
  //     const { status } = await Notifications.requestPermissionsAsync();
  //     if (status !== 'granted') return;
  //     await Notifications.scheduleNotificationAsync({
  //       content: { title: 'Lembrete!', body: 'Hora de completar a área!' },
  //       trigger: { seconds: 5, type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL },
  //     });
  //   };
  //
  //   Bônus (Aula 10): triggers DAILY/WEEKLY/DATE, cancelScheduledNotificationAsync
  //   e reagir ao toque com addNotificationResponseReceivedListener.

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Notificações</Text>

      <TouchableOpacity style={styles.botao} onPress={() => Alert.alert('Aula 10', 'Implemente as notificações!')}>
        <Text style={styles.botaoTexto}>Agendar lembrete</Text>
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

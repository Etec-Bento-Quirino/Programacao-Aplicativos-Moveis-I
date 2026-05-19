# Tutorial: A Pilula de 5 Segundos (Notificações)

**Sugestão de execução:** Quinzena 11.

Chegou o momento que diferencia os homens dos garotos no Dev Mobile. Fazer o celular vibrar pelo seu código Javascript solto.

---

## Passo 1: O Módulo Sonoro

Feche a conexão do seu terminal por um minuto apertando `Ctrl+C`. Puxe os fios conectores da expo de base pesada:

```bash
npx expo install expo-notifications
```
Reabra executando `npm start`.

## Passo 2: O Espião Guardião (The Handler)

Em um arquivo solto ou num componente que você montará para testes, coloque a biblioteca na cabeça do arquivo. **Logo embaixo das importações, FORA DA FUNÇÃO PRINCIPAL**. Declaramos o interceptador de prioridade.

```tsx
import * as Notifications from 'expo-notifications';
import { View, TouchableOpacity, Text, StyleSheet, Platform, Alert } from 'react-native';

// O ESPIÃO ESTÁ FORA DO SEU APP, ELE ABRAÇA O SEU CÓDIGO INTEIRO!
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,      // Mostra o pop-up deslizando do topo (HeadsUp)
    shouldPlaySound: true,      // Desperte e toque o Apito configurado pelo Android
    shouldSetBadge: false,      // Não colocar bolinha vermelha no ícone da casa inicial
  }),
});
```

## Passo 3: O Assincronismo de Permissões Nativo
Como visto no GPS e na Câmera, ninguém emite Notificação sem Passaporte Carimbado. Criamos a verificação em função temporal de pausa (`Wait`) antes de qualquer disparo. Repare ali o código testando se o OS é Android pra forçar Canal!:

```tsx
export default function PainelVibrante() {

  const carimbarPassaportePush = async () => {
    const { status: statusBase } = await Notifications.getPermissionsAsync();
    let ultimaChanceStatus = statusBase;

    if (statusBase !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      ultimaChanceStatus = status;
    }

    if (ultimaChanceStatus !== 'granted') {
      Alert.alert('Travado', 'Permissão para notificações Negada.');
      return false; // Corta Vôo
    }

    // Regime Fechado para Androids (The Channel Rule da Google)
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'Alertas Super Importantes',
        importance: Notifications.AndroidImportance.MAX, // Sobe com som e tela vermelha
      });
    }

    return true; // Se desceu até aqui, você está legalizado!
  };
```

## Passo 4: O Botão do Pânico (Disparo de 5 Segundos)

Agora é a hora do show principal. Acenda o pavio.

```tsx
  const engatilharNotificacaoLocal = async () => {
    // 1. Só dispara se a função gigante de aprovação aí de cima Devolver "True".
    const legalizado = await carimbarPassaportePush();
    if (!legalizado) return;

    // 2. Chame a API de Agendamento Nativa! Se quiser uma data estática (Natal), olhe a Doc!
    // Usaremos aqui para explodir em 5 seg cronometrados:
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Bem Vindos ao Submundo!',
        body: 'O seu aplicativo aprendeu a comandar a Vibração Materna do OS.',
        data: { linkMisterioso: '/alguma_tela_magica' }, // Envia dado invisível pra usar dpois
      },
      trigger: { seconds: 5, type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL },
    });
    
    // Alerte na tela do App provando que ele engatilhou, antes dele minimizar:
    Alert.alert('Contagem Iniciada', 'Rápido, feche ou minimize o App, você tem 5 segundos.');
  };

  // ----------------------------------------------------
  // Abaixo, nosso Retorno do Front-End React de Teste...
  return (
    <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={engatilharNotificacaoLocal} style={{padding: 20, backgroundColor: 'purple'}}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Ativar Bomba Push</Text>
      </TouchableOpacity>
    </View>
  );
}
```

Nós estrapolamos as barreiras dos Aplicativos Internos da Apple/Google. Avance para a Atividade para me mostrar o resultado dessa mágica em funcionamento.

# Tutorial: A Pilula de 5 Segundos (Notificações)

**Sugestão de execução:** Quinzena 11 | **Bimestre:** 2

> **Pré-requisitos:** [Aula 09](../aula-09-geolocalizacao-expo-location/README.md) — padrão de solicitação de permissão de hardware compreendido.
>
> **O que você vai aprender:**
> - Instalar `expo-notifications` e configurar o handler de notificações
> - Solicitar permissão de notificação para Android e iOS
> - Agendar uma notificação local para disparar após X segundos com `scheduleNotificationAsync`
> - Entender `trigger` (quando disparar) e `content` (o que mostrar) de uma notificação

---

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

  const solicitarPermissao = async (): Promise<boolean> => {
    const { status: statusAtual } = await Notifications.getPermissionsAsync();
    let statusFinal = statusAtual;

    if (statusAtual !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      statusFinal = status;
    }

    if (statusFinal !== 'granted') {
      Alert.alert('Permissão negada', 'Habilite as notificações nas configurações do dispositivo.');
      return false;
    }

    // Android exige um canal configurado para exibir notificações
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'Alertas do App',
        importance: Notifications.AndroidImportance.MAX,
      });
    }

    return true;
  };
```

## Passo 4: O Botão do Pânico (Disparo de 5 Segundos)

Agora é a hora do show principal. Acenda o pavio.

```tsx
  const agendarNotificacao = async () => {
    // Só agenda se a permissão for concedida
    const permissaoOk = await solicitarPermissao();
    if (!permissaoOk) return;

    // Agenda a notificação para disparar daqui a 5 segundos
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Lembrete do App!',
        body: 'Seu aplicativo enviou esta notificação com sucesso.',
        data: { tela: '/inicio' }, // Dado extra que pode ser lido quando o usuário toca a notificação
      },
      trigger: { seconds: 5, type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL },
    });
    
    Alert.alert('Agendado!', 'Minimize o app agora. Em 5 segundos a notificação aparecerá.');
  };

  return (
    <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={agendarNotificacao} style={{padding: 20, backgroundColor: 'purple'}}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Agendar Notificação</Text>
      </TouchableOpacity>
    </View>
  );
}
```

Você agora controla o sistema de notificações do Android e iOS diretamente do JavaScript. Avance para a atividade!

---

## Como isso se aplica ao seu projeto

As notificações locais são o recurso obrigatório da **Entrega 4** em pelo menos um projeto:

- **Categoria 1 (Lista de Tarefas):** notificação disparada ao adicionar uma tarefa com prazo — "Lembrete: sua tarefa vence amanhã!"
- **Categoria 2 (Cadastro/Inventário):** notificação de alerta quando um item tem estoque baixo
- **Categoria 3 (Diário/Notas):** lembrete diário para escrever uma nova nota
- **Categoria 4 (Controle de Gastos):** alerta quando o total de gastos da semana ultrapassa um limite

O padrão `agendarNotificacao()` que você criou aqui é reutilizado diretamente no projeto real — basta mudar o `title`, `body` e o `trigger` para o momento adequado.

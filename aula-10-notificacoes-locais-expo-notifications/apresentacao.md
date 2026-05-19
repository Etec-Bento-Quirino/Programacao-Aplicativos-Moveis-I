# Apresentação: O Despertar da Tela (Notificações) 🔔

**Leitura Autônoma de Arquitetura de Comunicação em Fundo (Background Service)**

Nós achamos que programar se trata apenas de criar telas bonitas. Mas a engenharia do Push Notification é algo completamente insano. A mensagem é processada independentemente do fato de o seu aplicativo estar tecnicamente morto/fechado na Memória RAM.

---

## 1. Local Push vs Remote Push
Todo desenvolvedor novato acha que notificação só sai de nuvens. Não é verdade.
- **Remote Push (Notificações de Nuvens):** É quando você recebe Mensagem no WhatsApp. A empresa lá fora manda um sinal de internet pra Célula Operadora do seu celular, que injeta no Android, que solta na sua tela. Isso envolve pagamentos em servidores e tokens difíceis Firebase.
- **Local Push (Notificação de Despertador Humilde):** Você não precisa de servidores para lembretes de Tomar Água. Você usa o código do App para dizer à Placa-mãe nativa do Sistema Operacional: "Daqui a 6h... Mostre um painel". E mesmo desligando a Internet inteira, ele joga um Push na sua tela 6 horas depois! Faremos o Local Push!

## 2. A Ditadura dos Canais do Android (Channels)

No passado, os aplicativos enviavam 80 notificações chatas de propaganda por dia. Como penalidade judicial do usuário se defender, a Google atualizou o Android forçando todos os programadores ativarem `Canais Obrigatórios`.

Um "Canal da Notificação" (`channel`) significa que se seu App envia Ofertas de Loja e também Receibos, você é **Obrigado** pelo Google a criar um Canal de Ofertas na engenharia de software separado. Dessa forma, a sua avó pode entrar nas "Configs do Android" e desativar com o dedo o botãozinho do Canal de Promoção do Ifood, mas ainda receber as Notificações de Entrega! Sem isso o Android não emite sons de sininho. Nunca.

## 3. Handlers (O Interceptador Supremo)
E se o seu próprio aplicativo (sua tela ali de botão) já estiver aberto nas suas fuças enquanto você usa e a notificação apitar? Seria bizarro deslizar uma barra lá em cima dizendo "Lembrete: Você tá no app" se você já tá lendo! 

Usamos algo invocado no ínico do código raiz chamado de `setNotificationHandler`. Ele é o espião absoluto. Em milissegundos ele avisa: *"O cara está com os olhos no App? Bip. Sim."*. E aí o React pode decidir silenciar ou explodir tudo com Sound! Ou apenas ativar aquele icone vermelho (`badge`) de mensagem não lida. Sensacional, não?

**Exemplo Prático: Agendando um Alarme**
```tsx
import * as Notifications from 'expo-notifications';
import { Button, View } from 'react-native';

// O "Espião": Avisa que se o app estiver aberto, PODE APITAR e mostrar pop-up!
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function TelaLembrete() {
  const agendarParaDaquiA5Segundos = async () => {
    // A mágica Local Push
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Beba Água! 💧",
        body: "Já faz muito tempo que você bebeu água...",
      },
      trigger: { seconds: 5 }, // 👈 Vai apitar em exatos 5 segundos
    });
  };

  return (
    <View style={{ marginTop: 50 }}>
      <Button title="Me avise em 5 seg" onPress={agendarParaDaquiA5Segundos} />
    </View>
  );
}
```

👉 **Expanda sua Cabeça Estudando a Documentação Base:** [Expo Notifications MasterAPI](https://docs.expo.dev/versions/latest/sdk/notifications/)

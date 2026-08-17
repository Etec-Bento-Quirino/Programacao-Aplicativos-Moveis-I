# Tutorial: A Notificação de 5 Segundos

**Sugestão de execução:** Quinzena 11 | **Bimestre:** 2

> [!NOTE]
> **O que você vai aprender hoje:**
> - Instalar `expo-notifications` e configurar o handler de notificações
> - Solicitar permissão de notificação para Android e iOS
> - Agendar uma notificação local para disparar após X segundos com `scheduleNotificationAsync`
> - Entender `trigger` (quando disparar) e `content` (o que mostrar) de uma notificação
>
> **Pré-requisitos:** [Aula 09](../aula-09-geolocalizacao-expo-location/README.md) — padrão de solicitação de permissão de hardware compreendido.

---

Chegou a hora de fazer o celular vibrar e apitar pelo seu código JavaScript. Vamos usar uma analogia: na Aula 08 você abriu a câmera, na Aula 09 você leu o GPS. Agora você vai "tocar a campainha" — mandar uma notificação que aparece **fora do app**, na tela inicial ou de bloqueio do celular.

O processo é o mesmo de sempre: instalar → pedir permissão → usar `await` → resultado aparece.

---

## Passo 1: Instalando o Módulo Sonoro

Pare o servidor do Expo com `Ctrl+C` no terminal. Instale o pacote:

```bash
npx expo install expo-notifications
```

O terminal vai mostrar algo parecido com:

```
✔ Installed expo-notifications
```

Ligue o servidor novamente:

```bash
npm start
```

> [!WARNING]
> Se você esquecer de parar o servidor antes de instalar, o Expo pode travar. Sempre pare com `Ctrl+C` antes de instalar pacotes novos.

---

## Passo 2: O Espião Guardião (O Handler)

Em um arquivo de componente, coloque a importação no topo. **Logo embaixo das importações, FORA DA FUNÇÃO PRINCIPAL**, declare o interceptador:

```tsx
import * as Notifications from 'expo-notifications';
import { View, TouchableOpacity, Text, StyleSheet, Platform, Alert } from 'react-native';

// O ESPIÃO: decide o que fazer quando a notificação chega
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,   // Mostra o pop-up deslizando do topo
    shouldPlaySound: true,   // Toca o som configurado pelo Android
    shouldSetBadge: false,   // Não coloca bolinha vermelha no ícone
  }),
});
```

> [!IMPORTANT]
> **Por que FORA da função?**
> O Handler precisa estar configurado **antes** de qualquer notificação ser recebida. Se você colocar dentro do componente, ele só vai ser configurado quando o componente renderizar — e pode ser tarde demais. Colocar fora dele é como instalar a campainha **antes** de receber visitas.

> [!NOTE]
> **O que faz cada campo?**
> - `shouldShowAlert: true` = "mostre o pop-up mesmo que o app esteja aberto".
> - `shouldPlaySound: true` = "toque o som de notificação".
> - `shouldSetBadge: false` = "não coloque a bolinha vermelha no ícone".

---

## Passo 3: A Função que Pede Permissão

Como vimos nas Aulas 08 e 09, ninguém emite notificação sem **permissão**. Criamos a verificação antes de qualquer disparo:

```tsx
export default function PainelVibrante() {

  const solicitarPermissao = async () => {
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

> [!TIP]
> **Por que verificar `getPermissionsAsync` antes de `requestPermissionsAsync`?**
> Porque o sistema pode já ter concedido a permissão antes (ou o usuário pode ter negado antes). Verificar primeiro evita o popup desnecessário. É como checar se a porta já está aberta antes de pedir a chave.

> [!WARNING]
> **Cuidado com o Android:** se você não criar o canal com `setNotificationChannelAsync`, a notificação aparece mas é **silenciosa** — sem som, sem vibração. Sempre crie o canal!

---

## Passo 4: O Botão do Pânico (Disparo de 5 Segundos)

Agora a parte divertida: agendar a notificação e ver o celular apitar.

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
        data: { tela: '/inicio' }, // Dado extra que pode ser lido quando o usuário toca
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

**O que acontece quando o usuário aperta o botão:**
1. A função `solicitarPermissao` verifica se o app pode notificar
2. Se sim, `scheduleNotificationAsync` agenda o "alarme" para 5 segundos
3. Um `Alert` avisa para minimizar o app
4. O usuário minimiza → espera 5 segundos → a notificação aparece!

> [!CAUTION]
> **No Android, o `trigger` precisa do campo `type`** (`Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL`). No iOS, basta `{ seconds: 5 }`. Se você esquecer o `type` no Android, a notificação pode não disparar.

---

## Passo 5: Testando na Prática

1. Aperte o botão "Agendar Notificação"
2. Aparece um Alert dizendo "Minimize o app agora"
3. Minimize o app (pressione Home ou deslize para cima)
4. Aguarde 5 segundos
5. **A notificação aparece na tela inicial ou de bloqueio!**

> [!TIP]
> Se a notificação não aparecer, verifique:
> - A permissão foi concedida?
> - O canal foi criado (Android)?
> - O app está em primeiro plano (foreground) quando agendou?
>
> No Android, abra as configurações de notificação do Expo Go e confirme que os alerts estão ligados.

---

## Passo Extra: Os Gatilhos (Triggers) do Agendamento

O trigger `TIME_INTERVAL` é só **um** dos tipos. Todos vivem no enumerador `SchedulableTriggerInputTypes`:

| Tipo | O que faz |
|---|---|
| `TIME_INTERVAL` | Dispara **uma vez**, X segundos após agendar |
| `DATE` | Dispara **uma vez**, em uma data/hora exata |
| `DAILY` | Dispara **todos os dias** em um horário |
| `WEEKLY` | Dispara **toda semana** em um dia/hora |
| `MONTHLY` | Dispara **todo mês** em um dia/hora |
| `YEARLY` | Dispara **todo ano** em um dia/mês/hora |

Exemplos práticos:

```tsx
// Lembrete diário às 07h30 — perfeito para diário de notas
const triggerDiario = {
  type: Notifications.SchedulableTriggerInputTypes.DAILY,
  hour: 7,
  minute: 30,
};

// Alerta toda segunda-feira às 08h00 — para planejamento semanal
const triggerSemanal = {
  type: Notifications.SchedulableTriggerInputTypes.WEEKLY,
  weekday: 2,
  hour: 8,
  minute: 0,
};

// Data exata — véspera de uma prova
const triggerData = {
  type: Notifications.SchedulableTriggerInputTypes.DATE,
  date: new Date(2026, 8, 13, 18, 0, 0),
};
```

> [!NOTE]
> No iOS, `TIME_INTERVAL` com `repeats: true` exige intervalo **mínimo de 60 segundos**. No Android, para notificações funcionarem, o app precisa estar rodando no Expo Go ou um build de desenvolvimento.

---

## Passo Extra: Cancelando e Listando Agendamentos

Agendou errado? O SDK permite desfazer:

```tsx
// Cancela UMA notificação específica (pelo id retornado no agendamento)
const identifier = await Notifications.scheduleNotificationAsync({
  content: { title: 'Tarefa vencida', body: 'Finalize hoje!' },
  trigger: triggerDiario,
});
// ... depois ...
await Notifications.cancelScheduledNotificationAsync(identifier);

// Cancela TODAS as notificações agendadas
await Notifications.cancelAllScheduledNotificationsAsync();

// Lista as notificações ainda pendentes
const pendentes = await Notifications.getAllScheduledNotificationsAsync();
console.log(pendentes.length); // quantas ainda estão agendadas
```

> [!TIP]
> Listar notificações pendentes é útil para mostrar "próximos lembretes" na tela do app. O usuário vê quais lembretes ainda estão agendados e pode cancelar individualmente.

---

## Passo Extra: Reagindo Quando o Usuário Toca

Notificação só é útil se o app **responder** ao toque. Quando o usuário toca, o app recebe um `response` — e o `data` que você colocou no `content` vem junto:

```tsx
import { useEffect } from 'react';
import * as Notifications from 'expo-notifications';

// Ao tocar na notificação, navegue para a tela guardada no `data`
useEffect(() => {
  const subscription = Notifications.addNotificationResponseReceivedListener((response) => {
    const { tela } = response.notification.request.content.data;
    console.log('Usuário tocou a notificação que pedia a tela:', tela);
    // router.push(tela); // navega com o Expo Router!
  });

  return () => subscription.remove();
}, []);
```

> [!TIP]
> Combine esse `data` com o Expo Router da Aula 06: coloque `data: { tela: '/detalhe/7' }` no agendamento e navegue direto para a tela do item na hora do toque — um app de lembretes de verdade!

---

## Checklist da Aula 10

Marque cada item quando conseguir fazer:

- [ ] Instalei o `expo-notifications` com `npx expo install`
- [ ] Configurei o `setNotificationHandler` FORA do componente
- [ ] Criei a função `solicitarPermissao` que verifica e pede permissão
- [ ] O canal foi criado no Android com `setNotificationChannelAsync`
- [ ] A função `agendarNotificacao` agenda para 5 segundos
- [ ] A notificação aparece com o app minimizado
- [ ] (Opcional) Testei um trigger `DAILY` ou `WEEKLY`
- [ ] (Opcional) Testei o cancelamento com `cancelScheduledNotificationAsync`

> [!NOTE]
> Se algum item ficou sem marcar, volte no passo correspondente. Você já domina o padrão `permissão → await → resultado` — esta é a última aula do Módulo 04!

---

## Como isso se aplica ao seu projeto

As notificações locais são o recurso obrigatório da **Entrega 4** em pelo menos um projeto:

- **Categoria 1 (Lista de Tarefas):** notificação disparada ao adicionar uma tarefa com prazo — "Lembrete: sua tarefa vence amanhã!"
- **Categoria 2 (Cadastro/Inventário):** notificação de alerta quando um item tem estoque baixo
- **Categoria 3 (Diário/Notas):** lembrete diário para escrever uma nova nota
- **Categoria 4 (Controle de Gastos):** alerta quando o total de gastos da semana ultrapassa um limite

O padrão `agendarNotificacao()` que você criou aqui é reutilizado diretamente no projeto real — basta mudar o `title`, `body` e o `trigger` para o momento adequado. Parabéns por completar o Módulo 04 — agora você domina a câmera, o GPS e as notificações! 🚀

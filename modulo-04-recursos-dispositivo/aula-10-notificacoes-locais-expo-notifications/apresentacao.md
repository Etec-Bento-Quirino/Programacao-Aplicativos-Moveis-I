# Apresentação: O Despertar da Tela (Notificações) 🔔

**Sugestão de uso:** slides da Aula 10 (leia em voz alta antes do tutorial).

---

## 1. Local Push vs Remote Push

Todo desenvolvedor novato acha que notificação só sai de nuvens. Não é verdade — existem dois tipos:

| Tipo | Como funciona? | Exemplo |
|------|----------------|---------|
| **Remote Push** (Nuvem) | Um servidor manda um sinal de internet para o celular | Mensagem no WhatsApp |
| **Local Push** (Despertador) | O próprio app agenda uma notificação no sistema operacional | Lembrete de "tomar água" |

> [!NOTE]
> **O que é uma notificação Local?**
> É como um despertador: você define "daqui a 6 horas, toque o alarme". Não precisa de internet, nem de servidor. O app fala direto com o Android/iOS e o sistema operacional guarda o lembrete. Quando o tempo chega, ele mostra a notificação — mesmo que o app esteja fechado!

---

## 2. A Ditadura dos Canais do Android (Channels)

No passado, apps enviavam 80 notificações chatas de propaganda por dia. O Google reagiu: agora todo app Android é **obrigado** a criar "Canais" de notificação.

Um "Canal" é como uma **categoria**. Se seu app envia lembretes de tarefas E alertas de pagamento, você precisa criar um Canal para cada tipo. Assim, o usuário pode desativar os alertas de pagamento mas manter os lembretes de tarefas — sem precisar desligar todas as notificações do app.

> [!IMPORTANT]
> Sem criar o canal, o **Android não emite sons de notificação**. É o erro mais comum de iniciantes: a notificação aparece mas é silenciosa. Sempre crie o canal antes de agendar!

---

## 3. Handlers: O Interceptador Supremo

E se o app estiver **aberto** quando a notificação chegar? Seria bizarro mostrar "Lembrete: Você tá no app" quando o usuário já está olhando para ele!

É aí que entra o **Handler** (`setNotificationHandler`). Ele é um espião que avisa: "o usuário está com os olhos no app?". Se sim, o React decide se mostra o pop-up, toca o som, ou apenas aciona o badge (bolinha vermelha) no ícone.

> [!TIP]
> Pense no Handler como o **porteiro** de um prédio: ele vê quem está chegando e decide se avisa o morador (mostra o pop-up) ou se deixa passar sem incômodo (só o badge).

---

## 4. A Anatomia de uma Notificação

Toda notificação tem duas partes:

| Parte | O que é? | Exemplo |
|-------|----------|---------|
| **`content`** | O que mostrar | Título + texto + dados extras |
| **`trigger`** | Quando disparar | Daqui a 5 segundos, todo dia às 7h, numa data específica |

```tsx
await Notifications.scheduleNotificationAsync({
  content: {
    title: "Beba Água! 💧",
    body: "Já faz muito tempo que você bebeu água...",
  },
  trigger: { seconds: 5 }, // Vai apitar em exatos 5 segundos
});
```

> [!NOTE]
> O campo `data` dentro do `content` permite enviar **dados extras** junto com a notificação. Quando o usuário toca na notificação, esses dados podem ser usados para navegar para uma tela específica do app. É assim que apps de delivery funcionam: "Toque para ver o status do pedido" → abre a tela do pedido.

---

## 5. Tipos de Trigger (Gatilhos)

O `seconds: 5` é só um dos tipos. O SDK oferece vários:

| Tipo | O que faz |
|---|---|
| `TIME_INTERVAL` | Dispara **uma vez**, X segundos após agendar |
| `DATE` | Dispara **uma vez**, em uma data/hora exata |
| `DAILY` | Dispara **todos os dias** em um horário |
| `WEEKLY` | Dispara **toda semana** em um dia/hora |
| `MONTHLY` | Dispara **todo mês** em um dia/hora |
| `YEARLY` | Dispara **todo ano** em um dia/mês/hora |

> [!TIP]
> Com esses gatilhos, você pode criar lembretes diários ("Hora de estudar!"), semanais ("Segunda é dia de prova!") ou datados ("Véspera da entrega do projeto"). Tudo sem servidor!

> [!TIP]
> Quer praticar? Abra o [tutorial.md](tutorial.md) e monte o botão de notificação passo a passo. Lá você vai ver como configurar o Handler, pedir permissão e agendar o "alarme de 5 segundos"! 🔔

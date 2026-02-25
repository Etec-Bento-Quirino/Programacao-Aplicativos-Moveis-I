# Aula 10 - Notificações locais (expo-notifications)

**Data:** 08/06/2026

---

## Apresentação

expo-notifications: permissão e canal (Android); setNotificationHandler; scheduleNotificationAsync com trigger (segundos ou data).

---

## Slides

### Objetivo

Agendar uma notificação local que apareça após X segundos (ou em data/hora). Configurar permissão e canal no Android.

### Configuração

setNotificationHandler para shouldShowAlert, shouldPlaySound. requestPermissionsAsync; no Android, setNotificationChannelAsync('default', ...).

### Agendar

scheduleNotificationAsync({ content: { title, body, data }, trigger: { seconds: 5, type: TIME_INTERVAL } }). Para teste, 5 ou 10 segundos.

### Atividade da quinzena

App com botão que agenda notificação (ex.: 10 segundos); conteúdo visível ao disparar; tratar permissão negada.

### Projeto Bimestre 2

Quinzenas seguintes: extensão e depois Projeto Fase 2 (formulários, AsyncStorage, recurso do dispositivo).

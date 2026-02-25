# Aula 09 - Geolocalização (expo-location)

**Data:** 25/05/2026

---

## Apresentação

expo-location: permissão de localização; getCurrentPositionAsync; exibir latitude e longitude em texto; loading e tratamento de erro.

---

## Slides

### Objetivo

Obter a localização atual do dispositivo e exibir (em texto). Tratar permissão negada e exibir loading durante a obtenção.

### Permissão

requestForegroundPermissionsAsync(); se não concedida, mensagem na tela ou Alert. Só então chamar getCurrentPositionAsync.

### Obter localização

getCurrentPositionAsync({ accuracy: Balanced }). Retorno: coords.latitude, coords.longitude. Guardar em estado e exibir em Text.

### UX

Estado carregando: ActivityIndicator ou texto "Obtendo...". Estado erro: mensagem amigável. Desabilitar botão enquanto carrega.

### Atividade da quinzena

App com botão "Obter localização"; exibir lat/lng em texto; loading e mensagem se permissão negada.

### Próxima aula

Notificações locais: expo-notifications; agendar notificação (ex.: em 5 segundos).

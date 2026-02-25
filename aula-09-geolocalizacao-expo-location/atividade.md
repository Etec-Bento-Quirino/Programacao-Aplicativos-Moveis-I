# Aula 09 – Atividade

**Sugestão de entrega:** até o final da quinzena 10 (03/06/2026).

---

## Objetivo

Criar um app que **obtém a localização atual** do dispositivo e **exibe** (em texto ou, se quiser, em mapa). Incluir **tratamento de permissão** e **feedback** (loading ou mensagem de erro).

---

## Requisitos

1. **Botão** (ex.: "Obter localização") que chama getCurrentPositionAsync após solicitar permissão.
2. **Exibição:** mostrar latitude e longitude em texto na tela (formato livre). Opcional: exibir em um mapa (react-native-maps ou link para Google Maps).
3. **Permissão:** se o usuário negar, exibir mensagem clara (na tela ou Alert).
4. **Loading:** exibir indicador de carregamento ou texto "Obtendo..." enquanto a localização é obtida.

**Entrega:** print do app com a localização exibida (lat/lng). Opcional: print do comportamento quando a permissão é negada.

---

## Critérios de avaliação

- Localização obtida e exibida; uso correto de permissão; feedback (loading e/ou mensagem de erro).

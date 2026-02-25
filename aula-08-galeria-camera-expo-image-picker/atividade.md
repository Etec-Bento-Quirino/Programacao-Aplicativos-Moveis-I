# Aula 08 – Atividade

**Sugestão de entrega:** até o final da quinzena 9 (22/05/2026).

---

## Objetivo

Criar um app que **abre a galeria**, permite **escolher uma foto** e **exibe na tela**, com **tratamento de permissão** quando o usuário nega.

---

## Requisitos

1. **Botão** (ex.: "Escolher foto") que abre a galeria (launchImageLibraryAsync).
2. **Permissão:** antes de abrir a galeria, solicitar permissão (requestMediaLibraryPermissionsAsync). Se negada, exibir mensagem na tela ou em Alert (ex.: "É necessário permitir acesso à galeria para escolher uma foto.").
3. **Exibição:** após escolher, exibir a imagem na tela (Image com a URI retornada). Tamanho e estilo livres.
4. (Opcional) Incluir também botão para **tirar foto** com a câmera; mesmo fluxo: permissão, captura, exibição.

**Entrega:** print do app com a imagem escolhida exibida; se possível, print ou descrição do que acontece quando a permissão é negada.

---

## Critérios de avaliação

- Acesso à galeria funcionando; imagem exibida na tela; tratamento de permissão implementado (mensagem clara quando negada).

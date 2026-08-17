---
title: Aula 03 – Layouts com Flexbox
layout: default
parent: Módulo 2 – Interface e Componentes
nav_order: 1
---

# Aula 03 – O Esqueleto da Tela (View, Flexbox e StyleSheet)

[Voltar ao curso](../../README.md) | [Calendário](../../docs/calendario-aulas.md) | [Tutoriais](../../TUTORIAIS.md)

---

Se você colocar um texto e uma foto num aplicativo, **quem decide** se eles ficam um do lado do outro, empilhados ou bem no centro da tela? A resposta é o motor de "gravidade" que vem embutido no React Native: o **Flexbox**.

Nesta aula vamos parar de desenhar as coisas soltas no "chão" da nossa cozinha virtual. Vamos criar **gavetas isoladas** (o padrão de **componentização**) para abrigar a foto do nosso app **StickerSmash** — e aprender a colocar cada peça exatamente no lugar certo da tela.

> [!IMPORTANT]
> **Meta da aula:** terminar com a foto do seu app centralizada e posicionada usando `flex`, `justifyContent` e `alignItems` — sem depender de medidas fixas que quebram em telas diferentes. 🎯

## 🧳 O Seu Inventário de Aula

| Material | O que você vai encontrar lá dentro? |
|----------|-------------------------------------|
| [Apresentação](apresentacao.md) | A matemática do Flexbox: os eixos (X e Y), as Views e a introdução às **props**. Tudo para você nunca mais sofrer para centralizar uma caixa. |
| [Tutorial](tutorial.md) | O Guia Prático! Vamos transformar o app em telas modulares, criando o componente `ImageViewer` e encaixando-o no nosso StickerSmash com Flexbox. |
| [Atividade](atividade.md) | Sua Missão da Quinzena (Valendo XP e nota). Brinque com a gravidade: alinhe 3 blocos e prove que domina o Flexbox. |

> [!TIP]
> **Ordem sugerida:** leia a Apresentação (10 minutos), siga o Tutorial no computador (30–40 minutos) e por último resolva a Atividade. Não pule o tutorial — a atividade cobra exatamente o que ele ensina.

---

## Navegação

- **Anterior:** [Aula 02 – Seu Primeiro App e o Ambiente Expo](../../modulo-01-fundamentos-ambiente/aula-02-ambiente-react-native-expo/README.md)
- **Próxima:** [Aula 04 – Texto e botões](../aula-04-texto-botoes/README.md)

**Próxima Parada:** 👉 [Aula 04 – Texto e botões](../aula-04-texto-botoes/README.md)

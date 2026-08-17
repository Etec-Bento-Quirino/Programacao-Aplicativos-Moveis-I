---
title: Aula 12 – Context API e Estado Global
layout: default
parent: Módulo 5 – Estado e Persistência
nav_order: 2
---

# Aula 12 – Context API: Compartilhando Dados Entre Telas

[Voltar ao curso](../../README.md) | [Calendário](../../docs/calendario-aulas.md) | [Tutoriais](../../TUTORIAIS.md)

---

Na aula anterior você aprendeu a guardar dados **dentro** de um componente. Mas e se a Tela "Configurações" mudou o tema para escuro — como a Tela "Home" fica sabendo? Os componentes não conseguem "enxergar" a memória uns dos outros. Nesta aula você cria uma **nuvem global** onde qualquer tela pode ler e escrever dados compartilhados.

> [!IMPORTANT]
> **Meta da aula:** criar um sistema de Dark Mode/Light Mode que funcione entre duas telas distintas, sem passar props manualmente. Se você trocar o tema na Tela 1 e ver a Tela 2 mudar sozinha, a missão está cumprida.

## Seu Inventário de Aula

| Material | O que você vai encontrar lá dentro? |
|----------|-------------------------------------|
| [Apresentação](apresentacao.md) | O problema do "Prop Drilling" (passar dados por 10 telas) e como a Context API resolve isso com um Provider global. |
| [Tutorial](tutorial.md) | O Guia Prático! Vamos montar um Dark Mode completo com Context em 3 passos. |
| [Atividade](atividade.md) | Sua Missão da Quinzena (Valendo XP e nota). Prove que duas telas distantes compartilham o mesmo tema. |

> [!TIP]
> **Ordem sugerida:** leia a Apresentação (5 minutos), depois faça o Tutorial no computador (30–40 minutos) e por último resolva a Atividade.

---

## Navegação

- **Anterior:** [Aula 11 – useState e useEffect](../aula-11-hooks-usestate-useeffect/README.md)
- **Próxima:** [Aula 13 – AsyncStorage (Persistência)](../aula-13-asyncstorage-persistencia-simples/README.md)

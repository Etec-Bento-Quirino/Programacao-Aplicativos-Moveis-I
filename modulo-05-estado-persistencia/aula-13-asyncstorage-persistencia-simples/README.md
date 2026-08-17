---
title: Aula 13 – AsyncStorage
layout: default
parent: Módulo 5 – Estado e Persistência
nav_order: 3
---

# Aula 13 – AsyncStorage: Salvando Dados que Sobrevivem ao Fechar o App

[Voltar ao curso](../../README.md) | [Calendário](../../docs/calendario-aulas.md) | [Tutoriais](../../TUTORIAIS.md)

---

Até agora seus apps tinham um grave problema: **amnésia**. Você criava uma lista, fechava o app e… tudo sumia. O `useState` guarda dados apenas na memória volátil (enquanto o app está aberto). Nesta aula você aprende a salvar dados de verdade no celular do usuário — dados que sobrevivem ao fechar e reabrir o app.

> [!IMPORTANT]
> **Meta da aula:** criar uma lista que persiste após o app ser fechado. Se você adicionar 3 itens, fechar o Expo Go, reabrir e ver os 3 itens ainda lá, a missão está cumprida.

## Seu Inventário de Aula

| Material | O que você vai encontrar lá dentro? |
|----------|-------------------------------------|
| [Apresentação](apresentacao.md) | O que é AsyncStorage, por que ele só aceita texto, e como transformar listas em texto com `JSON.stringify` e `JSON.parse`. |
| [Tutorial](tutorial.md) | O Guia Prático! Vamos criar funções de salvar e carregar, ligar o `useEffect` e testar a persistência. |
| [Atividade](atividade.md) | Sua Missão da Quinzena (Valendo XP e nota). Feche o app, reabra e prove que os dados sobreviveram. |

> [!TIP]
> **Ordem sugerida:** leia a Apresentação (5 minutos), depois faça o Tutorial no computador (30–40 minutos) e por último resolva a Atividade.

---

## Navegação

- **Anterior:** [Aula 12 – Context API](../aula-12-contexto-hooks/README.md)
- **Próxima:** [Aula 14 – SQLite (Banco de Dados)](../../modulo-06-banco-dados-sqlite/aula-14-sqlite-configuracao-primeira-tabela/README.md)

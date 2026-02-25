# Aula 13 – Atividade

**Sugestão de entrega:** até o final da quinzena 16 (04/09/2026).

---

## Objetivo

Criar um app que **salva** e **recupera** um dado no dispositivo usando **AsyncStorage** (ex.: nome do usuário ou uma lista simples). Ao fechar e abrir o app, o dado deve continuar lá.

---

## Requisitos

1. **Salvar:** ao digitar em um campo (ex.: nome) e tocar em "Salvar", gravar no AsyncStorage (setItem com uma chave fixa, ex.: '@app:nome').
2. **Carregar:** ao abrir a tela (ou o app), ler o valor do AsyncStorage (getItem) e exibir no campo ou na tela.
3. **Persistência:** fechar o app completamente e abrir de novo; o valor salvo deve aparecer.
4. Se for uma **lista** (ex.: itens), use JSON.stringify ao salvar e JSON.parse ao carregar; carregue no useEffect e salve sempre que adicionar/remover.

**Entrega:** print do app com o dado salvo exibido e, se possível, breve descrição: "Fechei o app, abri de novo e o valor continuou lá."

---

## Critérios de avaliação

- Dado persistido e recuperado corretamente; uso adequado de AsyncStorage (chave, string/JSON); persistência após reabrir o app.

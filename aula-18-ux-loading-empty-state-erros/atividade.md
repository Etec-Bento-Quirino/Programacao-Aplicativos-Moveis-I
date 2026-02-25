# Aula 18 – Atividade

**Sugestão de entrega:** até o final da quinzena 23 (19/11/2026).

---

## Objetivo

Melhorar um app anterior (ou o projeto em andamento) com **feedback visual**: **loading** durante carregamento, **empty state** quando não houver itens e **mensagem de erro** amigável quando uma operação falhar.

---

## Requisitos

1. **Loading:** em alguma tela que carrega dados (lista do SQLite ou AsyncStorage), exibir **ActivityIndicator** (ou texto "Carregando...") até os dados chegarem; depois esconder e mostrar o conteúdo.
2. **Empty state:** quando a lista estiver vazia, exibir uma **mensagem** (ex.: "Nenhum item cadastrado" ou "Lista vazia – adicione um item"). Pode usar ListEmptyComponent da FlatList ou uma View condicional.
3. **Erro:** em alguma operação que pode falhar (salvar no banco, carregar dados), usar **try/catch** e, em caso de erro, exibir uma **mensagem na tela** (não só no console), em estilo que destaque (ex.: texto vermelho ou caixa de aviso).

**Entrega:** print do loading, do empty state e (se possível) da mensagem de erro na tela; ou descrição de onde cada um foi implementado.

---

## Critérios de avaliação

- Presença de loading, empty state e tratamento de erro na UI; mensagens claras e coerentes.

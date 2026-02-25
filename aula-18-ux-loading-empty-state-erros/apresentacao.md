# Aula 18 - UX: loading, empty state e erros

**Data:** 09/11/2026

---

## Apresentação

ActivityIndicator durante carregamento; mensagem quando lista vazia (ListEmptyComponent ou View condicional); try/catch e mensagem de erro amigável na tela.

---

## Slides

### Objetivo

Melhorar a experiência: loading ao carregar dados, empty state quando não houver itens e mensagem de erro visível quando uma operação falhar.

### Loading

Estado carregando = true no início; ao terminar getItem ou SELECT, setCarregando(false). Se true, exibir ActivityIndicator e texto "Carregando...".

### Empty state

Se itens.length === 0, exibir View com texto "Nenhum item ainda" e orientação. Ou FlatList ListEmptyComponent={Lista vazia.}.

### Erro na tela

try/catch ao salvar ou carregar; em catch, setErro('Mensagem amigável'). Na tela: {erro && {erro}}.

### Atividade da quinzena

Melhorar um app anterior com loading, empty state e tratamento de erro exibido na interface.

### Próxima aula

Revisão: organização de pastas, nomenclatura e documento da estrutura (README).

# Aula 05 – Atividade

**Sugestão de entrega:** até o final da quinzena 5 (11/04/2026).

---

## Objetivo

Criar um app com **duas telas**: (1) uma tela com **lista de 3 itens** e **uma imagem**; (2) ao tocar em um item, abrir uma **tela de detalhe** que mostra o nome (ou dados) do item. Na Aula 06 você usará React Navigation; aqui pode usar duas “telas” no mesmo `App.js` trocando um estado (ex.: `telaAtual` e `itemSelecionado`) ou já instalar e usar navegação.

---

## Requisitos

1. **Tela 1 – Lista**
   - Pelo menos **3 itens** em lista (FlatList ou ScrollView com map).
   - Pelo menos **uma imagem** em algum lugar (topo da lista ou ao lado do texto).
   - Ao tocar em um item, ir para a tela de detalhe (ou, se ainda não tiver navegação, mostrar em um Alert o nome do item e uma mensagem tipo “Detalhe em breve”).
2. **Tela 2 – Detalhe**
   - Mostrar o **nome** (ou id) do item selecionado.
   - Ter um jeito de **voltar** (botão “Voltar” que retorna à lista).

Se você ainda não viu React Navigation (Aula 06), pode fazer com estado no App: `const [tela, setTela] = useState('lista')` e `const [item, setItem] = useState(null)`. Se tela === 'lista' renderiza a lista; se tela === 'detalhe' renderiza o detalhe do `item` e um botão que chama `setTela('lista')`.

**Entrega:** print da lista e print da tela de detalhe (ou do Alert). Opcional: trecho do código (lista + “navegação” por estado).

---

## Critérios de avaliação

- Lista com 3 itens; presença de imagem; ao tocar, exibição do detalhe (outra tela ou Alert); forma de voltar à lista.

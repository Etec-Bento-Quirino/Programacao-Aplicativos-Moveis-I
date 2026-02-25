# Aula 11 – Atividade

**Sugestão de entrega:** até o final da quinzena 14 (08/08/2026).

---

## Objetivo

Criar um app com uma **lista** que é **carregada ao abrir** a tela (useEffect) e que **atualiza** quando o usuário **adiciona** um item (useState + formulário).

---

## Requisitos

1. **Ao abrir a tela:** exibir uma lista com pelo menos 2 itens iniciais (pode ser fixo no useEffect, ex.: "Item A" e "Item B").
2. **Formulário:** um campo de texto e um botão "Adicionar". Ao clicar, o novo item deve aparecer na lista (estado atualizado com setState).
3. **Lista:** usar FlatList (ou ScrollView com map) ligada ao estado; cada item deve ser exibido (nome ou id).
4. (Opcional) Botão para **remover** um item da lista (chamar setState com filter).

**Entrega:** print do app com a lista inicial e, em outro print, a lista após adicionar um ou mais itens.

---

## Critérios de avaliação

- Lista carregada ao montar (useEffect); adicionar item atualiza a lista (useState); código organizado.

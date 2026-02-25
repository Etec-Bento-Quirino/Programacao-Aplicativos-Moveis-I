# Aula 12 – Atividade

**Sugestão de entrega:** até o final da quinzena 15 (22/08/2026).

---

## Objetivo

Criar um app que usa **Context** para um **tema** (claro/escuro) ou outra **preferência** (ex.: nome do usuário) compartilhada entre telas; uma tela permite alterar e outra (ou a mesma) exibe o valor atual.

---

## Requisitos

1. **Contexto:** criar um Context (ex.: TemaContext ou PreferenciasContext) com um valor no estado (ex.: tema: 'claro' | 'escuro', ou nomeUsuario: string).
2. **Provider:** envolver o app (ou o Navigator) com o Provider desse contexto.
3. **Tela 1:** usar useContext para **ler** o valor e **exibir** (ex.: "Tema: claro") e ter um **botão** que altera o valor (ex.: alternar tema ou salvar nome).
4. **Tela 2:** usar o mesmo useContext e exibir o valor atual (ou aplicar cor de fundo conforme o tema). Ao alterar na Tela 1 e voltar/navegar para Tela 2, a Tela 2 deve mostrar o valor atualizado.

**Entrega:** print das duas telas mostrando o valor do contexto e, se possível, um print após alterar (ex.: tema escuro aplicado).

---

## Critérios de avaliação

- Context e Provider implementados; useContext em pelo menos duas telas; alteração no contexto refletida na interface.

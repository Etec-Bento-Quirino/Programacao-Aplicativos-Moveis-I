# Fase 2 – Entrega 2 (Formulário e persistência)

**Sugestão de execução:** Trabalho em Grupo – Entrega 2 (14/09/2026).

[Trabalho em Grupo](README.md) · [Calendário](../docs/calendario-aulas.md)

## Objetivo

Adicionar formulário para incluir novos registros do tema e persistência com AsyncStorage. Na tela de detalhe, permitir editar o status/estado do registro (se o tema tiver um, ex.: concluído, pago, pendente).

## Requisitos

1. **Formulário**
   - Tela ou modal para adicionar registro: campos principais do tema (título/descrição e campos próprios do tema).
   - Validação: campo principal obrigatório.
   - Ao salvar, adicionar à lista e persistir com AsyncStorage.
2. **Lista**
   - Carregar registros do AsyncStorage ao abrir o app.
   - Exibir indicador visual de status quando houver (ex.: ícone ou cor).
3. **Detalhe**
   - Botão para marcar/desmarcar o status (concluída, pago, ativo, etc.); atualizar AsyncStorage e voltar à lista atualizada.
4. **Navegação**
   - Botão "Adicionar" na lista abre o formulário (tela ou stack).

## Conteúdos cobrados

- Formulários (Aula 07).
- AsyncStorage (Aula 13).
- Estado com hooks (Aulas 11, 12).

## Critérios de avaliação

- Formulário com validação; dados salvos no AsyncStorage.
- Lista carregada do AsyncStorage ao iniciar.
- Marcar/desmarcar status no detalhe com persistência.

## Dica

Estrutura de dados sugerida no AsyncStorage: array de objetos com `id` e os campos do tema. Use `JSON.stringify` ao salvar e `JSON.parse` ao carregar.

# Aula 20 – Preparação do projeto final (Fase 4)

**Sugestão de execução:** quinzena 25 (09/12/2026 a 12/12/2026).

**Base tecnológica:** Consolidação; escopo do projeto; checklist de entrega.

---

## Objetivo

Definir o **escopo** da **Fase 4** do projeto (entrega no Bimestre 4): o que falta implementar, checklist SQLite + recurso do dispositivo e **dicas para a apresentação**.

---

## Parte 1 – Escopo da Fase 4 (por tipo)

- **Tipo A (Lista de tarefas):** SQLite como única fonte; notificação opcional; loading e empty state; entrega e apresentação.
- **Tipo B (Cadastro/Inventário):** CRUD completo em categorias e itens; edição e exclusão; UX (loading, empty state, erros).
- **Tipo C (Diário/Notas):** SQLite com categorias e notas; foto na nota; notificação opcional; UX.
- **Tipo D (Controle de gastos):** SQLite; totalizador (soma por período/categoria); mapa opcional; UX.

Cada tipo tem o arquivo **fase4-bimestre4.md** na pasta do projeto em `projetos/tipo-x-.../`.

---

## Parte 2 – Checklist antes da entrega

- [ ] **SQLite:** todas as operações (lista, cadastro, edição, exclusão) usando o banco; nenhum dado crítico só em AsyncStorage.
- [ ] **Recurso do dispositivo:** pelo menos um (notificação, geolocalização, galeria/câmera) implementado ou justificativa de não uso.
- [ ] **UX:** loading ao carregar; empty state quando lista vazia; mensagem de erro quando operação falhar.
- [ ] **Código:** pastas organizadas (screens, components, services/db); README com estrutura e como rodar.
- [ ] **Build/entrega:** código fonte (ZIP ou repositório); instrução para rodar (Expo Go ou APK) e data da apresentação.

---

## Parte 3 – Dicas para a apresentação

1. **Roteiro:** mostrar a tela principal → listagem → adicionar um item (formulário + salvar) → editar ou excluir → mostrar que os dados persistem (fechar e abrir o app). Se tiver notificação ou mapa, mostrar em seguida.
2. **Tempo:** 3 a 5 minutos; falar em voz clara e apontar na tela o que está fazendo.
3. **Problemas:** se algo falhar na hora, explique o que deveria acontecer e comente o que vai ajustar depois (avaliação considera o código entregue e o que foi implementado ao longo do bimestre).

---

## Parte 4 – Documento de escopo (para a atividade)

Escreva um **documento de escopo** (um parágrafo ou lista) com:

- Qual tipo de projeto (A, B, C ou D).
- O que já está pronto (telas, SQLite, recurso do dispositivo).
- O que você vai fazer na quinzena 26 (últimos ajustes, notificação, polish de UX).
- Data prevista de entrega e forma (link do repo, ZIP, APK).

Entregue esse documento ao professor como "planejamento da Fase 4".

---

## Checklist

- [ ] Leu a fase4-bimestre4.md do seu tipo de projeto.
- [ ] Checklist pessoal preenchido (SQLite, recurso, UX, código, entrega).
- [ ] Documento de escopo da Fase 4 redigido e entregue.

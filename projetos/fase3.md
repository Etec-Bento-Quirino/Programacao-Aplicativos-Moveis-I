# Fase 3 – Entrega 3 (SQLite e CRUD)

**Sugestão de execução:** Trabalho em Grupo – Entrega 3 (19/10/2026).

[Trabalho em Grupo](README.md) · [Calendário](../docs/calendario-aulas.md)

## Objetivo

Migrar os dados para SQLite e implementar CRUD completo sobre os registros do tema. Incluir filtros ou buscas na listagem, se fizerem sentido para o tema.

## Requisitos

1. **Banco SQLite**
   - Tabela com os campos do tema (ex.: `id` PK, título, descrição, status, data de criação).
   - Inicializar banco e tabela ao abrir o app (ex.: `expo-sqlite` ou lib compatível com Expo).
2. **CRUD**
   - Criar: formulário insere no SQLite.
   - Ler: listagem lê do SQLite.
   - Atualizar: alterar status/campos do registro atualiza no SQLite.
   - Deletar: opção de excluir registro (na listagem ou no detalhe), com confirmação.
3. **Filtros**
   - Quando o tema permitir, abas ou botões para filtrar a listagem (ex.: "Todos" | "Pendentes" | "Concluídos"), usando consultas SQL com WHERE.

## Conteúdos cobrados

- SQLite: configuração e CRUD (Aulas 14, 15).
- Formulário + SQLite (Aula 16).
- Hooks e estado (Aulas 11, 12).

## Critérios de avaliação

- SQLite configurado; tabela criada; CRUD funcionando.
- Filtros aplicados corretamente na listagem (quando aplicável).
- Navegação e formulário integrados ao banco.

## Dica

Use os tutoriais das Aulas 14 e 15. Migre os dados do AsyncStorage para SQLite em uma única vez ou comece do zero no SQLite; avise o usuário se for começar vazio.

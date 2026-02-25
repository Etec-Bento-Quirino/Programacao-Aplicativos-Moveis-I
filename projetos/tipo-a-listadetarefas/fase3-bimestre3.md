# Tipo A – Fase 3 (Bimestre 3)

**Sugestão de execução:** quinzena 20 (13/10/2026 a 14/10/2026).

## Objetivo

Migrar dados para SQLite e implementar CRUD completo. Incluir filtros na listagem (todas / pendentes / concluídas).

## Requisitos

1. **Banco SQLite**
   - Tabela `tarefas`: id (PK), titulo, descricao, concluida (0/1), data_criacao.
   - Inicializar banco e tabela ao abrir o app (ex.: `expo-sqlite` ou lib compatível com Expo).
2. **CRUD**
   - Criar: formulário insere no SQLite.
   - Ler: listagem lê do SQLite.
   - Atualizar: marcar concluída (e opcionalmente editar título/descrição) atualiza no SQLite.
   - Deletar: opção de excluir tarefa (na listagem ou no detalhe).
3. **Filtros**
   - Abas ou botões: “Todas” | “Pendentes” | “Concluídas”. Listar conforme o filtro selecionado (consultas SQL com WHERE quando aplicável).

## Conteúdos cobrados

- SQLite: configuração e CRUD (Aulas 14, 15).
- Hooks e estado (Aulas 11, 12).

## Critérios de avaliação

- SQLite configurado; tabela criada; CRUD funcionando.
- Filtros aplicados corretamente na listagem.
- Navegação e formulário integrados ao banco.

## Dica

Use os tutoriais das Aulas 14 e 15. Migre os dados do AsyncStorage para SQLite em uma única vez ou comece do zero no SQLite; avise o usuário se for começar vazio.

# Tipo B – App Cadastro / Inventário

App para cadastrar itens (ex.: inventário, livros, coleção). Categorias em uma tabela e itens em outra. Ao final: SQLite com duas tabelas relacionadas, listagem por categoria e formulários completos.

## Escopo geral

- **Fase 1 (B1):** Tela com lista estática de categorias; ao tocar, segunda tela com lista estática de itens dessa categoria; botão “Adicionar categoria” (sem persistência).
- **Fase 2 (B2):** Formulário para nova categoria e novo item; AsyncStorage para salvar categorias e itens; listagem por categoria carregada do storage.
- **Fase 3 (B3):** SQLite: tabelas `categorias` (id, nome) e `itens` (id, id_categoria, nome, quantidade, observacao); CRUD em ambas; listagem mestra-detalhe.
- **Fase 4 (B4):** Edição e exclusão de categorias e itens; loading e empty state; entrega completa com SQLite.

## Entregas por bimestre

| Bimestre | Entrega |
|----------|--------|
| 1 | 2 telas (lista categorias + lista itens da categoria); navegação com parâmetro. |
| 2 | Formulários categoria e item; AsyncStorage; listagem por categoria. |
| 3 | SQLite com 2 tabelas relacionadas; CRUD; listagem por categoria. |
| 4 | App completo: editar/excluir, UX, entrega e apresentação. |

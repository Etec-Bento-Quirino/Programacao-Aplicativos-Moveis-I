# Tema 12 – Controle de empréstimos de livros ou objetos

Empréstimos, responsáveis e devoluções.

Categoria: **[Gestão e Administração](../README.md)** · Fichas: [fase1](../../fase1.md) · [fase2](../../fase2.md) · [fase3](../../fase3.md) · [fase4](../../fase4.md)

## O que o aplicativo faz

- Cadastrar itens que podem ser emprestados.
- Registrar empréstimos com responsável e datas de empréstimo e devolução.
- Marcar um empréstimo como devolvido.
- Listar empréstimos ativos e devolvidos.

## Telas sugeridas

| Tela | Conteúdo |
|------|----------|
| Lista | Itens com nome; empréstimos com item, responsável e status |
| Detalhe | Todos os campos do item ou do empréstimo + botão Voltar |
| Cadastro / Edição | Formulário de item (nome) e de empréstimo (item, responsável, datas) |

## Banco de dados (SQLite)

`itens`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| nome | TEXT | Nome do item emprestado |

`emprestimos`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| id_item | INTEGER | Chave estrangeira para `itens` |
| responsavel | TEXT | Pessoa que pegou emprestado |
| data_emprestimo | TEXT | Data do empréstimo |
| data_devolucao | TEXT | Data de devolução (vazia se não devolvido) |

## Escopo das 4 entregas

| Entrega | Data | Foco |
|---------|------|------|
| 1 | 24/08/2026 | Proposta + 2 telas (lista + detalhe) com dados estáticos |
| 2 | 14/09/2026 | Formulário + AsyncStorage |
| 3 | 19/10/2026 | SQLite + CRUD |
| 4 | 16/11/2026 | App completo + UX revisada; apresentação |

> Os requisitos e critérios de cada entrega estão nas fichas compartilhadas do Trabalho em Grupo (`fase1.md` a `fase4.md`).

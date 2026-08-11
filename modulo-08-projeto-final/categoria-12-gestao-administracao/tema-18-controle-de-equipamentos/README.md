# Tema 18 – Controle de Equipamentos

Gerenciamento de equipamentos emprestados, responsáveis e datas de devolução.

Categoria: **[Gestão e Administração](../README.md)** · Fichas: [fase1](../../fase1.md) · [fase2](../../fase2.md) · [fase3](../../fase3.md) · [fase4](../../fase4.md)

## O que o aplicativo faz

- Cadastrar equipamentos com nome.
- Registrar o responsável e as datas de empréstimo e devolução.
- Marcar um equipamento como devolvido.
- Listar equipamentos emprestados e devolvidos.

## Telas sugeridas

| Tela | Conteúdo |
|------|----------|
| Lista | Equipamentos com nome, responsável e status |
| Detalhe | Todos os campos do equipamento + botão Voltar |
| Cadastro / Edição | Formulário com campos nome, responsável, data de empréstimo e data de devolução |

## Banco de dados (SQLite)

`equipamentos`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| nome | TEXT | Nome do equipamento |
| responsavel | TEXT | Pessoa responsável pelo empréstimo |
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

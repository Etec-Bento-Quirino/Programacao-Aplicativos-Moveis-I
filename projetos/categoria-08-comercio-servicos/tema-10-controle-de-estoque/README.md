# Tema 10 – Controle de estoque

Produtos, quantidades e movimentação de entrada e saída.

Categoria: **[Comércio e Serviços](../README.md)** · Fichas: [fase1](../../fase1.md) · [fase2](../../fase2.md) · [fase3](../../fase3.md) · [fase4](../../fase4.md)

## O que o aplicativo faz

- Cadastrar produtos com nome, quantidade e preço.
- Registrar movimentações de entrada e saída de produtos.
- Exibir a quantidade atual de cada produto.
- Listar o histórico de movimentações de cada produto.

## Telas sugeridas

| Tela | Conteúdo |
|------|----------|
| Lista | Produtos com nome, quantidade e preço |
| Detalhe | Todos os campos do produto + histórico de movimentações + botão Voltar |
| Cadastro / Edição | Formulário com campos nome, quantidade, preço e salvar; tela de nova movimentação |

## Banco de dados (SQLite)

`produtos`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| nome | TEXT | Nome do produto |
| quantidade | INTEGER | Quantidade em estoque |
| preco | REAL | Preço do produto |

`movimentacoes`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| id_produto | INTEGER | Chave estrangeira para `produtos` |
| tipo | TEXT | Entrada ou saída |
| quantidade | INTEGER | Quantidade movimentada |
| data | TEXT | Data da movimentação |

## Escopo das 4 entregas

| Entrega | Data | Foco |
|---------|------|------|
| 1 | 24/08/2026 | Proposta + 2 telas (lista + detalhe) com dados estáticos |
| 2 | 14/09/2026 | Formulário + AsyncStorage |
| 3 | 19/10/2026 | SQLite + CRUD |
| 4 | 16/11/2026 | App completo + UX revisada; apresentação |

> Os requisitos e critérios de cada entrega estão nas fichas compartilhadas do Trabalho em Grupo (`fase1.md` a `fase4.md`).

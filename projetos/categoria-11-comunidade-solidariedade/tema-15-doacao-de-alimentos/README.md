# Tema 15 – Doação de Alimentos

Controle de doações, produtos, quantidades e destinatários.

Categoria: **[Comunidade e Solidariedade](../README.md)** · Fichas: [fase1](../../fase1-bimestre1.md) · [fase2](../../fase2-bimestre2.md) · [fase3](../../fase3-bimestre3.md) · [fase4](../../fase4-bimestre4.md)

## O que o aplicativo faz

- Registrar doações com produto e quantidade.
- Informar o destinatário e a data de cada doação.
- Listar o histórico de doações.
- Editar ou excluir doações registradas.

## Telas sugeridas

| Tela | Conteúdo |
|------|----------|
| Lista | Doações com produto, quantidade, destinatário e data |
| Detalhe | Todos os campos da doação + botão Voltar |
| Cadastro / Edição | Formulário com campos produto, quantidade, destinatário e data |

## Banco de dados (SQLite)

`doacoes`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| produto | TEXT | Produto doado |
| quantidade | INTEGER | Quantidade doada |
| destinatario | TEXT | Pessoa ou instituição que recebeu |
| data | TEXT | Data da doação |

## Escopo das 4 entregas

| Entrega | Data | Foco |
|---------|------|------|
| 1 | 24/08/2026 | Proposta + 2 telas (lista + detalhe) com dados estáticos |
| 2 | 14/09/2026 | Formulário + AsyncStorage |
| 3 | 19/10/2026 | SQLite + CRUD |
| 4 | 16/11/2026 | App completo + UX revisada; apresentação |

> Os requisitos e critérios de cada entrega estão nas fichas compartilhadas do Trabalho em Grupo (`fase1-bimestre1.md` a `fase4-bimestre4.md`).

# Tema 16 – Pet Care

Cadastro de animais e controle de vacinas, consultas, medicamentos e alimentação.

Categoria: **[Pets e Animais](../README.md)** · Fichas: [fase1](../../fase1.md) · [fase2](../../fase2.md) · [fase3](../../fase3.md) · [fase4](../../fase4.md)

## O que o aplicativo faz

- Cadastrar animais com nome, espécie e raça.
- Registrar cuidados como vacinas, consultas, medicamentos e alimentação.
- Listar o histórico de cuidados de cada animal.
- Atualizar ou excluir registros de cuidados.

## Telas sugeridas

| Tela | Conteúdo |
|------|----------|
| Lista | Animais com nome, espécie e raça |
| Detalhe | Todos os campos do animal + cuidados registrados + botão Voltar |
| Cadastro / Edição | Formulário do animal (nome, espécie, raça) e de cuidado (tipo, descrição, data) |

## Banco de dados (SQLite)

`animais`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| nome | TEXT | Nome do animal |
| especie | TEXT | Espécie do animal |
| raca | TEXT | Raça do animal |

`cuidados`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| id_animal | INTEGER | Chave estrangeira para `animais` |
| tipo | TEXT | Vacina, consulta, medicamento ou alimentação |
| descricao | TEXT | Descrição do cuidado |
| data | TEXT | Data do cuidado |

## Escopo das 4 entregas

| Entrega | Data | Foco |
|---------|------|------|
| 1 | 24/08/2026 | Proposta + 2 telas (lista + detalhe) com dados estáticos |
| 2 | 14/09/2026 | Formulário + AsyncStorage |
| 3 | 19/10/2026 | SQLite + CRUD |
| 4 | 16/11/2026 | App completo + UX revisada; apresentação |

> Os requisitos e critérios de cada entrega estão nas fichas compartilhadas do Trabalho em Grupo (`fase1.md` a `fase4.md`).

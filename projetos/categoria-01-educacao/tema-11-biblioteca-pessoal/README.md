# Tema 11 – Biblioteca pessoal

Livros, autores e status de leitura.

Categoria: **[Educação](../README.md)** · Fichas: [fase1](../../fase1-bimestre1.md) · [fase2](../../fase2-bimestre2.md) · [fase3](../../fase3-bimestre3.md) · [fase4](../../fase4-bimestre4.md)

## O que o aplicativo faz

- Cadastrar livros com título, autor e status de leitura.
- Atualizar o status de leitura (para ler, lendo ou lido).
- Registrar uma nota pessoal para cada livro.
- Listar os livros por status de leitura.

## Telas sugeridas

| Tela | Conteúdo |
|------|----------|
| Lista | Livros com título, autor e status de leitura |
| Detalhe | Todos os campos do livro + nota + botão Voltar |
| Cadastro / Edição | Formulário com campos título, autor, status de leitura, nota e salvar |

## Banco de dados (SQLite)

`livros`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| titulo | TEXT | Título do livro |
| autor | TEXT | Autor do livro |
| status_leitura | TEXT | Para ler, lendo ou lido |
| nota | REAL | Nota de avaliação do livro |

## Escopo das 4 entregas

| Entrega | Data | Foco |
|---------|------|------|
| 1 | 24/08/2026 | Proposta + 2 telas (lista + detalhe) com dados estáticos |
| 2 | 14/09/2026 | Formulário + AsyncStorage |
| 3 | 19/10/2026 | SQLite + CRUD |
| 4 | 16/11/2026 | App completo + UX revisada; apresentação |

> Os requisitos e critérios de cada entrega estão nas fichas compartilhadas do Trabalho em Grupo (`fase1-bimestre1.md` a `fase4-bimestre4.md`).

# Tema 02 – Agenda de compromissos

Compromissos, horários e lembretes.

Categoria: **[Organização e Produtividade](../README.md)** · Fichas: [fase1](../../fase1.md) · [fase2](../../fase2.md) · [fase3](../../fase3.md) · [fase4](../../fase4.md)

## O que o aplicativo faz

- Cadastrar compromissos com título, local, data e hora.
- Listar compromissos por data.
- Marcar compromissos como concluídos.
- Exibir lembretes de compromissos (notificação opcional).

## Telas sugeridas

| Tela | Conteúdo |
|------|----------|
| Lista | Compromissos com título, data, hora, local e status (pendente/concluído) |
| Detalhe | Todos os campos do compromisso + botão Voltar |
| Cadastro / Edição | Formulário com campos título, local, data, hora e botão salvar |

## Banco de dados (SQLite)

`compromissos`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| titulo | TEXT | Título do compromisso |
| local | TEXT | Local onde ocorre o compromisso |
| data | TEXT | Data do compromisso |
| hora | TEXT | Hora do compromisso |
| concluido | INTEGER | 0 = pendente, 1 = concluído |

## Escopo das 4 entregas

| Entrega | Data | Foco |
|---------|------|------|
| 1 | 24/08/2026 | Proposta + 2 telas (lista + detalhe) com dados estáticos |
| 2 | 14/09/2026 | Formulário + AsyncStorage |
| 3 | 19/10/2026 | SQLite + CRUD |
| 4 | 16/11/2026 | App completo + UX revisada; apresentação |

> Os requisitos e critérios de cada entrega estão nas fichas compartilhadas do Trabalho em Grupo (`fase1.md` a `fase4.md`).

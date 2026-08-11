# Tema 34 – Controle de Manutenção de Veículos

Registro de revisões, troca de óleo, pneus e despesas.

Categoria: **[Veículos e Mobilidade](../README.md)** · Fichas: [fase1](../../fase1-bimestre1.md) · [fase2](../../fase2-bimestre2.md) · [fase3](../../fase3-bimestre3.md) · [fase4](../../fase4-bimestre4.md)

## O que o aplicativo faz

- Cadastrar veículos com nome e placa.
- Registrar manutenções (revisão, troca de óleo, pneus etc.).
- Somar os gastos de cada veículo.
- Listar as manutenções por veículo e período.

## Telas sugeridas

| Tela | Conteúdo |
|------|----------|
| Lista | Veículos com nome, placa e total de manutenções |
| Detalhe | Todos os campos do veículo + botão Voltar |
| Cadastro / Edição | Formulário de veículo (nome, placa) e de manutenção (veículo, tipo, descrição, data, valor) |

## Banco de dados (SQLite)

`veiculos`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| nome | TEXT | Nome do veículo |
| placa | TEXT | Placa do veículo |

`manutencoes`:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Identificador |
| id_veiculo | INTEGER | Chave estrangeira para `veiculos` |
| tipo | TEXT | Tipo da manutenção (revisão, óleo, pneus) |
| descricao | TEXT | Descrição da manutenção |
| data | TEXT | Data da manutenção |
| valor | REAL | Valor da manutenção |

## Escopo das 4 entregas

| Entrega | Data | Foco |
|---------|------|------|
| 1 | 24/08/2026 | Proposta + 2 telas (lista + detalhe) com dados estáticos |
| 2 | 14/09/2026 | Formulário + AsyncStorage |
| 3 | 19/10/2026 | SQLite + CRUD |
| 4 | 16/11/2026 | App completo + UX revisada; apresentação |

> Os requisitos e critérios de cada entrega estão nas fichas compartilhadas do Trabalho em Grupo (`fase1-bimestre1.md` a `fase4-bimestre4.md`).

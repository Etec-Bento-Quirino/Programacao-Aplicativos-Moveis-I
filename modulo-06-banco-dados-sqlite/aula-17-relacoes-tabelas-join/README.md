# Aula 17 – Relações entre Tabelas e SQL JOIN

[Voltar ao curso](../../README.md) | [Calendário](../../docs/calendario-aulas.md) | [Tutoriais](../../TUTORIAIS.md)

---

Imagina que você tem 1000 compras salvas no banco, cada uma com um número de categoria (1, 2, 5…). Na tela, o usuário quer ver o **nome** da categoria ("Alimentos", "Roupas"), não o número. Mas o nome mora em outra tabela! Como juntar tudo numa única consulta?

É aqui que entra o **JOIN** — o comando mais poderoso do SQL. Ele cruza dados de duas tabelas e devolve tudo pronto numa única busca.

> [!IMPORTANT]
> **Meta da aula:** usar `INNER JOIN` e `LEFT JOIN` para buscar dados de duas tabelas numa única consulta, e exibir categorias com contagem de itens. 🎯

## 🧳 O Seu Inventário de Aula

| Material | O que você vai encontrar lá dentro? |
|----------|-------------------------------------|
| [Apresentação](apresentacao.md) | O que é um JOIN? Como o `INNER JOIN` difere do `LEFT JOIN`? O que são aliases (apelidos)? |
| [Tutorial](tutorial.md) | Passo a passo para montar consultas com JOIN, usar aliases e contar itens com `COUNT`. |
| [Atividade](atividade.md) | Sua Missão 17: imprima categorias com a contagem de itens — o SQL resolve tudo! Valendo XP e nota! |

> [!TIP]
> **Ordem sugerida:** leia a Apresentação (5 minutos), siga o Tutorial no computador (30–40 minutos) e por último resolva a Atividade. Não pule o tutorial — a atividade cobra exatamente o que ele ensina.

---

**Próxima Parada:** 👉 [Aula 18 – UX, Loadings e Tratamento de Erros](../../modulo-07-boas-praticas-ux/aula-18-ux-loading-empty-state-erros/README.md)

# Atividade 17: Consultas Relacionais com JOIN 🔗

**Sugestão de execução:** Quinzena 22 | **Bimestre:** 4 | **Valendo XP e nota**

---

**Objetivo da Atividade:** aplicar consultas relacionais com SQLite usando `LEFT JOIN` associado a `GROUP BY` e `COUNT()` para retornar o número total de itens dentro de cada categoria.

> [!NOTE]
> Se você ainda não fez o [Tutorial da Aula 17](tutorial.md), faça primeiro. Esta atividade cobra exatamente os passos de lá — só com uma pitada extra de desafio.

---

## O Desafio: Relatórios com JOIN

Desenvolva e teste a seguinte lógica no seu projeto local:

1. No banco de dados, certifique-se de que existam pelo menos **duas categorias** (por exemplo: "Hortifruti" e "Limpeza").
2. Adicione um ou dois itens atrelados à Categoria 1 (Hortifruti) e **não insira nenhum** item na Categoria 2 (Limpeza).
3. Execute uma consulta SQL utilizando `LEFT JOIN` e `COUNT()` para retornar os nomes das categorias e a contagem de itens em cada uma.

### 💡 Dica de como iniciar:

Aqui está a estrutura da query para passar pro método que acessa o banco:

```sql
SELECT
  categorias.nome AS categoria_nome,
  COUNT(itens.id) AS total_itens
FROM categorias
LEFT JOIN itens ON categorias.id = itens.categoria_id
GROUP BY categorias.id;
```

> [!TIP]
> Lembre-se de rodar essa consulta usando o cliente do `expo-sqlite`. O retorno será um array onde cada objeto contém `categoria_nome` e `total_itens`.

> [!WARNING]
> Se você esquecer o `GROUP BY`, o `COUNT` vai retornar um número errado — ele conta **todas** as linhas juntas, sem separar por categoria. Sempre agrupe!

---

## Checklist de Entrega

Antes de enviar, confira:

- [ ] Pelo menos 2 categorias criadas no banco
- [ ] Pelo menos 1 item na Categoria 1, nenhum na Categoria 2
- [ ] Consulta com `LEFT JOIN` + `COUNT` + `GROUP BY` rodando
- [ ] Tela exibindo: `Hortifruti (2 Itens)` e `Limpeza (0 Itens)`
- [ ] O contador foi processado pelo **SQL**, não calculado no JavaScript
- [ ] Print da tela mostrando o resultado

---

## Como isso se aplica ao seu projeto

O `LEFT JOIN + COUNT` é usado em **toda** tela inicial que mostra categorias com contagem de itens. É o equivalente a perguntar ao banco: "me diga quantos produtos tem em cada prateleira" — e o banco responde numa única operação, sem você precisar contar manualmente!

Parabéns por completar o Módulo 06 — Banco de Dados SQLite! Você agora domina a criação de tabelas, CRUD completo, integração com formulários e consultas com JOIN. Na próxima aula, vamos turbinar o visual do seu app com UX profissional!

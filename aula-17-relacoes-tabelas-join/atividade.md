# Atividade 17: Consultas Relacionais (JOINs) 🔗

**Objetivo da Atividade:**

Nesta atividade, você aplicará os conceitos de consultas relacionais com o SQLite. Utilizaremos o `LEFT JOIN` associado à cláusula `GROUP BY` e a função agregadora `COUNT()` para retornar o número total de itens dentro de cada categoria.

---

## O Desafio: Relatórios com JOIN

Desenvolva e teste a seguinte lógica no seu projeto local utilizando o VS Code:

1. No seu banco de dados, certifique-se de que existam pelo menos duas categorias (por exemplo: "Hortifruti" e "Limpeza").
2. Adicione um ou dois itens atrelados à Categoria 1 (Hortifruti) e não insira nenhum item na Categoria 2 (Limpeza).
3. Na sua tela (ou no log do console), execute uma consulta SQL utilizando `LEFT JOIN` e `COUNT()` para retornar os nomes das categorias e a contagem de itens em cada uma delas.

### 💡 Dica de como iniciar:

Para realizar a contagem usando o banco de dados, você precisa agrupar os resultados (`GROUP BY`) e usar a função `COUNT()`. Aqui está um exemplo de como seria a estrutura da sua Query (Consulta SQL) para passar pro método que acessa o banco do Expo:

```sql
-- Exemplo do Comando SQL para extrair as categorias e contar os itens
SELECT 
  categorias.nome AS categoria_nome, 
  COUNT(itens.id) AS total_itens
FROM categorias
LEFT JOIN itens ON categorias.id = itens.categoria_id
GROUP BY categorias.id;
```

Lembre-se de rodar essa consulta usando o cliente do `expo-sqlite`. O retorno dessa consulta será um array (onde cada linha encontrada pela tabela será um objeto contendo `categoria_nome` e `total_itens`), que você pode colocar no seu estado (`useState`) para exibir na sua interface.

## Entrega:
A interface deve apresentar uma lista de categorias com as quantidades, por exemplo: `Hortifruti (2 Itens)` e `Limpeza (0 Itens)`. O contador de itens deve ser processado diretamente pela consulta SQL, e não calculado manualmente no frontend.

Tire uma captura de tela demonstrando o resultado (a lista com os totais exibida na tela) e envie na plataforma.

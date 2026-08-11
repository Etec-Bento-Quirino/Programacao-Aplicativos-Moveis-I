# Tutorial: A Matriz Super-Juntada 🧬

**Sugestão de execução:** Quinzena 22 | **Bimestre:** 4

> **Pré-requisitos:** [Aula 16](../aula-16-formularios-sqlite-integracao/README.md) — duas tabelas relacionadas (`FOREIGN KEY`) criadas e populadas.
>
> **O que você vai aprender:**
> - Usar `INNER JOIN` para buscar dados de duas tabelas em uma única consulta SQL
> - Usar aliases (`i.nome`, `c.nome AS nome_categoria`) para distinguir colunas de mesmo nome
> - Usar `LEFT JOIN` com `COUNT` para exibir o total de itens por categoria sem processamento no JavaScript
> - Entender a diferença entre `INNER JOIN` (só traz registros com par) e `LEFT JOIN` (traz todos, mesmo sem par)

---

Vamos injetar o SQL Bruto com superpoderes no nosso código já existente. Usaremos os Apelidos Aliases para separar as colunas homônimas. 

---

## Passo 1: Construindo A Expressão Suprema Relacional

Se você for fazer listagem na Tela Padrão de "Meus Itens Comprados" e quiser que a Categoria salte no React, troque O SEU *SELECT SIMPLES DA AULA 15 e 16* pelo select aprimorado usando a cláusula `INNER JOIN`.

Nós dizemos ao Motor SQLite para unir Tabela B e dizemos QUEM é a ponte `ON`:

```tsx
  const carregarItensComCategoria = () => {
    // INNER JOIN une as duas tabelas pela chave estrangeira
    // "i" é alias de itens, "c" é alias de categorias
    const query = `
       SELECT 
           i.id, 
           i.nome AS nome_produto, 
           i.id_categoria, 
           c.nome AS nome_categoria
       FROM itens i
       INNER JOIN categorias c ON i.id_categoria = c.id
       ORDER BY i.id DESC;
    `;

    const registros = bancoDados.getAllSync(query);
    // Cada registro agora contém dados das duas tabelas:
    // [ {id: 10, nome_produto: 'Maçã', nome_categoria: 'Alimentos'} ]
    setItensComplexos(registros); 
  };
```

## Passo 2: O Desafio dos Elementos Órfãos (A Função COUNT do Painel Main)

E se no Painel inicial das Categorias você quiser ostentar no Front-end aquela palavra incrível e minúscula "Alimentos (3 itens atrelados)"? O SQL faz contagem Matemática (`COUNT`) para você não precisar espremer com laços de "Length" o seu processador!

Usamos um `LEFT JOIN` (Uma junção Cega para a Esquerda) para trazer a categoria MÃE mesmo se ela não tiver LIGADA A NENHUM FILHO (Se fizessemos _Inner_ normal, a Criança que tem zero produtos nela *Não Iria Retornar Na Lista Geral*! O Left Join diz: "Traga a Categoria que tá a esquerda da letra ON custe o que custar, tendo par ou não!")

Na Tela Mãe dos Menus:
```tsx
const carregarCategorias = () => {
   // LEFT JOIN garante que categorias sem itens também apareçam na lista (com total = 0)
   // GROUP BY agrupa os itens por categoria para o COUNT funcionar corretamente
   const query = `
      SELECT 
         c.id, 
         c.nome, 
         COUNT(i.id) AS total_itens
      FROM categorias c
      LEFT JOIN itens i ON c.id = i.id_categoria
      GROUP BY c.id, c.nome;
   `
   const categorias = bancoDados.getAllSync(query);
   setCategoriasEstado(categorias);
}
```

## Passo 3: Extratando isso Pro Render Dinâmico
Com o resultado perfeito mastigado pelo Servidor Base, você constrói uma Flatlist simples para iterar isso gloriosamente:

```tsx
  return (
      <FlatList
        data={categoriasEstado}
        keyExtractor={(item) => String(item.id)} 
        renderItem={({ item }) => (
          <View style={{ padding: 15, marginVertical: 3, backgroundColor: '#eee' }}>
             <Text style={{fontWeight: 'bold'}}>
                 Categoria: {item.nome}
             </Text>
             
             {/* A coluna "total_itens" vem do COUNT no SQL — sem precisar contar no JavaScript */}
             <Text style={{color: 'gray'}}>
                 {item.total_itens} {item.total_itens === 1 ? 'item' : 'itens'}
             </Text>
          </View>
        )}
      />
  );
```

Avance para a atividade desta quinzena e aplique os JOINs no seu projeto!

---

## Como isso se aplica ao seu projeto

O `JOIN` resolve um problema real em todos os projetos que têm tabelas relacionadas:

| Projeto | Consulta com JOIN |
|---|---|
| Categoria 2 | `SELECT itens.*, categorias.nome AS nome_categoria FROM itens INNER JOIN categorias ON itens.id_categoria = categorias.id` |
| Categoria 3 | `SELECT notas.*, categorias.nome AS nome_categoria FROM notas INNER JOIN categorias ON notas.id_categoria = categorias.id` |
| Categoria 4 | `SELECT gastos.*, categorias.nome AS nome_categoria FROM gastos INNER JOIN categorias ON gastos.id_categoria = categorias.id` |

O `LEFT JOIN + COUNT` resolve o contador de itens na tela inicial de todos os projetos com categorias — sem precisar fazer múltiplas consultas nem calcular no JavaScript.

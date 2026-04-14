# Tutorial: A Matriz Super-Juntada 🧬

**Sugestão de execução:** Quinzena 22.

Vamos injetar o SQL Bruto com superpoderes no nosso código já existente. Usaremos os Apelidos Aliases para separar as colunas homônimas. 

---

## Passo 1: Construindo A Expressão Suprema Relacional

Se você for fazer listagem na Tela Padrão de "Meus Itens Comprados" e quiser que a Categoria salte no React, troque O SEU *SELECT SIMPLES DA AULA 15 e 16* pelo select aprimorado usando a cláusula `INNER JOIN`.

Nós dizemos ao Motor SQLite para unir Tabela B e dizemos QUEM é a ponte `ON`:

```tsx
  const rebobinarServidorComplexo = () => {
    // 1. O Padrão JOIN: Preste atenção no apelido "i" para itens e "c" para Categorias.
    const consultaGigaBruta = `
       SELECT 
           i.id, 
           i.nome AS nome_do_produto, 
           i.id_categoria, 
           c.nome AS super_nome_categoria
       FROM itens i
       INNER JOIN categorias c ON i.id_categoria = c.id
       ORDER BY i.id DESC;
    `;

    // 2. Acorde o motor e execute o tiro relacional cruzado
    const linhasCasadas = bancoDados.getAllSync(consultaGigaBruta);

    // 3. Sua Memória Viva do Front-End (Use State) recebe O JSON já grudado lindo:
    // [ {id: 10, nome_do_produto: 'Maça', super_nome_categoria: 'Alimentos'} ]
    setItensComplexos(linhasCasadas); 
  };
```

## Passo 2: O Desafio dos Elementos Órfãos (A Função COUNT do Painel Main)

E se no Painel inicial das Categorias você quiser ostentar no Front-end aquela palavra incrível e minúscula "Alimentos (3 itens atrelados)"? O SQL faz contagem Matemática (`COUNT`) para você não precisar espremer com laços de "Length" o seu processador!

Usamos um `LEFT JOIN` (Uma junção Cega para a Esquerda) para trazer a categoria MÃE mesmo se ela não tiver LIGADA A NENHUM FILHO (Se fizessemos _Inner_ normal, a Criança que tem zero produtos nela *Não Iria Retornar Na Lista Geral*! O Left Join diz: "Traga a Categoria que tá a esquerda da letra ON custe o que custar, tendo par ou não!")

Na Tela Mãe dos Menus:
```tsx
const recarregarPainelDashboard = () => {
   const instrucaoAgrupadora = `
      SELECT 
         c.id, 
         c.nome, 
         COUNT(i.id) AS total_itens_nessa_linha_aqui
      FROM categorias c
      LEFT JOIN itens i ON c.id = i.id_categoria
      GROUP BY c.id, c.nome; -- Obriga Ele a somar dentro da Categoria isolada em bolos.
   `
   const categoriasComCalculoFoda = bancoDados.getAllSync(instrucaoAgrupadora);
   setCategoriasEstado(categoriasComCalculoFoda);
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
             
             {/* Note a variável matemática que nós criamos ali em cima no Alias Cuspindo o Count Vivo */}
             <Text style={{color: 'gray'}}>
                 Possui ({item.total_itens_nessa_linha_aqui}) Sub-Itens!
             </Text>
          </View>
        )}
      />
  );
```

Avance para e dominação definitiva das Relações SQL na Próxima Missão.

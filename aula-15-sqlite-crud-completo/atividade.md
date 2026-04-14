# Missão 15: A Marreta de Ouro 🔨

**Sua Validação Autônoma de Estudo:**

No tutorial atual operamos toda a malha cruzada CRUD usando `runSync`, invocamos uma `FlatList` conectada ao Hook dinâmico do `useState`, e amarramos a Lógica de Deleção (`DELETE FROM`) passando os parêmtros `?` na query.

O mundo relacional não abriga erros lógicos.

---

## O Desafio: Decepando Variáveis da Própria Tabela

Conecte as engrenagens criadas na "Painel de Testes". 
Seu desafio final não envolve inserir mil dados felizes. Envolve executar a Lógica de Exclusão Física.

1. Como eu ensinei no passo 3, O "renderItem" do React na Listagem desenhará o botão de "EXCLUIR_ITEM()" exatamente ao lado de toda santa Tarefa que retornar do Selecionador Global.
2. Certifique-se que você apontou o evento `onPress` do touchable para engolir em anônimo o id exato daquela repetição: `() => sumirComMetaNoSQL(item.id)`. Sem isso, o banco apagará os itens errados ou não saberá quem é quem.
3. Ligue, abra o App e crie dados no Hardware C++ (Dando Insert). Você verá magicamente a lista brotar via Auto-Atualização. 

## A Purga 
Crie 3 ou 4 itens. Agora, atente contra todos eles.
Pressione com fúria os botões vermelhos "Excluir_Item()", que estão atrelados ao componente gerado pela Flatlist. Na hora em que a requisição atingir a placa-mãe, o SSD executará o Dump dos dados irrevogávelmente. A função `rebobinarServidor` forçará a listagem atualizar no Frame Seguinte em branco provando que O Banco Secou. 

Bata a ScreenShot do seu app limpíssimo no Expo Go apões "matar os dados", finalizando seu módulo. Bem vindo à Fase 4 do Desenvolvimento Profissional! Estaremos no Acabamento Pleno usando Rotas Otimizadas.

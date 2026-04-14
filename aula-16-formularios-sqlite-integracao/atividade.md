# Missão 16: O Formulário Tático 📝

**Sua Validação Autônoma de Estudo:**

No material teórico ensinamos o Conceito Magnífico de usar a Rota do aplicativo para ditar os Filtros SQL de Listagem.
O Front-End envia o ID da listagem, e o DB só exibe aquilo. Se estivermos na Categoria "Roupas", abrimos o Formulario, salvamos um "Casaco", o Router nos rebobina usando `router.back()` (ou `navigate.goBack`), e a tela de listagem renasce sozinha via Effect.

---

## O Desafio: A Ponte sem Quebra

Sua tarefa de validação:

Você vai montar as Duas Telas operacionais mostradas no tutorial: A tela de **Listagem**, e a tela secundária de **Formulário de Cadastro_Novo**.
1. Abra a tela de Listagem da Categoria "Alimentos". 
2. Aperte um botão nela ("Adicionar +"). Ela deve carregar a tela Formulário e travar seu contexto do Expo para Inserção limpa.
3. Insira o termo "Miojo da Madrugada". Clique no Button que Ativa o Insert e chama a GoBack().

## Extração do Trófeu:
Se tudo se conectou de forma perfeita e limpa... O Formulário vai fechar, e a Listagem nascerá atualizando automaticamente em Re-paint pra englobar seu "Miojo da madrugada".
Tire um belíssimo ScreenShot da Listagem Recarregada comprovando que o Input de texto do seu Form preencheu corretamente um campo Variável da string Relacional e mande seu artefato via entrega!

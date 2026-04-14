# Missão 18: Capturando Feras Vivas 🐅

**Sua Validação Autônoma de Estudo:**

No material teórico nós criamos as bolinhas nativas do motor React usando States, acionamos um "Componente Fantasma" para o Status Vazio da Lista (Que só aparece pro Ser humano se não houver dados preenchidos no Sqlite)...

Mas o terceiro pilar do UX é O Tratamento de Erros de Input. E você o desenvolverá.

---

## O Desafio: Falhando com Dignidade

1. Num Componente isolado ou Formulario da sua escolha, adicione um terceiro `useState` Base, por exemplo `[erroVermelhoVisivel, setErro] = useState('')`.
2. Adicione a barreira Mestra defensiva de JavaScript que os Sêniors usam em todos os formulários. O famoso modelo mental da Tentativa/Morte (`try` & `catch`). Dê uma olhada de pesquisa aliada (Na Web ou na Documentação se achar necessário) e faça um bloco Try.
   - Envolva qualquer coisa que force SQLite dentro do Try. (Por exemplo um `runSync`).  
   - Se o Try passar da linha 2 ileso, a Lista atualizará com sucesso.
   - Forçe um absurdo. Insira ali no Catch um `setErro('Houve Destruição no Processador Central. Entre em Contato')`.

3. Lá embaixão no Render, onde tem o form, você adiciona O Conditional Render Base para só aparecer em tela caso a Variável contenha letras: `{erroVermelhoVisivel && <Text style={{color: 'red'}}>{erroVermelhoVisivel}</Text>}`

## Extração do Trófeu:
Selecione o Terminal onde o `try catch` forçado está operando. No seu botão, force a falha colocando sintaxe de banco de dados esburacada (ex: `SELECT * FFROM taba Errada`).
O App vai tentar processar, a placa de memoria negará, o bloco de execução cairá direto no Catch engolindo o NullPointer e enviando texto lindo em vermelho para o form na face do cliente: 

Tire uma Screenshot dessa TELA TRATANDO ERRO com o texto bonito "Houve destruição...". 
Sua maturidade técnica atingiu níveis gigantescos validando exceções nativas. Mande print na submissão de atividade!

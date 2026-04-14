# Apresentação: Cidades Fantasmas e Botões Cegos 🚦

**Leitura Autônoma de Design e Psicologia Interativa**

O Design não é só fazer animações fru-fru. O Design de Feedback Operacional é fundamental na Engenharia para previnir Falhas no Banco.

---

## 1. O Medo do Zero (Empty States)
Se um App carrega uma Lista de `Tarefas` com Sucesso em uma tela e encontra Zero Tarefas, o loop não renderiza nada. A tela fica Vazia. O usuário leigo pensa: *"Meu aplicativo quebrou? Não carregou nada?"*
Para previnir que ele feche e desinstale o seu App por burrice, foi criado o conceito de **Empty State** (Estado Vazio).
É obrigação do desenvolvedor projetar uma tela secundária simpática, as vezes com um ícone de Pato chorando ou uma exclamação cinza, indicando *"Zero resultados aqui. Está tudo bem com o sistema. Que tal criar um Cadastro agora?"*. 
O EmptyState guia as ações do cliente.

## 2. A Ilusão do Tempo (Loadings)
O ser humano lida bem com atrasos, dês de que ele SEJA AVISADO que o atraso irá acontecer.
Se você clicar num botão e o celular não responder por 3 segundos porque ele está gerando um PDF, você assume intuitivamente que o Processador travou e vai clicar no botão mais 14 vezes causando múltiplos SQL Inserts repetidos.

A Regra de Ouro é o **Efeito Carga**. Assim que a requisição Pesada engatar, nós trocamos o Botão pela clássica Bolinha que gira nativamente: O `ActivityIndicator`. Este milissegundo de Feedback garante que o cliente tirará as mãos de cima da tela e aguardará pacientemente a placa de rede voltar. 

## 3. Caindo com Estilo (Error Handling)
Não existe código infalível. Existe código Defensivo.
O SQLite pode corromper por falta de espaço no celular? Sim.
Se nós simplesmente rodarmos o insert vazio, e o banco matar com log vermelho, o app do cliente Crasha brutalmente ou as telas param de existir e fecham.

Um app profissional usa blocos de `try` (tentativa) e `catch` (captura do leão).
Se o tiro falhar, nós domamos a fera invisivelmente e alertamos na Tela em texto vermelho simpático: *"Opa, nossos espiões disseram que não foi possível gravar hoje. Tente amanhã."* A tela nunca pode explodir.

👉 **Expanda sua Cabeça Estudando a Documentação Base:** [A Psicologia dos Status](https://reactnative.dev/docs/activityindicator)

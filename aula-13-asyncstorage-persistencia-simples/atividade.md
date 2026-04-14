# Missão 13: A Resistência Final 🗡️

**Sua Validação Autônoma de Estudo:**

No tutorial desta aula, equipamos seu dispositivo com as funções `JSON.stringify()` e `JSON.parse` atreladas a uma chave mestra para dominar a memória interna além do fechamento da RAM.

Nós agora vamos invocar e testar a famosa "Persistência".

---

## O Desafio: Mate-me Se Puder

Você montou O Layout contendo o Botão "Add" que salva itens Aleatórios no array, e ativou a renderização usando a técnica do Guarda Noturno (useEffect) na Inicialização...

O momento da comprovação de que o Storage nativo funcionou é cruel.
1. Abra o App no Expo Go e clique várias e várias vezes até preencher a lista com meia dúzia de itens!
2. **Saia e Feche o Expo Go Totalmente!**. Abra a lista de multitarefas recente do seu Smartphone nativo, ache o Expo Go lá e DESLIZE para cima "matando/Forcando Fechamento Total" da vida do aplicativo do cachê volátil brutalmente.
3. Clique de novo no ícone do Expo Go e abra o app. Inicie sua compilação.
4. O seu Guarda Noturno `useEffect` irá brilhar. Nos primeiros milissegundos ele rodará o `getItem()`, passará pelo parser e injetará a lista na mutação via State... Mágica! A Tela vai brilhar contendo TUDO O QUE VOCÊ HAVIA SALVO mesmo com o app tendo morrido!

## Extração do Trófeu:
Faça essa engenharia provando ter dominado Storage, tire o **Pint Screen da tela Carregada Após Renascer**. Digite um texto no "Notepad" explicando brevemente que *"A Lista não zerou ao fechar"* e envie. 

Você está oficialmente legalizado no desenvolvimento Móvel Global de Ponta.
Na próxima e última etapa dessa área, introduziremos o banco relacional completo. Aguardo você.

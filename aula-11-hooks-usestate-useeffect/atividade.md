# Missão 11: Provocando o Repaint Imutável 🎨

**Sua Validação Autônoma de Estudo:**

No tutorial desta aula, apresentamos o fluxo exato das metáforas que operam a API do React Native. Vimos que o "Pintor" Mestre só responde se você der à ele uma tela nova, disparando a função `Set` sem modificar o array antigo usando velharias como `lista.push(`.

---

## O Desafio: A Gestão de Múltiplos Estados Perfeitos

Você criará um bloco autônomo (Pode usar um App provisório como o Expo Snack) focado unicamente na lógica da Re-renderização e do "Guarda Noturno das Inicializações".

1. Logo no topo do componente, crie um **`useEffect`** isolado contendo uma caixa restrita (array denotado ali nas aspas finais `[]`). Instrua seu Guarda Noturno à preencher sua lista mestre `useState` com 2 Emojis ou Pessoas por padrão no exato instante em que o laboratório nascer. (Ex: "Item Alpha" e "Item Bravo"). Isto provará se ele entende de nascimentos de Lifecycle.
2. Invoque o poder da mutação. Construa um botão chamativo "Testar Gatilho" + Uma Cesta (input).
3. Ao pressionar, instrua sua função de envio à anexar o Conteúdo da Cesta com a **Extinção Total/Espalhamento dos Clones** (Sintaxe ES6 Destrutiva: `...dados_antigos`) na lista mãe, resetando a cesta em seguida perfeitamente ao limbo (`''`).

## Extração Final: Dominância da RAM
Role no seu Expo Go. Mostre na tela do "Print" que o React reconstruiu a interface instantaneamente sem piscar com 3, 4 ou mais componentes empilhados por pura reatividade do motor JavaScript, tudo puxando perfeitamente pela lista clonada. Sem pushs fajutos.

Concluída a dominação dos Hooks de Mente Central... Nós agora ligaremos a mente das Telas de fora na *Aula 12*. Nos vemos lá.

# Apresentação: Cidades Fantasmas e Botões Cegos 🚦

**Sugestão de uso:** slides da Aula 18 (leia em voz alta, ou leia sozinho antes do tutorial).

---

## 1. O Medo do Zero (**Empty States**)

Imagine que você abre um app de lista de tarefas. Ele carrega com sucesso. Mas... a lista está vazia. Nada aparece na tela. O que você pensa?

*"Meu aplicativo quebrou? Não carregou nada? Cadê os dados?"*

Esse vazio assusta o usuário. Ele pode fechar o app e nunca mais voltar. Para evitar isso, foi criado o conceito de **Empty State** (Estado Vazio) — uma tela amigável que aparece quando não há dados.

> [!NOTE]
> **O que é Empty State?**
> É uma tela secundária que aparece quando a lista está vazia. Pode ter um ícone engraçado, uma mensagem simpática e um botão convidando o usuário a criar o primeiro registro. Ela guia as ações do cliente em vez de deixá-lo perdido.

É obrigação do desenvolvedor pensar nessa tela. Não é frescura — é **UX** (**User Experience**, ou Experiência do Usuário). O app precisa ser claro, mesmo quando não tem nada pra mostrar.

---

## 2. A Ilusão do Tempo (**Loadings**)

O ser humano lida bem com atrasos, **desde que ele seja avisado** de que o atraso vai acontecer.

Se você clica num botão e o celular não responde por 3 segundos, o que acontece? Você assume que travou e clica de novo. E de novo. E mais 14 vezes. Isso pode causar múltiplas inserções no banco de dados — um desastre.

> [!IMPORTANT]
> **A Regra de Ouro:** assim que a requisição pesada começar, troque o botão pela clássica bolinha que gira: o **ActivityIndicator**. Esse pequeno feedback garante que o usuário vai tirar as mãos da tela e aguardar pacientemente.

| Situação | O que o usuário pensa | O que você deve fazer |
|----------|----------------------|----------------------|
| Sem loading, sem resposta | "Travou!" | Mostrar um spinner |
| Com loading, sem dados | "Está vazio" | Mostrar um Empty State |
| Com loading, com dados | "Funcionou!" | Mostrar a lista normalmente |

---

## 3. Caindo com Estilo (**Error Handling**)

Não existe código infalível. Existe código **defensivo**.

O SQLite pode corromper por falta de espaço no celular? Sim. Se você rodar um insert vazio e o banco retornar erro, o app pode fechar sozinho — o famoso **crash**.

> [!CAUTION]
> Um app que fecha sozinho sem aviso é a pior experiência possível. O usuário desinstala e nunca mais volta. É melhor mostrar uma mensagem de erro amigável do que deixar o app morrer silenciosamente.

A solução é usar blocos de `try` (tentativa) e `catch` (captura). Se o tiro falhar, você doma a fera e alerta na tela em texto simpático: *"Opa, não foi possível gravar hoje. Tente novamente."*

> [!NOTE]
> **Expanda sua Cabeça:** [A Psicologia dos Status - Documentação React Native](https://reactnative.dev/docs/activityindicator)

---

## 4. Recapitulando os Três Estados

Todo app profissional precisa lidar com **três estados** distintos:

| Estado | O que acontece | O que mostrar |
|--------|---------------|---------------|
| **Carregando** | Dados sendo buscados do banco | Spinner (`ActivityIndicator`) |
| **Vazio** | Busca OK, mas 0 resultados | Empty State com mensagem amigável |
| **Com dados** | Busca OK, resultados existem | Lista (`FlatList`) normalmente |

> [!WARNING]
> **Erro comum de iniciante:** tratar só o estado "com dados" e esquecer do loading e do vazio. Se o seu app tem uma `FlatList`, ele **precisa** dos três estados. Sem exceção.

# Tutorial: Montando a Oficina de Criação (Node, npm, npx)

**Sugestão de execução:** Quinzena 1 | **Bimestre:** 1

> [!NOTE]
> **O que você vai aprender hoje:**
> - Instalar o **Node.js** (o motor que faz o JavaScript rodar fora do navegador)
> - Verificar se `node`, `npm` e `npx` estão funcionando no seu terminal
> - Entender para que serve cada ferramenta antes de criar o primeiro app
>
> **Pré-requisitos:** nenhum — esta é a primeira aula do curso!

---

Vamos usar uma analogia que vai acompanhar você o curso inteiro: **você vai virar um chefe de cozinha de apps**.

Não adianta querer cozinhar sem ter um bom fogão, panelas e ingredientes. Nesta aula ainda **não** vamos apertar o botão "Criar App" — vamos montar a cozinha inteira. É chato? Um pouco. É necessário? Totalmente. Sem isso, nenhum aplicativo do curso nasce.

> [!TIP]
> Se você já usou um terminal antes e já tem o Node instalado, pule para o **Passo 2** e só confira as versões. Mas eu recomendo ler tudo: a parte 3 ensina a organizar a pasta do curso, e isso evita perder o trabalho no fim do ano!

---

## Passo 1: Instalando o Node.js (o fogão da nossa cozinha)

O **JavaScript** é a linguagem que vamos usar para fazer os apps. Ele nasceu dentro do navegador (Chrome, Edge, Firefox…). O **Node.js** é um programa que "liberta" o JavaScript do navegador e faz ele rodar direto no seu computador.

Pense assim:

| Coisa | É o quê na cozinha? |
|-------|---------------------|
| JavaScript | O ingrediente |
| Node.js | O fogão (onde o ingrediente cozinha) |
| npm | A dispensa de temperos prontos |

### Passo 1.1: Baixar o instalador

1. Abra o navegador e acesse o site oficial: [https://nodejs.org](https://nodejs.org).
2. O site sozinho detecta o seu sistema (Windows, Mac ou Linux) e mostra o botão certo para você. Não precisa escolher nada manualmente.
3. Clique no botão grande que diz **LTS** — isso significa *Long Term Support* (Suporte de Longo Prazo). É a versão estável, "blindada", que empresas usam. A versão chamada *Current* é para quem gosta de viver no limite (não é você, ainda 😉).

> [!IMPORTANT]
> Escolha sempre **LTS**. A versão *Current* pode ter bugs, e nenhum erro de instalação nesse curso precisa disso. Guarde essa regra: **LTS = vida tranquila**.

4. Clique duas vezes no arquivo baixado para instalar.
5. Vá clicando em *Next* (Próximo) até chegar na tela pronta. **Atenção** na tela que pede para marcar a caixinha **"Add to PATH"** — ela pode estar desmarcada. **Marque-a!**

> [!CAUTION]
> **"Add to PATH"** ensina o Windows a reconhecer o comando `node`. Se você não marcar, o terminal vai responder *"não é reconhecido como comando interno"* e a gente vai perder um bom tempo consertando. Marque agora e evite dor de cabeça.

---

## Passo 2: O Teste de Sangue (Verificando a Instalação)

Instalado, vamos **provar** que o Node funciona. Não confie na instalação — o computador precisa confirmar.

1. Abra o **PowerShell** (ou o Terminal, no Mac). No Windows: clique no menu Iniciar, digite `PowerShell` e pressione Enter.
2. Você vai ver uma janela azul/preta com um cursor piscando. É aqui que vamos mandar o computador trabalhar.
3. Digite o comando abaixo e aperte Enter:

```bash
node --version
```

O terminal deve responder com a versão instalada, mais ou menos assim:

```
v20.11.1
```

> [!WARNING]
> Se aparecer `node não é reconhecido como comando interno ou externo`, a caixinha "Add to PATH" não foi marcada (ou o computador precisa ser reiniciado). Reinicie o PC e tente de novo. Se o problema continuar, consulte o [Guia de Erros Comuns](../../docs/GUIA-DE-ERROS-COMUNS.md).

4. Agora digite este comando e aperte Enter:

```bash
npm --version
```

O terminal deve responder com outro número, por exemplo:

```
10.2.4
```

5. E por fim, o último da trilogia:

```bash
npx --version
```

O terminal deve responder com um número, por exemplo:

```
10.2.4
```

> [!NOTE]
> **O que são npm e npx?**
> - **npm** = o *Node Package Manager*, uma "lojinha" de bibliotecas prontas. Quando um app precisa de uma função que alguém já inventou (ex.: escolher foto da galeria), o npm baixa essa peça pronta para o seu projeto.
> - **npx** = o "entregador de aplicativos" (o iFood do Node). Ele baixa um pacote, executa uma vez e some — sem deixar sujeira no seu computador.

> [!TIP]
> Não precisa decorar os números das versões. O que importa é **aparecer um número** — sinal de que as três ferramentas estão vivas e conversando com você.

Se os três comandos retornaram números, pode comemorar! 🎉 Sua cozinha está montada. Agora vamos organizar onde a comida (seus projetos) vai ficar.

---

## Passo 3: Criando a Pasta do Curso

Agora vem um conselho de quem já viu aluno perder o ano inteiro de trabalho: **não guarde seus projetos em qualquer lugar**.

Se você salvar os apps na pasta de Downloads ou na rede da escola, no fim do ano seus arquivos podem sumir. Vamos criar uma pasta "sagrada" só para a nossa disciplina.

1. No terminal, digite este comando e aperte Enter — ele leva você para a Área de Trabalho (Desktop):

```bash
cd Desktop
```

2. Agora crie a pasta do curso dentro dela:

```bash
mkdir PAM1-2026
```

> [!NOTE]
> `mkdir` = *make directory* (criar pasta). E `cd` = *change directory* (entrar numa pasta). Você vai usar esses dois comandos o curso inteiro — vale guardar!

3. Entre na pasta criada:

```bash
cd PAM1-2026
```

> [!TIP]
> No PowerShell você também pode digitar `cd PA` e apertar **Tab** — o terminal completa o nome sozinho. Esse truque se chama *autocompletar* e economiza um tempo enorme.

4. Para confirmar onde você está, rode:

```bash
pwd
```

O terminal deve mostrar algo assim (no Mac/Windows pode variar um pouco):

```
C:\Users\SEU_USUARIO\Desktop\PAM1-2026
```

> [!WARNING]
> Se o caminho mostrado não terminar em `PAM1-2026`, você entrou no lugar errado. Use `cd ..` para voltar uma pasta e tente de novo. `cd ..` = "sobe um andar".

---

## Passo 4: Uma prévia do futuro (o Ciclo da Mágica)

Você ainda não vai criar app hoje, mas deixa eu te mostrar o que vai acontecer na próxima aula, para você já ir sonhando:

Imagine dois atores no nosso palco:

1. **O seu Computador** — onde você escreve o código no VS Code.
2. **O seu Celular** — onde o app aparece (é o "cobaia" que testa tudo).

Entre os dois existe um mensageiro chamado **Metro Bundler** (um sistema de empacotamento do Expo). Ele funciona assim:

- Você muda a cor de um texto de azul para vermelho no computador e aperta `Ctrl+S`.
- Em menos de um segundo, o Metro manda a novidade para o celular.
- O celular atualiza a tela sozinho. É o famoso **Hot Reload** (recarga a quente).

Pense no Metro como o garçom que leva seu pedido à cozinha e traz o prato pronto **sem você precisar sair da mesa**. É desenvolvimento moderno, sem reiniciar nada.

> [!IMPORTANT]
> Guarde esses dois nomes: **Metro Bundler** e **Hot Reload**. Eles vão aparecer de novo nas próximas aulas e na apresentação do seu projeto final.

---

## Checklist da Aula 01

Marque cada item quando conseguir fazer:

- [ ] Baixei e instalei o Node.js (versão LTS)
- [ ] Marquei a caixinha "Add to PATH"
- [ ] `node --version` mostrou um número
- [ ] `npm --version` mostrou um número
- [ ] `npx --version` mostrou um número
- [ ] Criei a pasta `PAM1-2026` no Desktop
- [ ] `pwd` confirmou que estou dentro de `PAM1-2026`

> [!NOTE]
> Se algum item ficou sem marcar, volte no passo correspondente. Não siga em frente com pendências — a próxima aula usa tudo isso.

---

## Como isso se aplica ao seu projeto

Sem o Node.js instalado, **nenhum** app do curso é criado — nem o seu app do Trabalho em Grupo, independentemente da categoria que você escolher.

Esta aula é a fundação. Na próxima (Aula 02), você vai usar o `npx` para criar o esqueleto do seu primeiro app e ver a "mágica do Hot Reload" acontecer na tela do seu celular. Vejo você lá! 🚀

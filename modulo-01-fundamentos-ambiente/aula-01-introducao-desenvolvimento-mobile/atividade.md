# Atividade 1: Preparando o Ambiente 🛠️

**Sugestão de execução:** Quinzena 1 | **Bimestre:** 1 | **Valendo XP e nota**

---

**Objetivo da Atividade:** garantir que as ferramentas básicas do desenvolvimento Mobile (Node.js e suas dependências) estão instaladas e funcionando na sua máquina **antes** de começarmos a programar.

> [!NOTE]
> Se você ainda não fez o [Tutorial da Aula 01](tutorial.md), faça primeiro. Esta atividade cobra exatamente os passos de lá — só com uma pitada extra de desafio.

---

## O Desafio: Verificação do Ambiente

Abra o seu terminal (PowerShell, Terminal do VS Code ou do Mac) e verifique se o ambiente está pronto.

1. Execute o comando abaixo e veja a versão do Node:

```bash
node --version
```

**O que você deve VER:** um número começando com `v`, ex.: `v20.11.1`.

2. Execute o comando abaixo e veja a versão do gerenciador de pacotes:

```bash
npm --version
```

**O que você deve VER:** um número, ex.: `10.2.4`.

3. Execute o comando abaixo e veja a versão do executor de pacotes:

```bash
npx --version
```

**O que você deve VER:** um número, ex.: `10.2.4`.

> [!TIP]
> **Dica de como iniciar:** digite os comandos **um por um**, apertando Enter ao final de cada linha. Copie o resultado exato de cada um — você vai usar esses prints na entrega.

> [!WARNING]
> Se algum comando retornar *"não é reconhecido como comando interno ou externo"*, a instalação do Node não terminou direito ou a caixinha **"Add to PATH"** não foi marcada. Reinicie o computador ou reinstale o Node marcando a opção **"Add to PATH"**. Sem isso, nenhum app do curso funciona.

---

## O Desafio Extra: Criando a pasta do curso (valendo XP)

Crie, no seu Desktop, uma pasta chamada `PAM1-2026` e confirme que está dentro dela:

```bash
cd Desktop
mkdir PAM1-2026
cd PAM1-2026
pwd
```

**O que você deve VER:** um caminho terminando em `PAM1-2026`, ex.: `C:\Users\SEU_USUARIO\Desktop\PAM1-2026`.

> [!TIP]
> Essa pasta será o "endereço" dos seus projetos pelo ano inteiro. Nada de salvar na pasta Downloads ou na rede da escola — lá os arquivos podem sumir!

---

## Questão Teórica

Responda **com suas palavras** (em um arquivo `.txt` ou direto na plataforma):

1. **O que é o desenvolvimento Mobile "Cross-Platform" (multiplataforma)?**
2. **Qual é a principal vantagem do React Native para o mercado de tecnologia?**

> [!TIP]
> Não precisa copiar o texto dos slides. Responder com suas palavras (mesmo que com erros de português) mostra que você entendeu — e vale mais nota do que uma cópia perfeita. 😉

---

## Checklist de Entrega

Antes de enviar, confira:

- [ ] Print do `node --version` mostrando um número
- [ ] Print do `npm --version` mostrando um número
- [ ] Print do `npx --version` mostrando um número
- [ ] Print do `pwd` mostrando o caminho com `PAM1-2026`
- [ ] Respostas das 2 questões teóricas

---

## Como isso se aplica ao seu projeto

Todo app do **Trabalho em Grupo** (Módulo 8) vai rodar nesta máquina. Se o ambiente não estiver pronto hoje, as próximas aulas ficam travadas — por isso esta "missão bônus" é a base de tudo. Capricho no print e nos conceitos! 🚀

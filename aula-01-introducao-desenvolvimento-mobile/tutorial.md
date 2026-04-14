# Tutorial: Montando a Oficina de Criação (Node, npm, npx)

**Sugestão de execução:** Quinzena 1.

Não adianta você querer se tornar um mestre cozinheiro sem antes comprar as vasilhas adequadas e instalar um bom forno. Nesta aula o botão "Criar App" ainda não será apertado. Nós vamos assentar a fundação!

---

## Passo 1: O Motor V8 (Instalando o Node.js)

Lembra que falamos que o Node escravizou o Javascript para fora dos navegadores? Sem ele, nada existe.

1. Acesse o site oficial: [https://nodejs.org](https://nodejs.org).
2. O site gentilmente detectará seu sistema (Windows, Mac ou Linux). Baixe o botão grandão enorme dizendo **LTS** (Long Term Support). Esse é aquele de versão blindada à prova de balas que as empresas usam. A versão *Current* é apenas para quem quer sofrer com bugs.
3. Instale com calma. Pode avançar apertando *Next*, apenas tenha certeza de marcar a caixa _"Add to PATH"_ (Isso ensina o terminal negro do seu Windows de que a palavra 'node' é real).

---

## Passo 2: O Teste de Sangue (Verificando a Instalação)

Não confie cegamente na máquina. Uma vez instalado, abra a alma do seu computador: o **Terminal** (Abra o menu iniciar e digite `Powershell` na pesquisa).

Com a janela azul/preta piscando para você, lance o seguinte comando:
```bash
node --version
```
Se ele cuspir de volta algo como `v20...`, Sucesso! O pulmão JavaScript está vivo na sua máquina.

Em seguida, garanta que seu "Shopping de ferramentas" foi puxado pelo Node:
```bash
npm --version
```
Retornou um número como `10...`? Você concluiu o segundo estágio.

E por fim o delivery temporário (npx), só confira se ela está escutando:
```bash
npx --version
```

Se tudo deu "ok" e listou versões, pode comemorar!

---

## Passo 3: Limpando a Gaveta de Projetos
Se você for colocar todos os aplicativos que construirá numa pasta na Rede da escola chamada `aluno1/downloads`, no fim do ano seu projeto desaparecerá.

Crie uma âncora!
Navegue pelo seu sistema e crie uma pasta sagrada para nossa disciplina:

```bash
# Isso é se você for ninja e quiser criar a pasta usando o puro PowerShell do Windows:
cd Desktop  # Entra na tela inicial
mkdir PAM1-2026 # Abre uma cratera física de uma pasta ali.
cd PAM1-2026 # Entra nela para vivermos nela pelo resto do semestre.
```

---

## O Ciclo da Mágica (Uma palinha pro futuro)
Na semana que vem nós usaremos um comando pra criar o projeto. Mas o que acontecerá quando usarmos?

Imagine que as duas coisas nascerão de forma dividida:
O seu Computador (onde você digitará código) vs Seu Celular Cobaia na Mão.

Eles vão ser linkados pelo **Metro Bundler**. Ele é um sistema de empacotamento da Expo que faz "hot reload". 
Você muda a cor da Interface para *"Vermelho"* na tela preta do VS Code e aperta Control+S do seu Notebook. Em exatos 120 milissegundos o Motor do Metro injeta os pacotes novos pela nuvem no celular que está na sua mão, e ele fica Vermelho! É o que chamamos de desenvolvimento moderno.

Até a próxima aula! A gente se vê lá no código!

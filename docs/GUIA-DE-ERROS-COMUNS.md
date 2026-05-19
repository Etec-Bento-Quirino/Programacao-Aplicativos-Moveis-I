# Ambulância Digital: Guia de Erros Comuns 🚑

Bem-vindo à central de socorro técnico. Se o seu aplicativo quebrou antes mesmo de você escrever a primeira linha de código, ou parou de funcionar de uma semana para outra, você provavelmente é vítima do ambiente externo (Rede da escola bloqueando algo, ou aplicativos do seu celular que atualizaram sem sua permissão).

Abaixo estão os dois problemas mais recorrentes no desenvolvimento Mobile em sala de aula e como consertá-los como um Arquiteto de Software.

---

## 🛑 Erro 1: O "Tunnel" não funciona ou o `ngrok` dá erro

Você seguiu a Aula 02, colocou o `--tunnel` no `package.json`, digitou `npm start`, mas o terminal explode com erros vermelhos dizendo que não encontrou o ngrok, *EPERM* (Problema de Permissão), ou fica congelado para sempre.

### O que está acontecendo?
O sistema de Tunnel usa um programa secreto chamado `ngrok` que tenta baixar sozinho na sua máquina e abrir uma porta virtual para a internet. Redes de Escolas e Empresas geralmente possuem um Firewall rigoroso que enxerga isso como um "Ataque Hacker" e bloqueia o download.

### Solução A (Forçar a instalação via Terminal)
Abra um novo terminal no seu VS Code e instale o ngrok de forma manual e global na sua máquina:
```bash
npm install -g @expo/ngrok
```
Tente rodar `npm start` novamente. Se funcionar, a porta foi aberta.

### Solução B (O Plano de Guerra: Usar o Cabo USB)
Se o Firewall da rede for implacável, nós abandonaremos o Tunnel.
1. Remova o `--tunnel` do arquivo `package.json` do seu projeto. O script deve ficar apenas `"start": "expo start"`.
2. Pegue o cabo USB do seu celular e plugue no computador.
3. No seu celular Android, vá em Configurações > Opções de Desenvolvedor e ative a **Depuração USB**.
4. Rode `npm start` novamente. O Metro Bundler vai enviar os dados pelo cabo físico, ignorando a rede bloqueada da escola!

---

## 🛑 Erro 2: O App "Expo Go" diz que o React está desatualizado

Sua aula funcionou perfeitamente semana passada. Hoje, você rodou `npm start`, leu o QR Code no seu celular, e a tela do **Expo Go** abre inteira vermelha ou amarela, gritando em inglês algo como: 
> *"This project uses Expo SDK 50, but this version of Expo Go requires at least SDK 51. Please update..."*

### O que está acontecendo?
O aplicativo **Expo Go** que você tem no seu bolso foi atualizado secretamente pela Google Play Store (ou App Store da Apple) para uma nova versão de motor. Porém, a pasta do projeto que você criou no seu computador há semanas atrás ainda está usando a "Engrenagem Antiga". Eles pararam de se comunicar.

### A Solução (Atualização Nuclear do Projeto)
Você precisa fazer o projeto do seu computador "evoluir" de versão para alcançar o seu celular.
No terminal do seu VS Code, certifique-se de parar o projeto que está rodando (apertando `Ctrl + C`) e digite o comando mestre de atualização:

```bash
npx expo update
```
*(Se ele perguntar qual versão, apenas aperte Enter para confirmar a mais recente)*

Se após isso, ele avisar que sobraram "pacotes desajustados", rode o comando médico:
```bash
npx expo install --fix
```

Pronto! Seu computador e o aplicativo do seu celular estão rodando o mesmo motor novamente. Rode o glorioso `npm start` e volte a programar!

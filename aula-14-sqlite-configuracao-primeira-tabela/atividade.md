# Missão 14: Rompendo o Escudo de Integridade ⚔️

**Sua Validação Autônoma de Estudo:**

No material teórico nós acionamos o motor C++ Nativão do SQLite dentro do JavaScript, usamos a instrução "DDL `CREATE`" para erguer uma matriz estrutural limpa (`id, descricao, status`), e usamos um Alert para aferir a injeção do Insert.

Mas se nós não colocamos View de LEITURA de SQL no tutorial atual, como vamos provar que ela está funcionando lá dentro?
Pelo Terminal de Debug!

---

## O Desafio: A Inspeção de Raio-X do Servidor

Implemente na sua tela a lógica exata de abertura do SQLite demonstrada.
Mas para validar sua nota, eu exijo que você veja o sangue da máquina rolando no console negro do PowerShell do Metro Bundler (Seu PC)!

1. Insira duas "Metas" clicando no Botão "Simular um Insert".
2. Crie uma Nova Função na sua tela chamada `verTudo`! Ela vai pegar os dados e CUSPIR no Log negro de compilação sem jogar pro React ainda.
   ```js
   const verTudo = () => {
      // O getAllSync roda o query SQL de seleção massivo de dados do banco.
      const linhasVivas = bancoDados.getAllSync('SELECT * FROM metas');
      console.log("Raio X Do Servidor Nativo Retornou: ", linhasVivas);
   }
   ```
3. Chame essa função por um Outro Botãozinho no seu componente. 

## Extração do Trófeu:
Selecione o Terminal onde o `npx expo start --tunnel` está rolando loucamente.
Clique no "Ver Tudo" no seu celular virtual. Em seguida, tire uma Screenshot com seu `Print Screen` da Janela de Comando do PC evidenciando a matriz amarela esmagada do Objeto JSON que o Banco devolveu listando suas *"Metas dominar o mundo!"*! 

Prove que as tubulações DDL estão fluindo e mande pra escola. Na próxima Aula, os traremos diretamente para a Visão final e ativaremos a opção Morte (Delete).

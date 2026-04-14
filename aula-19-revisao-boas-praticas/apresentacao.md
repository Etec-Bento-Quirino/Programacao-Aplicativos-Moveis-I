# Apresentação: O Bisturi Funcional 🔪

**Leitura Autônoma de Engenharia de Clean Code**

Arquitetos Juniores resolvem o problema adicionando Componentes. Seniors resolvem os mesmos problemas *apagando* componentes repetitivos.

---

## 1. Nomenclatura Constante (The Variable Dictator)
Escrever o Hexadecimal Azul da Logo da empresa na marra (Hardcoded) no StyleSheet da Home `#2a8bf2` e depois na tela Menus `#2a8bf2` e na tela Final `#2a8bf2` significa cometer suicídio estrutural.

Se um dia a Empresa Mudar A Paleta de Cores do Brand Book pra Verde? E você tiver 10 Telas com o Hex Azul Marrom Hardcoded?
Crie 1 arquivo no topo do projeto. Chamado `tema.ts`. Exporte Constants imutáveis com **SNAKE_UPPERCASE** `COR_MASTER='#2a8bf2'`.
Chame a Variável Mestra e aplique nas 10 telas. Fica Lindo. Fica modular. Tudo troca batendo em uma fonte única da verdade!

## 2. A Ilusão das Pasta Única
Uma Aplicação React que se respeita não deixa seus botões dentro do `app/Index.tsx`. Se um `Botão Azul Quadrado Super Legal` existe numa de suas telas, ele possivelmente vai existir na tela B também.
Crie a malha da pasta raiz `/components/BotaoAzulPoderoso.tsx` Fatiado sem nada em volta dele!
E passe os textos via "Props(Parametros)". No JSX ele brota lindo `<BotaoAzulPoderoso titulo="Comprar" />` e na Home `<BotaoAzulPoderoso titulo="Salvar Form" />`. Zero linhas de estilo re-escritas. Componente Master puro e orgulhoso.

## 3. O Ciclo Vital Revisto 
- **Persistência Base:** A Verdade mora no Banco SQL no hardware Android, e AsyncStorage (Nuvem em arquivo JSON seco) apenas coisas Bestas de Configurações do Sistema.
- **Memória Front/Nuvem:** Context API. Se não flui pra multiplas telas, destrói e deixe num Guarda Noturno com `useState` local isolado na tela pra economizar recargas e Repaints que fritam baterias. O Segredo é focar os re-paints pro menor Componente Possível e não recarregar toda a Home Tela Gigante inteira de uma vez.

👉 **Expanda sua Cabeça Estudando a Documentação Base:** [O Mestre Padrão React Clean Architecture](https://react.dev/learn/understanding-your-ui-as-a-tree)

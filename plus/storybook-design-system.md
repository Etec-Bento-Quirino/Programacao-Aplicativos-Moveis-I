# Plus: Storybook para Design System (opcional)

**Uso sugerido:** aula extra ou aprofundamento após a Aula 18/19, para turmas que queiram padronizar componentes visuais (botões, cards, inputs) em um “design system” e documentá-los.

---

## O que é Storybook

O **Storybook** é uma ferramenta para desenvolver e documentar **componentes de interface** isolados. Em vez de abrir o app inteiro para ver um botão ou um card, você cria “stories” (histórias) que mostram cada componente em diferentes estados (normal, desabilitado, loading, etc.). Isso ajuda a:

- Manter **consistência visual** (cores, tamanhos, bordas).
- **Documentar** como usar cada componente (props, exemplos).
- **Testar** componentes sem depender de uma tela completa do app.

Em um **design system**, você define um conjunto de componentes reutilizáveis (Botão, Input, Card, ListItem) e usa o Storybook como “catálogo” desses componentes.

---

## Como encaixar no curso (React Native)

Para React Native existe o **React Native Storybook** (ou addon para Expo). O uso é opcional e pode ser oferecido como:

1. **Aula extra:** uma quinzena ou parte dela para instalar o Storybook no projeto, criar 2–3 componentes (ex.: Botão, Card) e 1–2 stories por componente.
2. **Projeto integrador:** no projeto final (Tipo A, B, C ou D), o aluno pode criar uma pasta `components` com Botão e Card padronizados e, se quiser, documentar no Storybook.

---

## Passos resumidos (para o professor ou aluno avançado)

1. **Instalar** o Storybook no projeto Expo (consulte a documentação oficial atual: “Storybook React Native”).
2. **Criar um componente** simples, ex.: `components/MeuBotao.js` que recebe `title` e `onPress`.
3. **Criar uma story** que mostre o botão em estados: normal, desabilitado.
4. **Rodar** o Storybook (geralmente um script como `npm run storybook`) e visualizar no navegador ou no app.

---

## Exemplo conceitual de componente + story

**Componente (ex.: `MeuBotao.js`):**
- Recebe: `title` (texto), `onPress` (função), `disabled` (boolean).
- Estilo: cor de fundo, tamanho de fonte alinhado ao “design system” (ex.: cores e fontes definidas em `theme.js`).

**Story (ex.: `MeuBotao.stories.js`):**
- Story “Padrão”: botão com título “Salvar”, `onPress` vazio.
- Story “Desabilitado”: mesmo botão com `disabled={true}`.

Assim, qualquer pessoa do time (ou o próprio aluno no projeto) vê como o botão deve ser usado e como fica em cada estado.

---

## Quando usar no PAM I

- **Opcional:** se houver tempo e interesse em design system.
- **Recomendado:** depois que o aluno já tiver criado vários componentes (botões, listas, inputs) nas aulas 04–07, para consolidar padrões visuais e documentação.

Não é obrigatório para a conclusão do componente; serve como **plus** para quem quiser ir além.

# Apresentação: O Bisturi Funcional 🔪

**Sugestão de uso:** slides da Aula 19 (leia em voz alta, ou leia sozinho antes do tutorial).

---

## 1. Nomenclatura Constante (O Ditador das Variáveis)

Escrever a cor hexadecimaz da logo da empresa na marra (`#2a8bf2`) no StyleSheet da Home, depois na tela Menos, e na tela Final, tudo hardcoded — isso é suicídio estrutural.

E se um dia a empresa mudar a paleta de cores do Brand Book pra Verde? E você tiver 10 telas com o hex azul marrom hardcoded?

> [!NOTE]
> **O que são Constantes?**
> São valores que **não mudam** ao longo do programa. Pense numa placa de "Velocidade Máxima: 60". Ela não muda de acordo com o motorista. No código, constantes são como essas placas — valores fixos que ficam num arquivo central.

A solução: crie **1 arquivo** no topo do projeto, chamado `tema.ts`. Exporte constantes imutáveis com `SNAKE_UPPERCASE`:

```ts
export const COR_MASTER = '#2a8bf2';
```

Chame a variável mestra e aplique nas 10 telas. Tudo troca batendo em uma **única fonte da verdade**.

---

## 2. A Ilusão da Pasta Única

Uma aplicação React que se respeita **não** deixa seus botões dentro do `app/Index.tsx`. Se um "Botão Azul Super Legal" existe numa das suas telas, ele provavelmente vai existir na tela B também.

> [!IMPORTANT]
> **Princípio da Reutilização:**
> Se você vai usar o mesmo componente em 2+ telas, ele **precisa** estar num arquivo separado. Copiar e colar o mesmo código em 3 arquivos diferentes é pecado mortal no mundo da programação.

Crie a pasta `/components/BotaoAzulPoderoso.tsx` — fatiado, sem nada em volta dele. E passe os textos via **Props** (Parâmetros). No JSX ele brota lindo:

```tsx
<BotaoAzulPoderoso titulo="Comprar" />
```

E na Home:

```tsx
<BotaoAzulPoderoso titulo="Salvar Form" />
```

Zero linhas de estilo re-escritas. Componente puro e orgulhoso.

---

## 3. O Ciclo Vital Revisto

| Tipo de dado | Onde mora | Analogia |
|---|---|---|
| **Persistência** (dados reais) | SQLite no hardware | O cofre forte da empresa |
| **Configurações leves** | AsyncStorage | Um post-it na parede (tema, nome) |
| **Estado compartilhado** | Context API | O quadro branco que todos veem |
| **Estado local** | `useState` na tela | O caderninho do funcionário |

> [!WARNING]
> **Erro comum de iniciante:** usar AsyncStorage para guardar dados do banco de dados. AsyncStorage é para coisas bestas como "tema escuro ligado" ou "nome do perfil". Dados reais (tarefas, notas, gastos) **sempre** vão pro SQLite.

> [!TIP]
> Se o estado **não** flui para múltiplas telas, destrua o Context e deixe num `useState` local isolado na tela. Isso economiza recargas e repaints que fritam baterias. O segredo é focar os repaints no menor componente possível — não recarregar a Home inteira de uma vez.

> [!NOTE]
> **Expanda sua Cabeça:** [O Mestre Padrão React Clean Architecture](https://react.dev/learn/understanding-your-ui-as-a-tree)

# Aula 12 - Contexto e mais hooks

**Data:** 10/08/2026

---

## Apresentação

createContext e Provider para valor global (ex.: tema claro/escuro); useContext nas telas para ler e alterar; uso de useCallback e useMemo (resumo).

---

## Slides

### Objetivo

Compartilhar um valor (tema ou preferência) entre várias telas sem passar props em cada nível. Uma tela altera; outra exibe o valor atualizado.

### Context e Provider

createContext(defaultValue). Provider com value={{ tema, setTema }} envolvendo o App ou Navigator. Qualquer filho pode usar useContext.

### useContext

const { tema, setTema } = useContext(TemaContext). Ler tema para aplicar cores; chamar setTema no botão para alternar.

### Atividade da quinzena

App com Context (tema ou nome do usuário); duas telas que leem e uma que altera; alteração refletida na outra tela.

### Próxima aula

AsyncStorage: salvar e recuperar string ou array (JSON); persistência ao fechar e abrir o app.

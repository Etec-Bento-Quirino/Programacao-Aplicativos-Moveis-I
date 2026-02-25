# Aula 11 - Hooks: useState e useEffect

**Data:** 27/07/2026

---

## Apresentação

useState para manter lista e campo de texto; atualização imutável (novo array com spread). useEffect com [] para carregar dados ao montar; useEffect com dependência para sincronizar.

---

## Slides

### Objetivo

Usar useState para lista e formulário; useEffect para executar algo ao abrir a tela (ex.: carregar lista inicial). Adicionar item à lista e ver a tela atualizar.

### useState

const [itens, setItens] = useState([]). Para adicionar: setItens([...itens, novoItem]). Nunca alterar o array diretamente (push); sempre novo array.

### useEffect ao montar

useEffect(() => { setItens(dadosIniciais); }, []). Array vazio: roda uma vez quando o componente monta.

### useEffect com dependência

useEffect(() => { ... }, [itens]). Roda quando itens mudar. Útil para salvar no AsyncStorage ou banco (Aula 13).

### Atividade da quinzena

Lista carregada ao abrir (useEffect); formulário para adicionar item (useState); lista atualiza ao adicionar.

### Próxima aula

Context API: createContext, Provider, useContext para compartilhar tema ou preferência entre telas.

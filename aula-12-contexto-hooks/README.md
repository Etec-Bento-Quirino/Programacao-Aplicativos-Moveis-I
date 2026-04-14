# Aula 12 – A Nuvem do App (Context API)

[Voltar ao curso](../README.md) | [Calendário](../docs/calendario-aulas.md) | [Tutoriais](../TUTORIAIS.md)

---

## O Desafio Prático
Na aula anterior aprendemos a dominar a mente do componente atual (`useState`). Mas e se o usuário alterar a foto de perfil na Tela "Configurações"? Como a Tela "Home" saberá disso instantaneamente para trocar o avatar no topo, se os componentes não conseguem enxergar o cérebro um do outro?

Se a memória vive presa num lugar, precisaremos construir a "Matrix". A **Context API** do React cria uma *nuvem global de variáveis* acima de todas as telas, permitindo que elas acessem (e modifiquem) dados centrais sem depender de parâmetros.

| Material | O que você vai encontrar lá dentro? |
|----------|-----------|
| [Apresentação](apresentacao.md) | Leitura Base: O Padrão Prop Drilling (A escada infernal de dados) e o nascimento do `Provider` e `Contexto`. |
| [Tutorial](tutorial.md) | O Guia Prático: Faremos a clássica arquitetura de Tema (Dark Mode vs Light Mode) atrelando a um Contexto Global! |
| [Atividade](atividade.md) | Missão 12: Prove que duas telas totalmente distantes sabem que o App ficou escuro, sem trocarem palavras entre si. |

---

## Navegação

- **Anterior:** [Aula 11 – O Guarda Noturno](../aula-11-hooks-usestate-useeffect/README.md)
- **Próxima:** [Aula 13 – A Memória Muscular (Async Storage)](../aula-13-asyncstorage-persistencia-simples/README.md)

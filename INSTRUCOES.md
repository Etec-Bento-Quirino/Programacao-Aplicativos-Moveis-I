# Instruções – PAM I Programação de Aplicativos Móveis

## Objetivo deste repositório

Material completo da disciplina **PAM I** para uso em aula e em casa: tutoriais, atividades e projetos. Estrutura pronta para clonar no GitHub e seguir no ritmo do calendário.

---

## Como usar

### 1. Clonar o repositório

```bash
git clone https://github.com/Etec-Bento-Quirino/pam-i-programacao-aplicativos-moveis.git
cd pam-i-programacao-aplicativos-moveis
```

(Substitua pela URL real do seu repositório.)

### 2. Preparar o ambiente

- Instale **Node.js** (LTS) em [nodejs.org](https://nodejs.org).
- Verifique: `node --version`, `npm --version`, `npx --version`.
- No celular, instale o app **Expo Go** (Android ou iOS).

### 3. Seguir as aulas

- Aulas estão em pastas `aula-01-introducao-desenvolvimento-mobile` até `aula-20-preparacao-projeto-final`.
- Em cada pasta:
  1. Leia e siga o **tutorial.md** (em sala ou em casa).
  2. Resolva a **atividade.md** e entregue no canal indicado pelo professor.

### 4. Escolher e desenvolver o projeto

- Escolha **um** tipo em [projetos/](projetos): tipo A (Lista de Tarefas), B (Cadastro/Inventário), C (Diário/Notas) ou D (Controle de Gastos).
- A cada bimestre, implemente a fase correspondente (fase1 no B1, fase2 no B2, etc.).
- Ao final do 4º bimestre, entregue o app completo com SQLite conforme o README do tipo escolhido.

### 5. Conteúdo extra

- **docs/** – Calendário sugerido e PTD (Plano de Trabalho Docente).
- **plus/** – Conteúdo opcional (ex.: Storybook para design system).

---

## Estrutura de pastas

```
Programacao-Aplicativos-Moveis/
├── README.md
├── INSTRUCOES.md          (este arquivo)
├── TUTORIAIS.md
├── LICENSE
├── .gitignore
├── aula-01-introducao-desenvolvimento-mobile/
│   ├── tutorial.md
│   └── atividade.md
├── ... (aula-02 até aula-20)
├── projetos/
│   ├── tipo-a-listadetarefas/
│   ├── tipo-b-cadastro-inventario/
│   ├── tipo-c-diario-notas/
│   └── tipo-d-controle-gastos/
├── plus/
│   └── storybook-design-system.md
└── docs/
    ├── calendario-aulas.md
    └── PTD-Programacao-Aplicativos-Mobile-I.md
```

---

## Dúvidas e contribuições

- Para dúvidas do curso: use o canal indicado pelo professor ou abra uma **Issue** no GitHub.
- Para correções ou sugestões no material: **Pull Request** com descrição clara das alterações.

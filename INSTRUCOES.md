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

- Aulas estão organizadas em **7 módulos temáticos**: `modulo-01-fundamentos-ambiente` até `modulo-07-boas-praticas-ux`.
- O **Trabalho em Grupo** vive no **Módulo 8 – Projeto Final** (`modulo-08-projeto-final`).
- Em cada módulo:
  1. Leia o **README.md** do módulo (visão geral e lista de aulas).
  2. Siga o **tutorial.md** de cada aula (em sala ou em casa).
  3. Resolva a **atividade.md** e entregue no canal indicado pelo professor.
  4. Complete o **projeto Expo** do módulo conforme as `// TAREFA (Aula NN):` indicadas no código.

### 4. Escolher e desenvolver o projeto

- Escolha **uma** das **14 categorias** do [Trabalho em Grupo](modulo-08-projeto-final/README.md) (Educação, Finanças, Pets, Esportes, Alimentação etc.) e um tema dentre os **36 sugeridos**.
- Cada entrega tem uma ficha correspondente (`fase1.md` a `fase4.md`), com data no [calendário](docs/calendario-aulas.md).
- Ao final do Trabalho em Grupo, entregue o app completo com SQLite conforme o README da categoria escolhida.

### 5. Conteúdo extra

- **docs/** – Calendário sugerido e PTD (Plano de Trabalho Docente).

---

## Estrutura de pastas

```
Programacao-Aplicativos-Moveis/
├── README.md
├── INSTRUCOES.md          (este arquivo)
├── TUTORIAIS.md
├── LICENSE
├── .gitignore
├── modulo-01-fundamentos-ambiente/
│   ├── README.md                       (índice do módulo)
│   ├── app/                            (projeto Expo do módulo)
│   ├── aula-01-introducao-desenvolvimento-mobile/
│   │   ├── apresentacao.md
│   │   ├── tutorial.md
│   │   └── atividade.md
│   └── aula-02-ambiente-react-native-expo/
│       ├── apresentacao.md
│       ├── tutorial.md
│       └── atividade.md
├── ... (modulo-02-interface-componentes até modulo-06-banco-dados-sqlite)
├── modulo-07-boas-praticas-ux/
│   ├── README.md
│   ├── app/
│   └── aula-18-.../ (até aula-20)
├── modulo-08-projeto-final/
│   ├── README.md                      (regras + índice de 14 categorias / 36 temas)
│   ├── fase1.md             (fichas de entrega compartilhadas)
│   ├── fase2.md
│   ├── fase3.md
│   ├── fase4.md
│   ├── categoria-01-educacao/
│   │   ├── README.md
│   │   └── tema-04-organizacao-de-estudos/
│   │   └── ... (temas da categoria)
│   ├── ... (categoria-02 até categoria-14)
│   └── categoria-14-eventos/
│       └── tema-31-gerenciamento-de-eventos/
└── docs/
    ├── calendario-aulas.md
    ├── base-javascript-typescript.md
    └── PTD-Programacao-Aplicativos-Mobile-I.md
```

---

## Dúvidas e contribuições

- Para dúvidas do curso: use o canal indicado pelo professor ou abra uma **Issue** no GitHub.
- Para correções ou sugestões no material: **Pull Request** com descrição clara das alterações.

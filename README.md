# PAM I – Programação de Aplicativos Móveis I

**Professor:** Jackson Sá  
**Instituição:** ETEC Bento Quirino – Campinas/SP  
**Nível:** Iniciante (sem pré-requisito em Node/npm ou mobile)

---

## Sumário

Curso completo de desenvolvimento de aplicativos móveis com **React Native (Expo)** e **SQLite**. 20 aulas progressivas (tutorial + atividade por aula), 4 tipos de projeto final (4 fases cada). Ao final do ano o aluno desenvolve um app completo com persistência local.

**O que você vai dominar:**

- React Native com Expo
- Node.js, npm, npx
- Hooks (useState, useEffect, useContext)
- Navegação, formulários, galeria, câmera, geolocalização, notificações
- AsyncStorage e SQLite
- Projeto completo com CRUD e UX (loading, empty state, erros)

**Tempo estimado:** ano letivo (4 bimestres) | **Aulas:** 20 | **Projetos:** 4 tipos (escolha 1)

---

## Índice

- [Navegação rápida – Aulas](#índice-das-aulas)
- [Objetivo do curso](#objetivo-do-curso)
- [Como navegar](#como-navegar)
- [Estrutura do curso](#estrutura-do-curso)
- [Pré-requisitos](#pré-requisitos)
- [Como começar](#como-começar)
- [Projetos práticos](#projetos-práticos)
- [Calendário](#calendário)
- [Documentação e PTD](#documentação-e-ptd)
- [Licença](#licença)

---

## Objetivo do curso

Este repositório contém o material completo da disciplina **Programação de Aplicativos Móveis I**: tutoriais passo a passo, atividades por quinzena e quatro tipos de projeto final (lista de tarefas, cadastro/inventário, diário de notas, controle de gastos), cada um em 4 fases (uma por bimestre). Ao final, o aluno entrega um app com SQLite, recurso do dispositivo e boa experiência de uso.

---

## Como navegar

1. Use o **índice** acima para ir às seções.
2. Siga as **aulas em ordem** (aula-01 até aula-20).
3. Em cada aula: leia o **tutorial** e depois faça a **atividade**.
4. Escolha **um tipo de projeto** (A, B, C ou D) e desenvolva as 4 fases ao longo do ano.
5. Consulte [TUTORIAIS.md](TUTORIAIS.md) e [INSTRUCOES.md](INSTRUCOES.md) para detalhes.

---

## Índice das aulas

Cada aula tem um **índice** (README) com links para: **Apresentação** (slides em MD), **Tutorial** (passo a passo) e **Atividade** (tarefa da quinzena).

| Aula | Tema | Acesso |
|------|------|--------|
| 01 | Introdução ao desenvolvimento mobile e Node/npm/npx | [Entrar](aula-01-introducao-desenvolvimento-mobile/README.md) |
| 02 | Ambiente React Native (Expo) e primeiro app | [Entrar](aula-02-ambiente-react-native-expo/README.md) |
| 03 | Layouts (View, Flexbox, StyleSheet) | [Entrar](aula-03-layouts-view-flexbox-stylesheet/README.md) |
| 04 | Texto e botões (Text, TouchableOpacity) | [Entrar](aula-04-texto-botoes/README.md) |
| 05 | Imagens e listas (Image, FlatList) | [Entrar](aula-05-imagens-listas-flatlist/README.md) |
| 06 | Navegação (React Navigation) | [Entrar](aula-06-navegacao-react-navigation/README.md) |
| 07 | Formulários e entrada de dados | [Entrar](aula-07-formularios-entrada-dados/README.md) |
| 08 | Galeria e câmera (expo-image-picker) | [Entrar](aula-08-galeria-camera-expo-image-picker/README.md) |
| 09 | Geolocalização (expo-location) | [Entrar](aula-09-geolocalizacao-expo-location/README.md) |
| 10 | Notificações locais (expo-notifications) | [Entrar](aula-10-notificacoes-locais-expo-notifications/README.md) |
| 11 | Hooks: useState e useEffect | [Entrar](aula-11-hooks-usestate-useeffect/README.md) |
| 12 | Contexto e mais hooks | [Entrar](aula-12-contexto-hooks/README.md) |
| 13 | AsyncStorage (persistência simples) | [Entrar](aula-13-asyncstorage-persistencia-simples/README.md) |
| 14 | SQLite: configuração e primeira tabela | [Entrar](aula-14-sqlite-configuracao-primeira-tabela/README.md) |
| 15 | SQLite: CRUD completo | [Entrar](aula-15-sqlite-crud-completo/README.md) |
| 16 | Formulários + SQLite (integração) | [Entrar](aula-16-formularios-sqlite-integracao/README.md) |
| 17 | Relações entre tabelas (JOIN) | [Entrar](aula-17-relacoes-tabelas-join/README.md) |
| 18 | UX: loading, empty state e erros | [Entrar](aula-18-ux-loading-empty-state-erros/README.md) |
| 19 | Revisão e boas práticas | [Entrar](aula-19-revisao-boas-praticas/README.md) |
| 20 | Preparação do projeto final (Fase 4) | [Entrar](aula-20-preparacao-projeto-final/README.md) |

---

## Estrutura do curso

| Pasta | Conteúdo |
|-------|----------|
| **aula-01** a **aula-20** | Em cada pasta: [README](aula-01-introducao-desenvolvimento-mobile/README.md) (índice), [apresentacao.md](aula-01-introducao-desenvolvimento-mobile/apresentacao.md), [tutorial.md](aula-01-introducao-desenvolvimento-mobile/tutorial.md), [atividade.md](aula-01-introducao-desenvolvimento-mobile/atividade.md) |
| [projetos/](projetos) | 4 tipos de projeto (A, B, C, D), cada um com 4 fases |
| [plus/](plus) | Conteúdo opcional (ex.: Storybook) |
| [docs/](docs) | PTD, calendário e material de apoio |

---

## Pré-requisitos

- **Nenhum** em programação mobile ou Node.js; o curso parte do zero.
- Computador com Windows, macOS ou Linux.
- Celular Android ou iOS (ou emulador) para rodar o app com Expo Go.

---

## Como começar

### 1. Instalar Node.js

- Acesse [https://nodejs.org](https://nodejs.org) e baixe a versão LTS.
- Instale e verifique no terminal: `node --version`, `npm --version`, `npx --version`.

### 2. Primeiro projeto (Aula 02)

```bash
npx create-expo-app@latest MeuApp --template blank
cd MeuApp
npx expo start
```

Use o app **Expo Go** no celular para escanear o QR Code e ver o app.

### 3. Seguir as aulas em ordem

- Comece pela [Aula 01](aula-01-introducao-desenvolvimento-mobile/README.md) (conceitos e ambiente).
- Em cada aula, use o **índice** (README) para acessar Apresentação, Tutorial e Atividade.

---

## Projetos práticos

O aluno escolhe **um** tipo e desenvolve as 4 fases (uma por bimestre):

| Tipo | Nome | Descrição resumida |
|------|------|--------------------|
| A | [Lista de Tarefas](projetos/tipo-a-listadetarefas) | CRUD de tarefas, SQLite, notificação |
| B | [Cadastro/Inventário](projetos/tipo-b-cadastro-inventario) | Categorias e itens, SQLite, edição |
| C | [Diário/Notas](projetos/tipo-c-diario-notas) | Notas, galeria, SQLite, foto |
| D | [Controle de Gastos](projetos/tipo-d-controle-gastos) | Gastos por categoria, SQLite, geolocalização |

Cada tipo tem um `README.md` e as fases em `fase1-bimestre1.md` a `fase4-bimestre4.md`.

---

## Calendário

26 quinzenas: 20 aulas de conteúdo + 4 quinzenas de projeto (1 por bimestre) + 2 de extensão. Datas sugeridas e detalhes em [docs/calendario-aulas.md](docs/calendario-aulas.md).

---

## Documentação e PTD

- [docs/calendario-aulas.md](docs/calendario-aulas.md) – Calendário por quinzena e bimestre.
- [docs/PTD-Programacao-Aplicativos-Mobile-I.md](docs/PTD-Programacao-Aplicativos-Mobile-I.md) – Plano de Trabalho Docente (competências, habilidades, avaliações).

---

## Licença

Este material está sob licença **MIT**. Uso livre para fins educacionais, com manutenção dos créditos.

---

## Contato

**Professor Jackson Sá**  
ETEC Bento Quirino – Campinas/SP  
E-mail: jackson.sa@etec.sp.gov.br

Para dúvidas sobre o curso, prefira abrir uma issue no repositório para que outros alunos possam aproveitar.

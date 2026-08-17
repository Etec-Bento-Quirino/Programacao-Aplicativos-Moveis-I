---
title: Início
layout: home
nav_order: 1
permalink: /
---

# PAM I – Programação de Aplicativos Móveis I

**Professor:** Jackson Sá  
**Instituição:** ETEC Bento Quirino – Campinas/SP  
**Nível:** Iniciante (sem pré-requisito em Node/npm ou mobile)

---

## Sumário

Curso completo de desenvolvimento de aplicativos móveis com **React Native (Expo)** e **SQLite**. **20 aulas progressivas** organizadas em **7 módulos temáticos** (tutorial + atividade por aula) e um **Módulo 8 – Projeto Final** (Trabalho em Grupo) com 14 categorias e 36 temas sugeridos (4 entregas). Cada módulo traz um **projeto Expo** para o aluno completar ao longo das aulas. Ao final do ano o aluno desenvolve um app completo com persistência local.

**O que você vai dominar:**

- React Native com Expo
- Node.js, npm, npx
- Hooks (useState, useEffect, useContext)
- Navegação, formulários, galeria, câmera, geolocalização, notificações
- AsyncStorage e SQLite
- Projeto completo com CRUD e UX (loading, empty state, erros)

**Tempo estimado:** ano letivo (4 bimestres) | **Aulas:** 20 | **Projetos:** Trabalho em Grupo (14 categorias / 36 temas, escolha 1)

---

## Índice

- [Navegação rápida – Aulas](#índice-das-aulas)
- [Objetivo do curso](#objetivo-do-curso)
- [Como navegar](#como-navegar)
- [Estrutura do curso](#estrutura-do-curso)
- [Pré-requisitos](#pré-requisitos)
- [Como começar](#como-começar)
- [Trabalho em Grupo](#trabalho-em-grupo)
- [Calendário](#calendário)
- [Documentação e PTD](#documentação-e-ptd)
- [Licença](#licença)

---

## Objetivo do curso

Este repositório contém o material completo da disciplina **Programação de Aplicativos Móveis I**: tutoriais passo a passo, atividades por quinzena e o **Trabalho em Grupo** (Módulo 8) — 14 categorias de temas (educação, finanças, pets, esportes, alimentação e outras), cada uma em 4 entregas. Ao final, o aluno entrega um app com SQLite, recurso do dispositivo e boa experiência de uso.

---

## Como navegar

1. Use o **índice** acima para ir às seções.
2. Siga as **aulas em ordem** (aula-01 até aula-20).
3. Em cada aula: leia o **tutorial** e depois faça a **atividade**.
4. Escolha **uma das 14 categorias** e desenvolva as 4 entregas do Trabalho em Grupo.
5. Consulte [TUTORIAIS.md](TUTORIAIS.md) e [INSTRUCOES.md](INSTRUCOES.md) para detalhes.

---

## Índice das aulas

O curso é organizado em **7 módulos temáticos** + **Módulo 8 – Projeto Final** (Trabalho em Grupo). Cada aula tem um **índice** (README) com links para: **Apresentação** (slides em MD), **Tutorial** (passo a passo) e **Atividade** (tarefa da quinzena).

### Módulo 1 – Fundamentos e Ambiente ([ver índice](modulo-01-fundamentos-ambiente/README.md))

| Aula | Tema | Acesso |
|------|------|--------|
| 01 | Introdução ao desenvolvimento mobile e Node/npm/npx | [Entrar](modulo-01-fundamentos-ambiente/aula-01-introducao-desenvolvimento-mobile/README.md) |
| 02 | Ambiente React Native (Expo) e primeiro app | [Entrar](modulo-01-fundamentos-ambiente/aula-02-ambiente-react-native-expo/README.md) |

### Módulo 2 – Interface e Componentes ([ver índice](modulo-02-interface-componentes/README.md))

| Aula | Tema | Acesso |
|------|------|--------|
| 03 | Layouts (View, Flexbox, StyleSheet) | [Entrar](modulo-02-interface-componentes/aula-03-layouts-view-flexbox-stylesheet/README.md) |
| 04 | Texto e botões (Text, TouchableOpacity) | [Entrar](modulo-02-interface-componentes/aula-04-texto-botoes/README.md) |
| 05 | Imagens e listas (Image, FlatList) | [Entrar](modulo-02-interface-componentes/aula-05-imagens-listas-flatlist/README.md) |

### Módulo 3 – Navegação e Formulários ([ver índice](modulo-03-navegacao-formularios/README.md))

| Aula | Tema | Acesso |
|------|------|--------|
| 06 | Navegação com Expo Router (rotas, abas e parâmetros) | [Entrar](modulo-03-navegacao-formularios/aula-06-navegacao-react-navigation/README.md) |
| 07 | Formulários e entrada de dados | [Entrar](modulo-03-navegacao-formularios/aula-07-formularios-entrada-dados/README.md) |

### Módulo 4 – Recursos do Dispositivo ([ver índice](modulo-04-recursos-dispositivo/README.md))

| Aula | Tema | Acesso |
|------|------|--------|
| 08 | Galeria e câmera (expo-image-picker) | [Entrar](modulo-04-recursos-dispositivo/aula-08-galeria-camera-expo-image-picker/README.md) |
| 09 | Geolocalização (expo-location) | [Entrar](modulo-04-recursos-dispositivo/aula-09-geolocalizacao-expo-location/README.md) |
| 10 | Notificações locais (expo-notifications) | [Entrar](modulo-04-recursos-dispositivo/aula-10-notificacoes-locais-expo-notifications/README.md) |

### Módulo 5 – Estado e Persistência ([ver índice](modulo-05-estado-persistencia/README.md))

| Aula | Tema | Acesso |
|------|------|--------|
| 11 | Hooks: useState e useEffect | [Entrar](modulo-05-estado-persistencia/aula-11-hooks-usestate-useeffect/README.md) |
| 12 | Contexto e mais hooks | [Entrar](modulo-05-estado-persistencia/aula-12-contexto-hooks/README.md) |
| 13 | AsyncStorage (persistência simples) | [Entrar](modulo-05-estado-persistencia/aula-13-asyncstorage-persistencia-simples/README.md) |

### Módulo 6 – Banco de Dados (SQLite) ([ver índice](modulo-06-banco-dados-sqlite/README.md))

| Aula | Tema | Acesso |
|------|------|--------|
| 14 | SQLite: configuração e primeira tabela | [Entrar](modulo-06-banco-dados-sqlite/aula-14-sqlite-configuracao-primeira-tabela/README.md) |
| 15 | SQLite: CRUD completo | [Entrar](modulo-06-banco-dados-sqlite/aula-15-sqlite-crud-completo/README.md) |
| 16 | Formulários + SQLite (integração) | [Entrar](modulo-06-banco-dados-sqlite/aula-16-formularios-sqlite-integracao/README.md) |
| 17 | Relações entre tabelas (JOIN) | [Entrar](modulo-06-banco-dados-sqlite/aula-17-relacoes-tabelas-join/README.md) |

### Módulo 7 – Boas Práticas e UX ([ver índice](modulo-07-boas-praticas-ux/README.md))

| Aula | Tema | Acesso |
|------|------|--------|
| 18 | UX: loading, empty state e erros | [Entrar](modulo-07-boas-praticas-ux/aula-18-ux-loading-empty-state-erros/README.md) |
| 19 | Revisão e boas práticas | [Entrar](modulo-07-boas-praticas-ux/aula-19-revisao-boas-praticas/README.md) |
| 20 | Preparação do projeto final (Entrega 4) | [Entrar](modulo-07-boas-praticas-ux/aula-20-preparacao-projeto-final/README.md) |

---

## Trilha de Aprendizado

O curso é dividido em **7 módulos temáticos**, distribuídos em quatro bimestres, e fecha no **Módulo 8 – Projeto Final** (Trabalho em Grupo, 4 entregas ao longo do ano; datas no [calendário](docs/calendario-aulas.md)).

### Módulo 1 – Fundamentos e Ambiente (Aulas 01–02)
> Você parte do zero e prepara o computador e o celular para o desenvolvimento.

| Aula | Habilidade adquirida |
|------|----------------------|
| 01 | Instala Node/npm/npx; entende o ecossistema mobile |
| 02 | Cria o primeiro app Expo; vê o app no celular via Expo Go |

**Entrega ao final do M1:** ambiente pronto e primeiro app rodando.

---

### Módulo 2 – Interface e Componentes (Aulas 03–05)
> Você aprende a estruturar a tela e exibir dados com componentes React Native.

| Aula | Habilidade adquirida |
|------|----------------------|
| 03 | Organiza layout com Flexbox e cria componentes reutilizáveis |
| 04 | Cria botões e captura cliques com `Pressable` |
| 05 | Exibe imagens e renderiza listas com `FlatList` |

**Entrega ao final do M2:** lista estática com layout estruturado.

---

### Módulo 3 – Navegação e Formulários (Aulas 06–07)
> O app passa a ter múltiplas telas e a capturar dados do usuário.

| Aula | Habilidade adquirida |
|------|----------------------|
| 06 | Navega entre telas com Expo Router (abas e stack) |
| 07 | Captura dados do usuário com formulários e validação |

**Entrega ao final do M3:** app com 2 telas (lista + detalhe) e navegação funcionando.

---

### Módulo 4 – Recursos do Dispositivo (Aulas 08–10)
> O app acessa o hardware do celular: câmera, GPS e notificações.

| Aula | Habilidade adquirida |
|------|----------------------|
| 08 | Acessa galeria e câmera com `expo-image-picker` |
| 09 | Obtém localização GPS com `expo-location` |
| 10 | Envia notificações locais com `expo-notifications` |

**Entrega ao final do M4:** formulário de cadastro e ao menos um recurso do dispositivo (câmera, GPS ou notificação).

---

### Módulo 5 – Estado e Persistência (Aulas 11–13)
> O app gerencia estado global e salva dados simples que sobrevivem ao fechar.

| Aula | Habilidade adquirida |
|------|----------------------|
| 11 | Domina `useState` e `useEffect` em profundidade |
| 12 | Compartilha estado entre telas com `useContext` |
| 13 | Salva e carrega dados simples com `AsyncStorage` |

**Entrega ao final do M5:** dados salvos com AsyncStorage e estado compartilhado entre telas.

---

### Módulo 6 – Banco de Dados (SQLite) (Aulas 14–17)
> O app ganha banco de dados real: CRUD completo e relações entre tabelas.

| Aula | Habilidade adquirida |
|------|----------------------|
| 14 | Configura SQLite e cria a primeira tabela |
| 15 | Implementa CRUD completo (INSERT, SELECT, UPDATE, DELETE) |
| 16 | Integra formulários com o banco SQLite |
| 17 | Relaciona tabelas com `FOREIGN KEY` e `JOIN` |

**Entrega ao final do M6:** app com SQLite, CRUD funcionando, filtros na listagem.

---

### Módulo 7 – Boas Práticas e UX (Aulas 18–20)
> O app une tudo e ganha qualidade de produto real.

| Aula | Habilidade adquirida |
|------|----------------------|
| 18 | Adiciona loading, estado vazio e tratamento de erros |
| 19 | Organiza código com boas práticas e nomenclatura |
| 20 | Prepara e apresenta o projeto final |

**Entrega ao final do M7:** app completo com SQLite, recurso do dispositivo e UX polida.

> **Fora do escopo:** consumo de APIs REST, autenticação com JWT e integração com
> backends (Node.js, Go, Java etc.) são tópicos avançados e **não fazem parte**
> deste curso — o PAM I trabalha com dados 100% locais (AsyncStorage + SQLite).

---

## Estrutura do curso

| Pasta | Conteúdo |
|-------|----------|
| [modulo-01-fundamentos-ambiente/](modulo-01-fundamentos-ambiente/README.md) | Aulas 01–02 + projeto Expo do módulo |
| [modulo-02-interface-componentes/](modulo-02-interface-componentes/README.md) | Aulas 03–05 + projeto Expo do módulo |
| [modulo-03-navegacao-formularios/](modulo-03-navegacao-formularios/README.md) | Aulas 06–07 + projeto Expo do módulo |
| [modulo-04-recursos-dispositivo/](modulo-04-recursos-dispositivo/README.md) | Aulas 08–10 + projeto Expo do módulo |
| [modulo-05-estado-persistencia/](modulo-05-estado-persistencia/README.md) | Aulas 11–13 + projeto Expo do módulo |
| [modulo-06-banco-dados-sqlite/](modulo-06-banco-dados-sqlite/README.md) | Aulas 14–17 + projeto Expo do módulo |
| [modulo-07-boas-praticas-ux/](modulo-07-boas-praticas-ux/README.md) | Aulas 18–20 + projeto Expo do módulo |
| [modulo-08-projeto-final/](modulo-08-projeto-final/README.md) | Trabalho em Grupo: 14 categorias / 36 temas, cada um com 4 entregas |
| [docs/](docs) | PTD, calendário e material de apoio |

Cada pasta de aula (`aula-NN-...`) contém: [README](modulo-01-fundamentos-ambiente/aula-01-introducao-desenvolvimento-mobile/README.md) (índice), [apresentacao.md](modulo-01-fundamentos-ambiente/aula-01-introducao-desenvolvimento-mobile/apresentacao.md), [tutorial.md](modulo-01-fundamentos-ambiente/aula-01-introducao-desenvolvimento-mobile/tutorial.md), [atividade.md](modulo-01-fundamentos-ambiente/aula-01-introducao-desenvolvimento-mobile/atividade.md). Cada módulo traz ainda um **projeto Expo incompleto** com `// TAREFA (Aula NN):` — o aluno completa as telas do app conforme avança pelas aulas.

---

## Pré-requisitos

- **Nenhum** em programação mobile; o curso parte do zero.
- **Base de JavaScript/TypeScript:** recomendado o curso [Algoritmos e Estruturas de Dados com Node.js](https://github.com/Etec-Bento-Quirino/algoritmos-estruturas-dados-node) (mesmo professor) — consulte a [Base de JavaScript/TypeScript](docs/base-javascript-typescript.md).
- Computador com Windows, macOS ou Linux.
- Celular Android ou iOS (ou emulador) para rodar o app com Expo Go.

---

## Como começar

### 1. Instalar Node.js

- Acesse [https://nodejs.org](https://nodejs.org) e baixe a versão LTS.
- Instale e verifique no terminal: `node --version`, `npm --version`, `npx --version`.

### 2. Primeiro projeto (Módulo 1, Aula 02)

Cada módulo traz um **projeto Expo** próprio. No Módulo 1:

```bash
# Abra o VS Code. Clique em 'Terminal' -> 'New Terminal' no menu superior.
# No terminal que abrir dentro do VS Code, execute:
cd modulo-01-fundamentos-ambiente/app
npm install
npm start
```

Use o app **Expo Go** no celular para escanear o QR Code e ver o app.

### 3. Seguir as aulas em ordem

- Comece pela [Aula 01](modulo-01-fundamentos-ambiente/aula-01-introducao-desenvolvimento-mobile/README.md) (conceitos e ambiente).
- Em cada aula, use o **índice** (README) para acessar Apresentação, Tutorial e Atividade.

---

## Trabalho em Grupo

Em grupo (2 a 4 integrantes), o aluno escolhe **uma** das categorias e desenvolve o app em **4 entregas**:

| Categoria | Nome | Guia |
|-----------|------|------|
| 1 | [Educação](modulo-08-projeto-final/categoria-01-educacao/README.md) | Estudos, tarefas escolares e aprendizado |
| 2 | [Finanças](modulo-08-projeto-final/categoria-02-financas/README.md) | Controle financeiro e despesas |
| 3 | [Pets e Animais](modulo-08-projeto-final/categoria-03-pets-animais/README.md) | Cuidados com animais |
| 4 | [Esportes e Saúde](modulo-08-projeto-final/categoria-04-esportes-saude/README.md) | Hábitos, treinos e competições |
| 5 | [Veículos e Mobilidade](modulo-08-projeto-final/categoria-05-veiculos-mobilidade/README.md) | Manutenção de veículos |
| 6 | [Casa e Meio Ambiente](modulo-08-projeto-final/categoria-06-casa-meio-ambiente/README.md) | Plantas e consumo consciente |
| 7 | [Alimentação](modulo-08-projeto-final/categoria-07-alimentacao/README.md) | Receitas e compras |
| 8 | [Comércio e Serviços](modulo-08-projeto-final/categoria-08-comercio-servicos/README.md) | Estoque, catálogo e agendamentos |
| 9 | [Organização e Produtividade](modulo-08-projeto-final/categoria-09-organizacao-produtividade/README.md) | Tarefas, compromissos e projetos |
| 10 | [Entretenimento e Cultura](modulo-08-projeto-final/categoria-10-entretenimento-cultura/README.md) | Filmes, séries e coleções |
| 11 | [Comunidade e Solidariedade](modulo-08-projeto-final/categoria-11-comunidade-solidariedade/README.md) | Doações e voluntariado |
| 12 | [Gestão e Administração](modulo-08-projeto-final/categoria-12-gestao-administracao/README.md) | Reservas, empréstimos e equipamentos |
| 13 | [Viagens e Turismo](modulo-08-projeto-final/categoria-13-viagens-turismo/README.md) | Planejamento de viagens |
| 14 | [Eventos](modulo-08-projeto-final/categoria-14-eventos/README.md) | Organização de eventos |

Cada categoria tem um `README.md` (temas sugeridos + cronograma). As fichas de entrega são compartilhadas entre todas as categorias (`fase1.md` a `fase4.md`). Cada tema sugerido tem uma subpasta própria (`tema-01-...` a `tema-36-...`) com README, telas e banco de dados — ver o [Índice de Temas](modulo-08-projeto-final/README.md). Regras completas em [modulo-08-projeto-final/README.md](modulo-08-projeto-final/README.md).

---

## Dúvidas Frequentes e Erros Comuns

O aplicativo parou de rodar no seu celular? O `--tunnel` da escola travou? 
Consulte o nosso [Guia de Erros Comuns e Troubleshooting](docs/GUIA-DE-ERROS-COMUNS.md) para resolver rapidamente sem precisar parar o seu projeto.

---

## Calendário

26 quinzenas: 20 aulas de conteúdo + 4 entregas do Trabalho em Grupo + 2 de extensão. Datas sugeridas e detalhes em [docs/calendario-aulas.md](docs/calendario-aulas.md).

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

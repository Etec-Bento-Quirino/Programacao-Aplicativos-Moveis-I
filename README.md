# PAM I – Programação de Aplicativos Móveis I

**Professor:** Jackson Sá  
**Instituição:** ETEC Bento Quirino – Campinas/SP  
**Nível:** Iniciante (sem pré-requisito em Node/npm ou mobile)

---

## Sumário

Curso completo de desenvolvimento de aplicativos móveis com **React Native (Expo)** e **SQLite**. 20 aulas progressivas (tutorial + atividade por aula) e um **Trabalho em Grupo** com 14 categorias e 36 temas sugeridos (4 entregas). Ao final do ano o aluno desenvolve um app completo com persistência local.

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
- [Projetos práticos](#projetos-práticos)
- [Calendário](#calendário)
- [Documentação e PTD](#documentação-e-ptd)
- [Licença](#licença)

---

## Objetivo do curso

Este repositório contém o material completo da disciplina **Programação de Aplicativos Móveis I**: tutoriais passo a passo, atividades por quinzena e o **Trabalho em Grupo** — 14 categorias de temas (educação, finanças, pets, esportes, alimentação e outras), cada uma em 4 entregas. Ao final, o aluno entrega um app com SQLite, recurso do dispositivo e boa experiência de uso.

---

## Como navegar

1. Use o **índice** acima para ir às seções.
2. Siga as **aulas em ordem** (aula-01 até aula-20).
3. Em cada aula: leia o **tutorial** e depois faça a **atividade**.
4. Escolha **uma das 14 categorias** e desenvolva as 4 entregas do Trabalho em Grupo.
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
| 06 | Navegação com Expo Router (rotas, abas e parâmetros) | [Entrar](aula-06-navegacao-react-navigation/README.md) |
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
| 20 | Preparação do projeto final (Entrega 4) | [Entrar](aula-20-preparacao-projeto-final/README.md) |

---

## Trilha de Aprendizado

O curso é dividido em quatro blocos, um por bimestre. O **Trabalho em Grupo** tem 4 entregas ao longo do ano (datas no [calendário](docs/calendario-aulas.md)).

### Bimestre 1 – Fundamentos (Aulas 01–05)
> Você parte do zero e aprende a criar, estruturar e exibir dados na tela.

| Aula | Habilidade adquirida |
|------|----------------------|
| 01 | Instala Node/npm/npx; entende o ecossistema mobile |
| 02 | Cria o primeiro app Expo; vê o app no celular via Expo Go |
| 03 | Organiza layout com Flexbox e cria componentes reutilizáveis |
| 04 | Cria botões e captura cliques com `Pressable` |
| 05 | Exibe imagens e renderiza listas com `FlatList` |

**Entrega ao final do B1:** app com 2 telas (lista estática + detalhe), navegação funcionando.

---

### Bimestre 2 – Interação e Recursos do Dispositivo (Aulas 06–10)
> O app passa a ter múltiplas telas, formulários e acesso ao hardware do celular.

| Aula | Habilidade adquirida |
|------|----------------------|
| 06 | Navega entre telas com Expo Router (abas e stack) |
| 07 | Captura dados do usuário com formulários e validação |
| 08 | Acessa galeria e câmera com `expo-image-picker` |
| 09 | Obtém localização GPS com `expo-location` |
| 10 | Envia notificações locais com `expo-notifications` |

**Entrega ao final do B2:** formulário de cadastro, AsyncStorage e ao menos um recurso do dispositivo (câmera, GPS ou notificação).

---

### Bimestre 3 – Persistência com SQLite (Aulas 11–15)
> O app ganha banco de dados real: dados sobrevivem ao fechar o app.

| Aula | Habilidade adquirida |
|------|----------------------|
| 11 | Domina `useState` e `useEffect` em profundidade |
| 12 | Compartilha estado entre telas com `useContext` |
| 13 | Salva e carrega dados simples com `AsyncStorage` |
| 14 | Configura SQLite e cria a primeira tabela |
| 15 | Implementa CRUD completo (INSERT, SELECT, UPDATE, DELETE) |

**Entrega ao final do B3:** app com SQLite, CRUD funcionando, filtros na listagem.

---

### Bimestre 4 – Integração e Polimento (Aulas 16–20)
> O app une tudo e ganha qualidade de produto real.

| Aula | Habilidade adquirida |
|------|----------------------|
| 16 | Integra formulários com o banco SQLite |
| 17 | Relaciona tabelas com `FOREIGN KEY` e `JOIN` |
| 18 | Adiciona loading, estado vazio e tratamento de erros |
| 19 | Organiza código com boas práticas e nomenclatura |
| 20 | Prepara e apresenta o projeto final |

**Entrega ao final do B4:** app completo com SQLite, recurso do dispositivo e UX polida.

---

## Estrutura do curso

| Pasta | Conteúdo |
|-------|----------|
| **aula-01** a **aula-20** | Em cada pasta: [README](aula-01-introducao-desenvolvimento-mobile/README.md) (índice), [apresentacao.md](aula-01-introducao-desenvolvimento-mobile/apresentacao.md), [tutorial.md](aula-01-introducao-desenvolvimento-mobile/tutorial.md), [atividade.md](aula-01-introducao-desenvolvimento-mobile/atividade.md) |
| [projetos/](projetos) | Trabalho em Grupo: 14 categorias / 36 temas, cada um com 4 entregas |
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
# Abra o VS Code. Clique em 'Terminal' -> 'New Terminal' no menu superior.
# No terminal que abrir dentro do VS Code, execute:
npx create-expo-app@latest MeuApp
cd MeuApp
# O template padrão vem com um exemplo cheio de abas. Limpe com:
npm run reset-project   # responde "n" quando perguntar se quer apagar
npm start
```

Use o app **Expo Go** no celular para escanear o QR Code e ver o app.

### 3. Seguir as aulas em ordem

- Comece pela [Aula 01](aula-01-introducao-desenvolvimento-mobile/README.md) (conceitos e ambiente).
- Em cada aula, use o **índice** (README) para acessar Apresentação, Tutorial e Atividade.

---

## Trabalho em Grupo

Em grupo (2 a 4 integrantes), o aluno escolhe **uma** das categorias e desenvolve o app em **4 entregas**:

| Categoria | Nome | Guia |
|-----------|------|------|
| 1 | [Educação](projetos/categoria-01-educacao/README.md) | Estudos, tarefas escolares e aprendizado |
| 2 | [Finanças](projetos/categoria-02-financas/README.md) | Controle financeiro e despesas |
| 3 | [Pets e Animais](projetos/categoria-03-pets-animais/README.md) | Cuidados com animais |
| 4 | [Esportes e Saúde](projetos/categoria-04-esportes-saude/README.md) | Hábitos, treinos e competições |
| 5 | [Veículos e Mobilidade](projetos/categoria-05-veiculos-mobilidade/README.md) | Manutenção de veículos |
| 6 | [Casa e Meio Ambiente](projetos/categoria-06-casa-meio-ambiente/README.md) | Plantas e consumo consciente |
| 7 | [Alimentação](projetos/categoria-07-alimentacao/README.md) | Receitas e compras |
| 8 | [Comércio e Serviços](projetos/categoria-08-comercio-servicos/README.md) | Estoque, catálogo e agendamentos |
| 9 | [Organização e Produtividade](projetos/categoria-09-organizacao-produtividade/README.md) | Tarefas, compromissos e projetos |
| 10 | [Entretenimento e Cultura](projetos/categoria-10-entretenimento-cultura/README.md) | Filmes, séries e coleções |
| 11 | [Comunidade e Solidariedade](projetos/categoria-11-comunidade-solidariedade/README.md) | Doações e voluntariado |
| 12 | [Gestão e Administração](projetos/categoria-12-gestao-administracao/README.md) | Reservas, empréstimos e equipamentos |
| 13 | [Viagens e Turismo](projetos/categoria-13-viagens-turismo/README.md) | Planejamento de viagens |
| 14 | [Eventos](projetos/categoria-14-eventos/README.md) | Organização de eventos |

Cada categoria tem um `README.md` (temas sugeridos + cronograma). As fichas de entrega são compartilhadas entre todas as categorias (`fase1.md` a `fase4.md`). Cada tema sugerido tem uma subpasta própria (`tema-01-...` a `tema-36-...`) com README, telas e banco de dados — ver o [Índice de Temas](projetos/README.md). Regras completas em [projetos/README.md](projetos/README.md).

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

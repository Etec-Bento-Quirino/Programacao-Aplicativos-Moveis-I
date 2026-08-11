# Tutorial: O Check-list do Arquiteto 📋

**Sugestão de execução:** Quinzena 25 | **Bimestre:** 4

> **Pré-requisitos:** Todas as aulas do Bimestre 4 (16–19) — projeto em estado funcional.
>
> **O que você vai aprender:**
> - Revisar os critérios obrigatórios do projeto final com um checklist objetivo
> - Identificar o que está faltando antes da apresentação
> - Organizar e documentar o projeto para entrega (README, instruções de execução)
> - Preparar o projeto para rodar em outro computador sem erros

---

Isso não é e não deve ser um laboratório de Inserção de Linhas de Código. Nesse estágio do jogo, você já tem as Pastas, as Queries SQL de JOIN, e as Componentizações na mão.
Nós passaremos a Escova Fina sobre O Escopo Final do seu Projeto. 

---

## Passo 1: A Análise de Requisitos Brutos do Software

Confira a matriz que a sua aplicação de TCC (Trabalho final ou Bimestral) OBRIGATORIAMENTE deve apresentar em execução lisa:

- **1️⃣ Bateria Front-End Controlada:** O formulário da aba nova deve blindar contra dados em branco (`.trim()`) antes de salvar. As `FlatLists` devem estar consumindo de Arrays `useStates()` Limpos e contendo Chaves (`KeyExtractor`). 
- **2️⃣ O Status Psicológico (UX):** Sua tela é OBRIGADA a ostentar um Empty State Lindo (Seja criativo com Emoticons/Vector) quando as telas carregarem sem Dados Preenchidos. Você DEVE exibir Alertas Catch em erro. 
- **3️⃣ Integração DDL Relacional:** 100% dos dados principais devem usar o SQLite Nativo (`openDatabaseSync`). Nada do projeto pode ficar apenas em variáveis ou AsyncStorage (AsyncStorage é permitido apenas para preferências como tema e nome do perfil). O CRUD (Create, Read, Update, Delete) deve funcionar com render dinâmico dos itens na lista!
- **4️⃣ Hardware Puro:** A aplicação de nota máxima exige pelo menos UM componente de engenharia bruta testado (Câmera, Geolocalização da Rua Real, ou PushNotification do Google).

## Passo 2: Documentação do Projeto

As 4 regras foram validadas no código? Então documente a entrega.

O `README.md` do seu projeto deve conter:

```markdown
# Nome do Projeto

Descrição em 2-3 linhas do que o app faz.

## Como executar

1. Instale as dependências: `npm install`
2. Inicie o servidor: `npm start`
3. Abra o app Expo Go no celular e escaneie o QR Code

## Funcionalidades

- [ ] Cadastro de [itens do projeto]
- [ ] Listagem com filtro
- [ ] [Recurso do dispositivo: câmera / GPS / notificação]
- [ ] Loading state e empty state em todas as telas
```

## Passo 3: Preparando o ZIP de entrega

Antes de zipar o projeto, garanta que a pasta `node_modules` **não está incluída** (ela pesa centenas de MB e o professor executa `npm install` para recriá-la):

1. Delete ou ignore a pasta `node_modules/`
2. Comprima o projeto com um nome claro: `NomeAluno_Projeto2_PAM1.zip`
3. Inclua no ZIP apenas o código-fonte + o `README.md` com as instruções acima

---

## Passo 4 (Bônus): Publicando com EAS Build 📦

Durante o curso o app roda no **Expo Go**. Para distribuir um `.apk`/`.aab` (Android) instalável de verdade ou publicar na Play Store, o Expo oferece o **EAS Build** — que compila o app na nuvem, sem precisar instalar Android Studio.

```bash
# 1. Instale a CLI do EAS (uma vez só)
npm install -g eas-cli

# 2. Dentro da pasta do projeto, faça login no Expo
eas login

# 3. Configure o projeto (cria o arquivo eas.json)
eas init

# 4. Gere o APK de teste (para instalar direto no celular)
eas build --platform android --profile preview

# 5. Para publicar na Play Store, use --profile production (gera .aab)
```

Depois do build, o comando mostra um link para baixar o `.apk` — instale no celular Android como um app comum. Para distribuir oficialmente, você precisaria de uma conta de desenvolvedor (US$ 25 única na Play Store / US$ 99/ano na App Store).

> 💡 **Dica:** o EAS Build é **opcional** e fora da nota — a entrega continua sendo o projeto rodando via Expo Go. Use este passo só se quiser instalar o app de verdade no seu celular ou apresentar um `.apk` na defesa.

---

Parabéns! Você chegou ao final da trilha. Avance para a atividade final.

---

## Como isso se aplica ao seu projeto

Esta aula é a entrega final. Use o checklist do Passo 1 como guia de revisão:

| Critério | Verificar no seu projeto |
|---|---|
| Formulário com validação | Campos obrigatórios têm `if (!campo.trim()) return` |
| FlatList com keyExtractor | Todas as listas têm `keyExtractor={(item) => String(item.id)}` |
| Empty state | Todas as FlatLists têm `ListEmptyComponent` |
| Loading state | Telas com banco têm `ActivityIndicator` |
| SQLite funcionando | CREATE TABLE no `useEffect([], [])`, CRUD completo |
| Recurso do dispositivo | Câmera, GPS ou notificação integrados e funcionando |

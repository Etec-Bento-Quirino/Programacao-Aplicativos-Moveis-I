# Tutorial: O Check-list do Arquiteto 📋

**Sugestão de execução:** Quinzena 25 | **Bimestre:** 4

> [!NOTE]
> **O que você vai aprender hoje:**
> - Revisar os critérios obrigatórios do projeto final com um checklist objetivo
> - Identificar o que está faltando antes da apresentação
> - Organizar e documentar o projeto para entrega (README, instruções de execução)
> - Preparar o projeto para rodar em outro computador sem erros
>
> **Pré-requisitos:** Todas as aulas do Bimestre 4 (16–19) — projeto em estado funcional.

---

Isso **não** é um laboratório de inserção de linhas de código. Nesse estágio do jogo, você já tem as pastas, as Queries SQL de JOIN, e as componentizações na mão. Nós passaremos a escova fina sobre o escopo final do seu projeto.

> [!CAUTION]
> **Atenção:** esta aula é mais teórica e de organização. Você não vai escrever código novo aqui — vai **revisar, organizar e documentar** o que já tem. O foco é garantir que o projeto funcione em outro computador e esteja pronto para entrega.

---

## Passo 1: A Análise de Requisitos Brutos do Software

Confira a matriz que sua aplicação **OBRIGATORIAMENTE** deve apresentar em execução lisa:

### Critério 1: Bateria Front-End Controlada

O formulário da aba nova deve blindar contra dados em branco (`.trim()`) antes de salvar. As `FlatLists` devem estar consumindo de Arrays `useStates()` Limpos e contendo Chaves (`keyExtractor`).

> [!TIP]
> **O que é `.trim()`?**
> É um método que remove espaços em branco no início e no fim de um texto. Se o usuário digitar só espaços, `.trim()` transforma em string vazia. Assim você evita salvar um item vazio no banco.

### Critério 2: O Status Psicológico (UX)

Sua tela é **OBRIGADA** a ostentar um **Empty State** lindo (seja criativo com emojis/ícones) quando as telas carregarem sem dados preenchidos. Você **DEVE** exibir alertas de erro no `catch`.

> [!WARNING]
> Se a sua FlatList não tem `ListEmptyComponent`, você perde pontos. Volte na Aula 18 e aplique o empty state em todas as telas. Sem exceção.

### Critério 3: Integração DDL Relacional

100% dos dados principais devem usar o SQLite Nativo (`openDatabaseSync`). Nada do projeto pode ficar apenas em variáveis ou AsyncStorage.

> [!NOTE]
> **ATENÇÃO:** o AsyncStorage é permitido **apenas** para preferências como tema e nome do perfil. Dados reais (tarefas, notas, gastos, etc.) **sempre** vão pro SQLite. O CRUD (Create, Read, Update, Delete) deve funcionar com render dinâmico dos itens na lista.

### Critério 4: Hardware Puro

A aplicação de nota máxima exige pelo menos **UM** componente de engenharia bruta testado:

| Hardware | Exemplo de uso |
|----------|---------------|
| **Câmera** | Tirar foto e salvar no banco |
| **Geolocalização** | Pegar a latitude/longitude atual e exibir no mapa |
| **Push Notification** | Criar um alerta programado |

> [!TIP]
> Se você não tem certeza se seu hardware está integrado corretamente, teste agora: abra a tela que usa câmera/GPS/notificação e veja se funciona. Se der erro, volte na Aula 09 ou 10 e refaça.

---

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

> [!IMPORTANT]
> O README é a **carta de apresentação** do seu projeto. O avaliador lê ele antes de testar o app. Se o README estiver vazio ou mal organizado, a primeira impressão será ruim — mesmo que o código esteja perfeito.

---

## Passo 3: Preparando o ZIP de Entrega

Antes de zipar o projeto, garanta que a pasta `node_modules` **NÃO está incluída**. Ela pesa centenas de MB e o professor executa `npm install` para recriá-la.

> [!CAUTION]
> **NUNCA envie a pasta `node_modules` no ZIP.** Ela é gerada automaticamente pelo `npm install` e não faz parte do seu código-fonte. Enviar ela é como mandar o mercado inteiro junto com sua receita de bolo.

1. Delete ou ignore a pasta `node_modules/`
2. Comprima o projeto com um nome claro: `NomeAluno_Projeto2_PAM1.zip`
3. Inclua no ZIP apenas o código-fonte + o `README.md` com as instruções acima

> [!TIP]
> **Dica rápida:** antes de zipar, rode `npm install` em outra pasta e veja se o app funciona. Se funcionar, o ZIP está correto. Se não funcionar, algo está faltando no código-fonte.

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

> [!NOTE]
> O EAS Build é **opcional** e fora da nota — a entrega continua sendo o projeto rodando via Expo Go. Use este passo só se quiser instalar o app de verdade no seu celular ou apresentar um `.apk` na defesa.

Depois do build, o comando mostra um link para baixar o `.apk` — instale no celular Android como um app comum. Para distribuir oficialmente, você precisaria de uma conta de desenvolvedor (US$ 25 única na Play Store / US$ 99/ano na App Store).

---

## Checklist Final da Aula 20

Marque cada item quando seu projeto estiver pronto:

- [ ] Formulários com validação (`.trim()` nos campos obrigatórios)
- [ ] FlatList com `keyExtractor` em todas as listas
- [ ] Empty state (`ListEmptyComponent`) em todas as FlatLists
- [ ] Loading state (`ActivityIndicator`) em todas as telas com banco
- [ ] SQLite funcionando (CREATE TABLE no `useEffect`, CRUD completo)
- [ ] Recurso do dispositivo integrado (Câmera, GPS ou notificação)
- [ ] README.md profissional com título, telas, banco e instruções
- [ ] ZIP sem pasta `node_modules`

> [!WARNING]
> Se algum item ficou sem marcar, **NÃO** envie o projeto ainda. Volte no passo correspondente e corrija. A entrega com pendências tem desconto automático.

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

> [!IMPORTANT]
> Se você marcar **todos** os itens do checklist, seu projeto está pronto para entrega. Parabéns por chegar até aqui — você completou a trilha principal do curso de PAM I! 🚀

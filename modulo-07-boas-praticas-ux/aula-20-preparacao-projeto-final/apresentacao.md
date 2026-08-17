# Apresentação: O Dia do Lançamento 🚀

**Sugestão de uso:** slides da Aula 20 (leia em voz alta, ou leia sozinho antes do tutorial).

---

## 1. Feature Freeze (A Regra do Ouro do Vale)

O **Feature Freeze** (Congelamento de Funcionalidades) ocorre 2 ou 3 semanas antes do lançamento e avaliação da aplicação final. Nessa fase, você **proíbe** qualquer ideia genial.

- *"Ah, eu devia colocar mapas 3D..."* — Não.
- *"Seria legal se tocasse um sonzinho quando arrasta o dedo..."* — Não.

> [!IMPORTANT]
> **Feature Freeze significa:** pare de adicionar coisas novas. Foque 100% da sua energia em **arrumar as coisas que já existem** para que não deem erro e não crashem. Um app com 3 funções mestras funcionando perfeitamente destrói um app cheio de botão inútil que funciona mal.

Pense num restaurante: se a cozinha já entrega pratos bons, não invente um cardápio novo na véspera da vistoria do Detran Sanitário. Arrume o que já tem.

---

## 2. Compilação Perfeita (The Binary Build)

As empresas de Startup avaliam o produto pelo Pitch (apresentação falada). Você **não** vai mostrar arrays de código para nós. Nós queremos ver o **App Vivo**.

Prepare seu roteiro físico:

> [!NOTE]
> **Checklist de apresentação ao vivo:**
> - Deixe telas com itens cadastrados para não exibir um app vazio pros mentores.
> - Crie um bug simulado (exclua algo) para mostrar a tela de **Empty State** bonitinha.
> - Mostre destreza na fala técnica — não fale: "O app salva aqui". Diga: "Ele executa a gravação na memória flash física do SQLite!"

O teste é simples: se o avaliador pedir "mostre como funciona quando não tem dados", você precisa ter o Empty State pronto. Se pedir "cadastre algo", o formulário precisa validar e salvar. Se pedir "exclua", o CRUD precisa funcionar completo.

> [!WARNING]
> **Erro comum de iniciante:** deixar o app vazio (sem dados cadastrados) na hora da apresentação. Cadastre 3 a 5 itens antes de mostrar o app. Um app sem dados parece quebrado, mesmo que esteja funcionando perfeitamente.

---

## 3. Entrega da Matriz Final

A nossa nota dependerá do uso dos **4 Pilares da Engenharia Mobile** construídos no bimestre:

| Pilar | O que é | Onde foi visto |
|-------|---------|----------------|
| **Interface UI Rica** | Componentes, estilos, organização | Aulas 02–05, 18–19 |
| **Hardware do Dispositivo** | Câmera, GPS, Notificações | Aulas 09–10 |
| **Armazenamento de Estado** | React State, Context API, AsyncStorage | Aulas 08, 11–13 |
| **Banco SQLite Relacional** | Tabelas, CRUD, JOINs | Aulas 14–17 |

> [!IMPORTANT]
> Se a arquitetura bater nosso Guia do Tutorial, você está 100% qualificado para iniciar sua vida de Trabalho em Plataformas Reais de Mobile Native. Os 4 pilares não são sugestão — são **critério de aprovação**.

> [!NOTE]
> **Expanda sua Cabeça:** [Dicas de Deployment Native - Documentação Expo](https://docs.expo.dev/deploy/build-project/)

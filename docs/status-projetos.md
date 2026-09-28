# Status dos Projetos do Trabalho em Grupo – PAM I

> [!TIP]
> Última atualização: **28/09/2026**. Página gerada automaticamente a partir da avaliação dos repositórios dos grupos.

## Legenda

- 🟢 **Evoluiu bem** – Fase 1 completa (e algumas já na Fase 2)
- 🟡 **Evolução parcial** – Fase 1 em andamento
- 🔴 **Não evoluiu** – sem código do projeto no repositório

## Tabela de status

| Projeto | Grupo | Repositório | Status | Progresso |
|---------|-------|-------------|--------|-----------|
| EDUCAMIRIM | VIISRE | [IsabelaStefanelle/EDUCAMIRIM](https://github.com/IsabelaStefanelle/EDUCAMIRIM) | 🟢 | Líder do cronograma — F1+F2 ✅ e **já na Fase 3 (SQLite)** em 26/09: Expo SDK 57, `src/data/database.js` com schema completo (tabelas `status`/`atividades`, FK, `openDatabaseAsync`), telas refatoradas |
| EduSophia | Educa+ | [biawtn/EduSophia](https://github.com/biawtn/EduSophia) | 🟢 | F1 ✅ + **F2 completa em 28/09** ("Fase 2 - Entrega 2"): formulário `adicionar.tsx` + `src/storage/materias.ts` com persistência no AsyncStorage |
| ToDoDev- | FocusIT | [manu0312090-hub/ToDoDev-](https://github.com/manu0312090-hub/ToDoDev-) | 🟢 | F1 ✅ + F2 ✅ (13/09) — navegação stack, AsyncStorage com CRUD. ⚠️ AsyncStorage **sem dependência no package.json** (quebra em runtime) |
| TripGo | TripGo | [JoaoVictorBig156/TripGo](https://github.com/JoaoVictorBig156/TripGo) | 🟢 | F1 ✅ + F2 ✅ (15/09) — expo-router, lista dinâmica persistida, formulário local/hotel/transporte |
| EquipControl | TechControl | [gabriel-giovanini/equipcontrol](https://github.com/gabriel-giovanini/equipcontrol) | 🟢 | F1 ✅ + F2 ✅ (15/09) — formulário + tela de confirmação, design |
| 3GD Stock | 3GD | [GabrielLopesGoncalves/3GDStock](https://github.com/GabrielLopesGoncalves/3GDStock) | 🟢 | F1 ✅ + F2 ✅ (14/09) — Lista/Detalhe + formulário que salva no AsyncStorage |
| Vamoaê | ref's | [Nicolas1993/Vamoa-](https://github.com/Nicolas1993/Vamoa-) | 🟡 | Evoluiu do zero (22/09): merge do PR #2 (estrutura) + tela **Lista estilo Airbnb** com imagens dinâmicas (`viagensEmAlta`). Falta F2 (AsyncStorage) |
| Pet Match | Zenin's | [Ruan2009-off/Pet_Match](https://github.com/Ruan2009-off/Pet_Match) | 🟡 | F1 avançando — Expo SDK 57 + expo-router + tela de **Cadastro** (23/09). Sem AsyncStorage ainda (F2 pendente) |
| MEIHub | Babuínos do note.js | [Zero8KDev/MEIHub](https://github.com/Zero8KDev/MEIHub) | 🟡 | F1 em andamento — parado desde 15/09 (issue #3 aberta) |
| CDF | Controle Financeiro | [Guilherme-Caparroz/CDF](https://github.com/Guilherme-Caparroz/CDF) | 🟡 | F1 em andamento — parado desde 14/09; PR de estrutura #2 sem merge |
| F.O.C | F.O.C | [pedrocb12/F.O.C](https://github.com/pedrocb12/F.O.C) | 🟡 | F1 — animação Reanimated + validação; parado desde 11/09 |
| Boom Patch | TRP bentão | [rayancl/Boom-Patch](https://github.com/rayancl/Boom-Patch) | 🔴 | Nada desde 01/09 — PRs #2 (estrutura) e #3 (F1+F2 quase prontas) **sem merge** |

## Resumo

| Status | Quantidade |
|--------|-----------|
| 🟢 Evoluiu bem | 6 |
| 🟡 Evolução parcial | 5 |
| 🔴 Não evoluiu | 1 |

## Evolução desde 21/09/2026

- **EDUCAMIRIM (VIISRE)** – Subiu para a **Fase 3 (SQLite)** antes do prazo (19/10): migrou as telas para `expo-sqlite` com schema completo. Referência para as outras equipes.
- **EduSophia (Educa+)** 🟡 → 🟢 – Completou a **Fase 2** hoje (28/09): formulário + persistência com AsyncStorage.
- **Vamoaê (ref's)** – Evoluiu do código vazio para uma tela de **Lista estilo Airbnb** com imagens (22/09). Segue no próprio código após o merge do PR #2.
- **Pet Match (Zenin's)** – Avançou para Expo SDK 57 + tela de Cadastro (23/09).
- **Boom Patch (TRP bentão)** – Segue 🔴: não retornou nenhum dos PRs disponibilizados (#2 estrutura, #3 F1+F2 quase prontas).

## Pendências por grupo

- **ref's (Vamoaê)** – O PR #3 (scaffold F1+F2 com expo-router) **conflita** com o código próprio que o grupo começou a escrever (App.js). Como eles já avançaram, recomendar fechar o PR #3 e seguir no próprio código, completando a **Fase 2** (AsyncStorage) na tela Lista.
- **TRP bentão (Boom Patch)** – Aceitar o PR #2 (estrutura) e, de preferência, o PR #3 (F1+F2 quase prontas) para sair do zero. Deve retomar até a próxima semana.
- **Educa+ (EduSophia)** – Evolução ótima, mas os PRs #1 (inscrição) e #2 (estrutura) seguem abertos. Fazer o merge para registrar a confirmação.
- **Controle Financeiro (CDF)** – Aceitar o PR de estrutura (#2). Evolução parada desde 14/09.
- **FocusIT (ToDoDev-)** – ⚠️ Corrigir dependência: AsyncStorage é usado mas **não está no package.json** (issue #2 aberta) — o app quebra ao abrir.
- **Babuínos do note.js (MEIHub)** e **F.O.C** – Retomar atividade na Fase 1 (parados desde 15/09 e 11/09).

## Links úteis

- [Aulas do curso no GitHub Pages](https://etec-bento-quirino.github.io/Programacao-Aplicativos-Moveis-I/)
- [Fichas de entrega](https://github.com/Etec-Bento-Quirino/Programacao-Aplicativos-Moveis-I/tree/main/modulo-08-projeto-final)
  - [Fase 1](https://github.com/Etec-Bento-Quirino/Programacao-Aplicativos-Moveis-I/blob/main/modulo-08-projeto-final/fase1.md) – Proposta + 2 telas
  - [Fase 2](https://github.com/Etec-Bento-Quirino/Programacao-Aplicativos-Moveis-I/blob/main/modulo-08-projeto-final/fase2.md) – Formulário + AsyncStorage
  - [Fase 3](https://github.com/Etec-Bento-Quirino/Programacao-Aplicativos-Moveis-I/blob/main/modulo-08-projeto-final/fase3.md) – SQLite + CRUD
  - [Fase 4](https://github.com/Etec-Bento-Quirino/Programacao-Aplicativos-Moveis-I/blob/main/modulo-08-projeto-final/fase4.md) – Versão final + apresentação
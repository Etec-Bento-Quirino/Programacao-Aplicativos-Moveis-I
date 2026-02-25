# Aula 19 – Revisão e boas práticas

**Sugestão de execução:** quinzena 24 (23/11/2026 a 04/12/2026).

**Base tecnológica:** Consolidação; organização do código; ciclo de vida e fluxo de dados.

---

## Objetivo

Revisar **organização de pastas**, **nomenclatura** e **fluxo de dados** (estado, contexto, SQLite) para deixar o projeto preparado para a entrega final. Documentar a estrutura do app.

---

## Parte 1 – Organização de pastas (sugestão)

```
projeto/
  App.js
  app.json
  package.json
  screens/           (telas / páginas)
    ListaScreen.js
    DetalheScreen.js
    FormScreen.js
  components/       (componentes reutilizáveis)
    Botao.js
    CardItem.js
  contexto/         (Context API)
    TemaContext.js
  services/ ou db/   (acesso a dados)
    database.js      (abertura do banco, helpers de SQL)
  constantes.js     (cores, chaves AsyncStorage, etc.)
```

---

## Parte 2 – Nomenclatura

- **Telas:** sufixo Screen (ex.: ListaScreen, FormScreen).
- **Componentes:** nome descritivo (ex.: BotaoPrimario, ItemLista).
- **Funções:** verbo + nome (ex.: carregarItens, salvarNoBanco).
- **Constantes:** UPPER_SNAKE_CASE para chaves e constantes globais (ex.: CHAVE_USUARIO, COR_PRIMARIA).

---

## Parte 3 – Ciclo de vida e dados

- **Montagem:** useEffect(() => { carregarDados(); }, []) para carregar lista ao abrir.
- **Navegação:** passar só o necessário por params (id ou objeto pequeno); dados pesados vêm do banco na tela de destino.
- **Persistência:** SQLite como fonte da verdade para listas; AsyncStorage para preferências (tema, nome do usuário) se fizer sentido.
- **Atualização da lista:** após INSERT/UPDATE/DELETE, chamar novamente a função que faz SELECT e setState para refletir na tela.

---

## Parte 4 – Documentar a estrutura

Crie um **README.md** no projeto (ou um doc no classroom) com:

1. **Nome do app** e tipo de projeto (A, B, C ou D).
2. **Telas:** lista das telas e o que cada uma faz.
3. **Tabelas SQLite:** nome das tabelas e colunas principais.
4. **Como rodar:** `npm install`, `npx expo start`, e como abrir no dispositivo/emulador.

Isso ajuda na correção e na apresentação final.

---

## Checklist

- [ ] Pastas organizadas (screens, components, services/db ou equivalente).
- [ ] Nomenclatura consistente; constantes centralizadas quando fizer sentido.
- [ ] README ou documento com estrutura das telas e do banco; instruções para rodar.

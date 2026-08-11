# Fase 4 – Entrega 4 (Versão final e apresentação)

**Sugestão de execução:** Trabalho em Grupo – Entrega 4 (16/11/2026).

[Trabalho em Grupo](README.md) · [Calendário](../docs/calendario-aulas.md)

## Objetivo

Entregar o app completo: SQLite como única fonte de dados, recurso do dispositivo quando aplicável (notificação, foto, geolocalização) e polish de UX (loading, empty state, tratamento de erros).

## Requisitos

1. **SQLite**
   - Todo o fluxo (listar, adicionar, editar, excluir) usando apenas SQLite.
   - Nenhum dado crítico em AsyncStorage (AsyncStorage pode ser usado só para preferências, ex.: filtro padrão).
2. **Recurso do dispositivo (opcional, mas valorizado)**
   - Usar pelo menos um recurso do aparelho quando fizer sentido ao tema, ex.: notificação local (`expo-notifications`), foto (`expo-image-picker`) ou localização (`expo-location`).
3. **UX**
   - Loading ao carregar a lista (enquanto lê do SQLite).
   - Empty state quando não houver registros (mensagem + ícone ou ilustração).
   - Mensagem de erro amigável se falhar ao salvar ou carregar.
4. **Entrega**
   - Código fonte (repositório ou ZIP).
   - APK ou link para teste (Expo Go ou build).
   - Breve apresentação em sala.

## Conteúdos cobrados

- SQLite (Aulas 14, 15, 16, 17).
- Notificações (Aula 10), câmera/galeria (Aula 08), localização (Aula 09).
- UX: loading, empty state, erros (Aula 18).

## Critérios de avaliação

- App completo com SQLite; CRUD funcionando.
- Uso de recurso do dispositivo ou justificativa de não uso.
- Interface consistente; loading e empty state presentes.
- Organização do código e clareza na apresentação.

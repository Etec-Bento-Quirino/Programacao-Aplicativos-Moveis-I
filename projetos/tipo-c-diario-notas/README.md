# Tipo C – App Diário / Notas com Categorias

App para criar notas ou entradas de diário, com categorias (ex.: Trabalho, Pessoal). Ao final: SQLite com tabelas notas e categorias, possibilidade de anexar foto (galeria) e notificação opcional.

## Escopo geral

- **Fase 1 (B1):** Lista estática de “notas” (título + data); tela de detalhe ao tocar; botão “Nova nota” (sem persistência).
- **Fase 2 (B2):** Formulário nova nota (título, texto, categoria fixa); AsyncStorage; listagem carregada do storage; opção de escolher foto da galeria para a nota.
- **Fase 3 (B3):** SQLite: tabelas `categorias` e `notas` (id_categoria, titulo, texto, caminho_foto, data); CRUD; listar por categoria.
- **Fase 4 (B4):** Galeria integrada (salvar caminho ou base64); notificação opcional; loading/empty state; entrega completa.

## Entregas por bimestre

| Bimestre | Entrega |
|----------|--------|
| 1 | Lista de notas + detalhe; navegação. |
| 2 | Formulário nota; AsyncStorage; galeria para foto. |
| 3 | SQLite (categorias + notas); CRUD; listagem por categoria. |
| 4 | App completo com foto e SQLite; UX; apresentação. |

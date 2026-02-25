# Tipo D – App Controle de Gastos / Eventos

App para registrar gastos ou eventos (data, valor, categoria, descrição). Ao final: SQLite com tabelas categorias e registros; listagem por período ou categoria; opcional gráfico ou totalizador.

## Escopo geral

- **Fase 1 (B1):** Lista estática de 3 “gastos” ou “eventos”; tela de detalhe; botão “Novo registro”.
- **Fase 2 (B2):** Formulário (descrição, valor, data, categoria); AsyncStorage; listagem carregada; geolocalização opcional (onde foi o gasto).
- **Fase 3 (B3):** SQLite: tabelas `categorias` (ex.: Alimentação, Transporte) e `gastos` (id_categoria, descricao, valor, data, lat, lng opcional); CRUD; listar por categoria ou período.
- **Fase 4 (B4):** Totalizador por período/categoria; mapa opcional (onde foi o gasto); loading/empty state; entrega completa.

## Entregas por bimestre

| Bimestre | Entrega |
|----------|--------|
| 1 | Lista de registros + detalhe; navegação. |
| 2 | Formulário; AsyncStorage; geolocalização opcional. |
| 3 | SQLite (categorias + gastos); CRUD; filtros. |
| 4 | App completo; totalizador ou mapa; UX; apresentação. |

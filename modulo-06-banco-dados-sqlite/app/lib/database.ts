// ============================================================================
//  lib/database.ts
//  ÁREA: BANCO DE DADOS LOCAL — Aulas 14 a 17 (expo-sqlite).
//
//  Centraliza a abertura do banco e a criação das tabelas. A dependência
//  `expo-sqlite` já vem instalada no package.json deste projeto.
//  Use este arquivo em qualquer tela que precise ler/escrever no banco.
// ============================================================================

// TAREFA (Aula 14): abrir o banco e criar a primeira tabela, ex.:
//
//   import * as SQLite from 'expo-sqlite';
//
//   export const banco = SQLite.openDatabaseSync('meu_app.db');
//
//   export function criarTabelas() {
//     banco.execSync(`
//       CREATE TABLE IF NOT EXISTS metas (
//         id INTEGER PRIMARY KEY AUTOINCREMENT,
//         descricao TEXT NOT NULL,
//         status_feita INTEGER DEFAULT 0
//       );
//     `);
//   }
//
// TAREFA (Aula 15): adicionar aqui as funções do CRUD, ex.:
//   - listar(): banco.getAllSync('SELECT * FROM metas ORDER BY id DESC')
//   - inserir(descricao): banco.runSync('INSERT INTO metas (descricao) VALUES (?)', [descricao])
//   - atualizar(id, feita): banco.runSync('UPDATE metas SET status_feita = ? WHERE id = ?', [feita, id])
//   - excluir(id): banco.runSync('DELETE FROM metas WHERE id = ?', [id])
//
// Aulas 16 e 17: formulários integrados ao banco e relações entre tabelas
// (ex.: categorias e itens com JOIN).
//
// Dica (Aula 14): para apagar tudo em testes, use
//   await SQLite.deleteDatabaseAsync('meu_app.db');

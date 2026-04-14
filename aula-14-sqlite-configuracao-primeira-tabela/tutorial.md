# Tutorial: A Forja da Tabela de Tarefas

**Sugestão de execução:** Quinzena 17.

O StickerSmash foi nosso protótipo de Design. Mas hoje, construiremos as fundações (o Database) para o nosso projeto independente "Tarefas Diárias". Este módulo foca unicamente em construir o cofre do zero, sem construir toda a interface linda ainda. 

---

## Passo 1: Injeção de Maquinário DDL
No console de comando do terminal, acione a instalação da ponte (Lembre-se de desligar o server com Ctrl+C primeiro e ligar depois).
```bash
npx expo install expo-sqlite
```

## Passo 2: O Guardião de Arranque (`openDatabaseSync`)

Crie uma tela nova limpa para testar, chamada `BancoTest.tsx`.
No topo, importaremos a ferramenta. Ao invés da complicação de `useState`, usaremos a sintaxe pura moderna e limpa de abertura assíncrona. 

```tsx
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as SQLite from 'expo-sqlite';

// ABERTURA IMEDIATA DO ARQUIVO BINÁRIO (Se ikke existir, ele forja no SSD do celular agora).
const bancoDados = SQLite.openDatabaseSync('aplicativo_v1.db');

export default function BancoTest() {
  const [bancoGerado, setBancoGerado] = useState(false);

  // Lembra dele? O Guarda Noturno. Irá criar as tabelas SÓ quando a tela abrir 1 vez.
  useEffect(() => {
    try {
      bancoDados.execSync(`
        CREATE TABLE IF NOT EXISTS metas (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          descricao TEXT NOT NULL,
          status_feita INTEGER DEFAULT 0
        );
      `);
      setBancoGerado(true);
      console.log("Sucesso: A Tabela nas profundezas está montada.");
    } catch(err) {
      console.error("Pane no SQLite C++ engine:", err);
    }
  }, []);
```

## Passo 3: O Primeiro Teste Lógico (INSERT)

Ainda no mesmo arquivo, embaixo do *useEffect*, você vai criar uma função e um *Componente Button* só para socar uma tarefa pra dentro na brutalidade e ver se o banco vai engolir:

```tsx
  const socarTarefaNoBanco = () => {
    // A interrogação previne "SQL Injection Attack" onde hackers escrevem DROPs de BD.
    bancoDados.runSync(
        'INSERT INTO metas (descricao) VALUES (?)', 
        ['Dominar o mundo hoje.']
    );
    alert('Foi para o Cofre de Titânio. Se fechar o app, continuará vivo nos elétrons físicos!');
  };

  // --- Renderização Pobre de Laboratório:
  return (
    <View style={styles.container}>
      <Text style={styles.titulos}> 
        Status do Cofre: { bancoGerado ? "AERTO E OPERACIONAL" : "CONSTRUINDO..."  } 
      </Text>
      
      {bancoGerado && (
         <Text onPress={socarTarefaNoBanco} style={styles.botaoSocar}>
            [ SIMULAR UM INSERT SQL ]
         </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  titulos: { fontSize: 20, color: 'blue', marginBottom: 30 },
  botaoSocar: { padding: 15, backgroundColor: 'red', color: 'white', fontWeight: 'bold' }
});
```

Na próxima aula nós faremos o painel majestoso de leitura (SELECT). Avance para a Sua Missão de prova!

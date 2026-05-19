# Atividade 14: Primeira Tabela e Inspect SQLite ⚔️

**Objetivo da Atividade:**

Criar sua primeira tabela no banco de dados SQLite (`CREATE TABLE`) e comprovar que as inserções de dados estão ocorrendo perfeitamente lendo o retorno bruto no console de debug.

---

## O Desafio: Raio-X do Banco de Dados

Neste desafio, você não precisará criar uma visualização bonitinha (FlatList) ainda. A intenção é confirmar via terminal do VS Code (ou do Metro Bundler) que o SQLite responde adequadamente.

1. Configure o banco de dados e insira dois registros (ex: Metas).
2. Crie uma função na sua tela chamada `verDadosBanco`. Essa função utilizará o método do expo-sqlite para buscar todos os registros e fará um `console.log` para exibir no terminal.
3. Adicione um botão na tela que chame a função `verDadosBanco`.

### 💡 Dica de como iniciar:

Depois que o banco estiver configurado usando a instrução de inicialização padrão, você pode buscar os dados utilizando `getAllSync` (se estiver no formato síncrono do novo Expo SQLite) e logar o resultado.

```tsx
import React from 'react';
import { View, Button } from 'react-native';
// Lembre-se de importar o hook do seu banco (ex: useSQLiteContext)

export default function RaioX() {
  // const db = useSQLiteContext(); // Hook dependendo de como você montou o provider

  const verDadosBanco = () => {
    try {
      // Puxa massivamente todos os registros
      // const registros = db.getAllSync('SELECT * FROM metas');
      
      // Imprime o resultado no terminal negro do Node/Expo
      // console.log("Dados do SQLite:", registros);
      
      console.log("Simulação: Lógica de buscar no banco está montada.");
    } catch (error) {
      console.log("Erro ao buscar", error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Inspecionar Banco no Terminal" onPress={verDadosBanco} />
    </View>
  );
}
```

## Entrega:
Rode a aplicação e clique no botão de inspecionar. Selecione o Terminal do VS Code onde o Expo está sendo executado e tire uma captura de tela (print) evidenciando o array de objetos JSON retornado pelo SQLite (mostrando as suas "Metas"). Envie a imagem na plataforma.

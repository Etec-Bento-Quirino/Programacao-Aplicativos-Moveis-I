# Atividade 14: Primeira Tabela e Raio-X do SQLite ⚔️

**Sugestão de execução:** Quinzena 17 | **Bimestre:** 3 | **Valendo XP e nota**

---

**Objetivo da Atividade:** criar sua primeira tabela no banco SQLite (`CREATE TABLE`) e comprovar que as inserções de dados estão funcionando lendo o retorno pelo terminal.

> [!NOTE]
> Se você ainda não fez o [Tutorial da Aula 14](tutorial.md), faça primeiro. Esta atividade cobra exatamente os passos de lá — só com uma pitada extra de desafio.

---

## O Desafio: Raio-X do Banco de Dados

Neste desafio, você não precisa criar uma visualização bonita ainda. A intenção é confirmar pelo terminal do VS Code (ou do Metro Bundler) que o SQLite responde corretamente.

1. Configure o banco de dados e insira **dois registros** (por exemplo, duas metas).
2. Crie uma função na sua tela chamada `verDadosBanco`. Essa função utilizará o método `getAllSync` para buscar todos os registros e fará um `console.log` para exibir no terminal.
3. Adicione um botão na tela que chame a função `verDadosBanco`.

### 💡 Dica de como iniciar:

Depois que o banco estiver configurado, você pode buscar os dados utilizando `getAllSync` e logar o resultado:

```tsx
import React from 'react';
import { View, Button } from 'react-native';
// Importe o hook do seu banco (ex: useSQLiteContext)

export default function RaioX() {
  // const db = useSQLiteContext();

  const verDadosBanco = () => {
    try {
      // const registros = db.getAllSync('SELECT * FROM metas');
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

> [!TIP]
> **Dica de como iniciar:** descomente as linhas comentadas e adapte para o nome da sua tabela. Rode o app, clique no botão e olhe o terminal do VS Code — lá aparecerá o array de objetos JSON!

> [!WARNING]
> Se o terminal mostrar `[]` (array vazio), significa que a tabela existe mas está vazia. Verifique se o `runSync` de INSERT realmente rodou antes do `getAllSync`.

---

## Checklist de Entrega

Antes de enviar, confira:

- [ ] Tabela `metas` criada com `CREATE TABLE IF NOT EXISTS`
- [ ] Dois registros inseridos com `INSERT INTO`
- [ ] Função `verDadosBanco` usando `getAllSync` criada
- [ ] Botão na tela que chama a função
- [ ] Print do terminal mostrando o array de objetos JSON com os dados

---

## Como isso se aplica ao seu projeto

A função `verDadosBanco` é o equivalente a um "diagnóstico" do seu banco. Em qualquer categoria do seu projeto, você vai precisar saber se os dados estão sendo salvos corretamente — e o `console.log` é o primeiro passo para confiar no que o banco está fazendo. Na próxima aula, vamos transformar esse raio-x numa lista visual na tela!

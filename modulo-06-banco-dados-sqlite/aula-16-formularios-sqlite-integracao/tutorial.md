# Tutorial: Amarrando Formulário, Banco e Navegação

**Sugestão de execução:** Quinzena 21 | **Bimestre:** 4

> [!NOTE]
> **O que você vai aprender hoje:**
> - Criar duas tabelas relacionadas (`categorias` e `itens`) com `FOREIGN KEY`
> - Unir um formulário (TextInput) com o banco de dados SQLite
> - Usar `router.back()` para voltar à listagem após salvar
> - Filtrar registros por parâmetro de rota com `useLocalSearchParams`
>
> **Pré-requisitos:** [Aula 15](../aula-15-sqlite-crud-completo/README.md) — CRUD básico com SQLite; [Aula 07](../../modulo-03-navegacao-formularios/aula-07-formularios-entrada-dados/README.md) — `TextInput` e validação.

---

O objetivo desta aula não é fazer uma tela bonita. É fazer o **fluxo perfeito**: usuário preenche o formulário → dados salvos no banco → volta para a lista que atualiza sozinho.

Pense numa loja: o cliente pega o produto, leva ao caixa, o caixa registra no sistema, e a prateleira é reposta. É esse ciclo que vamos construir!

---

## Passo 1: Criando as Duas Tabelas Relacionadas

No arquivo `_layout.tsx` (ou onde você cria as tabelas), vamos criar **duas tabelas** de uma vez — categorias e itens — ligadas por uma **Foreign Key**:

```sql
bancoDados.execSync(`
  CREATE TABLE IF NOT EXISTS categorias (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS itens (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_categoria INTEGER NOT NULL,
    nome TEXT,
    FOREIGN KEY (id_categoria) REFERENCES categorias(id)
  );
`);
```

Explicando:

- `categorias` → tabela simples com `id` e `nome`
- `itens` → tabela com `id`, `nome` e `id_categoria` que **aponta** para o `id` da tabela `categorias`
- `FOREIGN KEY (id_categoria) REFERENCES categorias(id)` → a **ponte** entre as duas tabelas

> [!CAUTION]
> A `FOREIGN KEY` só funciona se a tabela referenciada (`categorias`) já existir. Por isso criamos `categorias` **antes** de `itens`!

Agora, insira algumas categorias de teste:

```sql
bancoDados.runSync("INSERT INTO categorias (nome) VALUES ('Alimentos'), ('Roupas')");
```

> [!TIP]
> Em vez de usar valores fixos como "Alimentos" e "Roupas", você pode criar uma função `popularCategorias()` que só roda se a tabela estiver vazia. Assim o teste não duplica dados toda vez que o app abre!

---

## Passo 2: O Formulário de Cadastro

Vamos criar a tela de formulário com um `TextInput` para o nome do item e um botão para salvar. Esta tela recebe a `id_categoria` por parâmetro de rota:

```tsx
import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

export default function TelaDeFormulario() {
  const router = useRouter();
  const { categoriaId } = useLocalSearchParams<{ categoriaId: string }>();

  const [nomeForm, setNomeForm] = useState('');

  const salvarItem = () => {
    if (!nomeForm.trim()) return; // bloqueia campos em branco

    bancoDados.runSync(
      'INSERT INTO itens (id_categoria, nome) VALUES (?, ?)',
      [Number(categoriaId), nomeForm]
    );

    router.back(); // fecha o formulário e volta para a listagem
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        value={nomeForm}
        onChangeText={setNomeForm}
        placeholder="Nomeie o Item"
        style={styles.input}
      />
      <Button title="Salvar" onPress={salvarItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: { flex: 1, padding: 20, justifyContent: 'center' },
  input: { borderWidth: 1, padding: 10, marginBottom: 15, borderRadius: 5 }
});
```

Explicando:

- `useLocalSearchParams()` → pega o `categoriaId` que veio na URL da rota
- `if (!nomeForm.trim()) return;` → se o campo estiver vazio, **não salva** (proteção!)
- `router.back()` → fecha a tela de formulário e volta para a listagem automaticamente

> [!WARNING]
> Sem o `router.back()`, o usuário ficaria "presa" na tela de formulário depois de salvar. Sempre ofereça uma forma de voltar!

---

## Passo 3: A Listagem Parametrizada

A tela de listagem recebe o `id` da categoria e mostra **só os itens** daquela categoria:

```tsx
import { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function ListaEspecifica() {
  const { id_da_categoria } = useLocalSearchParams<{ id_da_categoria: string }>();
  const [itensFiltrados, setItensFiltrados] = useState([]);

  useEffect(() => {
    // Só traz os itens da categoria selecionada
    const resultado = bancoDados.getAllSync(
      'SELECT * FROM itens WHERE id_categoria = ? ORDER BY id DESC',
      [id_da_categoria]
    );
    setItensFiltrados(resultado);
  }, [id_da_categoria]);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={itensFiltrados}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={{ padding: 15, borderBottomWidth: 1 }}>
            <Text>{item.nome}</Text>
          </View>
        )}
      />
    </View>
  );
}
```

Explicando:

- `useLocalSearchParams()` → pega o `id_da_categoria` da URL
- `WHERE id_categoria = ?` → filtra só os itens que pertencem àquela categoria
- O `useEffect` vigia o `id_da_categoria` e recarrega se ele mudar

> [!NOTE]
> Essa é a magia do Expo Router: a URL da rota carrega dados! Em vez de usar "estado global" para passar dados entre telas, usamos parâmetros de rota — é mais simples e mais seguro.

---

## Passo 4: O Fluxo Completo (o ciclo da loja)

Vamos juntar tudo. O fluxo completo é:

1. **Tela de Categorias** → mostra "Alimentos", "Roupas"
2. Usuário clica em "Alimentos" → navega para `/itens?id_da_categoria=1`
3. **Tela de Itens** → mostra só os itens da categoria 1
4. Usuário clica "Adicionar" → navega para `/formulario?categoriaId=1`
5. **Tela de Formulário** → preenche o nome, clica "Salvar"
6. `INSERT INTO itens ...` → salva no banco
7. `router.back()` → volta para a tela de itens
8. **Tela de Itens recarrega** → o novo item aparece na lista!

> [!IMPORTANT]
> Esse padrão "lista → formulário → salvar → voltar" se repete em **toda** tela do seu projeto. Domine isso aqui e você domina qualquer tela de cadastro!

---

## Checklist da Aula 16

Marque cada item quando conseguir fazer:

- [ ] Duas tabelas (`categorias` e `itens`) criadas com `FOREIGN KEY`
- [ ] Categorias de teste inseridas
- [ ] Tela de formulário com `TextInput` e `Button` funcionando
- [ ] `useLocalSearchParams` recebendo o `categoriaId`
- [ ] `INSERT INTO` salvando o item com a `id_categoria` correta
- [ ] `router.back()` voltando para a listagem após salvar
- [ ] Tela de listagem filtrando por `id_categoria`
- [ ] Novo item aparecendo na lista sem fechar o app

> [!NOTE]
> Se algum item ficou sem marcar, volte no passo correspondente. Não siga em frente com pendências — a próxima aula usa tudo isso!

---

## Como isso se aplica ao seu projeto

Esta aula é o coração da **Fase 3** do seu projeto. O padrão "tela de lista → tela de formulário → salvar → voltar" se repete em todos os tipos:

| Projeto | Tela lista | Tela formulário | O que salva |
|---|---|---|---|
| Categoria 1 | Lista de tarefas | Nova tarefa | `titulo`, `descricao` |
| Categoria 2 | Lista de categorias → lista de itens | Novo item | `nome`, `id_categoria` |
| Categoria 3 | Lista de notas | Nova nota | `titulo`, `conteudo` |
| Categoria 4 | Lista de gastos | Novo gasto | `valor`, `descricao`, `id_categoria` |

Na próxima aula, vamos aprender a **juntar** dados de duas tabelas numa única consulta com o `JOIN` — sem precisar fazer duas buscas separadas. Vejo você lá!

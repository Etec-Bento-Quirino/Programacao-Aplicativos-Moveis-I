# Tutorial: Amarrando Input, Picker e Cofre

**Sugestão de execução:** Quinzena 21.

O objetivo do nosso laboratório não será a tela esteticamente fofa, e sim o Fluxo Perfeito do usuário. 
Como nós gravamos dados relacionais?

---

## Passo 1: A Forja Dupla Embutida

No arquivo inicial que dispara na Raiz do App (Geralmente no `_layout.tsx` do Router no Expo), Crie as duas tabelas interdependentes no `useEffect`:

```sql
  bancoDados.execSync(`
    CREATE TABLE IF NOT EXISTS categorias (
       id INTEGER PRIMARY KEY AUTOINCREMENT, 
       nome TEXT NOT NULL
    );
    
    -- Atenção pra linha da Referência. Ela cria a Dependência entre nós!
    CREATE TABLE IF NOT EXISTS itens (
       id INTEGER PRIMARY KEY AUTOINCREMENT, 
       id_categoria INTEGER NOT NULL, 
       nome TEXT, 
       FOREIGN KEY (id_categoria) REFERENCES categorias(id) -- 👈 ELO DE AÇO: Uma Categoria é a Pai deste item. Sem Pai, ele não nasce.
    );
  `);
```

*(Adicione algumas categorias fixas pra servir de teste:)*
```sql
  bancoDados.runSync(`INSERT INTO categorias (nome) VALUES ('Alimentos'), ('Roupas')`);
```

## Passo 2: O Formulário Front-End 

Na sua tela de Cadastro (Formulário Novo), usaremos estados para segurar a Letra que o humano clica.
E usaremos um `<Select>` para a categoria de id estático 1 ou 2.

```tsx
import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router'; // Nossa ponte do Metro

export default function TelaDeFormulario() {
  const router = useRouter(); 

  const [nomeForm, setNomeForm] = useState('');
  const [categoriaFKEscolhida, setCategoriaFKEscolhida] = useState(1); // Supondo que 1 é "Alimentos"

  const marretarNoBancoEVoltar = () => {
     // A Validação cega: Não passa campo vazio pro Cofre
     if(!nomeForm.trim()) return;

     bancoDados.runSync(
        'INSERT INTO itens (id_categoria, nome) VALUES (?, ?)', 
        [categoriaFKEscolhida, nomeForm]
     );

     // O Pulo do Gato. O Formulario se fecha após a Missão Cumprida!
     router.back();
  }

  return (
     <View style={styles.formContainer}>
         <TextInput 
            value={nomeForm} 
            onChangeText={setNomeForm} 
            placeholder={"Nomeie o Item"} 
         />
         
         {/* Em app real você usaria a biblioteca Picker aqui para exibir "Alimentos/Roupas".
            Para o laboratório numérico mental: */}
         <Button title="Salvar Ferozmente nas Roupas" onPress={() => {
            setCategoriaFKEscolhida(2);
            marretarNoBancoEVoltar();
         }} />

     </View>
  )
}
```

## Passo 3: A Listagem Parametrizada

A Tela 1 (`Home`) só carrega as Categorias Gerais.
A Tela 2 (`Listagem de Roupas`) é chamada mandando a Carga de Navegação. Ela abre e filtra o que carrega do SQLite:

```tsx
// Se chegou usando o Expor Router: 
import { useLocalSearchParams } from 'expo-router';

export default function ListaEspecifica() {
   const { id_da_categoria_puxada } = useLocalSearchParams();
   const [itensFiltrados, setItensFiltrados] = useState([]);

   useEffect(() => {
     // O Bicho Pega aqui! Não trago a tabela inteira, trago apenas as roupas se a PK for 2!
     const resultado = bancoDados.getAllSync(
         'SELECT * FROM itens WHERE id_categoria = ? ORDER BY id DESC', 
         [id_da_categoria_puxada]
     );

     setItensFiltrados(resultado);
   }, [id_da_categoria_puxada]) // < Repare q o GuardaNoturno vigia o ID e recarrega se mudar!
   
   // ... Retornar e renderizar a Flatlist padrão com o Array 'itensFiltrados' ...
}
```

Este é o poder da Separação por Categoria com Performance Absoluta do SQLite. Não existe lag. Não há queda de Frames. Siga para o Teste Visual!

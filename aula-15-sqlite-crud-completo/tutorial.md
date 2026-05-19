# Tutorial: O Executor Cirúrgico de Metas

**Sugestão de execução:** Quinzena 18.

Vamos puxar a nossa Tela que foi erguida na Aula 14, unificando os conceitos lógicos para montar a fúria Completa de Listagem (`Flatlist` de alta performance baseada no lixeiro *Garbage collector*) + Botões Dinâmicos!

---

## Passo 1: O Funil de Listagem (Read e State Sync)
Continuando no escopo do seu Componente importando o `bancoDados`, nós forçamos o R da equação (No `useEffect` do Guardião, que ativou a Tabela, e nós acoplamos a Listagem Lógica):

```tsx
  const [listaDeMetas, setListaMetas] = useState([]);

  // A FUNÇÃO MESTRA RECARREGADORA UNIVERSAL
  const rebobinarServidor = () => {
    // 1. O Padrão R - Read: Puxe em cascata Inversa (Sempre a maior/mais nova de cima)
    const puxadaBruta = bancoDados.getAllSync('SELECT * FROM metas ORDER BY id DESC');
    setListaMetas(puxadaBruta); 
  };

  useEffect(() => {
    // ... criação das tabelas ensinada na Aula Anterior vai aqui em cima ...
    setBancoGerado(true);

    // Imediatamente após gerar, force uma Lida Base do SQLite para puxar resquícios passados:
    rebobinarServidor();
  }, []);
```

## Passo 2: Os Disparadores (Delete e Insert)

Temos a base. Crie as duas funções principais que sofrerão botões da UI. Repare que passaremos parâmetro no meio ali da string do comando usando `?` ! Isso é brutal de lindo. O SQLite entende que o `id_da_lista` que você jogou no colchetes substituirá aquela Interrogação e fará o estrago oficial!

```tsx
  // --- O PADRÃO CREATE
  const injetarMetaNova = (qualquerTextoVindoDeInput) => {
    // 👈 O "?" salva sua vida! O SQLite embute a variável lá com segurança (Evita Injeção SQL)
    bancoDados.runSync('INSERT INTO metas (descricao) VALUES (?)', [qualquerTextoVindoDeInput]);
    
    // O REFRESH MESTRE ENSINADO NA TEORIA:
    rebobinarServidor(); // 👈 Repinta a UI automaticamente após inserir a meta no SQLite
  };

  // --- O PADRÃO DELETE
  const sumirComMetaNoSQL = (ID_Exato_Da_Linha_Que_Cliquei) => {
    // Se o banco achar esse cara... Apague sem perdão.
    bancoDados.runSync('DELETE FROM metas WHERE id = ?', [ID_Exato_Da_Linha_Que_Cliquei]); // 👈 Passamos a variável do ID no Array secundário!
    
    // O REFRESH MESTRE PARA QUE O COMPONENTE DA TELA SUMA:
    rebobinarServidor(); // 👈 A Meta acabou de morrer do DB, ao rebobinar, ela não existe mais!

  };
```

## Passo 3: O Render Final (A Interface Crua)
Usamos a Flatlist da Aula 05 para repintar os arrays brutos em Componentes Individuais. Eles terão botões.

```tsx
  return (
    <View style={{ flex: 1, padding: 20 }}>
      {/* Aqui iria um <TextInput /> charmoso apontando para a injeção... */}
      <Text style={{fontSize: 20}}>Painel De Operações Master!</Text>
      
      <FlatList
        data={listaDeMetas}
        keyExtractor={(item) => String(item.id)} // Chave Única que o loop Enxerga 
        renderItem={({ item }) => (
          <View style={{ padding: 15, borderBottomWidth: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>Meta #{item.id} - {item.descricao}</Text>
            
            <TouchableOpacity onPress={() => sumirComMetaNoSQL(item.id)}>
              <Text style={{ color: 'red', fontWeight: 'bold' }}>EXCLUIR_ITEM()</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
```

Avance para e missão final da Fase, você foi exímio.

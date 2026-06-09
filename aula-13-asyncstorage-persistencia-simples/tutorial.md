# Tutorial: Escrevendo com Pedra (Persistência)

**Sugestão de execução:** Quinzena 16 | **Bimestre:** 3

> **Pré-requisitos:** [Aula 12](../aula-12-contexto-hooks/README.md) — `useState` e `useEffect` dominados; `async/await` compreendido desde a Aula 08.
>
> **O que você vai aprender:**
> - Instalar `@react-native-async-storage/async-storage` e salvar dados que persistem ao fechar o app
> - Converter um array JavaScript para texto com `JSON.stringify` (para salvar) e de volta com `JSON.parse` (para ler)
> - Criar funções assíncronas separadas de salvar e carregar, com tratamento de erro
> - Entender a diferença entre AsyncStorage (chave–valor simples) e SQLite (banco relacional)

---

Desta vez, nosso aplicativo não será afetado por botões de fechar. Codificaremos os módulos isolados de Escrita e Leitura em HD físico.

---

## Passo 1: A Marreta de Hardware
Encerre o app temporariamente. Mande o Expo fazer as pontes nativas.
```bash
npx expo install @react-native-async-storage/async-storage
```
Religue o projeto executando `npm start`.

## Passo 2: A Forja do Ferreiro (Funções Gêmeas)
Numa nova arquitetura de Tela Limpa (Pode ser seu bloco de estudos `EstudosMemoria.tsx` ou afins), Crie a "Forja". Crie duas funções Assíncronas (Porque o SSD demora pra salvar e não podemos travar o UI). Nós faremos funções defensivas separadas das setagens de variáveis.

Lembrando da Secagem JSON que falamos antes:
```tsx
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const CHAVE_LISTA = '@lista_de_itens';

export default function PersistenciaTest() {
  const [lista, setLista] = useState<string[]>([]);

  // Converte o array para JSON e salva no armazenamento local do dispositivo
  const salvarLista = async (novaLista: string[]) => {
    try {
      const json = JSON.stringify(novaLista);
      await AsyncStorage.setItem(CHAVE_LISTA, json);
    } catch (e) {
      console.warn('Erro ao salvar dados:', e);
    }
  };

  // Lê o JSON salvo e converte de volta para array; retorna [] na primeira execução
  const carregarLista = async (): Promise<string[]> => {
    try {
      const dadosSalvos = await AsyncStorage.getItem(CHAVE_LISTA);
      
      if (dadosSalvos !== null) {
        return JSON.parse(dadosSalvos);
      }
      return [];
    } catch (e) {
      console.warn('Erro ao carregar dados:', e);
      return [];
    }
  };
```

---

## Passo 3: Fechando O Ciclo Perfeito no React

Temos o martelo e a pá. Mas eles não agem sozinhos. Precisamos ligar o Guarda Noturno para chamar isso na hora em que o app ligar, e setar atualizações ao clicar num botão:

```tsx
  // Ao abrir a tela, carrega os dados já salvos anteriormente
  useEffect(() => {
    const inicializar = async () => {
      const dadosRecuperados = await carregarLista();
      setLista(dadosRecuperados); 
    };
    
    inicializar();
  }, []);

  // Adiciona um item ao array e salva imediatamente no armazenamento local
  const adicionarItem = async () => {
    const novoItem = "Item #" + Math.random().toFixed(2);
    
    // Cria novo array com o item adicionado (não altera o array original — padrão React)
    const novaLista = [...lista, novoItem];
    
    setLista(novaLista); // atualiza a tela
    await salvarLista(novaLista); // persiste no dispositivo
  };
```

Toda vez que o usuário adicionar um item, o app salva automaticamente. Conecte `adicionarItem` a um botão e exiba `lista` em uma `FlatList`, e vá para a atividade desta quinzena!

---

## Como isso se aplica ao seu projeto

O AsyncStorage é a tecnologia de persistência da **Fase 2** do seu projeto — antes do SQLite:

| Projeto | O que salvar no AsyncStorage |
|---|---|
| Tipo A | Array de tarefas `[{id, titulo, concluida}]` |
| Tipo B | Array de itens `[{id, nome, categoria}]` |
| Tipo C | Array de notas `[{id, titulo, conteudo}]` |
| Tipo D | Array de gastos `[{id, valor, descricao, data}]` |

**Importante:** Na Fase 3 (Aulas 14–15) você migrará do AsyncStorage para o SQLite. O AsyncStorage fica apenas para preferências simples do usuário (tema claro/escuro, nome do perfil), enquanto o SQLite assume todos os dados principais do app.

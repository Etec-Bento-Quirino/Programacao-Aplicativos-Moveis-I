# Tutorial: Escrevendo com Pedra (Persistência)

**Sugestão de execução:** Quinzena 16.

Desta vez, nosso aplicativo não será afetado por botões de fechar. Codificaremos os módulos isolados de Escrita e Leitura em HD físico.

---

## Passo 1: A Marreta de Hardware
Encerre o app temporariamente. Mande o Expo fazer as pontes nativas.
```bash
npx expo install @react-native-async-storage/async-storage
```
Religue o projeto `npx expo start --tunnel`.

## Passo 2: A Forja do Ferreiro (Funções Gêmeas)
Numa nova arquitetura de Tela Limpa (Pode ser seu bloco de estudos `EstudosMemoria.tsx` ou afins), Crie a "Forja". Crie duas funções Assíncronas (Porque o SSD demora pra salvar e não podemos travar o UI). Nós faremos funções defensivas separadas das setagens de variáveis.

Lembrando da Secagem JSON que falamos antes:
```tsx
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const CHAVE_SECRETA = '@minha_lista_de_desejos';

export default function PersistenciaTest() {
  const [lista, setLista] = useState([]);

  // --- FERRAMENTA DE CIMENTAR (Salva o Array secado no Celular) ---
  const armazenarNoSSD = async (matrizCompleta) => {
    try {
      const tripaTransformada = JSON.stringify(matrizCompleta);
      await AsyncStorage.setItem(CHAVE_SECRETA, tripaTransformada);
    } catch (e) {
      console.warn('O HD do cidadão deve estar lotado...', e);
    }
  };

  // --- FERRAMENTA DE ESCAVAR (Desenterra e hidrata a Lista de volta) ---
  const escavarDoSSD = async () => {
    try {
      const textoBoboVindoDoHD = await AsyncStorage.getItem(CHAVE_SECRETA);
      
      // Se não houver nada (Ex: primeira vez baixando o app), ele retorna Null e nós devolvemos um Array vazio para não quebrar.
      if (textoBoboVindoDoHD !== null) {
          const listaVivaMagica = JSON.parse(textoBoboVindoDoHD);
          return listaVivaMagica;
      }
      return [];
    } catch (e) {
      console.warn('Erro ao escavar memória local: ', e);
      return [];
    }
  };
```

---

## Passo 3: Fechando O Ciclo Perfeito no React

Temos o martelo e a pá. Mas eles não agem sozinhos. Precisamos ligar o Guarda Noturno para chamar isso na hora em que o app ligar, e setar atualizações ao clicar num botão:

```tsx
  // 1. O Guarda Noturno invoca tudo no nascimento da Tela!
  useEffect(() => {
    const batidaPolicialDeRotina = async () => {
      const dadosRecuperados = await escavarDoSSD();
      // Joga na memória viva pra tela pintar:
      setLista(dadosRecuperados); 
    };
    
    batidaPolicialDeRotina();
  }, []);

  // 2. A Injeção Humana
  const acionarBotaoAdd = async () => {
    const itemEstaticoQualquer = "Item Fixo #" + Math.random().toFixed(2);
    
    // Altera a Morte Antiga recriandos array mutável (Aula 11)
    const novaVersaoDaLista = [...lista, itemEstaticoQualquer];
    
    // Repinta a tela inteira rapidão.
    setLista(novaVersaoDaLista);

    // E paralelamente escreve com tinta forte no Hardware SSD chamando nossa func!
    await armazenarNoSSD(novaVersaoDaLista);
  };
```

Por conta deste `await`, toda a vez que o Usuário tocar o dedo ele aciona o SSD via JSON. Conecte essas variáveis em Botões em um FlatList no `<View>` renderizado, e parta pro Desafio desta quinzena para testar seu poder!

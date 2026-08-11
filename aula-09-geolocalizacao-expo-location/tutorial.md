# Tutorial: Capturando um Satélite com seu Código

**Sugestão de execução:** Quinzena 10 | **Bimestre:** 2

> **Pré-requisitos:** [Aula 08](../aula-08-galeria-camera-expo-image-picker/README.md) — `async/await` e permissões de hardware compreendidos.
>
> **O que você vai aprender:**
> - Instalar `expo-location` e solicitar permissão de geolocalização ao usuário
> - Obter latitude e longitude atuais com `Location.getCurrentPositionAsync()`
> - Exibir um spinner de carregamento (`ActivityIndicator`) enquanto o GPS processa
> - Tratar o caso em que o usuário nega a permissão sem travar o app

---

Vamos colocar a mão na graxa. Se você estava brincando no seu StickerSmash, abra uma nova tela secundária (como a Tela de `About` que fizemos no Expo Router) para abrigar nossa engenhoca de captura, ou crie um novo projeto no VS Code para este teste.

---

## Passo 1: Injetando a Livraria de Georreferenciamento

Nós precisamos do tradutor de hardware. No terminal rodando, pressione Control+C para fechar temporariamente, e baixe o conector.
```bash
npx expo install expo-location
```
Ligue novamente o servidor executando `npm start` (com o tunnel previamente configurado).

## Passo 2: O Estado Duplo e a Lógica Assíncrona

No seu arquivo (`index.tsx` se for novo, ou `.tsx` qualquer do seu estudo), precisamos salvar 3 coisas fundamentais na nossa memória do frontend. A Latitude/Longitude, os erros (se o cliente não deixar rodar e teremos que avisar) e o Spinner Gráfico de Carga! 

```tsx
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';

export default function TelaLocalizacao() {
  const [coordenadas, setCoordenadas] = useState<Location.LocationObjectCoords | null>(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  const obterLocalizacao = async () => {
    setCarregando(true);
    setErro(null);

    try {
      // 1. Solicita permissão de localização ao usuário (exibe o popup nativo do sistema)
      const { status } = await Location.requestForegroundPermissionsAsync();
      
      if (status !== 'granted') {
        setErro('Permissão de localização negada. Habilite nas configurações do dispositivo.');
        setCarregando(false);
        return;
      }

      // 2. Com permissão aprovada, lê as coordenadas GPS (usa modo "Balanced" para economizar bateria)
      const posicao = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });

      setCoordenadas(posicao.coords);

    } catch (e: any) {
      setErro('Não foi possível obter a localização: ' + e.message);
    }
    setCarregando(false);
  };
```

## Passo 3: O Render Final Visual

Agora conecte o seu estado (que estava em `null`) e exploda na tela usando `&&` (Mágica React pra exibir as coisas se elas baterem positivos):

```tsx
  return (
    <View style={styles.corpo}>
      <TouchableOpacity onPress={obterLocalizacao} disabled={carregando}>
         <Text style={styles.titulos}> 
            {carregando ? 'Buscando localização...' : 'Obter minha localização'}
         </Text>
      </TouchableOpacity>
      
      {/* Spinner exibido enquanto o GPS processa */}
      {carregando && <ActivityIndicator size="large" color="#0000ff" />}
      
      {/* Mensagem de erro caso a permissão seja negada ou ocorra falha */}
      {erro && <Text style={{color: 'red'}}>{erro}</Text>}

      {/* Exibe as coordenadas quando disponíveis */}
      {coordenadas && (
        <View style={styles.respostas}>
          <Text>Latitude: {coordenadas.latitude}</Text>
          <Text>Longitude: {coordenadas.longitude}</Text>
        </View>
      )}
    </View>
  );
}
```

Ajuste os estilos ao visual do seu projeto e prepare-se para a atividade da quinzena!

---

## Como isso se aplica ao seu projeto

A geolocalização é usada diretamente na **Fase 2** de um tipo e opcionalmente nos demais:

- **Categoria 4 (Controle de Gastos):** ao registrar um novo gasto, o app salva as coordenadas do local da compra. Na Entrega 4, um mapa pode exibir onde cada gasto ocorreu
- **Tipos A, B e C:** geolocalização é recurso bônus opcional — pode ser usada para registrar onde uma tarefa foi concluída, onde um item foi encontrado, ou onde uma nota foi escrita

O padrão aprendido aqui (solicitar permissão → aguardar com `await` → tratar negativa → usar o resultado) é o mesmo para câmera (Aula 08) e notificações (Aula 10). Você já domina o padrão.

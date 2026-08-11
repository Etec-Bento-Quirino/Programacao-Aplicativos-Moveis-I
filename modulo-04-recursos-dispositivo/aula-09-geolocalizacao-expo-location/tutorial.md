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

---

## Passo 2.1: A Localização que Você Já Tinha (`getLastKnownPositionAsync`)

`getCurrentPositionAsync` **ativa o GPS** e espera o chip calcular sua posição — isso demora (e gasta bateria). O SDK também expõe `getLastKnownPositionAsync()`, que devolve a **última posição conhecida** do aparelho, de forma quase instantânea:

```tsx
const posicao = await Location.getLastKnownPositionAsync();

if (posicao) {
  setCoordenadas(posicao.coords); // Mesmo formato: coords.latitude / coords.longitude
} else {
  // Nunca tivemos uma posição salva — aí sim chamamos o GPS de verdade
  const atual = await Location.getCurrentPositionAsync({});
  setCoordenadas(atual.coords);
}
```

> [!TIP]
> Use `getLastKnownPositionAsync` quando o app abre e você quer mostrar um mapa **na hora** (sem spinner), e só depois acione o GPS para refinar. É o padrão usado por apps de entrega e clima.

## Passo 2.2: Rastreando o Movimento (`watchPositionAsync`)

Quer um app que **acompanha** o usuário enquanto ele se move (ex.: trilha de corrida, entrega, pet em roaming)? Use `watchPositionAsync` — ele registra um "vigiador" que chama sua função a cada mudança de posição:

```tsx
import { useEffect } from 'react';

useEffect(() => {
  const inscricao = Location.watchPositionAsync(
    {
      accuracy: Location.Accuracy.High,
      timeInterval: 1000,        // a cada 1 segundo
      distanceInterval: 5,       // ou a cada 5 metros
    },
    (novaPosicao) => {
      console.log('Você se moveu!', novaPosicao.coords.latitude, novaPosicao.coords.longitude);
      setCoordenadas(novaPosicao.coords);
    }
  );

  return () => {
    // Ao sair da tela, cancelamos a inscrição para não drenar a bateria
    inscricao.then((sub) => sub.remove());
  };
}, []);
```

## Passo 2.3: Transformando Coordenadas em Endereço (Geocoding)

Latitude e longitude são números "crus" para o usuário. O `expo-location` converte isso em endereço humano com `reverseGeocodeAsync`:

```tsx
const endereco = await Location.reverseGeocodeAsync({
  latitude: coordenadas.latitude,
  longitude: coordenadas.longitude,
});

if (endereco.length > 0) {
  const rua = endereco[0];
  console.log(rua.street);         // "Rua Bento Quirino"
  console.log(rua.city);           // "Campinas"
  console.log(rua.region);         // "São Paulo"
  console.log(rua.postalCode);     // "13020-180"
  console.log(rua.country);        // "Brasil"
}
```

> [!NOTE]
> O geocoding reverso depende de rede e do serviço de mapas do aparelho. Nem todo dispositivo/emulador tem resultado — sempre trate o caso de array vazio.

## Passo 2.4: O Enumerador de Precisão (`Location.Accuracy`)

O campo `accuracy` não é um número mágico — é um enumerador (`enum`) do próprio SDK. Na prática, você vai usar três valores:

| Valor | Quando usar |
|---|---|
| `Location.Accuracy.Low` | Economizar bateria; aproximação é suficiente |
| `Location.Accuracy.Balanced` | Padrão razoável — cidade, sem pressa (usado no Passo 2) |
| `Location.Accuracy.High` | Precisa ser preciso (ex.: rastreamento, entrega) |

> [!IMPORTANT]
> Quanto **mais precisa** a leitura, **mais tempo** o GPS leva e **mais bateria** gasta. Nunca deixe tudo em `High` por padrão.

---

## Passo 3: O Render Final Visual

Agora conecte o seu estado (que estava em `null`) e exploda na tela usando `&&` (Mágica React pra exibir as coisas se elas baterem positivos):

```tsx
{% raw %}
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
{% endraw %}
```

Ajuste os estilos ao visual do seu projeto e prepare-se para a atividade da quinzena!

---

## Como isso se aplica ao seu projeto

A geolocalização é usada diretamente na **Fase 2** de um tipo e opcionalmente nos demais:

- **Categoria 4 (Controle de Gastos):** ao registrar um novo gasto, o app salva as coordenadas do local da compra. Na Entrega 4, um mapa pode exibir onde cada gasto ocorreu
- **Tipos A, B e C:** geolocalização é recurso bônus opcional — pode ser usada para registrar onde uma tarefa foi concluída, onde um item foi encontrado, ou onde uma nota foi escrita

O padrão aprendido aqui (solicitar permissão → aguardar com `await` → tratar negativa → usar o resultado) é o mesmo para câmera (Aula 08) e notificações (Aula 10). Você já domina o padrão.

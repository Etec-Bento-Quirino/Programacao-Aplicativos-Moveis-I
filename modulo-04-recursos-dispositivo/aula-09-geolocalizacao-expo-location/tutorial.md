# Tutorial: Capturando um Satélite com seu Código

**Sugestão de execução:** Quinzena 10 | **Bimestre:** 2

> [!NOTE]
> **O que você vai aprender hoje:**
> - Instalar `expo-location` e solicitar permissão de geolocalização ao usuário
> - Obter latitude e longitude atuais com `Location.getCurrentPositionAsync()`
> - Exibir um spinner de carregamento (`ActivityIndicator`) enquanto o GPS processa
> - Tratar o caso em que o usuário nega a permissão sem travar o app
>
> **Pré-requisitos:** [Aula 08](../aula-08-galeria-camera-expo-image-picker/README.md) — `async/await` e permissões de hardware compreendidos.

---

Vamos usar uma analogia: na Aula 08, você abriu a "porta" da galeria. Hoje você vai abrir a "porta" do chip GPS. O processo é o mesmo: pedir permissão, esperar o hardware responder, guardar o resultado. Se você entendeu o padrão da câmera, o GPS vai parecer déjà vu.

---

## Passo 1: Instalando o Tradutor de GPS (expo-location)

Pare o servidor do Expo com `Ctrl+C` no terminal. Instale o pacote:

```bash
npx expo install expo-location
```

O terminal vai mostrar algo parecido com:

```
✔ Installed expo-location
```

Ligue o servidor novamente:

```bash
npm start
```

> [!WARNING]
> Se você esquecer de parar o servidor antes de instalar, o Expo pode travar. Sempre pare com `Ctrl+C` antes de instalar pacotes novos.

---

## Passo 2: O Estado Duplo e a Lógica Assíncrona

Abra o arquivo `index.tsx` (ou crie um novo componente de teste). Vamos precisar de **três** estados:

```tsx
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';

export default function TelaLocalizacao() {
  // 1. Guarda as coordenadas GPS (latitude/longitude)
  const [coordenadas, setCoordenadas] = useState(null);
  // 2. Controla o spinner de carregamento
  const [carregando, setCarregando] = useState(false);
  // 3. Guarda mensagens de erro (ex.: permissão negada)
  const [erro, setErro] = useState(null);
```

**O que acontece aqui:**
- `coordenadas` começa como `null` — só ganha valor quando o GPS responder.
- `carregando` começa como `false` — vira `true` enquanto o GPS processa (mostramos um spinner).
- `erro` começa como `null` — aparece só se algo der errado.

---

## Passo 3: A Função que Lê o GPS (async/await)

Agora a função principal — ela pede permissão e lê as coordenadas:

```tsx
const obterLocalizacao = async () => {
  setCarregando(true);
  setErro(null);

  try {
    // 1. Solicita permissão de localização ao usuário
    const { status } = await Location.requestForegroundPermissionsAsync();
    
    if (status !== 'granted') {
      setErro('Permissão de localização negada. Habilite nas configurações do dispositivo.');
      setCarregando(false);
      return;
    }

    // 2. Com permissão aprovada, lê as coordenadas GPS
    const posicao = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.Balanced,
    });

    setCoordenadas(posicao.coords);

  } catch (e) {
    setErro('Não foi possível obter a localização: ' + e.message);
  }
  setCarregando(false);
};
```

> [!IMPORTANT]
> **Por que `try...catch`?**
> O GPS pode falhar por vários motivos: chip desligado, sem sinal, emulador sem GPS. O `try...catch` é como um **seguro de vida** — se algo der errado dentro do `try`, o `catch` captura o erro sem explodir o app. É uma boa prática que você vai usar sempre.

> [!NOTE]
> **`requestForegroundPermissionsAsync`** pede permissão para ler a localização com a tela aberta. Se você quisesse rastrear o usuário com a tela fechada (tipo Uber), precisaria de `requestBackgroundPermissionsAsync` — mas isso só é aprovado em apps publicados nas lojas, sob análise da Apple/Google.

---

## Passo 4: Conectando o Botão e Exibindo o Resultado

Agora vamos juntar tudo: o botão que dispara a função e a tela que mostra o spinner, o erro ou as coordenadas.

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
      
      {/* Mensagem de erro caso a permissão seja negada */}
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

> [!TIP]
> **O que é `disabled={carregando}`?**
> Enquanto o GPS processa (`carregando === true`), o botão fica desabilitado. Isso evita que o usuário clique múltiplas vezes e dispare várias leituras GPS ao mesmo tempo — o que gastaria bateria à toa.

---

## Passo 5: Testando na Prática

Agora rode o app e aperte o botão. O que você deve ver:

1. **Primeiro:** o botão muda para "Buscando localização..." e um spinner azul aparece.
2. **Depois de 1–3 segundos:** as coordenadas aparecem na tela (ex.: `Latitude: -22.9042, Longitude: -47.0608`).
3. **Se negar a permissão:** uma mensagem vermelha aparece explicando que o acesso foi negado.

> [!WARNING]
> **No emulador Android:** o GPS retorna coordenadas padrão (Google HQ, Mountain View). Para simular outra localização, abra o Android Studio → Extended Controls → Location e digite coordenadas manualmente.

> [!CAUTION]
> No **emulador iOS** (só Mac), o GPS funciona com o simulateLocation do Xcode. Se você estiver no Windows/Linux, teste direto no celular físico com Expo Go.

---

## Passo Extra: A Localização que Você Já Tinha (`getLastKnownPositionAsync`)

`getCurrentPositionAsync` **ativa o GPS** e espera o chip calcular sua posição — isso demora e gasta bateria. O SDK também expõe `getLastKnownPositionAsync()`, que devolve a **última posição conhecida** do aparelho de forma quase instantânea:

```tsx
const posicao = await Location.getLastKnownPositionAsync();

if (posicao) {
  setCoordenadas(posicao.coords);
} else {
  // Nunca tivemos uma posição salva — aí sim chamamos o GPS de verdade
  const atual = await Location.getCurrentPositionAsync({});
  setCoordenadas(atual.coords);
}
```

> [!TIP]
> Use `getLastKnownPositionAsync` quando o app abre e você quer mostrar um mapa **na hora** (sem spinner), e só depois acione o GPS para refinar. É o padrão usado por apps de entrega e clima.

---

## Passo Extra: Rastreando o Movimento (`watchPositionAsync`)

Quer um app que **acompanha** o usuário enquanto ele se move (ex.: trilha de corrida, entrega)? Use `watchPositionAsync`:

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

> [!IMPORTANT]
> **`watchPositionAsync` continua rodando mesmo quando o app está minimizado?** Não no modo Foreground. Se você quisesse rastrear em background (tipo Strava para corrida), precisaria de permissões especiais — e isso é avançado demais para este curso.

---

## Resumo das Opções de Precisão

| Valor | Quando usar |
|---|---|
| `Location.Accuracy.Low` | Economizar bateria; aproximação é suficiente |
| `Location.Accuracy.Balanced` | Padrão razoável (usado no Passo 3) |
| `Location.Accuracy.High` | Precisa ser preciso (rastreamento, entrega) |

---

## Checklist da Aula 09

Marque cada item quando conseguir fazer:

- [ ] Instalei o `expo-location` com `npx expo install`
- [ ] Criei os estados `coordenadas`, `carregando` e `erro`
- [ ] Criei a função `obterLocalizacao` com `async` e `await`
- [ ] A permissão GPS é solicitada ao apertar o botão
- [ ] O spinner aparece enquanto o GPS processa
- [ ] As coordenadas aparecem na tela após 1–3 segundos
- [ ] A mensagem de erro aparece quando a permissão é negada
- [ ] (Opcional) Testei `getLastKnownPositionAsync` para leitura instantânea

> [!NOTE]
> Se algum item ficou sem marcar, volte no passo correspondente. O padrão (permissão → await → resultado) é o mesmo da Aula 08 — você já domina isso!

---

## Como isso se aplica ao seu projeto

A geolocalização é usada diretamente na **Fase 2** de alguns temas e opcionalmente nos demais:

- **Categoria 4 (Controle de Gastos):** ao registrar um novo gasto, o app salva as coordenadas do local da compra. Na Entrega 4, um mapa pode exibir onde cada gasto ocorreu.
- **Categorias 1, 2 e 3:** geolocalização é recurso bônus opcional — pode ser usada para registrar onde uma tarefa foi concluída, onde um item foi encontrado, ou onde uma nota foi escrita.

O padrão aprendido aqui (solicitar permissão → aguardar com `await` → tratar negativa → usar o resultado) é o mesmo para câmera (Aula 08) e notificações (Aula 10). Você já domina o padrão! 🚀

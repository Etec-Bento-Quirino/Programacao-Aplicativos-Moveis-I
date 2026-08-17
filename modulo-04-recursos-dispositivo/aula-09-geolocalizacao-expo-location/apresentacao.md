# Apresentação: Coordenadas em Tempo Real 🌍

**Sugestão de uso:** slides da Aula 09 (leia em voz alta antes do tutorial).

---

## 1. O Satélite no Bolso

Todos os celulares modernos possuem um chip GPS (Global Positioning System) que captura sinais de satélites no espaço para descobrir onde você está em milissegundos. Mas como transformamos esse sinal eletromagnético em variáveis JavaScript na nossa tela?

É a mesma lógica da Aula 08: precisamos de uma **API** (tradutora) que fala com o hardware nativo do Android e do iOS. O módulo `expo-location` é esse tradutor.

> [!NOTE]
> **Lembrete:** API = Application Programming Interface. É um conjunto de funções prontas que alguém já escreveu para você acessar o hardware sem precisar programar em Java ou Swift.

---

## 2. Permissão de Câmera vs. Permissão de GPS

Na Aula 08, pedimos permissão para abrir a galeria. Com o GPS, a segurança é **muito mais rígida**. Por quê?

Porque uma câmera só funciona quando você está olhando para ela. Mas um app pode rastrear seu trajeto de carro para casa **escondido**, se o GPS estiver ligado sem você saber. Por isso, o Google e a Apple são rigorosos:

- **Foreground:** o app só pega a localização com a tela **aberta e ligada** (`requestForegroundPermissionsAsync`).
- **Background:** o app rastreia você mesmo com o celular no bolso (só apps aprovados pela loja, sob análise jurídica).

> [!IMPORTANT]
> Neste curso, vamos usar apenas **Foreground** — a localização só é lida quando o app está aberto. É mais seguro e não precisa de aprovação especial.

---

## 3. O Retorno: Coordenadas Brutas

Quando executamos `Location.getCurrentPositionAsync()`, recebemos um objeto com o campo `coords`. Dentro dele estão as joias da coroa:

| Campo | O que é? |
|-------|----------|
| `latitude` | A "fatia horizontal" do globo (-90 a +90) |
| `longitude` | A "fatia vertical" do globo (-180 a +180) |
| `altitude` | Altura em metros (nem todo dispositivo fornece) |
| `accuracy` | Precisão em metros (10m = bem preciso) |

Cruzando `latitude` e `longitude`, você descobre onde sua cadeira está no mundo — num raio de 10 metros de precisão!

> [!TIP]
> Pense nas coordenadas como o endereço de uma casa: `latitude` é a rua, `longitude` é o número. Juntos, eles te levam até o ponto exato. Sem um dos dois, você fica perdido!

---

## 4. A Previsão: Precisão do GPS

O campo `accuracy` não é um número mágico — é um enumerador do SDK. Na prática, você vai usar três valores:

| Valor | Quando usar |
|---|---|
| `Location.Accuracy.Low` | Economizar bateria; aproximação é suficiente |
| `Location.Accuracy.Balanced` | Padrão razoável (cidade, sem pressa) |
| `Location.Accuracy.High` | Precisa ser preciso (rastreamento, entrega) |

> [!WARNING]
> Quanto **mais precisa** a leitura, **mais tempo** o GPS leva e **mais bateria** gasta. Nunca deixe tudo em `High` por padrão — seu usuário vai reclamar que o celular esquenta!

---

## 5. Geocoding: De Número para Endereço Humano

Latitude e longitude são números "crus". Para o usuário, é mais útil ver "Rua Bento Quirino, 1238 - Campinas/SP". O `expo-location` converte isso com `reverseGeocodeAsync`:

```tsx
const endereco = await Location.reverseGeocodeAsync({
  latitude: coordenadas.latitude,
  longitude: coordenadas.longitude,
});

console.log(endereco[0].street);     // "Rua Bento Quirino"
console.log(endereco[0].city);       // "Campinas"
console.log(endereco[0].region);     // "São Paulo"
console.log(endereco[0].country);    // "Brasil"
```

> [!NOTE]
> O geocoding reverso depende de rede e do serviço de mapas do aparelhe. Nem todo dispositivo/emulador tem resultado — sempre trate o caso de array vazio!

> [!TIP]
> Quer praticar? Abra o [tutorial.md](tutorial.md) e monte o botão de GPS passo a passo. Lá você vai ver como solicitar permissão, ler coordenadas e exibir na tela! 🚀

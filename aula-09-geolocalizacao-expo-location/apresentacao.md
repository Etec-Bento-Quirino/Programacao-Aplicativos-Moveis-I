# Apresentação: Coordenadas em Tempo Real 🌍

**Leitura Autônoma de Arquitetura Dispositivo-Software**

Na aula anterior, aprendemos a regra de ouro das pontes nativas: Se quiser mexer nas coisas do celular do cara, pessa permissão e pare o tempo (Async/Await). Nós usaremos as mesmas regras de arquitetura aqui para lidar com os satélites do Google/Apple.

---

## 1. Instalando o Radar (`expo-location`)
Se você tentar pedir as coordenadas puras sem um tradutor robusto, você vai esbarrar em diferenças brutais entre o Android (onde o GPS manda dados de um jeito) e no iOS (onde as coisas trafegam no Objective-C e Swift de outro jeito). O Módulo `expo-location` traduz isso criando uma porta universal no JavaScript.

## 2. Permissão de Foreground vs Background
Com o GPS, a Apple e o Google são paranoicas a níveis governamentais. Diferente de uma Câmera (que só abre quando você tá olhando), um app pode roubar seu trajeto de carro para casa de forma maliciosa se rastrear seu GPS escondido. 
Por isso o Request é explícito: `requestForegroundPermissionsAsync`. Essa regra avisa ao sistema: *"Meu app só pega a rotação se a Tela estiver ABERTA E LIGADA."*

Se fôssemos criar um App tipo Waze ou Uber que rastreia você mesmo com seu celular no bolso escurinho, seriam necessárias permissões rigorosíssimas de Background, que só o Google/Apple Store aprova manualmente sob análise jurídica do desenvolvedor.

## 3. O Retorno: Coordenadas Brutas
Ao executarmos o `Wait getCurrentPositionAsync()`, nós recebemos devolta um dicionário com muito mais coisas do que você imagina. O objeto JSON contém `coords`.
Dentro dele vem a joia da coroa: `latitude` (A fatia horizontal do globo) e `longitude` (A fatia vertical do globo). Se juntas, você cruza as linhas do vetor e descobre onde sua cadeira está no mundo num raio de 10 metros de precisão. 
A API também trará altimetria (altitude) opcional dependendo do celular.

👉 **Expanda sua Cabeça Estudando a Documentação Base:** [Ponte Expo Location](https://docs.expo.dev/versions/latest/sdk/location/)

# Missão 4: Disparando o Gatilho (O Alarme Visual) 🚨

**Sua Validação Autônoma de Estudo:**

No tutorial inserimos a arquitetura condicional nos botões do StickerSmash.
Mas um botão não passa de um enfeite se você não conseguir extrair dados ou realizar ações quando o evento principal ("*O Dedo Humano Tocou no Vidro do Celular*") acontece.

---

## O Desafio: A Comunicação do Front-End

Para validar o aprendizado desta Quinzena de forma independente, você deverá interagir ativamente com o fluxo central criando uma ação `onPress` no seu Botão Amarelo do StickerSmash que não quebre e mostre Vida.

1. Navegue até o coração do seu App (o arquivo `index.tsx`).
2. Garanta que você chamou os dois tipos de `<Button>` customizados de acordo com as diretrizes do tutorial, passando a string de Texto Dinâmico via parâmetro `<Button label="Usar essa foto" />`.
3. Garanta que você conectou a prop estática dentro da injeção do botão primário para o alerta ensinado em aula:
   ```jsx
   onPress={() => alert('Em Breve: Acesso a Câmera!')}
   ```
   *(Nota: Se houver problemas ao chamar alert na plataforma Web/Windows, estude o import via `Alert.alert()` importada diretamente do 'react-native' ao invés da função pura)*.

## A Entrega Tática:
Tire um print/fotografia no exato milissegundo de glória em que o usuário toca no novíssimo botão estendido contendo os Ícones (FontAwesome) injetados, e o pop-up de aviso brota no meio do celular (provando que a ponte do `Pressable` acionou o motor JavaScript via prop).

Com isso engatilhado, você estará 100% preparado para acoplar uma Câmera Fotográfica REAL dentro desse mesmo Botão. Envie na nossa plataforma de notas!

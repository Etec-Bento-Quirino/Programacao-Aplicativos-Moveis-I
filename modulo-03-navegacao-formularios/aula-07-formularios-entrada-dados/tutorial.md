# Tutorial: O Cofre de Informações (Formulários e Validação)

**Sugestão de execução:** Quinzena 7 | **Bimestre:** 2

> [!NOTE]
> **O que você vai aprender hoje:**
> - Criar campos de texto (`TextInput`) e capturar o que o usuário digita
> - Controlar o tipo de teclado exibido (numérico, e-mail, senha)
> - Validar dados antes de salvar (verificar campos vazios, formato de e-mail)
> - Usar `Alert.alert()` para exibir mensagens de erro ou confirmação
>
> **Pré-requisitos:** [Aula 06](../aula-06-navegacao-react-navigation/README.md) — navegação entre telas funcionando.

---

Vamos usar uma analogia: se você construir um buraco no chão esperando água, alguém vai jogar terra. Da mesma forma, se você criar um formulário sem validação, o usuário vai jogar dados errados, incompletos ou até maliciosos. Nesta aula, vamos construir o "porteiro eletrônico" que só deixa passar dados corretos.

> [!TIP]
> Prepare o café. Hoje vamos construir um formulário de login profissional — o tipo que aparece em apps reais.

---

## Passo 1: Criando o Splash Screen (A Cortina do Teatro)

Antes de pedir os dados, é legal que a logo do app apareça por 2 segundos e depois passe o controle para a área de Login. Isso se chama **Splash Screen**.

1. Abra o arquivo `app/(tabs)/index.tsx`.
2. Substitua o conteúdo pelo código abaixo:

```tsx
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppForm() {
  const [splashAtivo, setSplashAtivo] = useState(true);

  // useEffect é o "guarda noturno": roda lógica ao iniciar o componente
  useEffect(() => {
    // Liga o cronômetro por 2000 milissegundos (2 segundos)
    const timer = setTimeout(() => setSplashAtivo(false), 2000);
    return () => clearTimeout(timer); // Limpa o timer ao desmontar
  }, []);

  // Se o splash ainda está ativo, mostra a tela de boas-vindas
  if (splashAtivo) {
    return (
      <View style={styles.splash}>
        <Text style={styles.tituloSplash}>Iniciando...</Text>
      </View>
    );
  }

  // Se passou 2 segundos, mostra o formulário
  return <MeuFormulario />;
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tituloSplash: {
    color: '#fff',
    fontSize: 24,
  },
});
```

Vamos entender o que acontece aqui:

| Linha | O que faz |
|-------|-----------|
| `useState(true)` | Começa com `splashAtivo = true` (a tela de splash aparece). |
| `useEffect` | Roda uma vez quando a tela carrega. É o "guarda noturno" que vigia o componente. |
| `setTimeout` | Liga um cronômetro de 2 segundos. Quando acaba, muda `splashAtivo` para `false`. |
| `clearTimeout` | Limpa o cronômetro quando o componente sai da tela (evita "lixo de memória"). |
| `if (splashAtivo)` | Se ainda estamos nos primeiros 2 segundos, mostra a tela de splash. |

> [!WARNING]
> Se o splash não aparecer e o formulário mostrar direto, verifique se o `useState` começou como `true`. Se aparecer para sempre, o `setTimeout` pode estar com o tempo errado ou o `setSplashAtivo(false)` não está sendo chamado.

---

## Passo 2: Criando o Formulário com `TextInput`

Agora vamos criar os campos de texto do formulário. Dentro do mesmo arquivo `index.tsx`, adicione a função `MeuFormulario` **abaixo** da função `AppForm`:

```tsx
import { TextInput, Alert, TouchableOpacity, Text } from 'react-native';

function MeuFormulario() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={styles.formulario}>
      <Text style={styles.titulo}>Cadastro</Text>

      <TextInput
        style={styles.caixaTexto}
        placeholder="Seu nome glorioso"
        value={nome}
        onChangeText={setNome}
        autoCapitalize="words"
      />

      <TextInput
        style={styles.caixaTexto}
        placeholder="E-mail de contato"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
    </View>
  );
}
```

Entendendo cada prop:

| Prop | O que faz | Por quê usamos |
|------|-----------|----------------|
| `placeholder` | Texto de exemplo que some quando o usuário digita | Guia o usuário sobre o que preencher |
| `value={nome}` | O campo **sempre** mostra o valor da memória `nome` | Componente controlado — o React manda no que aparece |
| `onChangeText={setNome}` | A cada tecla, atualiza a memória `nome` | Captura o que o usuário digitou |
| `autoCapitalize="words"` | Primeira letra de cada palavra vira maiúscula | Para nomes: "fabio junior" vira "Fabio Junior" |
| `keyboardType="email-address"` | Teclado com botão de **@** gigante | Facilita digitar e-mails |
| `autoCapitalize="none"` | Não coloca nenhuma maiúscula automática | E-mails são minúsculos |

> [!NOTE]
> O `autoCapitalize` é como um "garçom inteligente". Para nomes, ele capitalize cada palavra. Para e-mails, ele deixa tudo minúsculo, porque e-mails não diferenciar maiúsculas de minúsculas.

> [!TIP]
> Adicione os estilos para que os campos fiquem bonitos:
> ```tsx
> const styles = StyleSheet.create({
>   splash: { flex: 1, backgroundColor: '#25292e', justifyContent: 'center', alignItems: 'center' },
>   tituloSplash: { color: '#fff', fontSize: 24 },
>   formulario: { flex: 1, backgroundColor: '#25292e', justifyContent: 'center', padding: 20 },
>   titulo: { color: '#fff', fontSize: 22, marginBottom: 20, textAlign: 'center' },
>   caixaTexto: { backgroundColor: '#fff', padding: 12, borderRadius: 8, marginBottom: 12, fontSize: 16 },
> });
> ```

---

## Passo 2.5: Props Avançadas do `TextInput`

O `TextInput` tem mais props poderosas para formulários reais. Aqui estão as mais úteis:

```tsx
// Campo de SENHA: esconde o que é digitado com bolinhas
<TextInput
  style={styles.caixaTexto}
  placeholder="Sua senha secreta"
  value={senha}
  onChangeText={setSenha}
  secureTextEntry
/>

// Campo com limite de caracteres e tipo de teclado
<TextInput
  style={styles.caixaTexto}
  placeholder="CEP (8 dígitos)"
  value={cep}
  onChangeText={setCep}
  keyboardType="number-pad"
  maxLength={8}
/>

// Campo apenas para leitura (ex.: dado vindo do banco)
<TextInput
  style={styles.caixaTexto}
  value={usuarioLogado}
  editable={false}
  selectTextOnFocus={false}
/>
```

| Prop | O que faz | Exemplo de uso |
|------|-----------|----------------|
| `secureTextEntry` | Mascara o texto com bolinhas | Senhas |
| `keyboardType` | Troca o teclado | `"number-pad"`, `"email-address"`, `"phone-pad"` |
| `autoCapitalize` | Controla maiúsculas automáticas | `"none"`, `"words"`, `"sentences"` |
| `maxLength` | Limita caracteres | CPF (11), CEP (8), placas (7) |
| `returnKeyType` | Texto do botão "enter" do teclado | `"done"`, `"next"`, `"send"` |
| `editable` | Bloqueia a edição quando `false` | Campos só de leitura |
| `placeholderTextColor` | Cor do texto de exemplo | Combinar com o tema escuro |

> [!TIP]
> **Prática:** adicione um campo de **senha** (`secureTextEntry`) ao formulário e teste no celular. Veja as bolinhas substituindo o texto digitado!

---

## Passo 3: O Porteiro de Validação

Agora vem a parte mais importante: **antes** de enviar os dados, vamos verificar se estão corretos.

Adicione estas funções dentro de `MeuFormulario`:

```tsx
const validarTudo = () => {
  // 1. Limpa espaços e verifica se ficou vazio
  if (!nome.trim()) {
    Alert.alert('Erro', 'Nós precisamos do seu nome, amigo!');
    return false;
  }

  // 2. Verifica se o e-mail tem @
  if (!email.includes('@')) {
    Alert.alert('Erro', 'E-mail inválido! Faltou o @.');
    return false;
  }

  return true; // Tudo certo!
};

const handleEnviar = () => {
  // Se a validação falhar, o return interrompe aqui
  if (!validarTudo()) return;

  // Se chegou até aqui, os dados estão bons
  Alert.alert('Sucesso', `Bem-vindo, ${nome}!`);
  setNome('');  // Limpa os campos por educação
  setEmail('');
};
```

Explicando o `validarTudo`:

| Linha | O que faz |
|-------|-----------|
| `nome.trim()` | Remove espaços do início e do fim. Se sobrar "", significa que o usuário não digitou nada (ou digitou só espaços). |
| `!nome.trim()` | O `!` inverte: se `trim()` retornar string vazia, `!""` = `true`, e entramos no `if`. |
| `return false` | Diz ao `handleEnviar`: "a validação falhou, não salve nada". |
| `return true` | Diz ao `handleEnviar`: "pode salvar tranquilo". |

> [!IMPORTANT]
> Esse padrão se chama **Early Return** (retorno antecipado). É como um porteiro que barrar o visitante na porta antes dele chegar ao elevador. Se a validação falhar, o código **para na hora** — o dado nunca chega ao banco.

---

## Passo 4: Conectando o Botão ao Formulário

Agora vamos adicionar o botão de envio na tela. Dentro do `return` de `MeuFormulario`, adicione o botão abaixo dos campos:

```tsx
return (
  <View style={styles.formulario}>
    <Text style={styles.titulo}>Cadastro</Text>

    <TextInput
      style={styles.caixaTexto}
      placeholder="Seu nome glorioso"
      value={nome}
      onChangeText={setNome}
      autoCapitalize="words"
    />

    <TextInput
      style={styles.caixaTexto}
      placeholder="E-mail de contato"
      value={email}
      onChangeText={setEmail}
      keyboardType="email-address"
      autoCapitalize="none"
    />

    <TouchableOpacity style={styles.botao} onPress={handleEnviar}>
      <Text style={styles.textoBotao}>Enviar</Text>
    </TouchableOpacity>
  </View>
);
```

E adicione os estilos:

```tsx
botao: {
  backgroundColor: '#ffd33d',
  padding: 14,
  borderRadius: 8,
  alignItems: 'center',
  marginTop: 8,
},
textoBotao: {
  color: '#25292e',
  fontSize: 16,
  fontWeight: 'bold',
},
```

> [!WARNING]
> Se ao clicar no botão nada acontecer, verifique se o `onPress` está apontando para a função **correta**. Se aparecer "nome undefined", verifique se o `useState` foi declarado com o nome certo.

---

## Passo 5: Testando no Celular

1. Salve o arquivo. O Metro Bundler vai atualizar automaticamente.

2. No celular, você deve ver:
   - Primeiro, a tela de splash por 2 segundos.
   - Depois, o formulário com dois campos e um botão.

3. **Teste de validação:** tente enviar com o nome vazio. O Alert deve aparecer dizendo "Nós precisamos do seu nome".

4. **Teste de e-mail:** digite um e-mail sem `@`. O Alert deve aparecer dizendo "E-mail inválido".

5. **Teste de sucesso:** preencha tudo corretamente e envie. O Alert deve confirmar e os campos devem ser limpos.

> [!TIP]
> Teste no celular digitando só espaços no campo de nome. O `.trim()` deve detectar que está vazio e barrar o envio. Tente também colar um texto longo — veja se o formulário aguenta!

---

## Checklist da Aula 07

Marque cada item quando conseguir fazer:

- [ ] O Splash Screen aparece por 2 segundos antes do formulário
- [ ] Os campos `TextInput` aparecem na tela
- [ ] O campo de e-mail mostra o teclado com o botão `@`
- [ ] Ao enviar com nome vazio, aparece Alert de erro
- [ ] Ao enviar com e-mail sem `@`, aparece Alert de erro
- [ ] Ao enviar corretamente, aparece Alert de sucesso
- [ ] Os campos são limpos automaticamente após o envio
- [ ] Entendi o que é Componente Controlado (`value` + `onChangeText`)

> [!WARNING]
> Se algum item ficou sem marcar, volte no passo correspondente. A Atividade 7 cobra exatamente esses passos.

---

## Como isso se aplica ao seu projeto

O formulário com `TextInput` e validação é o coração da **Fase 2** do seu projeto:

- Crie um formulário para adicionar os registros do seu tema, com o campo principal obrigatório e os demais opcionais.
- A validação com `if (!campo.trim())` evita que dados em branco sejam salvos no banco.
- O `Alert.alert()` é o jeito mais simples de dar feedback ao usuário — e funciona tanto no Android quanto no iOS.

Essa é uma boa prática que você levará para todas as telas de cadastro do app, tanto no Trabalho em Grupo quanto em qualquer projeto futuro.

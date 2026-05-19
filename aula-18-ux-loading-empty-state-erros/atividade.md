# Atividade 18: Tratamento de Erros e UX 🐅

**Objetivo da Atividade:**

Aplicar o tratamento de erros (`Try...Catch`) em operações críticas, como chamadas de banco de dados, para garantir que o aplicativo não "quebre" inesperadamente e forneça uma boa experiência ao usuário (UX), exibindo mensagens visuais claras.

---

## O Desafio: Falhando com Dignidade

1. Escolha um componente onde você execute uma ação no banco de dados (por exemplo, buscar os dados ou salvar um item).
2. Adicione um estado (`useState`) para armazenar uma string de erro, ex: `erroVisivel`.
3. Englobe a execução do SQLite dentro de um bloco `try / catch`.
4. Force um erro de sintaxe SQL propositalmente na query dentro do bloco `try` (ex: `SELECT * FROM tabela_que_nao_existe`).
5. No bloco `catch`, capture a falha e modifique o seu estado de erro com uma mensagem legível para o usuário final, como: *"Falha ao conectar com o banco. Tente novamente."*
6. Na interface, exiba condicionalmente essa mensagem de erro em vermelho.

### 💡 Dica de como iniciar:

O bloco `try/catch` é essencial para prevenir que o JavaScript trave o aplicativo caso o SQL estoure um erro de compilação.

```tsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function TesteErro() {
  const [mensagemErro, setMensagemErro] = useState('');

  const executarAcaoCritica = () => {
    try {
      // Limpa qualquer erro anterior
      setMensagemErro('');

      // Simula uma tentativa no banco com erro intencional
      // db.runSync('INSERT INTUUUU tabela (nome) VALUES (?)'); // Sintaxe propositalmente errada
      
      throw new Error("Erro forçado no banco de dados!"); // Simulando a falha
      
      console.log("Se der erro antes dessa linha, ela não vai rodar!");

    } catch (error) {
      // Cai aqui se houver qualquer problema dentro do 'try'
      setMensagemErro("Houve uma falha ao acessar os dados. Entre em contato com o suporte.");
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Testar Banco" onPress={executarAcaoCritica} />
      
      {/* Exibe condicionalmente o texto apenas se houver mensagem */}
      {mensagemErro ? (
        <Text style={styles.erroText}>{mensagemErro}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  erroText: { color: 'red', marginTop: 15, fontWeight: 'bold' }
});
```

## Entrega:
No seu emulador ou aparelho real, clique no botão para disparar o erro proposital. Tire uma captura de tela (print) comprovando que o alerta vermelho foi exibido perfeitamente no Front-end (e que o app não travou fechando sozinho). Envie a imagem na plataforma.

# Aula 04 - Texto e botões (Text, TouchableOpacity)

**Data:** 23/03/2026

---

## Apresentação

Componentes Text (com estilos) e TouchableOpacity para botões; evento onPress; useState para atualizar a tela ao toque (Alert ou mudança de texto).

---

## Slides

### Objetivo

Exibir textos estilizados e um botão que reage ao toque: exibir Alert ou alterar um texto na tela usando useState.

### Text e estilos

Text é o único componente que exibe texto. Estilos: fontSize, fontWeight, color. Sempre dentro de Text, nunca texto solto em View.

### TouchableOpacity

Envolve o conteúdo clicável; propriedade onPress recebe uma função. Ex.: onPress={() => Alert.alert('Aviso', 'Você tocou!')\\}.

### Estado com useState

const [mensagem, setMensagem] = useState('Aguardando...'). No onPress: setMensagem('Você tocou!'). A tela re-renderiza e exibe o novo texto.

### Atividade da quinzena

Tela com título, texto explicativo e botão que exibe Alert ou muda um texto na tela ao ser clicado.

### Próxima aula

Imagens (Image) e listas (FlatList); toque no item para abrir detalhe ou Alert.

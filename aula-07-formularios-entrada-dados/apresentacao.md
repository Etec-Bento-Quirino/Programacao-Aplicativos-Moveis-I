# Aula 07 - Formulários e entrada de dados

**Data:** 27/04/2026

---

## Apresentação

TextInput (valor controlado com useState); validação antes de enviar (campos obrigatórios, formato de e-mail); Alert de confirmação ou erro; opcional: tela de splash.

---

## Slides

### Objetivo

Criar formulário com campos de texto (nome, e-mail), validação e diálogo de confirmação ao enviar. Opcional: splash ao abrir o app.

### TextInput

value={nome}, onChangeText={setNome}. placeholder, keyboardType ('email-address'), autoCapitalize. Estilo: border, padding, borderRadius.

### Validação

Verificar nome e e-mail não vazios; e-mail deve conter '@'. Se falhar, Alert com mensagem; se passar, Alert de confirmação e limpar campos.

### Splash (opcional)

useState(mostrarSplash = true); useEffect com setTimeout para setMostrarSplash(false) após 2 segundos. Se true, renderizar só a tela de splash.

### Atividade da quinzena

App com splash, tela de cadastro (nome, e-mail), validação e Alert de confirmação ao salvar.

### Próxima aula

Galeria e câmera: expo-image-picker; permissões; exibir imagem escolhida.

# Aula 04 – Texto e Botões com Pressable

**Sugestão de execução:** quinzena 4.
**Base tecnológica:** TouchableOpacity / Pressable, onPress, Ícones Vetorizados.

---

## Parte 1: O Pressable (A evolução do TouchableOpacity)

Antigamente o React usava *TouchableOpacity*. Mas agora nós usamos seu substituto supremo moderno: `<Pressable>`, que detecta toques e movimentos mais robustos e sutis do dedo humano.

### Parâmetros Inteligentes (Props Condicionais)
Vamos criar dois botões (primário destaque amarelo, e secundário texto-limpo) num mesmo componente genérico e reutilizável usando If/Else em Props!

Crie `components/Button.tsx`:

```tsx
// components/Button.tsx
import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

// Se receber "primary", veste o botão de amarelo brilhante com o Mestre FontAwesome!
type Props = {
  label: string;
  theme?: 'primary';
};

export default function Button({ label, theme }: Props) {
  if (theme === 'primary') { 
    return (
      <View style={[styles.buttonContainer, { borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18 }]}>
        <Pressable 
          style={[styles.button, { backgroundColor: '#fff' }]} 
          onPress={() => alert('Em Breve: Acesso a Câmera!')}
        >
          <FontAwesome name="picture-o" size={18} color="#25292e" style={styles.buttonIcon} />
          <Text style={[styles.buttonLabel, { color: '#25292e' }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  // SE NÃO RECEBER NENHUM TEMA -> Renderiza normal:
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('Em breve: Uso Desta Foto')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: { width: 320, height: 68, marginHorizontal: 20, alignItems: 'center', justifyContent: 'center', padding: 3 },
  button: { borderRadius: 10, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' },
  buttonIcon: { paddingRight: 8 },
  buttonLabel: { color: '#fff', fontSize: 16 },
});
```

> [!TIP]
> **Inline Styles Array:** Notou o truque de sobrescrever estilo base usando `style={[styles.button, { backgroundColor: '#fff' }]}`? Arrays em estilo forçam o Native a juntar (merge) os códigos do bottom com as cores vivas em tempo real!

Conecte os dois botões no final da sua tela `index.tsx` de sempre e divirta-se clicando!

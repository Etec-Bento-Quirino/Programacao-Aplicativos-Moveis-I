import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

// ============================================================================
//  app/_layout.tsx
//  Esqueleto de NAVEGAÇÃO do Módulo 3 — Aula 06 (Expo Router).
//  O arquivo _layout.tsx é o "App Master": define a pilha de telas
//  e o comportamento do botão Voltar.
//  TAREFA (Aula 06):
//    - Adicione um <Stack.Screen name="..." options={{...}} /> para cada tela.
//    - Use options={{ title: '...' }} para dar um título ao cabeçalho.
//    - Se quiser abas, crie a pasta app/(tabs)/ com o próprio _layout.tsx
//      usando <Tabs> (veja a Aula 06).
// ============================================================================

export default function RootLayout() {
  return (
    <>
      <Stack>
        {/* TAREFA (Aula 06): registrar as telas do app aqui, ex.:
            <Stack.Screen name="index" options={{ title: 'Início' }} />
            <Stack.Screen name="lista" options={{ title: 'Minha Lista' }} />
            <Stack.Screen name="formulario" options={{ title: 'Novo Registro' }} />
            <Stack.Screen name="detalhe/[id]" options={{ title: 'Detalhe' }} />
        */}
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

// ============================================================================
//  app/_layout.tsx
//  Esqueleto de NAVEGAÇÃO (Expo Router).
//  Neste módulo (Aulas 01-02) o app tem uma tela só. A navegação real com
//  <Stack> e várias telas é assunto do Módulo 3 (Aula 06).
//  TAREFA (Aula 06, Módulo 3): registrar aqui cada tela nova do app, ex.:
//    <Stack.Screen name="lista" options={{ title: 'Minha Lista' }} />
// ============================================================================

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Início' }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}

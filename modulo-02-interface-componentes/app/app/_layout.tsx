import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

// ============================================================================
//  app/_layout.tsx
//  Esqueleto de NAVEGAÇÃO (Expo Router).
//  Neste módulo (Aulas 03-05) o app tem as telas index e lista.
//  TAREFA (Aula 06, Módulo 3): registrar aqui cada tela nova do app.
// ============================================================================

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Início' }} />
        <Stack.Screen name="lista" options={{ title: 'Minha Lista' }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}

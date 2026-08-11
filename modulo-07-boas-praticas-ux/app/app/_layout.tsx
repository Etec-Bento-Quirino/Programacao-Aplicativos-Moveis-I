import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

// ============================================================================
//  app/_layout.tsx
//  Esqueleto de NAVEGAÇÃO do Módulo 7 — Aulas 18 a 20 (projeto final).
//  TAREFA (Aula 06, Módulo 3): registrar as telas do app aqui, ex.:
//    <Stack.Screen name="index" options={{ title: 'Início' }} />
//    <Stack.Screen name="lista" options={{ title: 'Minha Lista' }} />
//    <Stack.Screen name="formulario" options={{ title: 'Novo Registro' }} />
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

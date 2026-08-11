import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

// ============================================================================
//  app/_layout.tsx
//  Esqueleto de NAVEGAÇÃO do Módulo 5 — Aulas 11, 12 e 13.
//  TAREFA (Aula 12): envolver o <Stack> com o Contexto do app, ex.:
//    <MeuContextoProvider>
//      <Stack>...</Stack>
//    </MeuContextoProvider>
// ============================================================================

export default function RootLayout() {
  return (
    <>
      {/* TAREFA (Aula 12): envolver com o Provider do Contexto. */}
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Início' }} />
        <Stack.Screen name="configuracoes" options={{ title: 'Configurações' }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

// ============================================================================
//  app/_layout.tsx
//  Esqueleto de NAVEGAÇÃO do Módulo 6 — Aulas 14 a 17 (SQLite).
//  TAREFA (Aula 06, Módulo 3): registrar as telas do app aqui, ex.:
//    <Stack.Screen name="index" options={{ title: 'Início' }} />
//    <Stack.Screen name="lista" options={{ title: 'Minha Lista' }} />
//    <Stack.Screen name="formulario" options={{ title: 'Novo Registro' }} />
//    <Stack.Screen name="detalhe/[id]" options={{ title: 'Detalhe' }} />
// ============================================================================

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Início' }} />
        {/* TAREFA (Aula 06): adicionar as telas de lista, formulario
            e detalhe/[id] acima. */}
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}

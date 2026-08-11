import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

// ============================================================================
//  app/_layout.tsx
//  Esqueleto de NAVEGAÇÃO do Módulo 4 — Aulas 08, 09 e 10.
//  TAREFA (Aula 06, Módulo 3): registrar as telas do app aqui, ex.:
//    <Stack.Screen name="galeria" options={{ title: 'Galeria' }} />
//    <Stack.Screen name="localizacao" options={{ title: 'Localização' }} />
//    <Stack.Screen name="notificacoes" options={{ title: 'Notificações' }} />
// ============================================================================

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Início' }} />
        {/* TAREFA (Aula 06): adicionar as telas de galeria, localizacao
            e notificacoes acima conforme você as criar nas Aulas 08-10. */}
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}

import { StyleSheet, Text, View } from 'react-native';

// ============================================================================
//  app/configuracoes.tsx
//  ÁREA: PERSISTÊNCIA SIMPLES — Aula 13 (@react-native-async-storage/async-storage).
//
//  Preferências e dados leves do usuário (nome, tema, última sessão).
//  A dependência `@react-native-async-storage/async-storage` já vem
//  instalada no package.json deste projeto.
// ============================================================================

export default function Configuracoes() {
  // TAREFA (Aula 13): implemente salvar/carregar preferências, ex.:
  //
  //   import AsyncStorage from '@react-native-async-storage/async-storage';
  //   import { useEffect, useState } from 'react';
  //
  //   const [nome, setNome] = useState('');
  //
  //   const salvar = async () => {
  //     await AsyncStorage.setItem('@meu_app:nome', nome);
  //   };
  //
  //   useEffect(() => {
  //     const carregar = async () => {
  //       const salvo = await AsyncStorage.getItem('@meu_app:nome');
  //       if (salvo) setNome(salvo);
  //     };
  //     carregar();
  //   }, []);
  //
  //   Obs.: para o seu PROJETO FINAL, a persistência principal é o SQLite
  //   (Módulo 6, Aulas 14–17). O AsyncStorage serve para dados de configuração.

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Configurações</Text>
      <Text style={styles.texto}>
        Preferências do usuário (nome, tema) salvas localmente — Aula 13.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#25292e',
    padding: 20,
  },
  titulo: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  texto: {
    color: '#b0b0b0',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 12,
  },
});

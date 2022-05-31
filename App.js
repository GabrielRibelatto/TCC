import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cadastro from './src/components/Cadastro';
import Entrar from './src/components/Entrar';
import Mapa from './src/components/Mapa';

import { Routes } from './src/routes';

export default function App() {
  return (
    <Routes/>
  );
}

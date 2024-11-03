import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LoteriaProvider } from './src/contexts/loteriaContext';

export default function App() {
  return (
    <LoteriaProvider>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Meu Aplicativo</Text>
        <StatusBar style="auto" />
      </View>
    </LoteriaProvider>
  );
}

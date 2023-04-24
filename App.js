import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Paginas
import Menu from './src/pages/Menu'

const Pilha = createNativeStackNavigator();

export default function App() {
  return(
      <NavigationContainer>
      <Pilha.Navigator>
        <Pilha.Screen name='Menu' component={Menu} />   
      </Pilha.Navigator>
      </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

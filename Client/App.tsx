import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen'; 
import Home from './Home'; 
import RegisterScreen from './RegisterScreen';
import AttendanceView from './Home/AttendanceView'; 
import { Image, TouchableOpacity, View } from 'react-native';

// Definir el tipo RootStackParamList
export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Register: undefined;
  AttendanceView: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>(); // Usar los tipos definidos

const commonHeaderOptions = (navigation: any, title: string) => ({
  title,
  headerLeft: () => (
    <Image
      source={{ uri: 'https://www.unimet.edu.ve/wp-content/uploads/2023/07/Logo-footer.png' }}
      style={{ width: 100, height: 40, resizeMode: 'contain', marginLeft: 10 }}
    />
  ),
  headerRight: () => (
    <TouchableOpacity style={{ padding: 10 }} onPress={() => console.log('Menu opened')}>
      <View style={{ width: 25, height: 3, backgroundColor: '#000', marginBottom: 4 }} />
      <View style={{ width: 25, height: 3, backgroundColor: '#000', marginBottom: 4 }} />
      <View style={{ width: 25, height: 3, backgroundColor: '#000' }} />
    </TouchableOpacity>
  ),
  headerBackVisible: false, // Desactiva el botón "back" si no se necesita
});

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} // Ocultar el header en la pantalla de login
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={({ navigation }) => commonHeaderOptions(navigation, 'Inicio')} // Usar la función para Home
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{ headerShown: false }} // Ocultar la barra en RegisterScreen
        />
        <Stack.Screen 
          name="AttendanceView" 
          component={AttendanceView} 
          options={({ navigation }) => commonHeaderOptions(navigation, 'Asistencias')} // Usar la función para AttendanceView
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
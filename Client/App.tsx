import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen'; // Ruta a tu pantalla de login
import Home from './Home'; // Ruta a tu pantalla Home
import RegisterScreen from './RegisterScreen'; // Ruta a tu pantalla de registro
import { Image, TouchableOpacity, View } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} // Oculta el header en la pantalla de login
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{
            headerLeft: () => (
              <Image
                source={{ uri: 'https://www.unimet.edu.ve/wp-content/uploads/2023/07/Logo-footer.png' }}
                style={{ width: 100, height: 40, resizeMode: 'contain', marginLeft: 10 }}
              />
            ),
            headerRight: () => (
              <TouchableOpacity style={{ padding: 10 }}>
                <View style={{ width: 25, height: 3, backgroundColor: '#000', marginBottom: 4 }} />
                <View style={{ width: 25, height: 3, backgroundColor: '#000', marginBottom: 4 }} />
                <View style={{ width: 25, height: 3, backgroundColor: '#000' }} />
              </TouchableOpacity>
            ),
            headerBackVisible: false, // Desactiva el botón de "back"
          }}
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{ headerShown: false }} // Ocultar la barra en RegisterScreen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
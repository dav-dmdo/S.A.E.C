<<<<<<< HEAD
import React, { useState } from 'react';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import Home from './Home';
import RegisterScreen from './RegisterScreen';
import AttendanceView from './Home/AttendanceView';
import { Image, TouchableOpacity, View, Text, Modal, StyleSheet } from 'react-native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
=======
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen'; 
import Home from './Home'; 
import RegisterScreen from './RegisterScreen';
import AttendanceView from './Home/AttendanceView'; 
import { Image, TouchableOpacity, View } from 'react-native';
>>>>>>> 9ce21f812a1db79f9f6af4693e4e56a3b8a90c87

// Definir el tipo RootStackParamList
export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Register: undefined;
  AttendanceView: undefined;
};

<<<<<<< HEAD
// Crear la pila de navegación con el tipo RootStackParamList
const Stack = createNativeStackNavigator<RootStackParamList>();

// Crear y tipar el objeto navigationRef
import { createNavigationContainerRef } from '@react-navigation/native';
export const navigationRef = createNavigationContainerRef<RootStackParamList>();

// Tipado para el botón de menú
interface MenuButtonProps {
  onPress: () => void;
}

// Componente para el botón de menú
const MenuButton: React.FC<MenuButtonProps> = ({ onPress }) => (
  <TouchableOpacity style={{ padding: 10 }} onPress={onPress}>
    <View style={styles.menuBar} />
    <View style={styles.menuBar} />
    <View style={styles.menuBar} />
  </TouchableOpacity>
);

const App = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  // Función para opciones de encabezado comunes
  const commonHeaderOptions = (title: string): NativeStackNavigationOptions => ({
    title,
    headerTitleAlign: 'center', // Centrar el título
    headerLeft: () => (
      <Image
        source={{ uri: 'https://www.unimet.edu.ve/wp-content/uploads/2023/07/Logo-footer.png' }}
        style={{ width: 100, height: 40, resizeMode: 'contain', marginLeft: 10 }}
      />
    ),
    headerRight: () => (
      <MenuButton onPress={() => setMenuVisible(true)} />
    ),
    headerBackVisible: false, // Desactiva el botón "back" si no se necesita
  });
=======
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
>>>>>>> 9ce21f812a1db79f9f6af4693e4e56a3b8a90c87

const App = () => {
  return (
<<<<<<< HEAD
    <NavigationContainer ref={navigationRef}>
=======
    <NavigationContainer>
>>>>>>> 9ce21f812a1db79f9f6af4693e4e56a3b8a90c87
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} // Ocultar el header en la pantalla de login
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
<<<<<<< HEAD
          options={commonHeaderOptions('Inicio')} // Opciones de header para Home
=======
          options={({ navigation }) => commonHeaderOptions(navigation, 'Inicio')} // Usar la función para Home
>>>>>>> 9ce21f812a1db79f9f6af4693e4e56a3b8a90c87
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
<<<<<<< HEAD
          options={{ headerShown: false }} // Ocultar el header en RegisterScreen
=======
          options={{ headerShown: false }} // Ocultar la barra en RegisterScreen
>>>>>>> 9ce21f812a1db79f9f6af4693e4e56a3b8a90c87
        />
        <Stack.Screen 
          name="AttendanceView" 
          component={AttendanceView} 
<<<<<<< HEAD
          options={commonHeaderOptions('Asistencias')} // Opciones de header para AttendanceView
        />
      </Stack.Navigator>

      {/* Modal de menú de navegación */}
      <Modal
        visible={menuVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setMenuVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.menuTitle}>Menú de Navegación</Text>
            <TouchableOpacity onPress={() => { setMenuVisible(false); navigationRef.navigate('Home'); }}>
              <Text style={styles.menuOption}>Inicio</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { setMenuVisible(false); navigationRef.navigate('AttendanceView'); }}>
              <Text style={styles.menuOption}>Asistencias</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setMenuVisible(false)}>
              <Text style={styles.menuClose}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
=======
          options={({ navigation }) => commonHeaderOptions(navigation, 'Asistencias')} // Usar la función para AttendanceView
        />
      </Stack.Navigator>
>>>>>>> 9ce21f812a1db79f9f6af4693e4e56a3b8a90c87
    </NavigationContainer>
  );
};

<<<<<<< HEAD
export default App;

// Estilos
const styles = StyleSheet.create({
  menuBar: {
    width: 25,
    height: 3,
    backgroundColor: '#000',
    marginVertical: 2,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  menuOption: {
    fontSize: 16,
    paddingVertical: 10,
  },
  menuClose: {
    fontSize: 16,
    color: 'red',
    marginTop: 20,
  },
});
=======
export default App;
>>>>>>> 9ce21f812a1db79f9f6af4693e4e56a3b8a90c87

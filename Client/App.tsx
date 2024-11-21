import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import Home from './Home';
import RegisterScreen from './RegisterScreen';
import AttendanceView from './Home/AttendanceView';
import TeacherAttendanceView from './profes/TeacherAttendanceView';
import TeacherEvaluations from './profes/EvaluacionesProfe';
import EvaluationsView from './Home/Evaluaciones';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image, TouchableOpacity, View, Text, Modal, StyleSheet, Alert } from 'react-native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Register: undefined;
  AttendanceView: undefined;
  Evaluations: undefined;
  TeacherEvaluations: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

import { createNavigationContainerRef } from '@react-navigation/native';
export const navigationRef = createNavigationContainerRef<RootStackParamList>();

interface MenuButtonProps {
  onPress: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ onPress }) => (
  <TouchableOpacity style={{ padding: 10 }} onPress={onPress}>
    <View style={styles.menuBar} />
    <View style={styles.menuBar} />
    <View style={styles.menuBar} />
  </TouchableOpacity>
);

const App = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);

  const commonHeaderOptions = (title: string): NativeStackNavigationOptions => ({
    title,
    headerTitleAlign: 'center',
    headerLeft: () => (
      <Image
        source={{ uri: 'https://www.unimet.edu.ve/wp-content/uploads/2023/07/Logo-footer.png' }}
        style={{ width: 100, height: 40, resizeMode: 'contain', marginLeft: 10 }}
      />
    ),
    headerRight: () => <MenuButton onPress={() => setMenuVisible(true)} />,
    headerBackVisible: false,
  });

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('access_token');
      Alert.alert('Sesión cerrada', 'Has cerrado sesión exitosamente.');
      navigationRef.navigate('Login');
    } catch (error) {
      console.error('Error al eliminar el token:', error);
      Alert.alert('Error', 'Hubo un problema al cerrar sesión.');
    }
  };

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
        >
          {props => <LoginScreen {...props} setIsTeacher={setIsTeacher} />}
        </Stack.Screen>
        <Stack.Screen
          name="Home"
          options={commonHeaderOptions('Inicio')}
        >
          {props => <Home {...props} isTeacher={isTeacher} />}
        </Stack.Screen>
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AttendanceView"
          component={isTeacher ? TeacherAttendanceView : AttendanceView}
          options={commonHeaderOptions('Asistencias')}
        />
        <Stack.Screen
          name="Evaluations"
          component={EvaluationsView}
          options={commonHeaderOptions('Evaluaciones')}
        />
        <Stack.Screen
          name="TeacherEvaluations"
          component={TeacherEvaluations}
          options={commonHeaderOptions('Evaluaciones Profesores')}
        />
      </Stack.Navigator>

      <Modal
        visible={menuVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setMenuVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.menuTitle}>Menú de Navegación</Text>
            <TouchableOpacity
              onPress={() => {
                setMenuVisible(false);
                navigationRef.navigate('Home');
              }}
            >
              <Text style={styles.menuOption}>Inicio</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setMenuVisible(false);
                navigationRef.navigate('AttendanceView');
              }}
            >
              <Text style={styles.menuOption}>Asistencias</Text>
            </TouchableOpacity>
            {isTeacher && (
              <TouchableOpacity
                onPress={() => {
                  setMenuVisible(false);
                  navigationRef.navigate('TeacherEvaluations');
                }}
              >
                <Text style={styles.menuOption}>Evaluaciones</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              onPress={() => {
                setMenuVisible(false);
                handleLogout();
              }}
            >
              <Text style={styles.menuClose}>Cerrar sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setMenuVisible(false)}>
              <Text style={styles.menuClose}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </NavigationContainer>
  );
};

export default App;

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
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
          options={commonHeaderOptions('Evaluacion')}
        />
        <Stack.Screen
          name="Evaluations"
          component={EvaluationsView}
          options={commonHeaderOptions('Historial')}
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
            {/* Botón para cerrar */}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setMenuVisible(false)}
            >
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>

            <Text style={styles.modalTitle}>Menú</Text>

            {/* Opciones */}
            <View style={styles.menuGrid}>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                  setMenuVisible(false);
                  navigationRef.navigate('Home');
                }}
              >
                <Image source={require('./assets/House.png')} style={styles.menuIcon} />
                <Text style={styles.menuText}>Inicio</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                  setMenuVisible(false);
                  navigationRef.navigate('AttendanceView');
                }}
              >
                <Image source={require('./assets/Assist.png')} style={styles.menuIcon} />
                <Text style={styles.menuText}>Asistencias</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                  setMenuVisible(false);
                  navigationRef.navigate('Evaluations');
                }}
              >
                <Image source={require('./assets/evaluacion.png')} style={styles.menuIcon} />
                <Text style={styles.menuText}>Evaluaciones</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                  setMenuVisible(false);
                  handleLogout();
                }}
              >
                <Image source={require('./assets/logout.png')} style={styles.menuIcon} />
                <Text style={styles.menuText}>Cerrar sesión</Text>
              </TouchableOpacity>
            </View>
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
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#ff5c5c',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3343a1',
    marginBottom: 20,
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
  },
  menuItem: {
    width: '40%',
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginVertical: 10,
  },
  menuIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  menuText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3343a1',
    textAlign: 'center',
  },
});
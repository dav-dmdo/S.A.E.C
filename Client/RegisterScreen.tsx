import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

// Definir los tipos de las rutas (coincide con el tipo definido en App.tsx)
type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Register: undefined;
};

// Tipo de navegación para RegisterScreen
type RegisterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Register'>;

const RegisterScreen = () => {
  // Estados para los campos
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [studentID, setStudentID] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<RegisterScreenNavigationProp>(); // Definir tipo de navegación

  const handleRegister = () => {
    // Aquí iría la lógica de registro
    console.log("Datos:", name, surname, studentID, email, password);
    navigation.navigate('Login'); // Navegar de vuelta a la pantalla de Login
  };

  return (
    <View style={styles.container}>
      {/* Logo de la Universidad */}
      <Image 
        style={styles.logo}
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Logo_unimet.png' }}
      />

      {/* Títulos */}
      <Text style={styles.title}>SISTEMA DE ASISTENCIA Y EVALUACIÓN CONTINUA</Text>
      <Text style={styles.subtitle}>REGISTRATE EN S.A.E.C.</Text>
      <Text style={styles.description}>Forma parte de este sistema de registro de asistencias y evaluación de tus profesores.</Text>

      {/* Campos de texto */}
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Apellido"
        value={surname}
        onChangeText={setSurname}
      />

      <TextInput
        style={styles.input}
        placeholder="Carnet de estudiante"
        value={studentID}
        onChangeText={setStudentID}
      />

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Botón de Google */}
      <TouchableOpacity style={styles.googleButton}>
        <Image 
          style={styles.googleIcon}
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png' }}
        />
        <Text style={styles.googleButtonText}>Registrarse con Google</Text>
      </TouchableOpacity>

      {/* Botón de registro */}
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FF6600',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#FF6600',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  googleButton: {
    flexDirection: 'row',
    backgroundColor: '#4285F4',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: '#FF6600',
    padding: 10,
    borderRadius: 5,
  },
  registerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default RegisterScreen;
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Register: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar u ocultar la contraseña
  const [rememberMe, setRememberMe] = useState(false);

  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/v1/login', {
        user_email: email,
        password: password,
      }, {
        transformResponse: [(data) => data],
      });

      const jsonResponse = response.data.replace(/^[^{\[]+/, '');
      const parsedData = JSON.parse(jsonResponse);

      if (parsedData.success) {
        Alert.alert('Inicio de sesión exitoso', 'Bienvenido a S.A.E.C.');
        navigation.navigate('Home');
      } else {
        Alert.alert('Error', 'Correo o contraseña incorrectos.');
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const statusCode = error.response.status;
        const message = error.response.data?.message || 'Error en el servidor';
        Alert.alert('Error del servidor', `Código de error: ${statusCode} - ${message}`);
      } else {
        Alert.alert('Error', 'No se pudo conectar con el servidor.');
      }
    }
  };

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image 
          style={styles.logo}
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTNjlOWDOfwj0CWXLa1qFnnzEJlJQHWygFXA&s' }}
        />
        <Text style={styles.title}>SISTEMA DE ASISTENCIA Y EVALUACIÓN CONTINUA</Text>
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.inputPassword}
            placeholder="Contraseña"
            secureTextEntry={!showPassword} // Cambia según el estado de `showPassword`
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeButton}>
            <Image
              source={require('./assets/ojo.png')}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.rememberContainer}>
          <TouchableOpacity onPress={toggleRememberMe} style={styles.rememberButton}>
            <View style={styles.checkBox}>
              {rememberMe && <View style={styles.checked} />}
            </View>
            <Text style={styles.rememberText}>Acuérdame</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.forgotPassword}>¿Olvidó su contraseña?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Iniciar sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerText}>Regístrate aquí</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Estilos de la pantalla
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 250,
    height: 70,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  formContainer: {
    paddingHorizontal: 20,
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
    paddingRight: 10,
  },
  inputPassword: {
    flex: 1,
    padding: 12,
    fontSize: 16,
  },
  eyeButton: {
    padding: 5,
  },
  eyeIcon: {
    width: 24,
    height: 24,
    tintColor: '#333', // Cambia el color del ícono si lo necesitas
  },
  rememberContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  rememberButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checked: {
    width: 12,
    height: 12,
    backgroundColor: '#FF6600',
  },
  rememberText: {
    fontSize: 16,
  },
  forgotPassword: {
    color: '#FF6600',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#FF6600',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  registerText: {
    textAlign: 'center',
    color: '#0000FF',
    fontSize: 16,
    marginTop: 20,
  },
});

export default LoginScreen;
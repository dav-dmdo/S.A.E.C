import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Register: undefined;
};

type RegisterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Register'>;

type Errors = {
  userCI?: string;
  firstName?: string;
  middleName?: string;
  firstSurname?: string;
  secondSurname?: string;
  email?: string;
  birthdate?: string;
  gender?: string;
  username?: string;
  password?: string;
  passwordConfirmation?: string;
};

const RegisterScreen = () => {
  const [userCI, setUserCI] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [firstSurname, setFirstSurname] = useState('');
  const [secondSurname, setSecondSurname] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const [errors, setErrors] = useState<Errors>({});

  const navigation = useNavigation<RegisterScreenNavigationProp>();

  const validate = () => {
    const newErrors: Errors = {};

    // Validación de cédula de identidad (solo números)
    if (!userCI) {
      newErrors.userCI = "La cédula es obligatoria.";
    } else if (!/^\d+$/.test(userCI)) {
      newErrors.userCI = "La cédula debe ser un número entero.";
    }

    // Validación de nombres y apellidos (solo letras)
    const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
    if (!firstName) {
      newErrors.firstName = "El primer nombre es obligatorio.";
    } else if (!nameRegex.test(firstName)) {
      newErrors.firstName = "El nombre solo debe contener letras.";
    }

    if (middleName && !nameRegex.test(middleName)) {
      newErrors.middleName = "El segundo nombre solo debe contener letras.";
    }

    if (!firstSurname) {
      newErrors.firstSurname = "El primer apellido es obligatorio.";
    } else if (!nameRegex.test(firstSurname)) {
      newErrors.firstSurname = "El primer apellido solo debe contener letras.";
    }

    if (secondSurname && !nameRegex.test(secondSurname)) {
      newErrors.secondSurname = "El segundo apellido solo debe contener letras.";
    }

    // Validación de correo electrónico
    if (!email) {
      newErrors.email = "El correo es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Ingrese un correo electrónico válido.";
    }

    // Validación de fecha de nacimiento (formato DD-MM-AAAA)
    if (!birthdate) {
      newErrors.birthdate = "La fecha de nacimiento es obligatoria.";
    } else if (!/^\d{2}-\d{2}-\d{4}$/.test(birthdate)) {
      newErrors.birthdate = "Formato de fecha inválido. Use DD-MM-AAAA.";
    }

    // Validación de género
    if (!gender || !['M', 'F'].includes(gender.toUpperCase())) {
      newErrors.gender = "El género debe ser 'M' o 'F'.";
    }

    // Validación de nombre de usuario
    if (!username) {
      newErrors.username = "El nombre de usuario es obligatorio.";
    }

    // Validación de contraseña
    if (!password) {
      newErrors.password = "La contraseña es obligatoria.";
    } else if (password.length < 8) {
      newErrors.password = "La contraseña debe tener al menos 8 caracteres.";
    }

    // Confirmación de contraseña
    if (password !== passwordConfirmation) {
      newErrors.passwordConfirmation = "Las contraseñas no coinciden.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async () => {
    if (validate()) {
      try {
        // solicitud de la API
        const response = await axios.post('http://127.0.0.1:8000/api/user', {
          userCI,
          firstName,
          middleName,
          firstSurname,
          secondSurname,
          email,
          birthdate,
          gender,
          username,
          password,
          passwordConfirmation
        });

        // Si la respuesta es exitosa
        if (response.status === 201) {
          Alert.alert("Registro exitoso");
          navigation.navigate('Login');
        } else {
          Alert.alert("Error", "Ocurrió un problema al registrarse. Intente nuevamente.");
        }
      } catch (error) {
        console.error("Error en el registro:", error);
        Alert.alert("Error", "No se pudo conectar con el servidor. Intente nuevamente.");
      }
    } else {
      Alert.alert("Error", "Por favor, revise los campos y complete correctamente.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <Image 
          style={styles.logo}
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTNjlOWDOfwj0CWXLa1qFnnzEJlJQHWygFXA&s' }}
        />
        <Text style={styles.title}>SISTEMA DE ASISTENCIA Y EVALUACIÓN CONTINUA</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.subtitle}>REGÍSTRATE EN S.A.E.C.</Text>

        <TextInput
          style={styles.input}
          placeholder="Cédula de Identidad"
          keyboardType="numeric"
          value={userCI}
          onChangeText={(value) => setUserCI(value.replace(/[^0-9]/g, ''))} // Limita a números
        />
        {errors.userCI && <Text style={styles.error}>{errors.userCI}</Text>}

        {/* Otros campos van aquí */}

        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 10,
    marginTop: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  formContainer: {
    width: '100%',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FF6600',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    width: '48%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    fontSize: 14,
    marginBottom: 10,
  },
  registerButton: {
    backgroundColor: '#FF6600',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  registerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
});

export default RegisterScreen;
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
  user_ci?: string;
  user_first_name?: string;
  user_middle_name?: string;
  user_first_surname?: string;
  user_second_surname?: string;
  user_email?: string;
  user_birthdate?: string;
  user_gender?: string;
  username?: string;
  password?: string;
  password_confirmation?: string;
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

    if (!userCI) {
      newErrors.user_ci = "La cédula es obligatoria.";
    } else if (!/^\d+$/.test(userCI)) {
      newErrors.user_ci = "La cédula debe ser un número entero.";
    }

    const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
    if (!firstName) {
      newErrors.user_first_name = "El primer nombre es obligatorio.";
    } else if (!nameRegex.test(firstName)) {
      newErrors.user_first_name = "El nombre solo debe contener letras.";
    }

    if (middleName && !nameRegex.test(middleName)) {
      newErrors.user_middle_name = "El segundo nombre solo debe contener letras.";
    }

    if (!firstSurname) {
      newErrors.user_first_surname = "El primer apellido es obligatorio.";
    } else if (!nameRegex.test(firstSurname)) {
      newErrors.user_first_surname = "El primer apellido solo debe contener letras.";
    }

    if (secondSurname && !nameRegex.test(secondSurname)) {
      newErrors.user_second_surname = "El segundo apellido solo debe contener letras.";
    }

    if (!email) {
      newErrors.user_email = "El correo es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.user_email = "Ingrese un correo electrónico válido.";
    }

    if (!birthdate) {
      newErrors.user_birthdate = "La fecha de nacimiento es obligatoria.";
    } else if (!/^\d{2}-\d{2}-\d{4}$/.test(birthdate)) {
      newErrors.user_birthdate = "Formato de fecha inválido. Use DD-MM-AAAA.";
    }

    if (!gender || !['M', 'F'].includes(gender.toUpperCase())) {
      newErrors.user_gender = "El género debe ser 'M' o 'F'.";
    }

    if (!username) {
      newErrors.username = "El nombre de usuario es obligatorio.";
    }

    if (!password) {
      newErrors.password = "La contraseña es obligatoria.";
    } else if (password.length < 8) {
      newErrors.password = "La contraseña debe tener al menos 8 caracteres.";
    }

    if (password !== passwordConfirmation) {
      newErrors.password_confirmation = "Las contraseñas no coinciden.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleRegister = async () => {
    if (validate()) {
      try {
        const trimmedData = {
          user_ci: userCI.trim(),
          user_first_name: firstName.trim(),
          user_middle_name: middleName.trim(),
          user_first_surname: firstSurname.trim(),
          user_second_surname: secondSurname.trim(),
          user_email: email.trim(),
          user_birthdate: birthdate.trim(),
          user_gender: gender.trim(),
          username: username.trim(),
          password: password.trim(),
          password_confirmation: passwordConfirmation.trim()
        };

        console.log("Enviando datos:", trimmedData);

        const response = await axios.post('http://127.0.0.1:8000/api/user', trimmedData);

        if (response.status === 200) {
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

        <TextInput style={styles.input} placeholder="Cédula de Identidad" keyboardType="numeric" value={userCI} onChangeText={(value) => setUserCI(value.replace(/[^0-9]/g, ''))} />
        {errors.user_ci && <Text style={styles.error}>{errors.user_ci}</Text>}

        <View style={styles.row}>
          <TextInput style={styles.halfInput} placeholder="Primer Nombre" value={firstName} onChangeText={(value) => setFirstName(value.replace(/[^A-Za-zÁÉÍÓÚáéíóúñÑ\s]/g, ''))} />
          <TextInput style={styles.halfInput} placeholder="Segundo Nombre" value={middleName} onChangeText={(value) => setMiddleName(value.replace(/[^A-Za-zÁÉÍÓÚáéíóúñÑ\s]/g, ''))} />
        </View>
        {errors.user_first_name && <Text style={styles.error}>{errors.user_first_name}</Text>}
        {errors.user_middle_name && <Text style={styles.error}>{errors.user_middle_name}</Text>}

        <View style={styles.row}>
          <TextInput style={styles.halfInput} placeholder="Primer Apellido" value={firstSurname} onChangeText={(value) => setFirstSurname(value.replace(/[^A-Za-zÁÉÍÓÚáéíóúñÑ\s]/g, ''))} />
          <TextInput style={styles.halfInput} placeholder="Segundo Apellido" value={secondSurname} onChangeText={(value) => setSecondSurname(value.replace(/[^A-Za-zÁÉÍÓÚáéíóúñÑ\s]/g, ''))} />
        </View>
        {errors.user_first_surname && <Text style={styles.error}>{errors.user_first_surname}</Text>}
        {errors.user_second_surname && <Text style={styles.error}>{errors.user_second_surname}</Text>}

        <TextInput style={styles.input} placeholder="Correo Electrónico" keyboardType="email-address" value={email} onChangeText={setEmail} />
        {errors.user_email && <Text style={styles.error}>{errors.user_email}</Text>}

        <TextInput style={styles.input} placeholder="Fecha de Nacimiento (DD-MM-AAAA)" value={birthdate} onChangeText={setBirthdate} />
        {errors.user_birthdate && <Text style={styles.error}>{errors.user_birthdate}</Text>}

        <TextInput style={styles.input} placeholder="Género (M/F)" value={gender} onChangeText={setGender} />
        {errors.user_gender && <Text style={styles.error}>{errors.user_gender}</Text>}

        <TextInput style={styles.input} placeholder="Nombre de Usuario" value={username} onChangeText={setUsername} />
        {errors.username && <Text style={styles.error}>{errors.username}</Text>}

        <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry value={password} onChangeText={setPassword} />
        {errors.password && <Text style={styles.error}>{errors.password}</Text>}

        <TextInput style={styles.input} placeholder="Confirmar Contraseña" secureTextEntry value={passwordConfirmation} onChangeText={setPasswordConfirmation} />
        {errors.password_confirmation && <Text style={styles.error}>{errors.password_confirmation}</Text>}

        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Registrarse</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>¿Ya tienes una cuenta? Inicia sesión</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#fff', padding: 20 },
  logoContainer: { alignItems: 'center', marginBottom: 20 },
  logo: { width: 200, height: 50, resizeMode: 'contain', marginBottom: 10, marginTop: 50 },
  title: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: '#333' },
  formContainer: { width: '100%' },
  subtitle: { fontSize: 16, textAlign: 'center', fontWeight: 'bold', color: '#FF6600', marginBottom: 15 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginBottom: 10, fontSize: 14 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  halfInput: { width: '48%', borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, fontSize: 14, marginBottom: 10 },
  registerButton: { backgroundColor: '#FF6600', padding: 12, borderRadius: 8, marginTop: 10 },
  registerButtonText: { color: '#fff', fontWeight: 'bold', textAlign: 'center', fontSize: 16 },
  error: { color: 'red', fontSize: 12, marginBottom: 10 },
  loginText: { textAlign: 'center', color: 'blue', marginTop: 15, textDecorationLine: 'underline', fontSize: 16 },
});

export default RegisterScreen;
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const StudentProfile = () => {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = await AsyncStorage.getItem('access_token');
        const response = await axios.get('http://18.209.15.163/api/student/profile', {
          headers: { Authorization: token },
        });
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching student profile:', error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil del Estudiante</Text>
      {profile && (
        <>
          <Image source={{ uri: profile.photo }} style={styles.avatar} />
          <Text style={styles.text}>Nombre: {profile.name}</Text>
          <Text style={styles.text}>Correo: {profile.email}</Text>
          <Text style={styles.text}>Matrícula: {profile.student_id}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold' },
  avatar: { width: 100, height: 100, borderRadius: 50, marginVertical: 20 },
  text: { fontSize: 16, marginVertical: 5 },
});

export default StudentProfile;


import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './App';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const Home = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {/* Título principal */}
        <Text style={styles.mainTitle}>S.A.E.C</Text>
        <Text style={styles.subtitle}>Sistema de asistencia y evaluación continua</Text>

        {/* Sección de estadísticas con cuadros centrados */}
        <View style={styles.gridContainer}>
          <TouchableOpacity style={[styles.gridItem, { backgroundColor: '#fcd46e' }]}>
            <Image 
              source={require('./assets/estudiante.png')} 
              style={[styles.gridImage, { tintColor: '#FFFFFF' }]}
            />
            <Text style={styles.gridTitle}>ESTUDIANTES</Text>
            <Text style={styles.gridCount}>1328</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.gridItem, { backgroundColor: '#f4a1a1' }]}>
            <Image 
              source={require('./assets/profesor.png')} 
              style={[styles.gridImage, { tintColor: '#FFFFFF' }]}
            />
            <Text style={styles.gridTitle}>PROFESORES</Text>
            <Text style={styles.gridCount}>145</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.gridItem, { backgroundColor: '#9fe79d' }]}>
            <Image 
              source={require('./assets/materia.png')} 
              style={[styles.gridImage, { tintColor: '#FFFFFF' }]}
            />
            <Text style={styles.gridTitle}>MATERIAS</Text>
            <Text style={styles.gridCount}>4</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.gridItem, { backgroundColor: '#a6e7f4' }]}
            onPress={() => navigation.navigate('AttendanceView')}
          >
            <Image 
              source={require('./assets/asistencia.png')} 
              style={[styles.gridImage, { tintColor: '#FFFFFF' }]}
            />
            <Text style={styles.gridTitle}>ASISTENCIAS</Text>
            <Text style={styles.gridCount}>27</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.gridItem, { backgroundColor: '#c0c2f4' }]}>
            <Image 
              source={require('./assets/comentario.png')} 
              style={[styles.gridImage, { tintColor: '#FFFFFF' }]}
            />
            <Text style={styles.gridTitle}>COMENTARIO</Text>
            <Text style={styles.gridCount}>7</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.gridItem, { backgroundColor: '#e4a1f4' }]}>
            <Image 
              source={require('./assets/evaluacion.png')} 
              style={[styles.gridImage, { tintColor: '#FFFFFF' }]}
            />
            <Text style={styles.gridTitle}>EVALUACIÓN</Text>
            <Text style={styles.gridCount}>24</Text>
          </TouchableOpacity>
        </View>

        {/* Texto de descripción centrado */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            S.A.E.C. es un sistema para contabilizar las asistencias de los estudiantes. No sólo toma las asistencias
            sino que permite a los estudiantes evaluar cada clase dada de los profesores.
          </Text>
        </View>

      </ScrollView>
      <SafeAreaView edges={['bottom']} />
    </SafeAreaView>
  );
};

// Estilos
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  scrollContainer: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -5,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 30,
  },
  gridItem: {
    width: '40%', // Ajusta el ancho para que los cuadros sean más grandes
    aspectRatio: 1.2, // Ajusta la proporción para hacerlo más rectangular
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  gridImage: {
    width: 30,
    height: 30,
    marginBottom: 10,
  },
  gridTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  gridCount: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 5,
  },
  descriptionContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  descriptionText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
    marginTop: -60,
  },
});

export default Home;
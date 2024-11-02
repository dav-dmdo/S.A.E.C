import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
<<<<<<< HEAD
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
              style={[styles.gridImage, { width: 38, height: 38, tintColor: '#FFFFFF' }]} // Icono blanco y más pequeño
            />
=======
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './App';

const Home = () => {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();  return (

    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

      <View style={styles.section}>
          <Text style={styles.sectionTitle2}>Bienvenido a S.A.E.C!</Text>
        </View>
        {/* Sección de estadísticas con cuadros */}
        <View style={styles.gridContainer}>
          <TouchableOpacity style={[styles.gridItem, { backgroundColor: '#fcd46e' }]}>
            <Icon name="people" size={40} color="#000" />
>>>>>>> 9ce21f812a1db79f9f6af4693e4e56a3b8a90c87
            <Text style={styles.gridTitle}>ESTUDIANTES</Text>
            <Text style={styles.gridCount}>1328</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.gridItem, { backgroundColor: '#f4a1a1' }]}>
<<<<<<< HEAD
            <Image 
              source={require('./assets/profesor.png')} 
              style={[styles.gridImage, { tintColor: '#FFFFFF' }]} // Icono blanco
            />
=======
            <Icon name="person" size={40} color="#000" />
>>>>>>> 9ce21f812a1db79f9f6af4693e4e56a3b8a90c87
            <Text style={styles.gridTitle}>PROFESORES</Text>
            <Text style={styles.gridCount}>145</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.gridItem, { backgroundColor: '#9fe79d' }]}>
<<<<<<< HEAD
            <Image 
              source={require('./assets/materia.png')} 
              style={[styles.gridImage, { tintColor: '#FFFFFF' }]} // Icono blanco
            />
=======
            <Icon name="menu-book" size={40} color="#000" />
>>>>>>> 9ce21f812a1db79f9f6af4693e4e56a3b8a90c87
            <Text style={styles.gridTitle}>MATERIAS</Text>
            <Text style={styles.gridCount}>4</Text>
          </TouchableOpacity>

<<<<<<< HEAD
          <TouchableOpacity
            style={[styles.gridItem, { backgroundColor: '#a6e7f4' }]}
            onPress={() => navigation.navigate('AttendanceView')}
          >
            <Image 
              source={require('./assets/asistencia.png')} 
              style={[styles.gridImage, { tintColor: '#FFFFFF' }]} // Icono blanco
            />
=======
          <TouchableOpacity 
            style={[styles.gridItem, { backgroundColor: '#a6e7f4' }]} 
            onPress={() => navigation.navigate('AttendanceView')}  // Navegar a la vista de asistencias
          >
            <Icon name="check-circle" size={40} color="#000" />
>>>>>>> 9ce21f812a1db79f9f6af4693e4e56a3b8a90c87
            <Text style={styles.gridTitle}>ASISTENCIAS</Text>
            <Text style={styles.gridCount}>27</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.gridItem, { backgroundColor: '#c0c2f4' }]}>
<<<<<<< HEAD
            <Image 
              source={require('./assets/comentario.png')} 
              style={[styles.gridImage, { tintColor: '#FFFFFF' }]} // Icono blanco
            />
=======
            <Icon name="comment" size={40} color="#000" />
>>>>>>> 9ce21f812a1db79f9f6af4693e4e56a3b8a90c87
            <Text style={styles.gridTitle}>COMENTARIO</Text>
            <Text style={styles.gridCount}>7</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.gridItem, { backgroundColor: '#e4a1f4' }]}>
<<<<<<< HEAD
            <Image 
              source={require('./assets/evaluacion.png')} 
              style={[styles.gridImage, { tintColor: '#FFFFFF' }]} // Icono blanco
            />
=======
            <Icon name="assessment" size={40} color="#000" />
>>>>>>> 9ce21f812a1db79f9f6af4693e4e56a3b8a90c87
            <Text style={styles.gridTitle}>EVALUACIÓN</Text>
            <Text style={styles.gridCount}>24</Text>
          </TouchableOpacity>
        </View>

<<<<<<< HEAD
        {/* Texto de descripción centrado */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
=======
        {/* Sección de descripción del sistema */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Un sistema para estudiantes y profesores</Text>
          <Text style={styles.sectionText}>
>>>>>>> 9ce21f812a1db79f9f6af4693e4e56a3b8a90c87
            S.A.E.C. es un sistema para contabilizar las asistencias de los estudiantes. No sólo toma las asistencias
            sino que permite a los estudiantes evaluar cada clase dada de los profesores.
          </Text>
        </View>

<<<<<<< HEAD
=======
        {/* Sección "Escuchamos a los estudiantes" */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Escuchamos a los estudiantes</Text>
          <Text style={styles.sectionText}>
            El sistema cuenta con múltiples opciones para evaluar las clases de los profesores, obteniendo un resumen
            sobre el método de enseñanza y forma de evaluar del profesor.
          </Text>
          <Text style={styles.sectionText}>
            ¡Esto para que puedas elegir el mejor profesor para tu siguiente trimestre!
          </Text>

          {/* Evaluación de clases */}
          <View style={styles.featureBox}>
            <Text style={styles.featureTitle}>🌟 Evaluación de clases</Text>
            <Text style={styles.featureText}>
              Puntúa del 1 al 5 la clase dada de un profesor. Esto permite una retroalimentación que motiva al profesor
              de mejorar y disminuir las carencias que ha tenido en su clase.
            </Text>
          </View>

          {/* Comentarios anónimos */}
          <View style={styles.featureBox}>
            <Text style={styles.featureTitle}>💬 Comentarios anónimos</Text>
            <Text style={styles.featureText}>
              Si las puntuaciones no bastan, siempre puedes dejar un comentario donde puedas expresarte mejor, y de forma ANÓNIMA.
            </Text>
          </View>

          {/* Asistencias */}
          <View style={styles.featureBox}>
            <Text style={styles.featureTitle}>✅ Asistencias</Text>
            <Text style={styles.featureText}>
              Para que los estudiantes y profesores puedan ahorrar tiempo, las asistencias serán contabilizadas con el
              carnet estudiantil. Serán leídas por un lector en la puerta de la clase.
            </Text>
          </View>
        </View>

        {/* Sección de profesores con imagen y evaluación */}
        <View style={styles.professorList}>
          <View style={styles.professorItem}>
            <Image
              style={styles.professorImage}
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/800px-Pierre-Person.jpg' }} // Imagen de ejemplo
            />
            <View style={styles.professorDetails}>
              <Text style={styles.professorName}>Hector Vera</Text>
              <Text style={styles.professorID}>123456789012345</Text>
            </View>
            <Text style={styles.professorScore}>4.1/5.0</Text>
          </View>

          <View style={styles.professorItem}>
            <Image
              style={styles.professorImage}
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/800px-Pierre-Person.jpg' }} // Imagen de ejemplo
            />
            <View style={styles.professorDetails}>
              <Text style={styles.professorName}>Lida Niño</Text>
              <Text style={styles.professorID}>Matemática</Text>
            </View>
            <Text style={[styles.professorScore, { color: 'red' }]}>3.3/5.0</Text>
          </View>

          <View style={styles.professorItem}>
            <Image
              style={styles.professorImage}
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/800px-Pierre-Person.jpg' }} // Imagen de ejemplo
            />
            <View style={styles.professorDetails}>
              <Text style={styles.professorName}>Suhey Pérez</Text>
              <Text style={styles.professorID}>Química</Text>
            </View>
            <Text style={styles.professorScore}>4.5/5.0</Text>
          </View>
        </View>

        {/* Sección "También a los profesores" */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>También a los profesores</Text>
          <Text style={styles.sectionText}>
            Este sistema está hecho principalmente para contabilizar las asistencias de los alumnos, permitiendo tomar en cuenta los más participativos.
          </Text>
          <Text style={styles.sectionText}>
            Por otra parte, permite extraer un resumen más detallado de la experiencia de los alumnos sobre cada clase dada.
          </Text>

          {/* Contabilizar asistencias */}
          <View style={styles.featureBox}>
            <Text style={styles.featureTitle}>📝 Contabilizar asistencias</Text>
            <Text style={styles.featureText}>
              Permite visualizar una tabla con todos los estudiantes pertenecientes y no pertenecientes a cada clase.
            </Text>
          </View>

          {/* Resumen de la clase */}
          <View style={styles.featureBox}>
            <Text style={styles.featureTitle}>📋 Resumen de la clase</Text>
            <Text style={styles.featureText}>
              Como los estudiantes podrán evaluar y expresarse sobre la clase dada, los profesores podrán entender en qué deben enfocarse más, y mejorar en sus carencias.
            </Text>
          </View>
        </View>


        <Text style={styles.sectionTitle}>Materias</Text>
        {/* Tabla de materias */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} style={styles.horizontalScroll}>
          <View style={styles.tableContainer}>
            <View style={styles.tableHeaderRow}>
              <Text style={styles.tableHeader}>Clase</Text>
              <Text style={styles.tableHeader}>Fecha</Text>
              <Text style={styles.tableHeader}>Asistencias</Text>
              <Text style={styles.tableHeader}>Puntuación</Text>
              <Text style={styles.tableHeaderLink}></Text>
            </View>

            {/* Datos hardcodeados */}
            <View style={styles.tableRow}>
              <Text style={styles.tableColumn}>Matemática II</Text>
              <Text style={styles.tableColumn}>Lun. 7:00AM - 8:30AM</Text>
              <Text style={styles.tableColumn}>24</Text>
              <Text style={styles.tableColumn}>3.6</Text>
              <Text style={styles.tableColumnLink}>Ver más</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableColumn}>Matemática II</Text>
              <Text style={styles.tableColumn}>Lun. 8:45AM - 10:15AM</Text>
              <Text style={styles.tableColumn}>32</Text>
              <Text style={styles.tableColumn}>2.1</Text>
              <Text style={styles.tableColumnLink}>Ver más</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableColumn}>Matemática III</Text>
              <Text style={styles.tableColumn}>Mar. 10:30AM - 12:00PM</Text>
              <Text style={styles.tableColumn}>14</Text>
              <Text style={styles.tableColumn}>1.1</Text>
              <Text style={styles.tableColumnLink}>Ver más</Text>
            </View>
            <View style={styles.tableRow}>
              <Text style={styles.tableColumn}>Estadística</Text>
              <Text style={styles.tableColumn}>Mar. 2:00PM - 3:15PM</Text>
              <Text style={styles.tableColumn}>17</Text>
              <Text style={styles.tableColumn}>4.6</Text>
              <Text style={styles.tableColumnLink}>Ver más</Text>
            </View>
          </View>
        </ScrollView>
>>>>>>> 9ce21f812a1db79f9f6af4693e4e56a3b8a90c87
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
    paddingHorizontal: 20,
<<<<<<< HEAD
    paddingBottom: 20, // Reduce el padding inferior
    alignItems: 'center', // Centra el contenido horizontalmente
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 40,
=======
    paddingBottom: 40,
  },
  horizontalScroll: {
    backgroundColor: '#e0e0e0', 
    padding: 10,
    borderRadius: 10,
    marginTop: 0, 
  },
  menuButton: {
    padding: 10,
  },
  menuBar: {
    width: 25,
    height: 3,
    backgroundColor: '#000',
    marginVertical: 2,
>>>>>>> 9ce21f812a1db79f9f6af4693e4e56a3b8a90c87
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
<<<<<<< HEAD
    justifyContent: 'center', // Centra los elementos en cada fila
    marginBottom: -40,
  },
  gridItem: {
    width: '45%',
=======
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  gridItem: {
    width: '47%',
>>>>>>> 9ce21f812a1db79f9f6af4693e4e56a3b8a90c87
    aspectRatio: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
<<<<<<< HEAD
    margin: 10, // Espacio entre los cuadros
=======
    marginBottom: 20,
>>>>>>> 9ce21f812a1db79f9f6af4693e4e56a3b8a90c87
    elevation: 5, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
<<<<<<< HEAD
  gridImage: {
    width: 40,
    height: 40,
    marginBottom: 10,
=======
  sectionTitle2: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center', 
    marginBottom: 20,
>>>>>>> 9ce21f812a1db79f9f6af4693e4e56a3b8a90c87
  },
  gridTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  gridCount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
<<<<<<< HEAD
  descriptionContainer: {
    marginTop: 10, // Ajusta el margen superior para subir el texto
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  descriptionText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default Home;
=======
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center', 
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
    textAlign: 'justify', 
  },
  featureBox: {
    backgroundColor: '#e8e8e8',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  featureText: {
    fontSize: 14,
    color: '#555',
  },
  professorList: {
    marginVertical: 20,
  },
  professorItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  professorImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  professorDetails: {
    flex: 1,
  },
  professorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  professorID: {
    fontSize: 14,
    color: '#666',
  },
  professorScore: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50', 
  },
  tableContainer: {
    marginBottom: 80,
    width: 650, 
  },
  tableTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  tableHeaderRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 40,
    marginBottom: 10,
  },
  tableHeader: {
    width: 150, 
    fontWeight: 'bold',
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  tableHeaderLink: {
    width: 100, 
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  tableColumn: {
    width: 150, 
    fontSize: 14,
    textAlign: 'center',
  },
  tableColumnLink: {
    width: 100, 
    fontSize: 14,
    color: '#0000FF',
    textAlign: 'center',
  },
  footer: {
    paddingVertical: 20,
    backgroundColor: '#3343a1',
    alignItems: 'center',
    marginTop: 50,
  },
  footerLink: {
    color: '#fff',
    marginBottom: 10,
    fontSize: 14,
  },
  footerText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 10,
  },
});

export default Home;
>>>>>>> 9ce21f812a1db79f9f6af4693e4e56a3b8a90c87

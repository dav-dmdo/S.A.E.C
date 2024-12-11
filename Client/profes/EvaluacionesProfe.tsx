import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, Modal, FlatList, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import axios from 'axios';
import { RootStackParamList } from '../App';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'TeacherEvaluations'>;

const TeacherEvaluations = () => {
  const navigation = useNavigation<NavigationProp>();
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar el modal
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null); // Materia seleccionada
  const [selectedSection, setSelectedSection] = useState<string | null>(null); // Sección seleccionada
  const [comments, setComments] = useState<string[]>([]); // Comentarios de la materia seleccionada
  const [averageRating, setAverageRating] = useState<number | null>(null); // Rating promedio
  const [evaluationData, setEvaluationData] = useState<any[]>([]); // Datos obtenidos del backend

  // Lista de materias y secciones
  const subjects = [
    { id: 16, subject: 'Matemática III', section: '1' },
    { id: 27, subject: 'Estadística para Ing.', section: '2' },
    { id: 15, subject: 'Ideas Emprendedoras', section: '3' },
    { id: 28, subject: 'Base de Datos I', section: '4' },
    { id: 6, subject: 'Matemática I', section: '5' },
  ];

  // Obtener datos de evaluaciones desde la API
  const fetchEvaluationData = async () => {
    try {
      const response = await axios.get('http://18.209.15.163/api/attendance');
      setEvaluationData(response.data); // Guardar los datos obtenidos
    } catch (error) {
      console.error('Error al obtener los datos de evaluaciones:', error);
      Alert.alert('Error', 'No se pudieron cargar los datos de evaluaciones.');
    }
  };

  // Mostrar el modal con la información de la materia seleccionada
  const openModal = (subjectId: number, subjectName: string, section: string) => {
    const filteredEvaluations = evaluationData.filter((evalItem) => evalItem.class_id === subjectId);

    // Calcular promedio y extraer comentarios
    const average =
      filteredEvaluations.length > 0
        ? filteredEvaluations.reduce((sum, item) => sum + (item.attendance_rating || 0), 0) / filteredEvaluations.length
        : null;

    const extractedComments = filteredEvaluations
      .filter((item) => item.attendance_comment)
      .map((item) => item.attendance_comment);

    // Actualizar estado
    setSelectedSubject(subjectName);
    setSelectedSection(section);
    setComments(extractedComments.length > 0 ? extractedComments : ['Sin comentarios disponibles.']);
    setAverageRating(average);
    setModalVisible(true);
  };

  // Cerrar modal
  const closeModal = () => {
    setModalVisible(false);
    setSelectedSubject(null);
    setSelectedSection(null);
    setComments([]);
    setAverageRating(null);
  };

  // Llamar al backend al cargar la vista
  useEffect(() => {
    fetchEvaluationData();
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/profesor.png')} style={styles.headerIcon} />
        <Text style={styles.headerTitle}>Evaluaciones Profesores</Text>
      </View>

      {/* Tabla de materias */}
      <ScrollView style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>Materia</Text>
          <Text style={styles.tableHeaderText}>Sección</Text>
          <Text style={styles.tableHeaderText}>Evaluar</Text>
        </View>

        {subjects.map((item) => (
          <View key={item.id} style={styles.tableRow}>
            <View style={[styles.tableCell, { alignItems: 'flex-start' }]}>
              <Text>{item.subject}</Text>
            </View>
            <View style={[styles.tableCell, { alignItems: 'center' }]}>
              <Text>{item.section}</Text>
            </View>
            <View style={[styles.tableCell, { alignItems: 'center' }]}>
              <TouchableOpacity onPress={() => openModal(item.id, item.subject, item.section)}>
                <Image source={require('../assets/ojo.png')} style={styles.infoIcon} />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Modal de evaluación */}
      <Modal visible={modalVisible} transparent={true} animationType="slide" onRequestClose={closeModal}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{selectedSubject}</Text>
            <Text style={styles.modalSubtitle}>Sección: {selectedSection}</Text>

            {/* Promedio de evaluación */}
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>Promedio de Evaluación:</Text>
              <Text style={styles.average}>{averageRating ? `${averageRating.toFixed(1)} / 5` : 'N/A'}</Text>
            </View>

            {/* Comentarios */}
            <Text style={styles.commentsTitle}>Comentarios Anónimos:</Text>
            {comments.length > 0 ? (
              <FlatList
                data={comments}
                keyExtractor={(comment, index) => index.toString()}
                renderItem={({ item }) => <Text style={styles.commentItem}>• {item}</Text>}
              />
            ) : (
              <Text>No hay comentarios disponibles.</Text>
            )}

            {/* Botón para cerrar */}
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.footerIconsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={require('../assets/House.png')} style={styles.footerIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AttendanceView')}>
            <Image source={require('../assets/Assist.png')} style={styles.footerIcon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.footerText}>Universidad Metropolitana de Caracas. Todos los derechos reservados.</Text>
      </View>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  header: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#4a90e2', padding: 15 },
  headerIcon: { width: 40, height: 40, marginRight: 10 },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
  tableContainer: { flex: 1, marginTop: 20, paddingHorizontal: 20 },
  tableHeader: { flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10, backgroundColor: '#f1f1f1', borderBottomWidth: 1, borderColor: '#ddd' },
  tableHeaderText: { fontSize: 14, fontWeight: 'bold', textAlign: 'center', flex: 1 },
  tableRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10, borderBottomWidth: 1, borderColor: '#ddd' },
  tableCell: { flex: 1, paddingHorizontal: 5 },
  infoIcon: { width: 20, height: 20, tintColor: '#333' },
  modalBackground: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'center', alignItems: 'center' },
  modalContainer: { width: '85%', backgroundColor: '#fff', borderRadius: 10, padding: 20 },
  modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  modalSubtitle: { fontSize: 16, color: '#555', marginBottom: 20, textAlign: 'center' },
  ratingContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  ratingText: { fontSize: 16, color: '#333' },
  average: { fontSize: 18, fontWeight: 'bold', color: '#4caf50' },
  commentsTitle: { fontSize: 16, fontWeight: 'bold', marginTop: 10, marginBottom: 10 },
  commentItem: { fontSize: 14, marginBottom: 5, color: '#666' },
  closeButton: { marginTop: 20, paddingVertical: 10, paddingHorizontal: 20, backgroundColor: '#4a90e2', borderRadius: 5 },
  closeButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  footer: { backgroundColor: '#3343a1', paddingVertical: 20, alignItems: 'center' },
  footerIconsContainer: { flexDirection: 'row', justifyContent: 'center', marginBottom: 10 },
  footerIcon: { width: 40, height: 40, marginHorizontal: 10, tintColor: "#fff" },
  footerText: { color: '#fff', fontSize: 6, textAlign: 'center' },
});

export default TeacherEvaluations;

import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Modal, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import axios from 'axios';
import { RootStackParamList } from '../App';

// Definir el tipo para navegación
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'AttendanceView'>;

const AttendanceRecord = () => {
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar la visibilidad del modal
  const [selectedSubject, setSelectedSubject] = useState<string>(''); // Nombre de la materia seleccionada
  const [rating, setRating] = useState<number>(3); // Calificación seleccionada
  const [comment, setComment] = useState<string>(''); // Comentario del usuario

  const navigation = useNavigation<NavigationProp>(); // Navegación entre pantallas

  // Mapeo manual de IDs basado en el nombre de la materia
  const getSubjectId = (subjectName: string): number | null => {
    switch (subjectName) {
      case 'Matemática III':
        return 16;
      case 'Estadística para Ing.':
        return 27;
      case 'Ideas Emprendedoras':
        return 15;
      case 'Base de Datos I':
        return 28;
      case 'Matemática I':
        return 6;
      default:
        return null; // Retorna null si no se encuentra el nombre
    }
  };

  // Función para abrir el modal de evaluación
  const openModal = (subjectName: string) => {
    const subjectId = getSubjectId(subjectName); // Obtener el ID manualmente
    if (!subjectId) {
      Alert.alert('Error', 'No se pudo encontrar el ID de la materia seleccionada.');
      return;
    }

    setSelectedSubject(subjectName); // Asignar el nombre de la materia seleccionada
    setModalVisible(true); // Mostrar el modal
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setModalVisible(false);
    setComment(''); // Limpiar comentario
    setRating(3); // Resetear calificación
  };

  // Función para enviar los datos de evaluación a la API
  const sendAttendanceData = async () => {
    const subjectId = getSubjectId(selectedSubject); // Obtener el ID manualmente
    if (!subjectId) {
      Alert.alert('Error', 'No se pudo determinar el ID de la materia seleccionada.');
      return;
    }

    try {
      const userCI = (await axios.get('http://18.209.15.163/api/user/current')).data; // Obtener el CI del usuario logueado
      const response = await axios.put(`http://18.209.15.163/api/attendance/${userCI}`, {
        attendance_comment: comment, // Comentario
        attendance_rating: rating, // Calificación
        id: subjectId, // Enviar el ID manual configurado
      });

      if (response.status === 200) {
        Alert.alert('Éxito', 'Comentario y calificación guardados correctamente.');
        closeModal(); // Cerrar el modal
      } else {
        Alert.alert('Error', 'Hubo un problema al guardar los datos.');
      }
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      Alert.alert('Error', 'No se pudo conectar con el servidor.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/carpeta.png')} style={[styles.headerIcon, { tintColor: '#FFFFFF' }]} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Registro de asistencias</Text>
          <Text style={styles.headerSubtitle}>
            Aquí puedes evaluar tus clases y enviar comentarios.
          </Text>
        </View>
      </View>

      {/* Tabla de materias */}
      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>DÍA</Text>
          <Text style={styles.tableHeaderText}>MATERIA</Text>
          <Text style={styles.tableHeaderText}>EVALUAR</Text>
        </View>

        {/* Mostrar materias con botones de acción */}
        {[
          { day: 'Mié.', name: 'Matemática III' },
          { day: 'Mié.', name: 'Estadística para Ing.' },
          { day: 'Mar.', name: 'Ideas Emprendedoras' },
          { day: 'Mar.', name: 'Base de Datos I' },
          { day: 'Lun.', name: 'Matemática I' },
        ].map(({ day, name }) => (
          <View key={name} style={styles.tableRow}>
            <View style={styles.centeredCell}>
              <Text style={styles.tableCell}>{day}</Text>
            </View>
            <View style={styles.centeredCell}>
              <Text style={styles.tableCell}>{name}</Text>
            </View>
            <View style={styles.centeredCell}>
              <TouchableOpacity onPress={() => openModal(name)}>
                <Image source={require('../assets/ojo.png')} style={styles.infoIcon} />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      {/* Modal de evaluación */}
      <Modal visible={modalVisible} animationType="slide" transparent={true} onRequestClose={closeModal}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Evaluar Materia</Text>
            <View style={styles.modalSection}>
              <Text style={styles.modalLabel}>Materia</Text>
              <Text style={styles.modalValue}>{selectedSubject}</Text>
            </View>
            <View style={styles.modalSection}>
              <Text style={styles.modalLabel}>Calificación</Text>
              <View style={styles.ratingContainer}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <TouchableOpacity key={star} onPress={() => setRating(star)}>
                    <Image
                      source={require('../assets/estrella.png')}
                      style={[styles.starIcon, { tintColor: star <= rating ? '#f4a261' : '#ccc' }]}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <View style={styles.modalSection}>
              <Text style={styles.modalLabel}>Comentario</Text>
              <TextInput
                style={styles.textInput}
                multiline
                placeholder="Escribe tu comentario..."
                value={comment}
                onChangeText={setComment}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.saveButton} onPress={sendAttendanceData}>
                <Text style={styles.buttonText}>Guardar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <Text style={styles.buttonText}>Cerrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  header: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#3343a1', padding: 15 },
  headerIcon: { width: 40, height: 40, marginRight: 10 },
  headerTextContainer: { flex: 1 },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
  headerSubtitle: { fontSize: 14, color: '#f0f0f0', marginTop: 5 },
  tableContainer: { marginTop: 20, paddingHorizontal: 20 },
  tableHeader: { flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10, backgroundColor: '#f1f1f1', borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#ddd' },
  tableHeaderText: { fontSize: 14, fontWeight: 'bold', width: '30%', textAlign: 'center' },
  tableRow: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingVertical: 10, borderBottomWidth: 1, borderColor: '#ddd', backgroundColor: '#f8f8f8', marginVertical: 2, borderRadius: 5 },
  centeredCell: { width: '30%', alignItems: 'center' },
  tableCell: { fontSize: 14, textAlign: 'center' },
  infoIcon: { width: 20, height: 20, tintColor: '#333' },
  modalBackground: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  modalContainer: { width: '85%', backgroundColor: '#fff', borderRadius: 10, padding: 20 },
  modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 15, textAlign: 'center' },
  modalSection: { marginBottom: 10 },
  modalLabel: { fontSize: 14, fontWeight: 'bold', color: '#555' },
  modalValue: { fontSize: 14, color: '#007BFF', marginBottom: 5 },
  ratingContainer: { flexDirection: 'row', marginTop: 5 },
  starIcon: { width: 24, height: 24, marginHorizontal: 2 },
  textInput: { borderColor: '#ccc', borderWidth: 1, borderRadius: 5, padding: 10, fontSize: 14, marginTop: 5 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
  saveButton: { backgroundColor: '#4CAF50', padding: 10, borderRadius: 5, flex: 0.48 },
  closeButton: { backgroundColor: '#f0f0f0', padding: 10, borderRadius: 5, flex: 0.48 },
  buttonText: { textAlign: 'center', fontWeight: 'bold' },
});

export default AttendanceRecord;

import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Modal, FlatList } from 'react-native';

const TeacherEvaluations = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  // Datos de materias y secciones
  const subjects = [
    { subject: 'Matemática III', section: '1', average: 4.5, comments: ['Clase excelente.', 'Muy clara explicación.'] },
    { subject: 'Estadística para Ing.', section: '2', average: 4.0, comments: ['Muy interesante.', 'Podría ser más interactiva.'] },
    { subject: 'Base de Datos I', section: '3', average: 3.8, comments: ['Buena clase.', 'Faltaron ejemplos prácticos.'] },
  ];

  // Manejo del modal
  const openModal = (subject: string, section: string) => {
    setSelectedSubject(subject);
    setSelectedSection(section);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedSubject(null);
    setSelectedSection(null);
  };

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
          <Text style={styles.tableHeaderText}>Info</Text>
        </View>

        {subjects.map((item, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={styles.tableCell}>{item.subject}</Text>
            <Text style={styles.tableCell}>{item.section}</Text>
            <TouchableOpacity onPress={() => openModal(item.subject, item.section)}>
              <Image source={require('../assets/ojo.png')} style={styles.infoIcon} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Modal de información */}
      <Modal visible={modalVisible} transparent={true} animationType="slide" onRequestClose={closeModal}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>{selectedSubject}</Text>
            <Text style={styles.modalSubtitle}>Sección: {selectedSection}</Text>

            {/* Promedio de evaluación */}
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>Promedio de Evaluación: </Text>
              <Text style={styles.average}>{subjects.find(item => item.subject === selectedSubject)?.average.toFixed(1)} / 5</Text>
            </View>

            {/* Comentarios */}
            <Text style={styles.commentsTitle}>Comentarios Anónimos:</Text>
            <FlatList
              data={subjects.find(item => item.subject === selectedSubject)?.comments}
              keyExtractor={(comment, index) => index.toString()}
              renderItem={({ item }) => <Text style={styles.commentItem}>• {item}</Text>}
            />

            {/* Botón para cerrar */}
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4a90e2',
    padding: 15,
  },
  headerIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  tableContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#f1f1f1',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  tableHeaderText: {
    fontSize: 14,
    fontWeight: 'bold',
    width: '30%',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f8f8f8',
    marginVertical: 2,
    borderRadius: 5,
  },
  tableCell: {
    fontSize: 14,
    width: '30%',
    textAlign: 'center',
  },
  infoIcon: {
    width: 20,
    height: 20,
    tintColor: '#333',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalSubtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  ratingText: {
    fontSize: 16,
    color: '#333',
  },
  average: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4caf50',
  },
  commentsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  commentItem: {
    fontSize: 14,
    marginBottom: 5,
    color: '#666',
    alignSelf: 'flex-start',
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#4a90e2',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TeacherEvaluations;

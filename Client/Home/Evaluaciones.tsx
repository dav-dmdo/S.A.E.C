import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Modal, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Evaluations'>;

const EvaluationsView = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const navigation = useNavigation<NavigationProp>();

  const subjects = [
    { subject: "Matemática III", rating: 4, comment: "Explicación muy clara y organizada." },
    { subject: "Estadística para ing.", rating: 5, comment: "Excelente clase, aprendí muchísimo." },
    { subject: "Ideas Emprendedoras", rating: 3, comment: "Interesante, pero faltaron ejemplos prácticos." },
    { subject: "Base de Datos I", rating: 5, comment: "Muy interactiva y útil para proyectos reales." },
    { subject: "Matemática I", rating: 4, comment: "El profesor resolvió dudas detalladamente." },
  ];

  const openModal = (subject: string, rating: number, comment: string) => {
    setSelectedSubject(subject);
    setRating(rating);
    setComment(comment);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../assets/evaluacion.png')}
          style={[styles.headerIcon, { tintColor: '#FFFFFF' }]}
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Registro de Evaluaciones</Text>
          <Text style={styles.headerSubtitle}>
            Aquí puedes ver las clases que has evaluado y los comentarios que has dejado.
          </Text>
        </View>
      </View>

      {/* Tabla de registros */}
      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>CLASES</Text>
          <Text style={styles.tableHeaderText}>EVALUACIONES</Text>
        </View>

        {subjects.map((item, index) => (
          <View key={index} style={styles.tableRow}>
            <View style={styles.centeredCell}>
              <Text style={styles.tableCell}>{item.subject}</Text>
            </View>
            <View style={styles.centeredCell}>
              <TouchableOpacity onPress={() => openModal(item.subject, item.rating, item.comment)}>
                <Image source={require('../assets/ojo.png')} style={styles.infoIcon} />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.footerLink}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AttendanceView')}>
          <Text style={styles.footerLink}>Asistencias</Text>
        </TouchableOpacity>
        <Text style={styles.footerText}>Universidad Metropolitana de Caracas. Todos los derechos reservados.</Text>
      </View>

      {/* Modal para detalles de evaluación */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Detalle de Evaluación</Text>
            <View style={styles.modalSection}>
              <Text style={styles.modalLabel}>Materia</Text>
              <Text style={styles.modalValue}>{selectedSubject}</Text>
            </View>
            <View style={styles.modalSection}>
              <Text style={styles.modalLabel}>Puntaje</Text>
              <View style={styles.ratingContainer}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Image
                    key={star}
                    source={require('../assets/estrella.png')}
                    style={[
                      styles.starIcon,
                      { tintColor: star <= rating ? '#f4a261' : '#ccc' },
                    ]}
                  />
                ))}
              </View>
            </View>
            <View style={styles.modalSection}>
              <Text style={styles.modalLabel}>Comentario</Text>
              <Text style={styles.modalComment}>{comment}</Text>
            </View>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.buttonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7fa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3e64ff',
    padding: 15,
  },
  headerIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  headerTextContainer: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#e0e0e0',
    marginTop: 5,
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
    width: '40%',
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
  centeredCell: {
    width: '40%',
    alignItems: 'center',
  },
  tableCell: {
    fontSize: 14,
    textAlign: 'center',
  },
  infoIcon: {
    width: 20,
    height: 20,
    tintColor: '#3e64ff',
  },
  footer: {
    paddingVertical: 20,
    backgroundColor: '#3e64ff',
    alignItems: 'center',
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
    textAlign: 'center',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalSection: {
    marginBottom: 10,
  },
  modalLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
  },
  modalValue: {
    fontSize: 14,
    color: '#3e64ff',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  starIcon: {
    width: 24,
    height: 24,
    marginHorizontal: 2,
  },
  modalComment: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  closeButton: {
    backgroundColor: '#3e64ff',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default EvaluationsView;

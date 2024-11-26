import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Modal, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import axios from 'axios';
import { RootStackParamList } from '../App';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Evaluations'>;

const subjects = [
  { id: 1, subject_name: 'Matemática III' },
  { id: 27, subject_name: 'Estadística para Ing.' },
  { id: 15, subject_name: 'Ideas Emprendedoras' },
  { id: 28, subject_name: 'Base de Datos I' },
  { id: 6, subject_name: 'Matemática I' },
];

const EvaluationsView = () => {
  const navigation = useNavigation<NavigationProp>();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<string>(''); // Nombre de la materia
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [evaluations, setEvaluations] = useState<any[]>([]); // Datos de las evaluaciones

  // Obtener el CI del usuario actual
  const getUserCI = async () => {
    try {
      const response = await axios.get('http://18.209.15.163/api/user/current');
      return response.data;
    } catch (error) {
      console.error('Error al obtener CI del usuario:', error);
      Alert.alert('Error', 'No se pudo obtener la información del usuario.');
      return null;
    }
  };

  // Obtener evaluaciones desde la API
  useEffect(() => {
    const fetchEvaluations = async () => {
      const userCI = await getUserCI();
      if (!userCI) return;

      try {
        const response = await axios.get(`http://18.209.15.163/api/attendance/${userCI}`);
        const data = response.data;

        if (Array.isArray(data)) {
          setEvaluations(data);
        } else {
          console.error('La API no devolvió un array:', data);
          setEvaluations([]);
        }
      } catch (error) {
        console.error('Error al obtener las evaluaciones:', error);
        Alert.alert('Error', 'No se pudieron cargar las evaluaciones desde el servidor.');
      }
    };

    fetchEvaluations();
  }, []);

  // Abrir el modal con la información de la evaluación seleccionada
  const openModal = (subjectId: number) => {
    const evaluation = evaluations.find((evalItem) => evalItem.class_id === subjectId);
    const subject = subjects.find((subj) => subj.id === subjectId);

    if (evaluation) {
      setSelectedSubject(subject?.subject_name || 'Materia Desconocida');
      setRating(evaluation.attendance_rating);
      setComment(evaluation.attendance_comment || 'Sin comentarios.');
    } else {
      setSelectedSubject(subject?.subject_name || 'Materia Desconocida');
      setRating(0);
      setComment('Clase no evaluada');
    }
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/evaluacion.png')}
          style={[styles.headerIcon, { tintColor: '#FFFFFF' }]}
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Historial de Evaluaciones</Text>
          <Text style={styles.headerSubtitle}>
            Aquí puedes ver las clases que has evaluado y los comentarios que has dejado.
          </Text>
        </View>
      </View>

      <ScrollView style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>CLASE</Text>
          <Text style={styles.tableHeaderText}>EVALUAR</Text>
        </View>

        {subjects.map((subject, index) => (
          <View key={index} style={styles.tableRow}>
            <View style={styles.centeredCell}>
              <Text style={styles.tableCell}>{subject.subject_name}</Text>
            </View>
            <View style={styles.centeredCell}>
              <TouchableOpacity onPress={() => openModal(subject.id)}>
                <Image source={require('../assets/ojo.png')} style={styles.infoIcon} />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.footerLink}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AttendanceView')}>
          <Text style={styles.footerLink}>Asistencias</Text>
        </TouchableOpacity>
        <Text style={styles.footerText}>Universidad Metropolitana de Caracas. Todos los derechos reservados.</Text>
      </View>

      <Modal visible={modalVisible} animationType="slide" transparent={true} onRequestClose={closeModal}>
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
                    style={[styles.starIcon, { tintColor: star <= rating ? '#f4a261' : '#ccc' }]}
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

      {/* {footer} */}
      <View style={styles.footer}>
        <View style={styles.footerIconsContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={require('../assets/House.png')} style={styles.footerIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AttendanceView')}>
            <Image source={require('../assets/Assist.png')} style={styles.footerIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Evaluations')}>
            <Image source={require('../assets/evaluacion.png')} style={styles.footerIcon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.footerText}>Universidad Metropolitana de Caracas. Todos los derechos reservados.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7fa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3343a1',
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
    flex: 1,
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
  noDataText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#555',
  },
  footer: {
    paddingVertical: 20,
    backgroundColor: '#3343a1',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  footerLink: {
    color: '#fff',
    marginBottom: 10,
    fontSize: 14,
  },
  footerText: {
    color: '#fff',
    fontSize: 6,
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
  footerIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  footerIcon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
    tintColor: "#fff"
  },
});

export default EvaluationsView;

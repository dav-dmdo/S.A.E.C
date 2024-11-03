import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Modal, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App'; // Ajusta la ruta si es necesario

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'AttendanceView'>;

const AttendanceRecord = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [day, setDay] = useState<string>('');
  const [section, setSection] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [rating, setRating] = useState<number>(3);

  const navigation = useNavigation<NavigationProp>();

  const subjects = [
    { day: "Mie.", subject: "Matemática III" },
    { day: "Mie.", subject: "Estadística para ing." },
    { day: "Mar.", subject: "Ideas Emprendedoras" },
    { day: "Mar.", subject: "Base de Datos I" },
    { day: "Lun.", subject: "Matemática I" },
    { day: "Lun.", subject: "Estadística para ing." },
    { day: "Mar.", subject: "Base de Datos I" },
    { day: "Lun.", subject: "Matemática I" },
    { day: "Lun.", subject: "Estadística para ing." },
  ];

  const randomSection = () => `BPTM${Math.floor(Math.random() * 100)}-0${Math.floor(Math.random() * 10)}`;
  const randomTime = () => `${Math.floor(Math.random() * 12) + 1}:${Math.floor(Math.random() * 59).toString().padStart(2, '0')}AM`;

  const openModal = (subject: string, day: string) => {
    setSelectedSubject(subject);
    setDay(day);
    setSection(randomSection());
    setTime(randomTime());
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/carpeta.png')} style={[styles.headerIcon, { tintColor: '#FFFFFF' }]} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Registro de asistencias</Text>
          <Text style={styles.headerSubtitle}>
            El registro está organizado para que se presente la última clase a la que asistió.
          </Text>
        </View>
      </View>

      {/* Tabla de registros */}
      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>DÍA</Text>
          <Text style={styles.tableHeaderText}>MATERIA</Text>
          <Text style={styles.tableHeaderText}>INFO</Text>
        </View>

        {/* Filas de datos */}
        {subjects.map((item, index) => (
          <View key={index} style={styles.tableRow}>
            <View style={styles.centeredCell}><Text style={styles.tableCell}>{item.day}</Text></View>
            <View style={styles.centeredCell}><Text style={styles.tableCell}>{item.subject}</Text></View>
            <View style={styles.centeredCell}>
              <TouchableOpacity onPress={() => openModal(item.subject, item.day)}>
                <Image source={require('../assets/ojo.png')} style={styles.infoIcon} />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      {/* Paginación */}
      <View style={styles.paginationContainer}>
        {Array.from({ length: 10 }, (_, i) => (
          <TouchableOpacity key={i} style={styles.pageButton}>
            <Text style={styles.pageButtonText}>{i + 1}</Text>
          </TouchableOpacity>
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

      {/* Modal para mostrar la información de asistencia */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Registro de asistencia</Text>
            
            <View style={styles.modalSection}>
              <Text style={styles.modalLabel}>Materia</Text>
              <Text style={styles.modalValue}>{selectedSubject}</Text>
            </View>
            <View style={styles.modalSection}>
              <Text style={styles.modalLabel}>Día</Text>
              <Text style={styles.modalValue}>{day}</Text>
            </View>
            <View style={styles.modalSection}>
              <Text style={styles.modalLabel}>Sección</Text>
              <Text style={styles.modalValue}>{section}</Text>
            </View>
            <View style={styles.modalSection}>
              <Text style={styles.modalLabel}>Hora</Text>
              <Text style={styles.modalValue}>{time}</Text>
            </View>

            <View style={styles.modalSection}>
              <Text style={styles.modalLabel}>Valoración</Text>
              <View style={styles.ratingContainer}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <TouchableOpacity key={star} onPress={() => setRating(star)}>
                    <Image
                      source={require('../assets/estrella.png')}
                      style={[
                        styles.starIcon,
                        { tintColor: star <= rating ? '#f4a261' : '#ccc' }
                      ]}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.modalSection}>
              <Text style={styles.modalLabel}>Comentario anónimo</Text>
              <TextInput
                style={styles.textInput}
                multiline
                placeholder="Escribe tu comentario..."
              />
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.saveButton}>
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
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
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
    color: '#f0f0f0',
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
  centeredCell: {
    width: '30%',
    alignItems: 'center',
  },
  tableCell: {
    fontSize: 14,
    textAlign: 'center',
  },
  infoIcon: {
    width: 20,
    height: 20,
    tintColor: '#333',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  pageButton: {
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  pageButtonText: {
    fontSize: 14,
    color: '#333',
  },
  footer: {
    paddingVertical: 20,
    backgroundColor: '#3343a1',
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
    color: '#007BFF',
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
  textInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 14,
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    flex: 0.48,
  },
  closeButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    flex: 0.48,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default AttendanceRecord;

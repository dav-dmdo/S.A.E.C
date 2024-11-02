import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Modal, TextInput } from 'react-native';
<<<<<<< HEAD
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App'; // Ajusta la ruta si es necesario

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'AttendanceView'>;
=======
import Icon from 'react-native-vector-icons/MaterialIcons';
>>>>>>> 9ce21f812a1db79f9f6af4693e4e56a3b8a90c87

const AttendanceRecord = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [day, setDay] = useState<string>('');
  const [section, setSection] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [rating, setRating] = useState<number>(3);

<<<<<<< HEAD
  const navigation = useNavigation<NavigationProp>();

=======
>>>>>>> 9ce21f812a1db79f9f6af4693e4e56a3b8a90c87
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
<<<<<<< HEAD
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/carpeta.png')} style={[styles.headerIcon, { tintColor: '#FFFFFF' }]} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Registro de asistencias</Text>
          <Text style={styles.headerSubtitle}>
            El registro está organizado para que se presente la última clase a la que asistió.
          </Text>
        </View>
=======
      {/* Sección de título */}
      <View style={styles.header}>
        <Icon name="check-circle" size={30} color="#fff" />
        <Text style={styles.headerTitle}>Registro de asistencias</Text>
        <Text style={styles.headerSubtitle}>
          El registro está organizado para que se presente la última clase a la que asistió.
        </Text>
>>>>>>> 9ce21f812a1db79f9f6af4693e4e56a3b8a90c87
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
<<<<<<< HEAD
            <View style={styles.centeredCell}><Text style={styles.tableCell}>{item.day}</Text></View>
            <View style={styles.centeredCell}><Text style={styles.tableCell}>{item.subject}</Text></View>
            <View style={styles.centeredCell}>
              <TouchableOpacity onPress={() => openModal(item.subject, item.day)}>
                <Image source={require('../assets/ojo.png')} style={styles.infoIcon} />
              </TouchableOpacity>
            </View>
=======
            <Text style={styles.tableCell}>{item.day}</Text>
            <Text style={styles.tableCell}>{item.subject}</Text>
            <TouchableOpacity onPress={() => openModal(item.subject, item.day)}>
              <Icon name="visibility" size={20} color="#000" />
            </TouchableOpacity>
>>>>>>> 9ce21f812a1db79f9f6af4693e4e56a3b8a90c87
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
<<<<<<< HEAD
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.footerLink}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AttendanceView')}>
          <Text style={styles.footerLink}>Asistencias</Text>
        </TouchableOpacity>
=======
        <Text style={styles.footerLink}>Inicio</Text>
        <Text style={styles.footerLink}>Asistencias</Text>
        <Text style={styles.footerLink}>Perfil</Text>
        <Text style={styles.footerLink}>Profesores</Text>
        <Text style={styles.footerLink}>FAQs</Text>
        <Text style={styles.footerLink}>Developers</Text>
>>>>>>> 9ce21f812a1db79f9f6af4693e4e56a3b8a90c87
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
<<<<<<< HEAD
                    <Image
                      source={require('../assets/estrella.png')}
                      style={[
                        styles.starIcon,
                        { tintColor: star <= rating ? '#f4a261' : '#ccc' }
                      ]}
=======
                    <Icon
                      name="star"
                      size={24}
                      color={star <= rating ? "#f4a261" : "#ccc"}
>>>>>>> 9ce21f812a1db79f9f6af4693e4e56a3b8a90c87
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
<<<<<<< HEAD
=======
                defaultValue="Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat."
>>>>>>> 9ce21f812a1db79f9f6af4693e4e56a3b8a90c87
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
<<<<<<< HEAD
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
=======
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#ffffff',
    paddingTop: 60,
    paddingBottom: 10,

  },
  logo: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
  },
  menuButton: {
    padding: 10,
  },
  menuBar: {
    width: 25,
    height: 3,
    backgroundColor: '#000',
    marginVertical: 2,
  },
  header: {
    backgroundColor: '#3343a1',
    padding: 15,
    alignItems: 'center',
>>>>>>> 9ce21f812a1db79f9f6af4693e4e56a3b8a90c87
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
<<<<<<< HEAD
=======
    marginTop: 10,
>>>>>>> 9ce21f812a1db79f9f6af4693e4e56a3b8a90c87
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#f0f0f0',
<<<<<<< HEAD
=======
    textAlign: 'center',
>>>>>>> 9ce21f812a1db79f9f6af4693e4e56a3b8a90c87
    marginTop: 5,
  },
  tableContainer: {
    marginTop: 20,
<<<<<<< HEAD
    paddingHorizontal: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
=======
    paddingHorizontal: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
>>>>>>> 9ce21f812a1db79f9f6af4693e4e56a3b8a90c87
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
<<<<<<< HEAD
    justifyContent: 'space-around',
=======
    justifyContent: 'space-between',
>>>>>>> 9ce21f812a1db79f9f6af4693e4e56a3b8a90c87
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
<<<<<<< HEAD
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
=======
  },
  tableCell: {
    fontSize: 14,
    width: '30%',
    textAlign: 'center',
  },
>>>>>>> 9ce21f812a1db79f9f6af4693e4e56a3b8a90c87
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
<<<<<<< HEAD
    textAlign: 'center',
=======
>>>>>>> 9ce21f812a1db79f9f6af4693e4e56a3b8a90c87
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
<<<<<<< HEAD
  starIcon: {
    width: 24,
    height: 24,
    marginHorizontal: 2,
  },
=======
>>>>>>> 9ce21f812a1db79f9f6af4693e4e56a3b8a90c87
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

<<<<<<< HEAD
export default AttendanceRecord;
=======
export default AttendanceRecord;
>>>>>>> 9ce21f812a1db79f9f6af4693e4e56a3b8a90c87

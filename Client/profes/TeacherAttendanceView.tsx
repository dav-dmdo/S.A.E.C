import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App'; // Ajusta la ruta si es necesario

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'AttendanceView'>;

const TeacherAttendanceRecord = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const [studentsAttended, setStudentsAttended] = useState<number>(3); // Cantidad de asistentes
  const [totalStudents, setTotalStudents] = useState<number>(30); // Total de estudiantes

  const navigation = useNavigation<NavigationProp>();

  const subjects = [
    { day: 'Mie.', subject: 'Matemática III' },
    { day: 'Mie.', subject: 'Estadística para ing.' },
    { day: 'Mar.', subject: 'Ideas Emprendedoras' },
    { day: 'Mar.', subject: 'Base de Datos I' },
    { day: 'Lun.', subject: 'Matemática I' },
    { day: 'Lun.', subject: 'Estadística para ing.' },
  ];

  const openModal = (subject: string) => {
    setSelectedSubject(subject);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Barra de navegación superior */}
      <View style={styles.navbar}>
        <Image
          source={{ uri: 'https://www.unimet.edu.ve/wp-content/uploads/2023/07/Logo-footer.png' }}
          style={styles.logo}
        />
        <Text style={styles.navbarTitle}>Registro de asistencias</Text>
        <View style={styles.navbarOptions}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.navbarText}>Inicio</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Contenido principal */}
      <ScrollView>
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
              <View style={styles.centeredCell}>
                <Text style={styles.tableCell}>{item.day}</Text>
              </View>
              <View style={styles.centeredCell}>
                <Text style={styles.tableCell}>{item.subject}</Text>
              </View>
              <View style={styles.centeredCell}>
                <TouchableOpacity onPress={() => openModal(item.subject)}>
                  <Image source={require('../assets/ojo.png')} style={styles.infoIcon} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <View style={styles.circle}>
              <Text style={styles.attendanceText}>
                {studentsAttended}/{totalStudents}
              </Text>
            </View>
            <Text style={styles.modalTitle}>Estudiantes asistentes</Text>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3343a1',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  logo: {
    width: 60,
    height: 30,
    resizeMode: 'contain',
  },
  navbarTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  navbarOptions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navbarText: {
    color: '#fff',
    marginHorizontal: 5,
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
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  circle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#FF6600',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  attendanceText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#FF6600',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
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
});

export default TeacherAttendanceRecord;

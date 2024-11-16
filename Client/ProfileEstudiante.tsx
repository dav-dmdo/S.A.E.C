import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfileEstudiante = () => {
  // Simulación de datos generados con el StudentFactory
  const studentData = {
    user: {
      ci: "12345678", // `user_ci` del factory
      firstName: "Juan", // `user_first_name`
      middleName: "Carlos", // `user_middle_name`
      firstSurname: "Pérez", // `user_first_surname`
      secondSurname: "López", // `user_second_surname`
      gender: "Masculino", // `user_gender`
      birthdate: "01-01-2000", // `user_birthdate`
      username: "juanperez", // `username`
      email: "juan.perez@example.com", // `user_email`
    },
    studentCardId: "SCID-12345678", // `student_card_id`
    enrollmentDate: "2019-09-15", // `student_enrollment_date`
    courses: [
      { id: "1", name: "Matemáticas Avanzadas" },
      { id: "2", name: "Física Cuántica" },
      { id: "3", name: "Programación React Native" },
    ],
    comments: [
      { id: "1", comment: "La clase de Matemáticas fue excelente." },
      { id: "2", comment: "Me gustaría más ejercicios prácticos en Física." },
    ],
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.title}>Perfil del Estudiante</Text>

      {/* Información básica del estudiante */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          <Text style={styles.infoLabel}>Nombre Completo:</Text> {`${studentData.user.firstName} ${studentData.user.middleName} ${studentData.user.firstSurname} ${studentData.user.secondSurname}`}
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.infoLabel}>CI:</Text> {studentData.user.ci}
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.infoLabel}>Género:</Text> {studentData.user.gender}
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.infoLabel}>Fecha de Nacimiento:</Text> {studentData.user.birthdate}
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.infoLabel}>Email:</Text> {studentData.user.email}
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.infoLabel}>ID Estudiante:</Text> {studentData.studentCardId}
        </Text>
        <Text style={styles.infoText}>
          <Text style={styles.infoLabel}>Fecha de Inscripción:</Text> {studentData.enrollmentDate}
        </Text>
      </View>

      {/* Materias cursadas */}
      <Text style={styles.sectionTitle}>Materias Cursadas</Text>
      <FlatList
        data={studentData.courses}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listText}>{item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      {/* Comentarios */}
      <Text style={styles.sectionTitle}>Comentarios</Text>
      <FlatList
        data={studentData.comments}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.listText}>{item.comment}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#f7f7f7",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  infoContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#FFF",
    borderRadius: 10,
    elevation: 3,
  },
  infoText: {
    fontSize: 16,
    marginVertical: 5,
  },
  infoLabel: {
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  listItem: {
    padding: 15,
    backgroundColor: "#e6f2ff",
    borderRadius: 10,
    marginBottom: 10,
  },
  listText: {
    fontSize: 16,
  },
});

export default ProfileEstudiante;

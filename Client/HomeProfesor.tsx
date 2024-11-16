import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./App";

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

const HomeProfesor = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  // Datos dinámicos para el FlatList
  const sections = [
    { id: "1", title: "CLASES", count: 15, color: "#87ceeb", icon: require("./assets/clases.png") },
    { id: "2", title: "ASISTENCIA", count: 320, color: "#ffa07a", icon: require("./assets/asistencia.png"), action: () => navigation.navigate("AttendanceView") },
    { id: "3", title: "ESTUDIANTES", count: 200, color: "#90ee90", icon: require("./assets/estudiante.png") },
    { id: "4", title: "EVALUACIONES", count: 50, color: "#dda0dd", icon: require("./assets/evaluacion.png") },
    { id: "5", title: "MATERIAS", count: 8, color: "#ffc107", icon: require("./assets/materia.png") },
    { id: "6", title: "COMENTARIOS", count: 12, color: "#f08080", icon: require("./assets/comentario.png") },
  ];

  // Renderizar cada ítem del FlatList
  const renderItem = ({ item }: { item: typeof sections[0] }) => (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: item.color }]}
      onPress={item.action ? item.action : undefined} // Navega si hay acción
    >
      <Image source={item.icon} style={styles.icon} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardCount}>{item.count}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.mainTitle}>Panel del Profesor</Text>
      <Text style={styles.subtitle}>Gestión de clases, estudiantes y asistencia</Text>

      <FlatList
        data={sections}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

// Estilos
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    paddingHorizontal: 20,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    marginBottom: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 15,
    tintColor: "#FFF",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
    flex: 1,
  },
  cardCount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
  },
});

export default HomeProfesor;
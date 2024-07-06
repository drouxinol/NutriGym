import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  SafeAreaView,
  Platform,
  FlatList,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const ExerciseDetailScreen = ({ route, navigation }) => {
  const { exercise } = route.params;
  const [series, setSeries] = useState([{ load: "", reps: "" }]);

  const handleAddSeries = () => {
    setSeries([...series, { load: "", reps: "" }]);
  };

  const handleRemoveSeries = (index) => {
    const newSeries = [...series];
    newSeries.splice(index, 1);
    setSeries(newSeries);
  };

  const handleLoadChange = (text, index) => {
    const newSeries = [...series];
    newSeries[index].load = text;
    setSeries(newSeries);
  };

  const handleRepsChange = (text, index) => {
    const newSeries = [...series];
    newSeries[index].reps = text;
    setSeries(newSeries);
  };

  const handleSave = () => {
    console.log("Series:", series);
    // Implementar a lógica para salvar os dados aqui (ex: enviar para API)
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        <View style={styles.mainContainer}>
          <View style={styles.header}>
            <Pressable
              onPress={() => navigation.goBack()}
              style={styles.backButton}
            >
              <Ionicons name="arrow-back" size={24} color="white" />
            </Pressable>
            <Text style={styles.headerTitle}>{exercise.name}</Text>
          </View>
          <View style={{ marginTop: 25 }}>
            <View style={styles.imageContainer}>
              <View style={styles.imagePlaceholder} />
            </View>

            <View style={styles.seriesContainer}>
              <Text style={styles.seriesTitle}>Séries</Text>
              <KeyboardAvoidingView behavior="position">
                <FlatList
                  data={series}
                  renderItem={({ item, index }) => (
                    <View style={styles.seriesItem}>
                      <TextInput
                        style={styles.seriesInput}
                        placeholder="Carga"
                        placeholderTextColor="#A5A5A5"
                        onChangeText={(text) => handleLoadChange(text, index)}
                        value={item.load}
                      />
                      <TextInput
                        style={styles.seriesInput}
                        placeholder="Repetições"
                        placeholderTextColor="#A5A5A5"
                        onChangeText={(text) => handleRepsChange(text, index)}
                        value={item.reps}
                      />
                      <Pressable
                        onPress={() => handleRemoveSeries(index)}
                        style={styles.removeSeriesButton}
                      >
                        <AntDesign name="delete" size={24} color="white" />
                      </Pressable>
                    </View>
                  )}
                  keyExtractor={(item, index) => index.toString()}
                />
              </KeyboardAvoidingView>
              <Pressable
                onPress={handleAddSeries}
                style={styles.addSeriesButton}
              >
                <AntDesign name="plus" size={24} color="white" />
                <Text style={styles.addSeriesButtonText}>Adicionar Série</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <Pressable onPress={handleSave} style={styles.saveButton}>
          <AntDesign name="save" size={24} color="white" />
          <Text style={styles.buttonText}>Salvar</Text>
        </Pressable>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 25,
    marginTop: Platform.OS === "android" ? 75 : 15,
  },
  container: {
    flex: 1,
    backgroundColor: "#192126",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  imagePlaceholder: {
    width: 200,
    height: 200,
    backgroundColor: "#384046",
    borderRadius: 10,
  },
  seriesContainer: {
    paddingHorizontal: 20,
  },
  seriesTitle: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    marginBottom: 10,
  },
  seriesItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  seriesInput: {
    flex: 1,
    backgroundColor: "#384046",
    color: "white",
    fontSize: 18,
    padding: 12,
    borderRadius: 10,
    marginRight: 10,
  },
  removeSeriesButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#FF6347",
  },
  addSeriesButton: {
    flexDirection: "row",
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  addSeriesButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  saveButton: {
    flexDirection: "row",
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    marginTop: "auto",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default ExerciseDetailScreen;

import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Modal,
  TextInput,
  Platform,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import PieChart from "react-native-pie-chart";

function NutritionScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [protein, setProtein] = useState("12");
  const [fat, setFat] = useState("22");
  const [carbs, setCarbs] = useState("12");
  const [dailyCalories, setDailyCalories] = useState("1500");

  const widthAndHeight = 250;
  const series = [25, 12, 30];
  const sliceColor = ["#14B8A6", "#3B82F6", "#EC4899"];

  const saveNutritionData = () => {
    console.log("Nutrition data saved:", {
      protein,
      fat,
      carbs,
      dailyCalories,
    });
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <View style={styles.leftHeader}>
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons
                name="arrow-back"
                size={24}
                color="#192126"
                style={styles.backButton}
              />
            </Pressable>
            <Text style={styles.headerTitle}>Nutrition</Text>
          </View>
          <Pressable
            onPress={() => setModalVisible(true)}
            style={styles.editButton}
          >
            <AntDesign name="edit" size={24} color="black" />
          </Pressable>
        </View>

        <View style={styles.pieContainer}>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            coverRadius={0.75}
            coverFill={"#FFF"}
          />
          <View style={styles.caloriesContainer}>
            <Text style={styles.caloriesLabel}>Calories</Text>
            <Text style={styles.caloriesText}>{dailyCalories}</Text>
          </View>
        </View>

        <View>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Macros</Text>
            <Text style={styles.tableHeaderText}>Value</Text>
            <Text style={styles.tableHeaderText}>%</Text>
          </View>
          <View style={styles.detailRow}>
            <View
              style={[styles.colorBox, { backgroundColor: sliceColor[0] }]}
            />
            <Text style={styles.detailText}>Carbs</Text>
            <Text style={styles.detailValue}>{carbs}</Text>
            <Text style={styles.detailPercentage}>50%</Text>
          </View>
          <View style={styles.detailRow}>
            <View
              style={[styles.colorBox, { backgroundColor: sliceColor[1] }]}
            />
            <Text style={styles.detailText}>Fat</Text>
            <Text style={styles.detailValue}>{fat}</Text>
            <Text style={styles.detailPercentage}>42.9%</Text>
          </View>
          <View style={styles.detailRow}>
            <View
              style={[styles.colorBox, { backgroundColor: sliceColor[2] }]}
            />
            <Text style={styles.detailText}>Protein</Text>
            <Text style={styles.detailValue}>{protein}</Text>
            <Text style={styles.detailPercentage}>28.6%</Text>
          </View>
        </View>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Nutrition Information</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputTitle}>Daily Calories</Text>
              <TextInput
                style={styles.input}
                value={dailyCalories}
                onChangeText={setDailyCalories}
                keyboardType="numeric"
                placeholder="Enter daily calories"
                placeholderTextColor="#aaa"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputTitle}>Carbs (grams)</Text>
              <TextInput
                style={styles.input}
                value={carbs}
                onChangeText={setCarbs}
                keyboardType="numeric"
                placeholder="Enter carbs in grams"
                placeholderTextColor="#aaa"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputTitle}>Fat (grams)</Text>
              <TextInput
                style={styles.input}
                value={fat}
                onChangeText={setFat}
                keyboardType="numeric"
                placeholder="Enter fat in grams"
                placeholderTextColor="#aaa"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputTitle}>Protein (grams)</Text>
              <TextInput
                style={styles.input}
                value={protein}
                onChangeText={setProtein}
                keyboardType="numeric"
                placeholder="Enter protein in grams"
                placeholderTextColor="#aaa"
              />
            </View>
            <Pressable style={styles.saveButton} onPress={saveNutritionData}>
              <Text style={styles.saveButtonText}>Save</Text>
            </Pressable>
            <Pressable
              style={[styles.cancelButton]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    margin: 25,
    marginTop: Platform.OS === "android" ? 75 : 15,
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  leftHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#192126",
  },
  editButton: {
    marginLeft: "auto",
  },
  backButton: {
    marginRight: 10,
  },
  pieContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  caloriesContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  caloriesText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#192126",
  },
  caloriesLabel: {
    fontSize: 16,
    color: "#192126",
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    marginBottom: 10,
    marginTop: 60,
  },
  tableHeaderText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#192126",
    flex: 1,
    textAlign: "center",
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  colorBox: {
    width: 16,
    height: 16,
    marginRight: 10,
  },
  detailText: {
    fontSize: 16,
    color: "#192126",
    flex: 1,
  },
  detailValue: {
    fontSize: 16,
    color: "#192126",
    flex: 1,
    textAlign: "center",
  },
  detailPercentage: {
    fontSize: 16,
    color: "#192126",
    flex: 1,
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#192126",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputTitle: {
    fontSize: 16,
    color: "#192126",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 15,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
    color: "#333333",
  },
  saveButton: {
    backgroundColor: "#007BFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  saveButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "#E72929",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  cancelButtonText: {
    fontSize: 18,
    color: "#333333",
    fontWeight: "bold",
    color: "white",
  },
});

export default NutritionScreen;

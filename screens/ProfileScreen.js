import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Platform,
  Text,
  SafeAreaView,
  Pressable,
  Modal,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import InfoCard from "../components/InfoCardComponent";
import WeightGraph from "../components/WeightGraphComponent";

function ProfileScreen({ route, navigation }) {
  const [data, setData] = useState({
    labels: ["January"],
    datasets: [
      {
        data: [20],
      },
    ],
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [weight, setWeight] = useState("");

  function setWeightHandler(enteredText) {
    setWeight(enteredText);
  }

  function addWeightHandler() {
    addWeightEntry(weight);
    setWeight("");
  }

  function addWeightEntry(number) {
    const currentDate = new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });

    setData((prevData) => ({
      labels: [...prevData.labels, currentDate],
      datasets: [
        {
          data: [...prevData.datasets[0].data, parseFloat(number)],
        },
      ],
    }));

    // Fechar o modal após adicionar o peso
    setModalVisible(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={24} color="#192126" />
          </Pressable>
          <Text style={styles.headerTitle}>Profile</Text>
        </View>
        <View style={styles.topHeader}>
          <View>
            <Text style={styles.headerNameText}>Daniel Rouxinol</Text>
            <View style={styles.row}>
              <Text style={styles.headerSubText}>23 years</Text>
              <View style={styles.separator} />
              <Text style={styles.headerSubText}>Male</Text>
            </View>
          </View>
          <Pressable
            onPress={() => console.log("Button Pressed")}
            style={styles.settingsButton}
          >
            <Ionicons name="settings" size={24} color="#192126" />
          </Pressable>
        </View>
        <View style={{ borderWidth: 1, marginTop: 10 }} />
        <View style={styles.contentContainer}>
          <InfoCard title="Weight" value={weight} unit="kg" />
          <InfoCard title="BF" value="14.8" unit="%" />
          <InfoCard title="LM" value="35.1" unit="kg" />
        </View>

        <View style={styles.graphContainer}>
          <WeightGraph
            data={data}
            addWeightEntry={addWeightEntry}
            weight={weight}
            setWeight={setWeight}
          />
          <Pressable
            onPress={() => setModalVisible(true)}
            style={styles.addButton}
          >
            <Text style={styles.addButtonText}>Add Weight</Text>
          </Pressable>
        </View>

        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Enter Weight</Text>
              <TextInput
                style={styles.modalInput}
                placeholder="Enter weight in kg"
                keyboardType="numeric"
                value={inputValue}
                onChangeText={(text) => setInputValue(text)}
              />
              <View style={styles.modalButtons}>
                <Pressable
                  style={[styles.modalButton, styles.cancelButton]}
                  onPress={() => {
                    setInputValue("");
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.buttonText}>Cancel</Text>
                </Pressable>
                <Pressable
                  style={[styles.modalButton, styles.addButtonModal]}
                  onPress={() => {
                    if (inputValue.trim() !== "") {
                      addWeightEntry(inputValue);
                      setInputValue("");
                      setWeight(inputValue);
                    }
                  }}
                >
                  <Text style={styles.buttonText}>Add</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
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
  topHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#192126",
  },
  headerNameText: {
    fontSize: 24,
  },
  headerSubText: {
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  separator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "black",
    marginHorizontal: 5,
  },
  settingsButton: {
    marginLeft: 10,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  infoCard: {
    width: 100,
    height: 100,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  infoCardTitle: {
    fontSize: 14,
    color: "#7D7D7D",
  },
  infoCardValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  infoCardUnit: {
    fontSize: 14,
    color: "#7D7D7D",
  },
  graphContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  addButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  addButton: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: "#007BFF",
    elevation: 2, // Sombra para efeito de elevação (Android)
    shadowColor: "#000", // Sombra para efeito de elevação (iOS)
    shadowOffset: { width: 0, height: 2 }, // Sombra para efeito de elevação (iOS)
    shadowOpacity: 0.25, // Sombra para efeito de elevação (iOS)
    shadowRadius: 3.84, // Sombra para efeito de elevação (iOS)
  },
  addButtonModal: {
    backgroundColor: "#007BFF",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 5,
    width: "100%",
    paddingHorizontal: 10,
    marginBottom: 20,
    height: 30,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  modalButton: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  cancelButton: {
    backgroundColor: "#E72929",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ProfileScreen;

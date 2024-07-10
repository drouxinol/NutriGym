import React, { useState, useContext } from "react";
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
import { UserContext } from "../contexts/user";

function ProfileScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const userInfo = useContext(UserContext);

  const saveWeight = (weight) => {
    userInfo.updateUser("weight", weight);
    setModalVisible(false);
    setInputValue("");
  };

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
            <Text style={styles.headerNameText}>{userInfo.user.fullName}</Text>
            <View style={styles.row}>
              <Text style={styles.headerSubText}>
                {userInfo.user.age} years
              </Text>
              <View style={styles.separator} />
              <Text style={styles.headerSubText}>{userInfo.user.gender}</Text>
            </View>
          </View>
          <Pressable
            onPress={() => navigation.navigate("InitialUsernameScreen")}
            style={styles.settingsButton}
          >
            <Ionicons name="settings" size={24} color="#192126" />
          </Pressable>
        </View>
        <View style={styles.divider} />
        <View style={styles.contentContainer}>
          <View style={styles.infoCard}>
            <Text style={styles.infoCardTitle}>Weight</Text>
            <Text style={styles.infoCardValue}>{userInfo.user.weight}</Text>
            <Text style={styles.infoCardUnit}>kg</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoCardTitle}>BMI</Text>
            <Text style={styles.infoCardValue}>
              {(
                userInfo.user.weight / Math.pow(userInfo.user.height / 100, 2)
              ).toFixed(2)}
            </Text>
            <Text style={styles.infoCardUnit}>kg/m²</Text>
          </View>
        </View>

        <View style={styles.graphContainer}>
          <Pressable
            onPress={() => setModalVisible(true)}
            style={styles.addButton}
          >
            <Text style={styles.addButtonText}>Add weight</Text>
          </Pressable>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Add your current weight</Text>
              <TextInput
                style={styles.modalInput}
                placeholder="Add your weight in kg"
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
                      saveWeight(inputValue);
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
    color: "#192126",
  },
  topHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
  },
  headerNameText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#192126",
  },
  headerSubText: {
    fontSize: 16,
    color: "#7D7D7D",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  separator: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: "#192126",
    marginHorizontal: 5,
  },
  settingsButton: {
    marginLeft: 10,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    marginVertical: 10,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  infoCard: {
    width: 120,
    height: 120,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  infoCardTitle: {
    fontSize: 16,
    color: "#192126",
    marginBottom: 5,
  },
  infoCardValue: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#192126",
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
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
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
    color: "#192126",
  },
  modalInput: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 5,
    width: "100%",
    paddingHorizontal: 10,
    marginBottom: 20,
    height: 40,
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
  addButtonModal: {
    backgroundColor: "#007BFF",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ProfileScreen;

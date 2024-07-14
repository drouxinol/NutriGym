import React, { useContext, useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TextInput,
  Platform,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { UserContext } from "../contexts/user";

function SettingsScreen({ navigation }) {
  const [usernameInput, setUsernameInput] = useState("");
  const [userFullName, setuserFullName] = useState("");
  const [genderInput, setGenderInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [heightInput, setHeightInput] = useState("");
  const [weightInput, setWeightInput] = useState("");
  const { user, updateUser } = useContext(UserContext);

  const handleUsernameChange = (text) => {
    setUsernameInput(text);
  };

  const handleUserFullNameChange = (text) => {
    setuserFullName(text);
  };

  const handleGenderChange = (text) => {
    setGenderInput(text);
  };

  const handleAgeChange = (text) => {
    setAgeInput(text);
  };

  const handleHeightChange = (text) => {
    setHeightInput(text);
  };

  const handleWeightChange = (text) => {
    setWeightInput(text);
  };

  const handleSave = () => {
    updateUser({
      fullName: userFullName.trim(),
      username: usernameInput.trim(),
      age: ageInput.trim(),
      gender: genderInput.trim(),
      height: heightInput.trim(),
      weight: weightInput.trim(),
    });

    navigation.navigate("ConfirmationScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#192126" />
          </Pressable>
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>Settings</Text>
          </View>
          <View style={styles.placeholder} />
        </View>
        <ScrollView style={{ flex: 1 }}>
          <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
            <View style={styles.content}>
              <Text style={styles.sectionTitle}>Profile</Text>
              <View style={styles.inputContainer}>
                <Ionicons
                  name="person"
                  size={24}
                  color="#192126"
                  style={styles.icon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Full Name"
                  placeholderTextColor="#666"
                  onChangeText={handleUserFullNameChange}
                  value={userFullName}
                />
              </View>
              <View style={styles.inputContainer}>
                <Ionicons
                  name="person-circle"
                  size={24}
                  color="#192126"
                  style={styles.icon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Username"
                  placeholderTextColor="#666"
                  onChangeText={handleUsernameChange}
                  value={usernameInput}
                />
              </View>
              <View style={styles.inputContainer}>
                <Ionicons
                  name="male-female"
                  size={24}
                  color="#192126"
                  style={styles.icon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Gender"
                  placeholderTextColor="#666"
                  onChangeText={handleGenderChange}
                  value={genderInput}
                />
              </View>
              <View style={styles.inputContainer}>
                <Ionicons
                  name="calendar"
                  size={24}
                  color="#192126"
                  style={styles.icon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Age"
                  placeholderTextColor="#666"
                  onChangeText={handleAgeChange}
                  value={ageInput}
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.inputContainer}>
                <Ionicons
                  name="resize"
                  size={24}
                  color="#192126"
                  style={styles.icon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Height (cm)"
                  placeholderTextColor="#666"
                  onChangeText={handleHeightChange}
                  value={heightInput}
                  keyboardType="numeric"
                />
              </View>
              <View style={styles.inputContainer}>
                <Ionicons
                  name="barbell"
                  size={24}
                  color="#192126"
                  style={styles.icon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Weight (kg)"
                  placeholderTextColor="#666"
                  onChangeText={handleWeightChange}
                  value={weightInput}
                  keyboardType="numeric"
                />
              </View>

              <Pressable style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Save</Text>
              </Pressable>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
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
    justifyContent: "space-between", // Adjusted for centering
    marginBottom: 20,
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#192126",
  },
  placeholder: {
    width: 24,
  },
  content: {
    justifyContent: "center",
    marginTop: 40,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#192126",
    marginBottom: 10,
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    backgroundColor: "#F5F5F5", // Lighter input background
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: "#192126", // Dark text for light background
  },
  saveButton: {
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SettingsScreen;

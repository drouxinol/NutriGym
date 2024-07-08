import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Pressable,
  Text,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ProfileScreen from "./ProfileScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

function SettingsScreen({ navigation }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const saveHandler = async (name, username, age, height, weight) => {
    try {
      // Salvando os dados individuais no AsyncStorage
      await AsyncStorage.setItem("@UserSettings_name", name);
      await AsyncStorage.setItem("@UserSettings_username", username);
      await AsyncStorage.setItem("@UserSettings_age", age.toString()); // Converte age para string antes de salvar
      await AsyncStorage.setItem("@UserSettings_height", height.toString()); // Converte height para string antes de salvar
      await AsyncStorage.setItem("@UserSettings_weight", weight.toString()); // Converte weight para string antes de salvar

      console.log("Data saved successfully");
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  function saveInfo() {
    saveHandler(name, username, age, height, weight);
    navigation.navigate(ProfileScreen);
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.header}>
              <Pressable
                onPress={() => navigation.goBack()}
                style={styles.backButton}
              >
                <Ionicons name="arrow-back" size={24} color="#192126" />
              </Pressable>
              <Text style={styles.headerTitle}>Settings</Text>
            </View>
          </View>
          <View style={styles.mainContainer}>
            <View style={styles.form}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Enter your name"
                placeholderTextColor="#aaa"
              />
              <Text style={styles.label}>Username</Text>
              <TextInput
                style={styles.input}
                value={username}
                onChangeText={setUsername}
                placeholder="Enter your username"
                placeholderTextColor="#aaa"
              />
              <Text style={styles.label}>Age</Text>
              <TextInput
                style={styles.input}
                value={age}
                onChangeText={setAge}
                placeholder="Enter your age"
                placeholderTextColor="#aaa"
                keyboardType="numeric"
              />
              <Text style={styles.label}>Height</Text>
              <TextInput
                style={styles.input}
                value={height}
                onChangeText={setHeight}
                placeholder="Enter your height"
                placeholderTextColor="#aaa"
                keyboardType="numeric"
              />
              <Text style={styles.label}>Weight</Text>
              <TextInput
                style={styles.input}
                value={weight}
                onChangeText={setWeight}
                placeholder="Enter your weight"
                placeholderTextColor="#aaa"
                keyboardType="numeric"
              />
              <Pressable style={styles.saveButton} onPress={saveInfo}>
                <Text style={styles.saveButtonText}>Save</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  headerContainer: {
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  mainContainer: {
    margin: 25,
    marginTop: Platform.OS === "android" ? 75 : 15,
    flex: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#192126",
    marginLeft: 10,
  },
  backButton: {
    marginRight: 10,
  },
  form: {
    marginTop: 20,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  label: {
    fontSize: 18,
    color: "#333333",
    marginBottom: 10,
    fontWeight: "600",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: "#f9f9f9",
    color: "#333333",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  saveButton: {
    backgroundColor: "#4a90e2",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  saveButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
});

export default SettingsScreen;

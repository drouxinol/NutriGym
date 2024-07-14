import React, { useContext, useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { UserContext } from "../contexts/user";

function MultiStepFormScreen({ navigation }) {
  const { user, updateUser } = useContext(UserContext);

  const [fullNameInput, setFullNameInput] = useState(user.fullName);
  const [usernameInput, setUsernameInput] = useState(user.username);
  const [ageInput, setAgeInput] = useState(user.age.toString());
  const [genderInput, setGenderInput] = useState(user.gender);
  const [heightInput, setHeightInput] = useState(user.height.toString());
  const [weightInput, setWeightInput] = useState(user.weight.toString());

  const handleFullNameChange = (text) => setFullNameInput(text);
  const handleUsernameChange = (text) => setUsernameInput(text);
  const handleAgeChange = (text) => setAgeInput(text);
  const handleGenderChange = (text) => setGenderInput(text);
  const handleHeightChange = (text) => setHeightInput(text);
  const handleWeightChange = (text) => setWeightInput(text);

  const handleSavePress = () => {
    if (
      fullNameInput.trim() !== "" &&
      usernameInput.trim() !== "" &&
      ageInput.trim() !== "" &&
      genderInput.trim() !== "" &&
      heightInput.trim() !== "" &&
      weightInput.trim() !== ""
    ) {
      updateUser({
        fullName: fullNameInput.trim(),
        username: usernameInput.trim(),
        age: ageInput.trim(),
        gender: genderInput.trim(),
        height: heightInput.trim(),
        weight: weightInput.trim(),
      });
      navigation.navigate("ConfirmationScreen");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.mainContainer}>
              <Text style={styles.title}>Fill in your information</Text>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Full Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your full name"
                  placeholderTextColor="#666"
                  onChangeText={handleFullNameChange}
                  value={fullNameInput}
                  autoCapitalize="words"
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Username</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your username"
                  placeholderTextColor="#666"
                  onChangeText={handleUsernameChange}
                  value={usernameInput}
                  autoCapitalize="none"
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Age</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your age"
                  placeholderTextColor="#666"
                  onChangeText={handleAgeChange}
                  value={ageInput}
                  keyboardType="numeric"
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Gender</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your gender"
                  placeholderTextColor="#666"
                  onChangeText={handleGenderChange}
                  value={genderInput}
                  autoCapitalize="none"
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Height</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your height"
                  placeholderTextColor="#666"
                  onChangeText={handleHeightChange}
                  value={heightInput}
                  keyboardType="numeric"
                />
              </View>

              <View style={styles.inputContainer}>
                <Text style={styles.label}>Weight</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your weight"
                  placeholderTextColor="#666"
                  onChangeText={handleWeightChange}
                  value={weightInput}
                  keyboardType="numeric"
                />
              </View>

              <Pressable style={styles.button} onPress={handleSavePress}>
                <Text style={styles.buttonText}>Save</Text>
              </Pressable>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  mainContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 40,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#192126",
    paddingVertical: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default MultiStepFormScreen;

import React, { useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TextInput,
  Platform,
  Pressable,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

const UsernameScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </Pressable>
          <Text style={styles.headerTitle}>Home</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Choose a username</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            placeholderTextColor="#666"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
          <Pressable
            style={styles.button}
            onPress={() => console.log("Button Pressed")}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    margin: 25,
    marginTop: Platform.OS === "android" ? 75 : 15,
    flex: 1,
  },
  backButton: {
    marginRight: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    width: "100%",
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#192126",
  },
});

export default UsernameScreen;

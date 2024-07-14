import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";

const ExerciseDetailScreen = ({ route, navigation }) => {
  const { exercise } = route.params;

  const [selectedTab, setSelectedTab] = useState("Description");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        <View style={styles.header}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </Pressable>
          <Text style={styles.headerTitle}>Exercise</Text>
          <Pressable
            onPress={() => console.log("Add to plan pressed")}
            style={styles.addButton}
          >
            <MaterialIcons name="playlist-add" size={24} color="white" />
          </Pressable>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.exerciseCard}>
            <Image source={{ uri: exercise.image }} style={styles.image} />
            <Text style={styles.exerciseTitle}>{exercise.name}</Text>
          </View>
          <View style={styles.tabContainer}>
            <Pressable
              onPress={() => setSelectedTab("Description")}
              style={[
                styles.tabButton,
                selectedTab === "Description" && styles.activeTab,
              ]}
            >
              <Text style={styles.tabText}>Description</Text>
            </Pressable>
            <Pressable
              onPress={() => setSelectedTab("Tutorial")}
              style={[
                styles.tabButton,
                selectedTab === "Tutorial" && styles.activeTab,
              ]}
            >
              <Text style={styles.tabText}>Tutorial</Text>
            </Pressable>
          </View>
          <View style={styles.tabContent}>
            {selectedTab === "Description" && (
              <Text style={styles.tabContentText}>{exercise.instructions}</Text>
            )}
            {selectedTab === "Tutorial" && (
              <Text style={styles.tabContentText}>Tutorial Content</Text>
            )}
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    flex: 1,
  },
  addButton: {
    marginLeft: "auto",
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  exerciseCard: {
    backgroundColor: "#292929",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    marginVertical: 20,
  },
  image: {
    width: 150,
    height: 150,
    backgroundColor: "gray",
    borderRadius: 75,
    marginBottom: 15,
  },
  exerciseTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  activeTab: {
    backgroundColor: "#3a3a3a",
  },
  tabText: {
    color: "white",
    fontSize: 16,
  },
  tabContent: {
    backgroundColor: "#292929",
    borderRadius: 10,
    padding: 20,
  },
  tabContentText: {
    color: "white",
    fontSize: 16,
  },
});

export default ExerciseDetailScreen;

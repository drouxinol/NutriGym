import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
  FlatList,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Fontisto } from "@expo/vector-icons";

const ExerciseDetailScreen = ({ route, navigation }) => {
  const { exercise } = route.params;

  const [sets, setSets] = useState([
    { id: 1, reps: 10, kg: 70, checked: false },
    { id: 2, reps: 10, kg: 70, checked: false },
    { id: 3, reps: 10, kg: 70, checked: false },
  ]);

  const [selectedTab, setSelectedTab] = useState("Description");

  function renderSet({ item }) {
    return (
      <View style={styles.setRow}>
        <TextInput keyboardType="number-pad" style={styles.setText}>
          {item.id}
        </TextInput>
        <TextInput
          keyboardType="number-pad"
          style={[
            styles.setText,
            {
              backgroundColor: "#384046",
              borderRadius: 5,
              width: 45,
              height: 30,
              textAlign: "center",
            },
          ]}
        >
          {item.reps}
        </TextInput>
        <TextInput
          keyboardType="number-pad"
          style={[
            styles.setText,
            {
              backgroundColor: "#384046",
              borderRadius: 5,
              width: 45,
              height: 30,
              textAlign: "center",
            },
          ]}
        >
          {item.kg}
        </TextInput>
        <View style={styles.checkboxPlaceholder} />
      </View>
    );
  }

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
            onPress={() => setModalVisible(true)}
            style={styles.editButton}
          >
            <Fontisto name="save" size={24} color="white" />
          </Pressable>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.exerciseCard}>
            <View style={styles.image} />
            <Text style={styles.exerciseTitle}>{exercise.name}</Text>
            <FlatList
              data={sets}
              renderItem={renderSet}
              keyExtractor={(item) => item.id.toString()}
              style={{ marginTop: 25 }}
            />
          </View>
          <View style={styles.setButtons}>
            <Pressable style={styles.setButton}>
              <AntDesign
                name="minus"
                size={24}
                color="white"
                onPress={() => console.log("Minus set pressed")}
              />
            </Pressable>
            <Text style={styles.setTextCenter}>Sets</Text>
            <Pressable style={styles.setButton}>
              <AntDesign
                name="plus"
                size={24}
                color="white"
                onPress={() => console.log("Plus set pressed")}
              />
            </Pressable>
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
              onPress={() => setSelectedTab("Progress")}
              style={[
                styles.tabButton,
                selectedTab === "Progress" && styles.activeTab,
              ]}
            >
              <Text style={styles.tabText}>Progress</Text>
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
            {selectedTab === "Progress" && (
              <Text style={styles.tabContentText}>Progress Content</Text>
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
    backgroundColor: "#192126",
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
  },
  editButton: {
    marginLeft: "auto",
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  exerciseCard: {
    backgroundColor: "#2A2E35",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: "gray",
    borderRadius: 10,
    marginBottom: 10,
  },
  exerciseTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  setRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#384046",
    width: "100%",
  },
  setText: {
    color: "white",
    fontSize: 16,
  },
  checkboxPlaceholder: {
    width: 24,
    height: 24,
    backgroundColor: "#384046",
    borderRadius: 4,
  },
  setButtons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  setButton: {
    backgroundColor: "#384046",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 20,
  },
  setTextCenter: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
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
    backgroundColor: "#384046",
  },
  tabText: {
    color: "white",
    fontSize: 16,
  },
  tabContent: {
    backgroundColor: "#2A2E35",
    borderRadius: 10,
    padding: 20,
  },
  tabContentText: {
    color: "white",
    fontSize: 16,
  },
});

export default ExerciseDetailScreen;

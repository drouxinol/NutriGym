import React from "react";
import {
  StyleSheet,
  View,
  Platform,
  Text,
  SafeAreaView,
  FlatList,
  Pressable,
} from "react-native";
import ExerciseDificultyList from "../components/ExerciseDificultyList";
import ExerciseClass from "../models/ExerciseClass";
import WorkoutPlanClass from "../models/WorkoutPlanClass";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Ionicons } from "@expo/vector-icons";

function renderFooter() {
  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={() => console.log("Add Button Pressed!")}>
        <AntDesign name="pluscircle" size={50} color="black" />
      </Pressable>
    </View>
  );
}

function renderWorkoutPlanItem({ navigation, item }) {
  return (
    <Pressable
      style={styles.planItem}
      onPress={() => navigation.navigate("WorkoutPlanDetailed", { plan: item })}
    >
      <Text style={styles.planText}>{item.name}</Text>
    </Pressable>
  );
}

function WorkoutFirstScreen({ navigation }) {
  // Temporary variable
  const workoutPlans = [
    new WorkoutPlanClass("Plan A", [
      new ExerciseClass(
        "Agachamento",
        "Exercício para pernas",
        "Pernas",
        4,
        12
      ),
      new ExerciseClass("Supino", "Exercício para o peito", "Peito", 3, 10),
    ]),
    new WorkoutPlanClass("Plan B", [
      new ExerciseClass(
        "Levantamento Terra",
        "Exercício para costas",
        "Costas",
        3,
        8
      ),
      new ExerciseClass(
        "Desenvolvimento",
        "Exercício para ombros",
        "Ombros",
        3,
        12
      ),
    ]),
  ];

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
          <Text style={styles.headerTitle}>Exercises</Text>
        </View>

        <View style={styles.list}>
          <ExerciseDificultyList />
        </View>
        <Text style={[styles.text]}>Plans</Text>
        <View style={styles.list}>
          <FlatList
            data={workoutPlans}
            renderItem={(item) =>
              renderWorkoutPlanItem({ ...item, navigation })
            }
            keyExtractor={(item, index) => index.toString()}
            ListFooterComponent={renderFooter}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    margin: 25,
    marginTop: Platform.OS === "android" ? 75 : 15,
    flex: 1,
  },
  container: {
    flex: 1,
  },
  text: { fontSize: 30 },
  list: {
    marginTop: 25,
    flex: 1,
  },
  planItem: {
    padding: 25,
    backgroundColor: "#DFDFDF",
    marginVertical: 8,
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  planText: {
    textAlign: "center",
    fontSize: 24,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#192126",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
});

export default WorkoutFirstScreen;

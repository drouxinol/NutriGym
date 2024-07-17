import React, { useContext, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  FlatList,
  Pressable,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Exercises } from "../data/ExercisesData"; // Assuming this imports your exercise data correctly
import { UserContext } from "../contexts/user";
import Checkbox from "expo-checkbox"; // Ensure to install this dependency

function AllExercisesScreen({ navigation, route }) {
  const { plan } = route.params;
  const { user, updateUser } = useContext(UserContext);

  const [selectedExercises, setSelectedExercises] = useState([]);

  const toggleExerciseSelection = (exerciseIndex) => {
    if (selectedExercises.includes(exerciseIndex)) {
      setSelectedExercises(
        selectedExercises.filter((index) => index !== exerciseIndex)
      );
    } else {
      setSelectedExercises([...selectedExercises, exerciseIndex]);
    }
  };

  const navigateToExerciseDetail = (exercise) => {
    navigation.navigate("ExerciseDetailScreen", { exercise });
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.itemContainer}>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#D9D9D9" : "#FFFFFF",
          },
          styles.item,
        ]}
        onPress={() => navigateToExerciseDetail(item)}
      >
        <View style={styles.imagePlaceholder} />
        <View style={styles.textContainer}>
          <Text style={styles.itemTitle}>{item.name}</Text>
          <Text style={styles.itemDetail}>Type: {item.type}</Text>
          <Text style={styles.itemDetail}>Muscle: {item.muscle}</Text>
          <Text style={styles.itemDetail}>Difficulty: {item.difficulty}</Text>
        </View>
      </Pressable>
      <Checkbox
        value={selectedExercises.includes(index)}
        onValueChange={() => toggleExerciseSelection(index)}
        style={styles.checkbox}
      />
    </View>
  );

  const saveSelectedExercises = () => {
    const selectedExerciseDetails = selectedExercises.map(
      (index) => Exercises[index]
    );
    const updatedPlan = {
      ...plan,
      exercises: [...plan.exercises, ...selectedExerciseDetails],
    };
    const updatedPlans = user.plans.map((p) =>
      p.name === plan.name ? updatedPlan : p
    );
    updateUser({ plans: updatedPlans });
    navigation.navigate("WorkoutFirstScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Ionicons
            name="arrow-back"
            size={24}
            color="#4A4A4A"
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.headerTitle}>All Exercises</Text>
        </View>
        <FlatList
          data={Exercises}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.flatListContent}
        />
        <Pressable style={styles.saveButton} onPress={saveSelectedExercises}>
          <Text style={styles.saveButtonText}>Save</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  mainContainer: {
    flex: 1,
    margin: 20,
    marginTop: Platform.OS === "android" ? 70 : 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#4A4A4A",
  },
  backButton: {
    marginRight: 10,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
    padding: 15,
    backgroundColor: "#FFFFFF",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  imagePlaceholder: {
    width: 50,
    height: 50,
    backgroundColor: "#ccc",
    borderRadius: 10,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  itemDetail: {
    fontSize: 14,
    color: "#666",
  },
  flatListContent: {
    paddingBottom: 20,
  },
  checkbox: {
    marginLeft: 10,
  },
  saveButton: {
    backgroundColor: "#4A90E2",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  saveButtonText: {
    color: "white",
    fontSize: 18,
  },
});

export default AllExercisesScreen;

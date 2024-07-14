import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Pressable,
  Platform,
  Text,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Exercises } from "../data/ExercisesData";

function ExerciseDetailListScreen({ navigation, route }) {
  const { difficulty, category } = route.params;

  const filteredExercises = Exercises.filter(
    (exercise) =>
      exercise.difficulty === difficulty.toLowerCase() &&
      exercise.muscle === category.toLowerCase()
  );

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() =>
        navigation.navigate("ExerciseGeneralScreen", { exercise: item })
      }
    >
      <View style={styles.item}>
        <View style={styles.imagePlaceholder} />
        <View style={styles.textContainer}>
          <Text style={styles.itemTitle}>{item.name}</Text>
          <Text style={styles.itemDetail}>Type: {item.type}</Text>
          <Text style={styles.itemDetail}>Muscle: {item.muscle}</Text>
          <Text style={styles.itemDetail}>Difficulty: {item.difficulty}</Text>
        </View>
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back"
              size={24}
              color="#192126"
              style={styles.backButton}
            />
          </Pressable>
          <Text style={styles.headerTitle}>{difficulty}</Text>
        </View>
        <View style={{ marginTop: 25 }}>
          <FlatList
            data={filteredExercises}
            keyExtractor={(item) =>
              `${item.name}-${item.type}-${item.muscle}-${item.difficulty}`
            }
            renderItem={renderItem}
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
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#192126",
  },
  backButton: {
    marginRight: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  item: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#e0e0e0", // Background color of each exercise item
    borderRadius: 10,
    marginBottom: 10,
    marginEnd: 10,
    alignItems: "center",
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
});

export default ExerciseDetailListScreen;

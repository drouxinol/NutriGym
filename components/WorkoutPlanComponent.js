import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ExerciseItem from "./ExerciseItemComponent";

function WorkoutPlan({ workoutPlan }) {
  function renderPlanItem(itemData) {
    return <ExerciseItem exercise={itemData.item} />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{workoutPlan.name}</Text>
      <FlatList
        data={workoutPlan.exercises}
        renderItem={renderPlanItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default WorkoutPlan;

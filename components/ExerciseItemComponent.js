import React from "react";
import { View, Text, StyleSheet } from "react-native";

function ExerciseItem({ exercise }) {
  console.log(exercise);
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{exercise.name}</Text>
      <Text>{exercise.description}</Text>
      <Text>{`Muscle Group: ${exercise.muscleGroup}`}</Text>
      <Text>{`Set: ${exercise.sets}, Reps: ${exercise.reps}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#f8f8f8",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ExerciseItem;

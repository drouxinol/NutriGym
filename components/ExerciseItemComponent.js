import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

function ExerciseItem({ exercise }) {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => console.log("Exercise Button pressed!")}>
      <View style={styles.container}>
        <View style={styles.imagePlaceholder} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{exercise.name}</Text>
          <View style={styles.setsRepsContainer}>
            <Text style={styles.setsRepsText}>{` ${exercise.sets}/50`}</Text>
            <Text style={styles.setsRepsText}>{` ${exercise.sets}/50`}</Text>
          </View>
          <View style={styles.setsRepsContainer}>
            <Text style={styles.setsRepsText}>{` ${exercise.sets}/50`}</Text>
            <Text style={styles.setsRepsText}>{` ${exercise.sets}/50`}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "#384046",
    borderRadius: 10,
    alignItems: "center",
  },
  imagePlaceholder: {
    width: 60,
    height: 60,
    backgroundColor: "black",
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
  },
  setsRepsContainer: {
    flexDirection: "row",
    marginTop: 8,
  },
  setsRepsText: {
    color: "#DDD",
    marginRight: 10,
  },
});

export default ExerciseItem;

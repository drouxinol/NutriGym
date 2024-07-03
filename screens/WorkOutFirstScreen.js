import React from "react";
import { StyleSheet, View, Platform, Text, SafeAreaView } from "react-native";
import ExerciseDificultyList from "../components/ExerciseDificultyList";

function WorkoutFirstScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View>
          <Text style={styles.text}>Exercises</Text>
        </View>
        <View style={styles.list}>
          <ExerciseDificultyList />
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
  },
});

export default WorkoutFirstScreen;

import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Pressable,
  Platform,
  FlatList,
  Text,
} from "react-native";
import ExerciseCategoryList from "../components/ExerciseCategoryList";
import { Ionicons } from "@expo/vector-icons";

function WorkoutCategoryScreen({ navigation, route }) {
  const { difficulty } = route.params;
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
        <ExerciseCategoryList />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    margin: 25,
    marginTop: Platform.OS === "android" ? 75 : 35,
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
});

export default WorkoutCategoryScreen;

import React from "react";
import {
  StyleSheet,
  View,
  Platform,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import ExerciseItem from "../components/ExerciseItemComponent";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

function renderExerciseItem({ item }) {
  return <ExerciseItem exercise={item} />;
}

function WorkoutPlanDetail({ route, navigation }) {
  const { plan } = route.params;

  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={styles.container}>
        <View style={styles.mainContainer}>
          <View style={styles.header}>
            <Pressable
              onPress={() => navigation.goBack()}
              style={styles.backButton}
            >
              <Ionicons name="arrow-back" size={24} color="white" />
            </Pressable>
            <Text style={styles.headerTitle}>{plan.name}</Text>
          </View>

          <View style={styles.image}>
            <Image
              source={require("../images/PlanImage.jpg")}
              style={styles.mainImage}
            />
            <LinearGradient
              colors={["transparent", "#686868"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={styles.gradient}
            />
            <Text style={styles.textImage}>
              There is no instant way to a healthy life
            </Text>
          </View>
          <View>
            <Text style={styles.exercisesText}>Exercises</Text>
          </View>
          <View style={styles.list}>
            <FlatList
              data={plan.exercises}
              renderItem={renderExerciseItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#192126",
  },
  mainContainer: {
    margin: 25,
    marginTop: Platform.OS === "android" ? 75 : 15,
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  list: {
    marginTop: 10,
    flex: 1,
  },
  mainImage: {
    height: 250,
    width: "100%",
    borderRadius: 20,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 20,
  },
  textImage: {
    position: "absolute",
    color: "white",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
    width: "100%",
    bottom: "10%",
  },
  image: {
    marginTop: 20,
  },
  exercisesText: {
    fontSize: 24,
    color: "white",
    marginTop: 50,
    fontWeight: "bold",
  },
});

export default WorkoutPlanDetail;

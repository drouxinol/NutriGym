import React from "react";
import { StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import WorkoutFirstScreen from "./screens/WorkOutFirstScreen";
import WorkoutPlanDetail from "./screens/PlanDetailScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import ExerciseDetailScreen from "./screens/ExerciseDetailScreen";
import ConfirmationScreen from "./screens/ConfirmationScreen";
import UsernameScreen from "./screens/InitialUsernameScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="WorkoutFirstScreen"
            component={WorkoutFirstScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="WorkoutPlanDetailed"
            component={WorkoutPlanDetail}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ExerciseDetailScreen"
            component={ExerciseDetailScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="UsernameScreen"
            component={UsernameScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ConfirmationScreen"
            component={ConfirmationScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  backButton: {
    marginLeft: 10,
  },
});

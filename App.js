import React from "react";
import { StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import WorkoutFirstScreen from "./screens/WorkOutFirstScreen";
import WorkoutPlanDetail from "./screens/PlanDetailScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "./screens/ProfileScreen";
import { StatusBar } from "expo-status-bar";
import NutritionScreen from "./screens/NutritionScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ExerciseDetailScreen from "./screens/ExerciseDetailScreen";
import WeightScreen from "./screens/InitialWeightScreen";
import HeightScreen from "./screens/InitialHeightScreen";
import UsernameScreen from "./screens/InitialUsernameScreen";
import AgeScreen from "./screens/InitialAgeScreen";
import GenderScreen from "./screens/InitialGenderScreen";
import ConfirmationScreen from "./screens/ConfirmationScreen";

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
            name="ProfileScreen"
            component={ProfileScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="NutritionScreen"
            component={NutritionScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SettingsScreen"
            component={SettingsScreen}
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
            name="HeightScreen"
            component={HeightScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="AgeScreen"
            component={AgeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="WeightScreen"
            component={WeightScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="GenderScreen"
            component={GenderScreen}
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

import React from "react";
import { TouchableOpacity, StyleSheet, Pressable, Text } from "react-native";
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

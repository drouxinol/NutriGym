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
import LoadingScreen from "./screens/LoadingScreen";
import { useState, useEffect } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulando um carregamento assíncrono (por exemplo, carregamento de dados)
    setTimeout(() => {
      setIsLoading(false); // Marcando como carregado após 2 segundos (simulação)
    }, 5000);
  }, []);
  if (isLoading) {
    return <LoadingScreen />;
  }

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

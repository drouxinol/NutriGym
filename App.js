import React from "react";
import HomeScreen from "./screens/HomeScreen";
import WorkoutFirstScreen from "./screens/WorkOutFirstScreen";
import WorkoutPlanDetail from "./screens/PlanDetailScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import ConfirmationScreen from "./screens/ConfirmationScreen";
import WorkoutCatergoryScreen from "./screens/WorkoutCatergoryScreen";
import UserProvider from "./contexts/user";
import ProfileScreen from "./screens/ProfileScreen";
import MultiStepFormScreen from "./screens/InitialInfoScreen";
import ExerciseDetailListScreen from "./screens/ExerciseDetailListScreen";
import ExerciseGeneralScreen from "./screens/ExerciseGeneralScreen";
import SettingsScreen from "./screens/SettingsScreen";
import AllExercisesScreen from "./screens/AddExerciseToPlanScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <UserProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfileScreen"
              component={ProfileScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="WorkoutFirstScreen"
              component={WorkoutFirstScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ExerciseGeneralScreen"
              component={ExerciseGeneralScreen}
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
              name="ExerciseDetailListScreen"
              component={ExerciseDetailListScreen}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="MultiStepFormScreen"
              component={MultiStepFormScreen}
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
              name="ConfirmationScreen"
              component={ConfirmationScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="AllExercisesScreen"
              component={AllExercisesScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="WorkoutCategoryScreen"
              component={WorkoutCatergoryScreen}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </UserProvider>
      </NavigationContainer>
    </>
  );
}

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Pressable,
  Platform,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoadingScreen from "../screens/LoadingScreen";
import HomeImageComponent from "../components/HomeImageComponent";
import HomeHeader from "../components/HomeHeaderComponent";
import UsernameScreen from "./InitialUsernameScreen";

function HomeScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [showInitialInfo, setShowInitialInfo] = useState(false);

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const storedUsername = await AsyncStorage.getItem(
          "@UserSettings_username"
        );
        if (storedUsername !== null) {
          setUsername(storedUsername);
        } else {
          setShowInitialInfo(true); // Mostra a tela inicial se o nome de usuário não estiver armazenado
        }
      } catch (error) {
        console.error("Error retrieving username from AsyncStorage:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsername();
  }, []);

  if (showInitialInfo) {
    return <UsernameScreen navigation={navigation} />;
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  function handlePressNutrition() {
    navigation.navigate("NutritionScreen");
  }

  function handlePressWorkout() {
    navigation.navigate("WorkoutFirstScreen");
  }

  function handlePressProfileButton() {
    navigation.navigate("ProfileScreen");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <HomeHeader
          onPressUserButton={handlePressProfileButton}
          name={username}
        />
        <Pressable onPress={handlePressWorkout}>
          <View style={styles.imageContainerView}>
            <HomeImageComponent
              imageSource={require("../images/WorkoutMainImage.jpg")}
              text="Work Out"
            />
          </View>
        </Pressable>
        <Pressable onPress={handlePressNutrition}>
          <View style={styles.imageContainerView}>
            <HomeImageComponent
              imageSource={require("../images/NutritionMainImage.jpg")}
              text="Nutrition"
            />
          </View>
        </Pressable>
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
  imageContainerView: {
    marginTop: 35,
  },
  iconBackground: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#192126",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;

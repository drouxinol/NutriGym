import React, { useContext, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Pressable,
  Platform,
  Alert,
} from "react-native";
import LoadingScreen from "../screens/LoadingScreen";
import HomeImageComponent from "../components/HomeImageComponent";
import HomeHeader from "../components/HomeHeaderComponent";
import { UserContext } from "../contexts/user";

function HomeScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);

  const userInfo = useContext(UserContext);

  if (isLoading) {
    return <LoadingScreen />;
  }

  function handlePressNutrition() {
    Alert.alert("Brevemente Disponível!");
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
          username={userInfo.user.username}
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

import {
  StyleSheet,
  SafeAreaView,
  View,
  Pressable,
  Platform,
} from "react-native";
import HomeImageComponent from "../components/HomeImageComponent";
import HomeHeader from "../components/HomeHeader";

function HomeScreen({ navigation }) {
  function handlePressNutrition() {
    console.log("Nutrition Button Pressed!");
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
        <HomeHeader onPressUserButton={handlePressProfileButton} />
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

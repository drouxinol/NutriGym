import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import * as Animatable from "react-native-animatable";
import Svg, { Circle, Path } from "react-native-svg";

const ConfirmationScreen = ({ navigation }) => {
  useEffect(() => {
    // To perform animation when the component mounts
    circleRef?.bounceIn?.(800).then(() => {
      // Navigate to HomeScreen after animation
      navigation.navigate("HomeScreen");
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Animatable.View
        ref={(ref) => (circleRef = ref)}
        style={styles.circleContainer}
      >
        <Svg height="100%" width="100%" viewBox="0 0 100 100">
          <Circle cx="50" cy="50" r="40" fill="#4CAF50" />
          <Path
            d="M30 50 L45 65 L75 35"
            stroke="#fff"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
        <Text style={styles.text}>Saved!</Text>
      </Animatable.View>
    </View>
  );
};

let circleRef;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  circleContainer: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: 10,
    color: "#4CAF50",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ConfirmationScreen;

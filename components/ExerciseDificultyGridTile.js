import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function ExerciseDificultyGridTile({ type, imgSource }) {
  return (
    <View style={styles.imageView}>
      <Image source={imgSource} style={styles.mainImage} />
      <LinearGradient
        colors={["rgba(0,0,0,0.8)", "transparent"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      />
      <Text style={styles.textImage}>{type}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainImage: {
    height: 250,
    width: 300,
    borderRadius: 20,
  },
  imageView: {
    marginEnd: 10,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 20,
  },
  //in React Native is a shorthand for applying styles that make an element fill its parent completely.
  //Same thing as:{
  //position: 'absolute',
  //left: 0,
  //right: 0,
  //top: 0,
  //bottom: 0,
  //}
  textImage: {
    position: "absolute",
    color: "white",
    fontSize: 49,
    fontWeight: "500",
    paddingTop: 50,
    paddingLeft: 20,
  },
});

export default ExerciseDificultyGridTile;

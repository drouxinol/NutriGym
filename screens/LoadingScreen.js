import React, { useRef, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import * as Animatable from "react-native-animatable";

const LoadingScreen = () => {
  const textRef = useRef("");

  useEffect(() => {
    const interval = setInterval(() => {
      textRef.current.fadeOut(1000).then(() => textRef.current.fadeIn(1000)); // Faz fade out e depois fade in
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#007BFF" />
      <Animatable.Text
        ref={textRef}
        style={styles.text}
        animation="fadeIn"
        iterationCount="infinite"
      >
        Loading
      </Animatable.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000", // Fundo escuro
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    color: "#fff", // Cor do texto branca
  },
});

export default LoadingScreen;

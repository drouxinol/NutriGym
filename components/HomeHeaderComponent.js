import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

function HomeHeader({ onPressUserButton }) {
  return (
    <View style={styles.headingContainer}>
      <View>
        <Text style={styles.text}>Good Morning 🔥</Text>
        <Text style={{ fontSize: 30 }}>Daniel</Text>
      </View>
      <View>
        <Pressable onPress={onPressUserButton}>
          <View style={styles.iconBackground}>
            <AntDesign name="user" size={24} color="white" />
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
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

export default HomeHeader;

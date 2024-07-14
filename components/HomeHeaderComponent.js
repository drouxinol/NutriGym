import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

function HomeHeader({ onPressUserButton, fullName }) {
  return (
    <View style={styles.headingContainer}>
      <View>
        <Text style={styles.text}> Hi, {fullName}! </Text>
      </View>
      <View>
        <Pressable onPress={onPressUserButton} style={styles.iconBackground}>
          <Feather name="menu" size={24} color="black" />
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
    fontSize: 25,
    fontWeight: "900",
    fontStyle: "italic",
    color: "#181818",
  },
  iconBackground: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeHeader;

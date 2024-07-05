// InfoCard.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const InfoCard = ({ title, value, unit }) => (
  <View style={styles.infoCard}>
    <Text style={styles.infoCardTitle}>{title}</Text>
    <Text style={styles.infoCardValue}>{value}</Text>
    <Text style={styles.infoCardUnit}>{unit}</Text>
  </View>
);

const styles = StyleSheet.create({
  infoCard: {
    width: 100,
    height: 120,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 10,
    margin: 5,
    justifyContent: "space-between",
  },
  infoCardTitle: {
    fontSize: 15,
    color: "#192126",
    textAlign: "left",
  },
  infoCardValue: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#192126",
    textAlign: "center",
  },
  infoCardUnit: {
    fontSize: 13,
    color: "#192126",
    textAlign: "left",
  },
});
export default InfoCard;

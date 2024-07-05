import React from "react";
import {
  StyleSheet,
  View,
  Platform,
  Text,
  SafeAreaView,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import InfoCard from "../components/InfoCardComponent";

function ProfileScreen({ route, navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={24} color="#192126" />
          </Pressable>
          <Text style={styles.headerTitle}>Profile</Text>
        </View>
        <View style={styles.topHeader}>
          <View>
            <Text style={styles.headerNameText}>Daniel Rouxinol</Text>
            <View style={styles.row}>
              <Text style={styles.headerSubText}>23 years</Text>
              <View style={styles.separator} />
              <Text style={styles.headerSubText}>Male</Text>
            </View>
          </View>
          <Pressable
            onPress={() => console.log("Button Pressed")}
            style={styles.settingsButton}
          >
            <Ionicons name="settings" size={24} color="#192126" />
          </Pressable>
        </View>
        <View style={{ borderWidth: 1, marginTop: 10 }} />
        <View style={styles.contentContainer}>
          <InfoCard title="Weight" value="74" unit="kg" />
          <InfoCard title="BF" value="14.8" unit="%" />
          <InfoCard title="LM" value="35.1" unit="kg" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    margin: 25,
    marginTop: Platform.OS === "android" ? 75 : 15,
    flex: 1,
  },
  topHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#192126",
  },
  headerNameText: {
    fontSize: 24,
  },
  headerSubText: {
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  separator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "black",
    marginHorizontal: 5,
  },
  settingsButton: {
    marginLeft: 10,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  infoCard: {
    width: 100,
    height: 100,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  infoCardTitle: {
    fontSize: 14,
    color: "#7D7D7D",
  },
  infoCardValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  infoCardUnit: {
    fontSize: 14,
    color: "#7D7D7D",
  },
});

export default ProfileScreen;

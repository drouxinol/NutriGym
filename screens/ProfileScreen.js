import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Pressable,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { UserContext } from "../contexts/user";

function ProfileScreen({ navigation }) {
  const userInfo = useContext(UserContext);

  const saveWeight = (weight) => {
    userInfo.updateUser("weight", weight);
  };

  const saveHeight = (height) => {
    userInfo.updateUser("height", height);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#192126" />
          </Pressable>
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>Profile</Text>
          </View>
          <View style={styles.placeholder} />
        </View>
        <View style={styles.topHeader}>
          <View>
            <Text style={styles.headerNameText}>{userInfo.user.fullName}</Text>
            <View style={styles.row}>
              <Text style={styles.headerSubText}>
                {userInfo.user.age} years
              </Text>
              <View style={styles.separator} />
              <Text style={styles.headerSubText}>{userInfo.user.gender}</Text>
            </View>
          </View>
          <Pressable
            onPress={() => navigation.navigate("SettingsScreen")}
            style={styles.settingsButton}
          >
            <Ionicons name="settings" size={24} color="#192126" />
          </Pressable>
        </View>
        <View style={styles.divider} />
        <View style={styles.contentContainer}>
          <View style={styles.infoCard}>
            <Text style={styles.infoCardTitle}>Weight</Text>
            <Text style={styles.infoCardValue}>{userInfo.user.weight}</Text>
            <Text style={styles.infoCardUnit}>kg</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoCardTitle}>Height</Text>
            <Text style={styles.infoCardValue}>{userInfo.user.height}</Text>
            <Text style={styles.infoCardUnit}>cm</Text>
          </View>
          <View style={styles.infoCard}>
            <Text style={styles.infoCardTitle}>BMI</Text>
            <Text style={styles.infoCardValue}>
              {(
                userInfo.user.weight / Math.pow(userInfo.user.height / 100, 2)
              ).toFixed(2)}
            </Text>
            <Text style={styles.infoCardUnit}>kg/m²</Text>
          </View>
        </View>

        {/* Graphs or additional content can be added here */}
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Adjusted for centering
    marginBottom: 20,
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#192126",
  },
  placeholder: {
    width: 24,
  },
  topHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
  },
  headerNameText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#192126",
  },
  headerSubText: {
    fontSize: 16,
    color: "#7D7D7D",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  separator: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: "#192126",
    marginHorizontal: 5,
  },
  settingsButton: {
    marginLeft: 10,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    marginVertical: 10,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  infoCard: {
    width: 120,
    height: 120,
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  infoCardTitle: {
    fontSize: 16,
    color: "#192126",
    marginBottom: 5,
  },
  infoCardValue: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#192126",
  },
  infoCardUnit: {
    fontSize: 14,
    color: "#7D7D7D",
  },
  graphContainer: {
    alignItems: "center",
    marginTop: 20,
  },
});

export default ProfileScreen;

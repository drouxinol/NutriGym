import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Pressable,
  Text,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import PieChart from "react-native-pie-chart";

function NutritionScreen({ navigation }) {
  const widthAndHeight = 250;
  const series = [25, 12, 30];
  const sliceColor = ["#14B8A6", "#3B82F6", "#EC4899"];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.header}>
          <View style={styles.leftHeader}>
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="#192126" />
            </Pressable>
            <Text style={styles.headerTitle}>Nutrition</Text>
          </View>
          <Pressable
            onPress={() => console.log("Information icon pressed")}
            style={styles.infoButton}
          >
            <AntDesign name="edit" size={24} color="black" />
          </Pressable>
        </View>

        <View style={styles.pieContainer}>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            coverRadius={0.75}
            coverFill={"#FFF"}
          />
          <View style={styles.caloriesContainer}>
            <Text style={styles.caloriesLabel}>Calories</Text>
            <Text style={styles.caloriesText}>1500</Text>
          </View>
        </View>

        <View>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Macros</Text>
            <Text style={styles.tableHeaderText}>Value</Text>
            <Text style={styles.tableHeaderText}>%</Text>
          </View>
          <View style={styles.detailRow}>
            <View
              style={[styles.colorBox, { backgroundColor: sliceColor[0] }]}
            />
            <Text style={styles.detailText}>Carbs</Text>
            <Text style={styles.detailValue}>12</Text>
            <Text style={styles.detailPercentage}>50%</Text>
          </View>
          <View style={styles.detailRow}>
            <View
              style={[styles.colorBox, { backgroundColor: sliceColor[1] }]}
            />
            <Text style={styles.detailText}>Fat</Text>
            <Text style={styles.detailValue}>22</Text>
            <Text style={styles.detailPercentage}>42.9%</Text>
          </View>
          <View style={styles.detailRow}>
            <View
              style={[styles.colorBox, { backgroundColor: sliceColor[2] }]}
            />
            <Text style={styles.detailText}>Protein</Text>
            <Text style={styles.detailValue}>12</Text>
            <Text style={styles.detailPercentage}>28.6%</Text>
          </View>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  leftHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#192126",
  },
  infoButton: {
    marginLeft: "auto",
  },
  pieContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  caloriesContainer: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  caloriesText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#192126",
  },
  caloriesLabel: {
    fontSize: 16,
    color: "#192126",
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    marginBottom: 10,
    marginTop: 60,
  },
  tableHeaderText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#192126",
    flex: 1,
    textAlign: "center",
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  colorBox: {
    width: 16,
    height: 16,
    marginRight: 10,
  },
  detailText: {
    fontSize: 16,
    color: "#192126",
    flex: 1,
  },
  detailValue: {
    fontSize: 16,
    color: "#192126",
    flex: 1,
    textAlign: "center",
  },
  detailPercentage: {
    fontSize: 16,
    color: "#192126",
    flex: 1,
    textAlign: "center",
  },
});

export default NutritionScreen;

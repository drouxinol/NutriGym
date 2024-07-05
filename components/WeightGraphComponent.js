import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

function WeightGraph({ data }) {
  return (
    <View style={styles.container}>
      <View style={styles.chartContainer}>
        <LineChart
          data={data}
          width={Dimensions.get("window").width - 75} // Specify a smaller width for the chart
          height={300}
          chartConfig={{
            backgroundColor: "#BED7DC",
            backgroundGradientFrom: "#5A72A0",
            backgroundGradientTo: "#5A72A0",
            decimalPlaces: 1,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            propsForDots: {
              r: "2",
              strokeWidth: "2",
              stroke: "white",
            },
          }}
          bezier
          style={{
            borderRadius: 20,
            padding: 5,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center", // Center the content horizontally
  },
  chartContainer: {
    alignItems: "center", // Center the chart within this container
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 8,
    width: "80%", // Ensure the input field does not stretch beyond screen width
  },
  buttonContainer: {
    marginTop: 10, // Add some margin between TextInput and Button
    width: "80%", // Match TextInput width
  },
});

export default WeightGraph;

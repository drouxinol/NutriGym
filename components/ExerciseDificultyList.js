import React from "react";
import { FlatList } from "react-native";
import ExerciseDificultyGridTile from "./ExerciseDificultyGridTile";
import ExerciseDificultyData from "../data/ExercisesDificultyData";

function ExerciseDificultyList({ navigation }) {
  //Create the list

  function pressHandler(difficulty) {
    navigation.navigate("WorkoutCategoryScreen", { difficulty });
  }

  function renderDificultyItem(itemData) {
    return (
      <ExerciseDificultyGridTile
        type={itemData.item.type}
        imgSource={itemData.item.imgSource}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={ExerciseDificultyData}
      keyExtractor={(item) => item.id}
      renderItem={renderDificultyItem}
      horizontal
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    />
  );
}

export default ExerciseDificultyList;

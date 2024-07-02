import React from "react";
import {
  StyleSheet,
  View,
  Platform,
  Text,
  Pressable,
  FlatList,
} from "react-native";
import ExerciseDificultyGridTile from "./ExerciseDificultyGridTile";
import ExerciseDificultyData from "../data/ExercisesDificultyData";

function renderDificultyItem(itemData) {
  return (
    <ExerciseDificultyGridTile
      type={itemData.item.type}
      imgSource={itemData.item.imgSource}
    />
  );
}

function ExerciseDificultyList() {
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

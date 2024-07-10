import React from "react";
import { FlatList } from "react-native";
import ExerciseCategoryListTile from "./ExerciseCategoryListTile";
import exercisesCategory from "../data/ExerciseCategoryData";

function ExerciseCategoryList() {
  function pressHandler() {
    console.log("Button Pressed!");
  }

  function renderCategoryItem(itemData) {
    return (
      <ExerciseCategoryListTile
        category={itemData.item.category}
        imgSource={itemData.item.imgSource}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={exercisesCategory}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
    />
  );
}

export default ExerciseCategoryList;

import React from "react";
import { FlatList } from "react-native";
import ExerciseCategoryListTile from "./ExerciseCategoryListTile";
import exercisesCategory from "../data/ExerciseCategoryData";
import { useNavigation } from "@react-navigation/native";

function ExerciseCategoryList({ difficulty }) {
  const navigation = useNavigation();

  function pressHandler(category) {
    navigation.navigate("ExerciseDetailListScreen", { category, difficulty });
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

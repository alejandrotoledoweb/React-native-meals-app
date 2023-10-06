import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTitle";

const CategoryScreen = ({ navigation }) => {
  function renderCategoryItem(itemData) {
    function handleOnPress() {
      navigation.navigate("MealsOverviewScreen", {
        categoryId: itemData.item.id,
      });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={handleOnPress}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(item) => renderCategoryItem(item)}
      numColumns={2}
    />
  );
};

export default CategoryScreen;

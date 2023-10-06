import React from "react";
import { StyleSheet, Text } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

const DetailMealScreen = ({ route }) => {
  const { mealId } = route.params;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return (
    <>
      <MealDetails
        title={selectedMeal.title}
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "white",
    marginTop: 15,
    marginHorizontal: 15,
  },
});

export default DetailMealScreen;

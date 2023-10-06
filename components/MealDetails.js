import React from "react";
import { View, Text, StyleSheet } from "react-native";

function MealDetails({ title, duration, complexity, affordability }) {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{duration}m</Text>
        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  titleContainer: {
    // justifyContent: "center",
  },
  title: {
    fontSize: 34,
    color: "white",
    textAlign: "center",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    // color: "white",
  },
  detailItem: {
    color: "white",
    marginHorizontal: 4,
    fontSize: 15,
  },
});

export default MealDetails;

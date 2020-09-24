import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function CategotyItem(props) {
  const { category, categoryColor } = props;

  return (
    <View style={[styles.catagoryItem, { backgroundColor: categoryColor }]}>
      <Text style={styles.categoryText}>{category}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  catagoryItem: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 50,
    marginHorizontal: 4,
  },
  categoryText: {
    fontFamily: "Roboto_500Medium",
    color: "black",
    fontSize: 12
  },
});

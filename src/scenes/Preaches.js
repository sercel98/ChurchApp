import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Preaches(props) {
  return (
    <View style={styles.container}>
      <Text>Hola Preaches</Text>
      <TouchableOpacity style={styles.filterButton}>
        <MaterialCommunityIcons name="filter" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  filterButton: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30,
    backgroundColor: "#694fad",
    borderRadius: 50,
  },
});

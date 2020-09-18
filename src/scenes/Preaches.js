import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import Filter from "../components/Filter"
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Preaches(props) {
  const [showFilter, setShowFilter] = useState(false);

  renderFilterItem = () => {

  };

  return (
    <View style={styles.container}>
      <Text>Hola Preaches</Text>
      <TouchableOpacity style={styles.filterButton}>
        <MaterialCommunityIcons name="filter" size={30} color="white" />
      </TouchableOpacity>
      <Filter></Filter>
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

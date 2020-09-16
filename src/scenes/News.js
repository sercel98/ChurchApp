import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function News(props) {
  return (
    <View style={styles.container}>
      <Text>Hola from news</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

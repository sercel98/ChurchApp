import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Preaches(props) {
  return (
    <View style={styles.container}>
      <Text>Hola preaches</Text>
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

import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function News(props) {
  return (
    <View style={styles.container}>
      <Text>Hola News</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

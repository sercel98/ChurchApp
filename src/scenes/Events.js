import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Events(props) {
  return (
    <View style={styles.container}>
      <Text>Hola Events</Text>
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

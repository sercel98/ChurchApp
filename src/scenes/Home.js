import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../shared/Header";

export default function Home(props) {
  return (
    <View>
      <Header />
      <View style={styles.container}>
        <Text>Hola Home</Text>
      </View>
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

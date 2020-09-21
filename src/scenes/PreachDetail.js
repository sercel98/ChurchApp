import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function PreachDetail(props) {
  const { route } = props;
  const { preach } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.textSection}>{preach.name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 12,
  },
  textSection: {
    fontSize: 26,
    fontFamily: "Roboto_700Bold",
    marginBottom: 8,
  },
});

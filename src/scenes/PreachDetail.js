import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Video } from "expo-av";

export default function PreachDetail(props) {
  const { route } = props;
  const { preach } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        {preach.name +
          " " +
          preach.name +
          " " +
          preach.name +
          " " +
          preach.name}
      </Text>
      <Text>{"Por: Pastor Marco Perez"}</Text>
      <Image
        style={styles.bodyImage}
        source={{ uri: "https://picsum.photos/200" }}
      />
      <Text>{"Timoteo 23:2-21"}</Text>
      <Text style={styles.bodyText}>
        {"Lorem impsum no se que más dice xdxdxdxdxd xdxdxd xdxd xdxd" +
          "xd lorem impsum no se que más dice lorem impsum no se que más dice lorem impsum " +
          "no se que más dice lorem impsum no se que más dice.  \nLorem impsum no se que más dice"}
        {"Lorem impsum no se que más dice xdxdxdxdxd xdxdxd xdxd xdxd" +
          "xd lorem impsum no se que más dice lorem impsum no se que más dice lorem impsum " +
          "no se que más dice lorem impsum no se que más dice.  \nLorem impsum no se que más dice"}
      </Text>
      
      <Text style={styles.dateText}>{"Publicado el: 20/12/2020"}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 12,
  },
  titleText: {
    fontSize: 26,
    fontFamily: "Roboto_700Bold",
    marginBottom: 8,
  },
  bodyImage: {
    height: "25%",
    width: "70%",
    alignSelf: "center",
    marginBottom: 12,
  },
  bodyText: {
    textAlign: "justify",
    fontFamily: "Roboto_400Regular",
    marginBottom: 12,
  },
  dateText: {
    textAlign: "right",
    fontFamily: "Roboto_400Regular",
    color: "#525252",
    fontSize: 12,
  },
});

import React, { useEffect } from "react";
import { Text, Image, View, StyleSheet } from "react-native";

export default function HomeCard(props) {
  const { item } = props;

  useEffect(() => {
    console.log("dentro de homeCard", item);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image style={styles.cardImage} source={{ uri: item.image }}></Image>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.fecha}>fechita</Text>
          <Text>Parrafitoooooooooooooooooooooo... Ver más</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  card: {
    height: "100%",
    width: 150,
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    height: 140,
    width: "100%",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  infoContainer: {
    padding: 10,
  },
  title: {
    fontFamily: "Roboto_700Bold",
    fontSize: 16,
  },
  fecha: {
    fontFamily: "Roboto_300Light",
    color: "gray",
  },
});

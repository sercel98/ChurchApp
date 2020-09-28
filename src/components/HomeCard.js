import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";

const EVENT_TYPE = "event";
const PREACH_TYPE = "preach";
const NEWS_TYPE = "news";
const BLOG_TYPE = "blog";

export default function HomeCard(props) {
  const { item, type } = props;
  const navigation = useNavigation();

  const goToDetail = () => {
    if (type === EVENT_TYPE) {
      navigation.navigate("EventDetail", { event: item });
    } else if (type === PREACH_TYPE) {
      navigation.navigate("PreachDetail", { preach: item });
    } else if (type === NEWS_TYPE) {
      navigation.navigate("NewsArticleDetail", { newsArticle: item });
    } else if (type === BLOG_TYPE) {
      navigation.navigate("BlogDetail", { blog: item });
    } else {
      console.log("Error al leer tipo", type, item.name);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => goToDetail()}>
        <View style={styles.card}>
          <Image style={styles.cardImage} source={{ uri: item.image }}></Image>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.fecha}>fechita</Text>
            <Text>Parrafitoooooooooooooooooooooo... Ver más</Text>
          </View>
        </View>
      </TouchableOpacity>
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

import React from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NewsCard = ({ item }) => {
  const navigation = useNavigation();

  const goDetail = (item) => {
    navigation.navigate("NewsArticleDetail", { newsArticle: item });
  };

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => goDetail(item)}
    >
      <View style={styles.cardImageContainer}>
        <Image
          style={styles.cardImage}
          source={{ uri: "https://picsum.photos/200" }}
        ></Image>
      </View>
      <View style={styles.cardTextContainer}>
        <View style={styles.cardTextPrimary}>
          <View style={styles.cardTextTitleContainer}>
            <Text style={styles.title}>
              <Text>{item.name + " " + item.name + " " + item.name}</Text>
            </Text>
            <Text style={styles.author}>{"Marco Perez"}</Text>
          </View>
          <View style={styles.date}>
            <Text style={styles.textDate}>{"14/11/2020"}</Text>
          </View>
        </View>
        <View>
          <Text>{item.name + " " + item.name + "" + item.name}</Text>
          <Text>{item.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    flex: 1,
    flexDirection: "row",
    marginHorizontal: 4,
    elevation: 4,
  },
  cardImageContainer: {
    width: "30%",
    height: "100%",
  },
  cardImage: { width: "100%", height: "100%" },
  textDate: {
    fontFamily: "Roboto_300Light",
    fontSize: 8,
    color: "#757575",
  },
  cardTextContainer: {
    padding: 12,
    flex: 1,
    flexDirection: "column",
    width: "70%",
  },
  cardTextPrimary: {
    flexDirection: "row",
  },
  cardTextTitleContainer: {
    width: "80%",
  },
  title: {
    fontFamily: "Roboto_500Medium",
    fontSize: 16,
  },
  author: {
    fontFamily: "Roboto_400Regular",
    fontSize: 10,
    color: "#686868",
  },
  date: {
    width: "20%",
    justifyContent: "flex-start",
    paddingTop: 6,
  },
});

export default NewsCard;

import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import CategotyItem from "../shared/CategoryItem";

export default function NewsArticleDetail(props) {
  const { route } = props;
  const { newsArticle } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        {newsArticle.name +
          " " +
          newsArticle.name +
          " " +
          newsArticle.name +
          " " +
          newsArticle.name}
      </Text>
      <View style={{ flexDirection: "row", marginBottom: 12 }}>
        <CategotyItem category={"Nacional"} categoryColor={"#9CE1FC"} />
        <CategotyItem category={"Económica"} categoryColor={"#FF6700"} />
      </View>
      <Image
        style={styles.bodyImage}
        source={{ uri: "https://picsum.photos/200" }}
      />
      <Text style={styles.bodyText}>
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
    paddingTop: 12,
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

import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default function Home(props) {
  const predicasData = [
    {
      key: "1",
      name: "objeto 1",
      image: "https://picsum.photos/200",
    },
    {
      key: "2",
      name: "objeto 2",
      image: "https://picsum.photos/200",
    },
    {
      key: "3",
      name: "objeto 3",
      image: "https://picsum.photos/200",
    },
    {
      key: "4",
      name: "objeto 4",
      image: "https://picsum.photos/200",
    },
    {
      key: "5",
      name: "objeto 5",
      image: "https://picsum.photos/200",
    },
    {
      key: "6",
      name: "objeto 6",
      image: "https://picsum.photos/200",
    },
  ];

  const blogData = [
    {
      key: "1",
      name: "objeto 1",
      image: "https://picsum.photos/200",
    },
    {
      key: "2",
      name: "objeto 2",
      image: "https://picsum.photos/200",
    },
    {
      key: "3",
      name: "objeto 3",
      image: "https://picsum.photos/200",
    },
    {
      key: "4",
      name: "objeto 4",
      image: "https://picsum.photos/200",
    },
    {
      key: "5",
      name: "objeto 5",
      image: "https://picsum.photos/200",
    },
    {
      key: "6",
      name: "objeto 6",
      image: "https://picsum.photos/200",
    },
  ];

  const newsData = [
    {
      key: "1",
      name: "objeto 1",
      image: "https://picsum.photos/200",
    },
    {
      key: "2",
      name: "objeto 2",
      image: "https://picsum.photos/200",
    },
    {
      key: "3",
      name: "objeto 3",
      image: "https://picsum.photos/200",
    },
    {
      key: "4",
      name: "objeto 4",
      image: "https://picsum.photos/200",
    },
    {
      key: "5",
      name: "objeto 5",
      image: "https://picsum.photos/200",
    },
    {
      key: "6",
      name: "objeto 6",
      image: "https://picsum.photos/200",
    },
  ];

  const renderCards = ({ item }) => {
    return (
      <Image
        style={{ width: 150, height: 120 }}
        source={{ uri: item.image }}
      ></Image>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          marginHorizontal: 12,
          marginVertical: 8,
          maxHeight: "30%",
        }}
      >
        <Text style={styles.textSection}>Prédicas recientes</Text>
        <FlatList
          style={styles.itemList}
          horizontal
          ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
          renderItem={renderCards}
          data={predicasData}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          marginHorizontal: 12,
          marginVertical: 8,
          maxHeight: "30%",
        }}
      >
        <Text style={styles.textSection}>Noticias recientes</Text>
        <FlatList
          style={styles.itemList}
          horizontal
          ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
          renderItem={renderCards}
          data={newsData}
        />
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "column",
          marginHorizontal: 12,
          marginVertical: 8,
          maxHeight: "30%",
        }}
      >
        <Text style={styles.textSection}>Publicaciones recientes del blog</Text>
        <FlatList
          style={styles.itemList}
          horizontal
          ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
          renderItem={renderCards}
          data={blogData}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  textSection: {
    fontSize: 22,
    fontFamily: "Roboto_700Bold",
  },
  itemList: {
    marginVertical: 12,
  },
});

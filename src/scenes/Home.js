import React from "react";
import { ScrollView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import HorizontalList from "../components/HorizontalList";

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

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.textSection}>Prédicas recientes</Text>
          <HorizontalList data={predicasData} />
        </View>
        <View style={styles.section}>
          <Text style={styles.textSection}>Noticias recientes</Text>
          <HorizontalList data={predicasData} />
        </View>
        <View style={styles.section}>
          <Text style={styles.textSection}>
            Blogs recientes
          </Text>
          <HorizontalList data={predicasData} />
        </View>
        <View style={styles.section}>
          <Text style={styles.textSection}>Eventos recientes</Text>
          <HorizontalList data={predicasData} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  section: {
    flex: 1,
    flexDirection: "column",
    marginHorizontal: 12,
    marginVertical: 8,
  },
  textSection: {
    fontSize: 22,
    fontFamily: "Roboto_700Bold",
  },
});

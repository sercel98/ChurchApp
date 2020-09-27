import React, { useState } from "react";
import { ScrollView } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import HorizontalList from "../components/HorizontalList";

export default function Home(props) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  //TODO: Agregar  ícono de cargando.
  const [isLoading, setIsLoading] = useState(false);
  //TODO: Agregar mensaje de error si los hay.
  const [hasError, setErrors] = useState(false);
  const limit = 30;

  const EVENT_TYPE = "event";
  const PREACH_TYPE = "preach";
  const NEWS_TYPE = "news";
  const BLOG_TYPE = "blog";

  const api = `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=${limit}`;

  //hacer card
  const renderCards = ({ item }) => {
    return <Text>{item.name}</Text>;
  };

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
          <HorizontalList data={predicasData} type={PREACH_TYPE} />
        </View>
        <View style={styles.section}>
          <Text style={styles.textSection}>Noticias recientes</Text>
          <HorizontalList data={predicasData} type={NEWS_TYPE} />
        </View>
        <View style={styles.section}>
          <Text style={styles.textSection}>Blogs recientes</Text>
          <HorizontalList data={predicasData} type={BLOG_TYPE} />
        </View>
        <View style={styles.section}>
          <Text style={styles.textSection}>Eventos recientes</Text>
          <HorizontalList data={predicasData} type={EVENT_TYPE}/>
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
    marginVertical: 5,
  },
  textSection: {
    fontSize: 22,
    fontFamily: "Roboto_700Bold",
  },
});

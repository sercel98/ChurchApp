import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Preaches(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  //TODO: Agregar  ícono de cargando.
  const [isLoading, setIsLoading] = useState(false);
  //TODO: Agregar mensaje de error si los hay.
  const [hasError, setErrors] = useState(false);

  const limit = 30;

  const api = `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=${limit}`;

  //hacer card
  const renderCards = ({ item }) => {
    return <Text>{item.name}</Text>;
  };

  const fetchData = async () => {
    setIsLoading(true);
    let response = await fetch(api);
    let request = await response.json();
    if (request.results) {
      setData([...data, ...request.results]);
    }
    setPage(page + limit);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onLoadMore = useCallback(() => {
    fetchData();
  });

  return (
    <View style={styles.container}>
      <Text style={styles.textSection}>Prédicas</Text>
      <Searchbar
        style={{ backgroundColor: "#C4C4C4", borderRadius: 50 }}
        placeholder="Buscar"
        onChangeText={onChangeSearch}
        value={searchQuery}
        inputStyle={{ fontFamily: "Roboto_300Light" }}
      />

      <FlatList
        style={styles.itemList}
        ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
        renderItem={renderCards}
        onEndReached={onLoadMore}
        data={data}
        onEndReachedThreshold={0.5}
        initialNumToRender={30}
        keyExtractor={(item, index) => item.name}
      />

      <TouchableOpacity style={styles.filterButton}>
        <MaterialCommunityIcons name="filter" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 12,
  },
  filterButton: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    bottom: 30,
    backgroundColor: "#694fad",
    borderRadius: 50,
  },
  textSection: {
    fontSize: 26,
    fontFamily: "Roboto_700Bold",
    marginBottom: 8,
  },
});

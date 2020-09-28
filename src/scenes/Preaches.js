import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import PreachesFilter from "../components/PreachesFilter";
import Filter from "../components/Filter";
import { Searchbar } from "react-native-paper";
import PreachCard from "../components/PreachCard";

export default function Preaches(props) {
  //filter values
  const [initialDateFilter, setInitialDateFilter] = useState(null);
  const [finalDateFilter, setFinalDateFilter] = useState(null);
  const [biblicalPassgeFilter, setBiblicalPassgeFilter] = useState(null);
  const [keyWordsFilter, setKeyWordsFilter] = useState(null);

  const [showFilter, setShowFilter] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  const renderFilterItem = () => {
    setShowFilter(true);
  };

  const updateFilterParams = (
    initialDate,
    finalDate,
    bblicalPssg,
    keyWords
  ) => {
    setInitialDateFilter(initialDate);
    setFinalDateFilter(finalDate);
    setBiblicalPassgeFilter(bblicalPssg);
    setKeyWordsFilter(keyWords);
  };

  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  //TODO: Agregar  ícono de cargando. 
  const [isLoading, setIsLoading] = useState(false);
  //TODO: Agregar mensaje de error si los hay.
  const [hasError, setErrors] = useState(false);

  const limit = 15;

  const api = `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=${limit}`;

  //hacer card
  const renderCards = ({ item }) => {
    return <PreachCard item={item} />;
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
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        renderItem={renderCards}
        onEndReached={onLoadMore}
        data={data}
        onEndReachedThreshold={0.5}
        initialNumToRender={30}
        keyExtractor={(item, index) => item.name}
      />
      <Filter
        showFilter={showFilter}
        renderFilterItem={renderFilterItem}
        hideFilterItem={setShowFilter}
        filterComponent={
          <PreachesFilter
            updateFilter={updateFilterParams}
            initialDate={initialDateFilter}
            finalDate={finalDateFilter}
            biblicalPassge={biblicalPassgeFilter}
            keyWords={keyWordsFilter}
            showAlert={setShowFilter}
          ></PreachesFilter>
        }
      ></Filter>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 12,
    paddingTop: 12,
  },
  textSection: {
    fontSize: 26,
    fontFamily: "Roboto_700Bold",
    marginBottom: 8,
  },
  itemList: {
    marginTop: 20,
  },
});

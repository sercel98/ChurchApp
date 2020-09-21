import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import BlogCard from "../components/BlogCard";
import { AppLoading } from "expo";
import BlogsFilter from "../components/BlogsFilter";
import Filter from "../components/Filter";

export default function Blog(props) {
  //filter values
  const [initialDateFilter, setInitialDateFilter] = useState(null);
  const [finalDateFilter, setFinalDateFilter] = useState(null);
  const [biblicalPassgeFilter, setBiblicalPassgeFilter] = useState(null);
  const [keyWordsFilter, setKeyWordsFilter] = useState(null);

  const [showFilter, setShowFilter] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [filteredData, setFilteredData] = useState([]);

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

  const limit = 30;

  const api = `https://pokeapi.co/api/v2/pokemon?offset=${page}&limit=${limit}`;

  const renderCards = ({ item }) => {
    return <BlogCard item={item} />;
  };

  const onChangeSearch = (query) => setSearchQuery(query);

  const fetchData = async () => {
    setIsLoading(true);
    let response = await fetch(api);
    let request = await response.json();

    if (request.results) {
      setData([...data, ...request.results]);
      setPage(page + limit);
    } else {
      setErrors(true);
    }
    setIsLoading(false);
    console.log("Rquest");
  };

  //1. Carga data inicial
  useEffect(() => {
    fetchData();
    console.log("use 1");
  }, []);

  //Como cambio data, me ejecuto
  useEffect(() => {
    console.log("use 2");

    setFilteredData(
      data.filter((item) => {
        return item.name.toLowerCase().includes(searchQuery.toLowerCase());
      })
    );
  }, [searchQuery, data]);

  const onLoadMore = useCallback(() => {
    console.log("use 3");

    fetchData();
  });

  if (isLoading) {
    return <AppLoading />;
  }

  if (hasError) {
    return <Text>We can't fetch right now </Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textSection}>Blogs</Text>

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
        data={filteredData}
        onEndReachedThreshold={0.5}
        initialNumToRender={30}
        keyExtractor={(item, index) => item.name}
      />
      <Filter
        showFilter={showFilter}
        renderFilterItem={renderFilterItem}
        hideFilterItem={setShowFilter}
        filterComponent={
          <BlogsFilter
            updateFilter={updateFilterParams}
            initialDate={initialDateFilter}
            finalDate={finalDateFilter}
            biblicalPassge={biblicalPassgeFilter}
            keyWords={keyWordsFilter}
            showAlert={setShowFilter}
          ></BlogsFilter>
        }
      ></Filter>
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
  itemList: {
    marginTop: 20,
  },
});

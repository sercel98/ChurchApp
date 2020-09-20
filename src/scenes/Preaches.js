import React, { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Filter from "../components/PreachesFilter";
import { Searchbar } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AwesomeAlert from "react-native-awesome-alerts";
import { render } from "react-dom";

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
    printInfo();
  };

  const printInfo = () => {
    console.log(
      initialDateFilter,
      finalDateFilter,
      biblicalPassgeFilter,
      keyWordsFilter
    );
  };

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
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
    );
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
      <AwesomeAlert
        show={showFilter}
        showProgress={false}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={false}
        cancelText="Cancelar"
        confirmText="Aplicar Filtros"
        confirmButtonColor="green"
        overlayStyle={styles.alertContainer}
        contentContainerStyle={styles.alertPopup}
        customView={
          <Filter
            updateFilter={updateFilterParams}
            initialDate={initialDateFilter}
            finalDate={finalDateFilter}
            biblicalPassge={biblicalPassgeFilter}
            keyWords={keyWordsFilter}
          ></Filter>
        }
        onCancelPressed={() => {
          setShowFilter(false);
        }}
        onConfirmPressed={() => {
          setShowFilter(false);
        }}
        onDismiss={() => {
          setShowFilter(false);
        }}
      />
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
      <TouchableOpacity
        style={styles.filterButton}
        onPress={() => renderFilterItem()}
      >
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
  alertContainer: {
    height: "100%",
    width: "100%",
  },
  alertPopup: {
    borderRadius: 15,
    width: "100%",
    justifyContent:"center",
  },
  alertButtonText: {
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
    lineHeight: 20,
  },
});

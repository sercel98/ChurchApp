import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import Filter from "../components/PreachesFilter";
import { Searchbar } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AwesomeAlert from "react-native-awesome-alerts";
import { render } from "react-dom";

export default function Preaches(props) {
  const [showFilter, setShowFilter] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  
  const renderFilterItem = () => {
    setShowFilter(true);
  };



  return (
    <View style={styles.container}>
      <AwesomeAlert
        show={showFilter}
        showProgress={false}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText="Cancelar"
        confirmText="Aplicar Filtros"
        confirmButtonColor="green"
        overlayStyle={styles.alertContainer}
        contentContainerStyle={styles.alertPopup}
        confirmButtonTextStyle={styles.alertButtonText}
        cancelButtonTextStyle={styles.alertButtonText}
        customView={<Filter></Filter>}
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
  },
  alertButtonText: {
    fontSize: 16,
    fontFamily: "Roboto_500Medium",
    lineHeight: 20,
  },
});

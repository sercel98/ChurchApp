import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import AwesomeAlert from "react-native-awesome-alerts";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Filter(props) {
  return (
    <View>
      <AwesomeAlert
        show={props.showFilter}
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
        customView={props.filterComponent}
        onDismiss={()=>{
            props.hideFilterItem(false);
        }}
      />
      <TouchableOpacity
        style={styles.filterButton}
        onPress={() => props.renderFilterItem()}
      >
        <MaterialCommunityIcons name="filter" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
  alertContainer: {
    height: "100%",
    width: "100%",
  },
  alertPopup: {
    borderRadius: 15,
    width: "100%",
    justifyContent: "center",
  },
});

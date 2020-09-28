import React from "react";
import {
  Image,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function Header(props) {
  const { navigation } = props;
  const route = useRoute();

  const goHome = () => {
    navigation.navigate("Home");
  };

  const goBack = () => navigation.goBack();

  return (
    <View style={styles.header}>
      <StatusBar barStyle="light-content" />
      {route.name !== "Tab" ? (
        <TouchableOpacity style={styles.goBackContainer} onPress={goBack}>
          <Ionicons
            name="ios-arrow-round-back"
            style={styles.goBackButton}
            size={30}
            color="black"
          />
        </TouchableOpacity>
      ) : (
        <View style={styles.emptyContainer}></View>
      )}
      <TouchableOpacity style={styles.homeIconContainer} onPress={goHome}>
        <Image
          style={styles.headerLogo}
          source={require("../../assets/images/imageHeader.png")}
        />
      </TouchableOpacity>
      <View style={styles.emptyContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    justifyContent: "space-between",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingVertical: 8,
  },
  headerLogo: {
    width: 45,
    height: 45,
    alignSelf: "center",
  },
  goBackContainer: {
    paddingTop: 12,
    width: 45,
    paddingLeft: 22,
  },
  homeIconContainer: {
    paddingTop: 8,
  },
  goBackButton: {
    alignSelf: "flex-start",
  },
  emptyContainer: {
    width: 45,
  },
});

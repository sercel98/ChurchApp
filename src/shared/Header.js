import React from "react";
import {
  Image,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

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

      {route.name === "Home" ? (
        <MaterialIcons
          name="keyboard-return"
          size={30}
          onPress={goBack}
          style={styles.headerIcon}
        />
      ) : null}
      <TouchableOpacity onPress={goHome}>
        <Image
          style={styles.headerLogo}
          source={require("../../assets/images/icon.png")}
        />
      </TouchableOpacity>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFF",
    paddingHorizontal: 22,
    paddingVertical: 15,
    height: 70,
  },
  headerLogo: {
    width: 50,
    height: 50,
  },
  headerIcon: {
    color: "#FFF",
    paddingTop: 2,
  },
  imageContainer: {
    height: "100%",
    overflow: "visible",
    justifyContent: "center",
    alignItems: "center",
  },
});

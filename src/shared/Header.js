import React from "react";
import {
  Image,
  StyleSheet,
  View,
  StatusBar,
  Text,
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
      <TouchableOpacity style={{paddingTop:12}}onPress={goHome}>
        <Image
          style={styles.headerLogo}
          source={require("../../assets/images/imageHeader.png")}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    justifyContent: "center",
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
  headerIcon: {
    color: "#000",
    position: "absolute",
  },
});

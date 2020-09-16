import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStackNavigation from "./src/navigations";
import { AppLoading } from "expo";
import * as Font from "expo-font";

export default function App() {
  const [loading, changeLoading] = useState(false);

  useEffect(async () => {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    changeLoading(true);
  });

  return loading ? (
    <AppLoading />
  ) : (
    <NavigationContainer>
      <AppStackNavigation />
    </NavigationContainer>
  );
}

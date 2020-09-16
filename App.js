import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStackNavigation from "./src/navigations";

export default function App() {
  return (
    <NavigationContainer>
      <AppStackNavigation />
    </NavigationContainer>
  );
}

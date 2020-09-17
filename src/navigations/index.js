import React from "react";
import Home from "../scenes/Home";
import News from "../scenes/News";
import Blog from "../scenes/Blog";
import Preaches from "../scenes/Preaches";
import Header from "../shared/Header";
import TabNavigator from "./tabNavigator";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createMaterialBottomTabNavigator();

const Stack = createStackNavigator();

export default function AppStackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Tab"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#000",
        },
        gestureEnabled: true,
        header: (props) => <Header {...props} />,
      }}
    >
      <Stack.Screen name="Tab" component={TabNavigator} />
    </Stack.Navigator>
  );
}

import React from "react";
import Home from "../scenes/Home";
import News from "../scenes/News";
import Blog from "../scenes/Blog";
import Preaches from "../scenes/Preaches";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

export default function AppStackNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#694fad" }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Preaches"
        component={Preaches}
        options={{
          tabBarLabel: "Preaches",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bible" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{
          tabBarLabel: "News",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="newspaper" size={21} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Blog"
        component={Blog}
        options={{
          tabBarLabel: "Blog",
          tabBarIcon: ({ color }) => (
            <AntDesign name="notification" size={22} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

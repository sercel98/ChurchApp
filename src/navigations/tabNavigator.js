import React from "react";
import Home from "../scenes/Home";
import News from "../scenes/News";
import Blog from "../scenes/Blog";
import Events from "../scenes/Events";
import Preaches from "../scenes/Preaches";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#694fad" }}
    >
      <Tab.Screen
        name="Preaches"
        component={Preaches}
        options={{
          tabBarLabel: "Prédicas",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bible" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{
          tabBarLabel: "Noticias",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="newspaper" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Blog"
        component={Blog}
        options={{
          tabBarLabel: "Blog",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="bookmark" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Events"
        component={Events}
        options={{
          tabBarLabel: "Eventos",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="event" size={26} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

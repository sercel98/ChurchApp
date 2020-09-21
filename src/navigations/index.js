import React from "react";
import Header from "../shared/Header";
import TabNavigator from "./tabNavigator";
import BlogDetail from "../scenes/BlogDetail";
import NewsArticleDetail from "../scenes/NewsArticleDetail";
import PreachDetail from "../scenes/PreachDetail";
import EventDetail from "../scenes/EventDetail";

import { createStackNavigator } from "@react-navigation/stack";

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
      <Stack.Screen name="BlogDetail" component={BlogDetail} />
      <Stack.Screen name="NewsArticleDetail" component={NewsArticleDetail} />
      <Stack.Screen name="PreachDetail" component={PreachDetail} />
      <Stack.Screen name="EventDetail" component={EventDetail} />
    </Stack.Navigator>
  );
}

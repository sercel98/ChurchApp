import React from "react";
import Header from "../shared/Header";
import TabNavigator from "./tabNavigator";
import BlogDetail from "../scenes/BlogDetail";
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
    </Stack.Navigator>
  );
}

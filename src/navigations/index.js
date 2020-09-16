import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../scenes/Home";
import HeaderComponent from "../shared/Header";

const Stack = createStackNavigator();

export default function AppStackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FFF",
        },
        gestureEnabled: true,
        header: (props) => <HeaderComponent {...props} />,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

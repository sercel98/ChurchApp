import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../scenes/Home";
import Header from "../shared/Header";

const Stack = createStackNavigator();

export default function AppStackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FFF",
        },
        gestureEnabled: true,
        header: (props) => <Header {...props} />,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

import React from "react";
import { Text, View, Button } from "react-native";
import tw from "tailwind-rn";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";

export default function App() {
  return (
    <NavigationContainer>
        <StackNavigator/>
        <Button title="Click Me" />
    </NavigationContainer>
  );
}

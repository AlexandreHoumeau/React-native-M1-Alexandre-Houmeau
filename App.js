import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <HomeScreen/>
    </NavigationContainer>
  );
}

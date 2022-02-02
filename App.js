import "react-native-gesture-handler";
import React from "react";
import RootStackScreen from "./screens/RootStackScreen";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default App;

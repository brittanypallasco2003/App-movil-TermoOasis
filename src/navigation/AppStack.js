import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import Perfil from "../views/Perfil";
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Perfil"
        component={TabNavigator}
        options={{
          title: "Perfil",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;


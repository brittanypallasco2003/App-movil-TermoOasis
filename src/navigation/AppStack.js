import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import PerfilPaciente from "../views/Perfil_Paciente";

const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PerfilPaciente"
        component={PerfilPaciente}
        options={{
          title: "PerfilPaciente",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;


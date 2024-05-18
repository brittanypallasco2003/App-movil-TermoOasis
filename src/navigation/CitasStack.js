//ESTA NAVEGACIÓN SE UTILIZARÁ EN CASO DE AÑADIR REGISTROS MÉDICOS, DE LA PANTALLA CITAS

//Citas STACK se la navegación que ocurrira solo en la pantalla citas del AppStack que es una navegación tab

//Citas STACK debe ser el componente que se añada 

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

const Stack = createNativeStackNavigator();
const CitasStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Citas"
        component={CalendarioCitas}
        options={{
          title: "Citas",
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default CitasStack;


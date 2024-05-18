//ESTA NAVEGACIÓN SE UTILIZARÁ EN CASO DE AÑADIR REGISTROS MÉDICOS, DE LA PANTALLA CITAS

//Citas STACK se la navegación que ocurrira solo en la pantalla citas del AppStack que es una navegación tab

//Citas STACK debe ser el componente que se añada

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React,{useContext} from "react";
import CalendarioCitas from "../views/CalendarioCitas";
import { screen } from "../utils";
import { AuthContext } from "../context/AuthContext";

const Stack = createNativeStackNavigator();

const CitasStack = () => {

  const { infoUsuariObtenida } = useContext(AuthContext);
  const { isDoctor } = infoUsuariObtenida;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screen.citas.pageName}
        component={CalendarioCitas}
        options={{
          title: "Citas",
          headerShown:isDoctor//si es doctor, el app bar se mostrará. Si es paciente se ocultará
        }}
      />
    </Stack.Navigator>
  );
};

export default CitasStack;

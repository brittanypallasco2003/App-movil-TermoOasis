//ESTA NAVEGACIÓN SE UTILIZARÁ EN CASO DE AÑADIR REGISTROS MÉDICOS, DE LA PANTALLA CITAS

//Citas STACK se la navegación que ocurrira solo en la pantalla citas del AppStack que es una navegación tab

//Citas STACK debe ser el componente que se añada

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React,{useContext, useEffect} from "react";
import CalendarioCitas from "../views/CalendarioCitas";
import { screen } from "../utils";
import { AuthContext } from "../context/AuthContext";
import SearchBarComp from "../components/SearchBarComp";
import { useTheme } from "react-native-paper";
import { CitasContext } from "../context/CitasContext";
const Stack = createNativeStackNavigator();

const CitasStack = () => {
  const theme = useTheme();
  const { infoUsuariObtenida,userToken } = useContext
  (AuthContext);
  const {obtenerCitas}=useContext(CitasContext)
  const { isDoctor } = infoUsuariObtenida;
  

  return (
    <Stack.Navigator
    initialRouteName={screen.citas.pageName}
    screenOptions={{
      headerTitleAlign:'center',
      headerStyle:{
        backgroundColor:theme.colors.secondary
      },
    }}>
      <Stack.Screen
        name={screen.citas.pageName}
        component={CalendarioCitas}
        options={{
          title: "Citas",
          headerShown:isDoctor,//si es doctor, el app bar se mostrará. Si es paciente se ocultará
          headerRight:()=><SearchBarComp/>
        }}
      />
    </Stack.Navigator>
  );
};

export default CitasStack;

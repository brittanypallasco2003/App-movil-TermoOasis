//ESTA NAVEGACIÓN SE UTILIZARÁ EN CASO DE AÑADIR REGISTROS MÉDICOS, DE LA PANTALLA CITAS

//Citas STACK se la navegación que ocurrira solo en la pantalla citas del AppStack que es una navegación tab

//Citas STACK debe ser el componente que se añada

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext, useEffect } from "react";
import CalendarioCitas from "../views/CalendarioCitas";
import { screen } from "../utils";
import { AuthContext } from "../context/AuthContext";
import SearchBarComp from "../components/SearchBarComp";
import { useTheme } from "react-native-paper";
import { scale, verticalScale } from "react-native-size-matters";
import { StyleSheet, Dimensions } from "react-native";
import Logo from "../components/Logo";
import BotonWhatsapp from "../components/BotonWhatsapp";
const { width } = Dimensions.get("window");
const isTablet = width >= 768;

const Stack = createNativeStackNavigator();


const CitasStack = () => {
  const theme = useTheme();
  const { infoUsuariObtenida } = useContext(AuthContext);
  const { isPaciente } = infoUsuariObtenida;


  return (
    <Stack.Navigator
      initialRouteName={screen.citas.pageName}
      screenOptions={{
        headerTitleAlign: 'left',
        headerStyle: {
          backgroundColor: theme.colors.secondary,
        },
        headerTitleStyle:{
          fontFamily:'Quicksand_700Bold',
          color:'#FFF',
          fontSize:isTablet? scale(14):scale(16)
        },
        
      }}
    >
      <Stack.Screen
        name={screen.citas.pageName}
        component={CalendarioCitas}
        options={{
          title: "",
          headerShown: isPaciente, //si es doctor, el app bar se mostrará. Si es paciente se ocultará
          headerLeft:() => <Logo/>,
          headerRight:()=><BotonWhatsapp/>,
          headerStyle:{
            backgroundColor: theme.colors.secondary,
          }
        }}
      /> 
    </Stack.Navigator>
  );
};

export default CitasStack;

//ESTA NAVEGACIÓN SE UTILIZARÁ EN CASO DE AÑADIR REGISTROS MÉDICOS, DE LA PANTALLA CITAS

//Citas STACK se la navegación que ocurrira solo en la pantalla citas del AppStack que es una navegación tab

//Citas STACK debe ser el componente que se añada

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext, useEffect } from "react";
import RegistrosMedicos from '../views/RegistrosMedicos'
import { screen } from "../utils";
import { AuthContext } from "../context/AuthContext";
import SearchBarComp from "../components/SearchBarComp";
import { useTheme } from "react-native-paper";
import { scale, verticalScale } from "react-native-size-matters";
import { StyleSheet, Dimensions } from "react-native";
import Logo from "../components/Logo";
import BotonWhatsapp from "../components/BotonWhatsapp";
import AppBarRegistros from "../components/AppBarRegistos";
import DetalleRegistro from "../views/DetalleRegistro";
const { width } = Dimensions.get("window");
const isTablet = width >= 768;

const Stack = createNativeStackNavigator();


const RegistrosStack = () => {
  const theme = useTheme();
  const { infoUsuariObtenida } = useContext(AuthContext);
  const { isPaciente } = infoUsuariObtenida;


  return (
    <Stack.Navigator
      initialRouteName={screen.registros.pageName}
      screenOptions={{
        header:(props)=><AppBarRegistros {...props}/>
      }}
    >
      <Stack.Screen
        name={screen.registros.pageName}
        component={RegistrosMedicos}
        options={{title:"Registros Médicos"}}
      />
      <Stack.Screen name={screen.registros.pageDetalle} component={DetalleRegistro}
      options={{title:"Detalle Registro"}}/>
    </Stack.Navigator>
  );
};

export default RegistrosStack;

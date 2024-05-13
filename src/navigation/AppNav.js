import React, { useContext } from "react";

import { NavigationContainer } from "@react-navigation/native";

import { AuthContext } from "../context/AuthContext";
import { ActivityIndicator } from "react-native-paper";
import { View } from "react-native";
import globalStyles from "../styles/global";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import PerfilPaciente from "../views/Perfil_Paciente";


const AppNav = () => {
  const { cargando, userToken } = useContext(AuthContext);

  if (cargando) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator animating={true} size={"large"} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {/* si se tiene un token (inicio sesión correcto) se mostraran el resto de páginas */}
      {userToken !== null ? <AppStack/>:<AuthStack/>}
    </NavigationContainer>
  );
};

export default AppNav;

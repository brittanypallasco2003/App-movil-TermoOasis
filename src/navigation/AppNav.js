import React, { useContext } from "react";

import { NavigationContainer } from "@react-navigation/native";

import { AuthContext } from "../context/AuthContext";
import { ActivityIndicator, useTheme } from "react-native-paper";
import { Image, View } from "react-native";
import globalStyles from "../styles/global";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import PerfilPaciente from "../views/Perfil_Paciente";


const AppNav = () => {
  const { cargando, userToken } = useContext(AuthContext);
  const theme = useTheme();

  if (cargando) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center",backgroundColor:theme.colors.background }}>
        <Image
          style={globalStyles.imageLoader}
          source={require("../../assets/logoTermo.png")}
        />
        <ActivityIndicator animating={true} size={65} />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {/* si se tiene un token (inicio sesión correcto) se mostraran el resto de páginas */}
      {userToken !==''? <AppStack/>:<AuthStack/>}
    </NavigationContainer>
  );
};

export default AppNav;

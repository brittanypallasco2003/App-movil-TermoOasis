import React, { useContext } from "react";

import { NavigationContainer } from "@react-navigation/native";

import { AuthContext } from "../context/AuthContext";
ActivityIndicatorComp;
import AuthStack from "./AuthStack";
import AppTabs from "./AppTabs";
import ActivityIndicatorComp from "../components/ActivityIndicatorComp";

const AppNav = () => {
  const { cargando, userToken } = useContext(AuthContext);
  if (cargando) {
    return <ActivityIndicatorComp />;
  }

  return (
    <NavigationContainer>
      {/* si se tiene un token (inicio sesión correcto) se mostraran el resto de páginas */}
      {userToken !== "" ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNav;

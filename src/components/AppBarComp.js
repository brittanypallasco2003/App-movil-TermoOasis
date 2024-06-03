import React, { useContext } from "react";
import { Appbar, useTheme } from "react-native-paper";
import TitleTermo from "./TitleTermo";
import { AuthContext } from "../context/AuthContext";
import { scale } from "react-native-size-matters";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");
const isTablet = width >= 768;
const AppBarComp = () => {
  const theme = useTheme();
  const { cerrarSesion, infoUsuariObtenida } = useContext(AuthContext);
  const {isDoctor}=infoUsuariObtenida
  return (
    <Appbar.Header
      style={{ backgroundColor: theme.colors.secondary }}
      //mode="center-aligned"
      elevated={true}
    >
      <Appbar.Content title={<TitleTermo />} />
      <Appbar.Action
        icon="logout"
        size={isTablet ? scale(15) : scale(20)}
        onPress={() => cerrarSesion()}
        //color={{}}
        accessibilityLabel="Cerrar Sesión"
        rippleColor={theme.colors.primary}
      />
    </Appbar.Header>
  );
};
export default AppBarComp;

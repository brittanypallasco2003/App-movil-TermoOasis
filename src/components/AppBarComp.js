import React, { useContext } from "react";
import { Appbar, useTheme } from "react-native-paper";
import TitleTermo from "./TitleTermo";
import { AuthContext } from "../context/AuthContext";

const AppBarComp = () => {
  const theme = useTheme();
  const { cerrarSesion } = useContext(AuthContext);
  return (
    <Appbar.Header
      style={{ backgroundColor: theme.colors.secondary }}
      //mode="center-aligned"
      elevated={true}
    >
      <Appbar.Content title={<TitleTermo />} />
      <Appbar.Action
        icon="logout"
        onPress={() => cerrarSesion()}
        //color={{}}
        accessibilityLabel="Cerrar Sesión"
        rippleColor={theme.colors.primary}
      />
    </Appbar.Header>
  );
};
export default AppBarComp;

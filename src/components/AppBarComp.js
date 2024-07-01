import React, { useContext } from "react";
import { Appbar, useTheme } from "react-native-paper";
import TitleTermo from "./TitleTermo";
import { AuthContext } from "../context/AuthContext";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Dimensions } from "react-native";
import globalStyles from "../styles/global";
const { width } = Dimensions.get("window");
const isTablet = width >= 768;
const AppBarComp = () => {
  const theme = useTheme();
  const { cerrarSesion, infoUsuariObtenida } = useContext(AuthContext);
  const { isDoctor } = infoUsuariObtenida;
  return (
    <Appbar.Header
      style={{
        backgroundColor: theme.colors.secondary,
        marginHorizontal: moderateScale(15),
        marginVertical: isTablet? verticalScale(5):moderateScale(2),
      }}
      elevated={true}
    >
      <Appbar.Content title={<TitleTermo />} />
      <Appbar.Action
        icon="logout"
        size={isTablet ? scale(15) : scale(20)}
        onPress={() => cerrarSesion()}
        accessibilityLabel="Cerrar Sesión"
        style={globalStyles.stLogoutBoton}
      />
    </Appbar.Header>
  );
};
export default AppBarComp;

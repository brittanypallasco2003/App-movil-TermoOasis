import React, { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { AuthContext } from "../context/AuthContext";
import globalStyles from "../styles/global";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBarComp from "../components/AppBarComp";
import AvatarUser from "../components/AvatarUser";
import { Headline, useTheme } from "react-native-paper";
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";

const Perfil = () => {
  const theme = useTheme();
  const { infoUsuariObtenida } = useContext(AuthContext);
  const { apellido, email, nombre, telefono, direccion } = infoUsuariObtenida;
  return (
    <>
      <AppBarComp />
      <SafeAreaView style={[globalStyles.contenedorPerfil]}>
        <AvatarUser />
        <Text style={[styles.titleDatos, {marginTop:verticalScale(20)}]}>Datos Personales</Text>
        <Text style={[styles.textosLabel, { color: theme.colors.secondary }]}>
          Nombre:
        </Text>
        <Text style={styles.textosInfo}>{nombre}</Text>
        <Text style={[styles.textosLabel, { color: theme.colors.secondary }]}>
          Apellido
        </Text>
        <Text style={styles.textosInfo}>{apellido}</Text>
        <Text style={[styles.textosLabel, { color: theme.colors.secondary }]}>
          Correo Electrónico:
        </Text>
        <Text style={styles.textosInfo}>{email}</Text>
        <Text style={[styles.textosLabel, { color: theme.colors.secondary }]}>
          Teléfono:
        </Text>
        <Text style={styles.textosInfo}>{`0${telefono}`}</Text>
        <Text style={[styles.textosLabel, { color: theme.colors.secondary }]}>
          Dirección:
        </Text>
        <Text style={[styles.textosInfo, {marginBottom:verticalScale(40)}]}>{direccion}</Text>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  titleDatos: {
    fontFamily: "LexendExa_700Bold",
    fontSize: scale(17),
  },
  textosLabel: {
    fontFamily: "LexendExa_700Bold",
    fontSize: scale(13.5),
    marginTop: verticalScale(18),
  },
  textosInfo: {
    fontFamily: "LexendExa_500Medium",
    fontSize: scale(10.5),
    marginTop: verticalScale(9),
  },
});

export default Perfil;

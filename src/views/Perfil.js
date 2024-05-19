import React, { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../context/AuthContext";
import globalStyles from "../styles/global";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBarComp from "../components/AppBarComp";
import AvatarUser from "../components/AvatarUser";
import { Headline, useTheme } from "react-native-paper";

const Perfil = () => {
  const theme = useTheme();
  const {infoUsuariObtenida } = useContext(AuthContext);
  const {apellido,email,nombre}=infoUsuariObtenida
  return (
    <>
      <AppBarComp />
      <SafeAreaView style={[
        globalStyles.contenedor,]}>
        <AvatarUser/>
        <Headline style={[styles.titleDatos,{marginTop:22}]}>
          Mis
        </Headline>
        <Headline style={styles.titleDatos}>
          Datos
        </Headline>
        <Headline style={styles.titleDatos}>
          Personales
        </Headline>
        <Text style={[styles.textosLabel,{color:theme.colors.secondary}]}>Nombre:</Text>
        <Text style={styles.textosInfo}>{nombre}</Text>
        <Text style={[styles.textosLabel,{color:theme.colors.secondary}]}>Apellido</Text>
        <Text style={styles.textosInfo}>{apellido}</Text>
        <Text style={[styles.textosLabel,{color:theme.colors.secondary}]}>Correo Electrónico:</Text>
        <Text style={styles.textosInfo}>{email}</Text>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  titleDatos: {
    fontFamily:'LexendExa_700Bold',
    fontSize:20,
  },
  textosLabel: {
    fontFamily: "LexendExa_700Bold",
    fontSize:15,
    marginTop:20
  },
  textosInfo:{
    fontFamily:"LexendExa_500Medium",
    fontSize:12,
    marginTop:10

  }
});

export default Perfil;

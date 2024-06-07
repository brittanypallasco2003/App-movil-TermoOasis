import React, { useContext } from "react";
import { Appbar, FAB, useTheme } from "react-native-paper";
import Logo from "./Logo";
import { AuthContext } from "../context/AuthContext";
import { scale } from "react-native-size-matters";
import { Dimensions, StyleSheet, View } from "react-native";
import BotonWhatsapp from "./BotonWhatsapp";
const { width } = Dimensions.get("window");

const isTablet = width >= 768;
const AppBarPaciente = () => {
  const theme = useTheme();
  return (
    <Appbar.Header
      style={{ backgroundColor: theme.colors.secondary }}
      elevated={true}
    >
    <View style={styles.container}>

      <Logo />
      <BotonWhatsapp/>
    </View>
    </Appbar.Header>
  );
};
const styles = StyleSheet.create({
    header: {
      backgroundColor: '#6200ee',
    },
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: scale(10)
    },
    logo: {
      marginLeft: scale(10),
    },
    botonWhatsapp: {
      marginRight: scale(10),
    },
  });
  
export default AppBarPaciente;

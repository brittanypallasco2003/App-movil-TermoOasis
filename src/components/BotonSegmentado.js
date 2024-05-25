import React, { useContext } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { SegmentedButtons, useTheme } from "react-native-paper";
import globalStyles from "../styles/global";
import { CitasContext } from "../context/CitasContext";

const BotonSegmentado = () => {
  const [value, setValue] = React.useState("");
  const theme = useTheme();
  const {
    obtenerCitasPendientes,
    obtenerCitasRealizadas,
    obtenerCitasCanceladas,
  } = useContext(CitasContext);
  return (
    <SegmentedButtons
      value={value}
      style={{ marginHorizontal: 20, marginVertical: 20 }}
      onValueChange={setValue}
      buttons={[
        {
          value: "Pendientes",
          label: "Pendientes",
          checkedColor: "#fff",
          labelStyle: globalStyles.buttonSeg,
          style: {
            borderColor: theme.colors.secondaryContainer,
            borderWidth: 1,
          },
          onPress: () => obtenerCitasPendientes(),
        },
        {
          value: "Realizadas",
          label: "Realizadas",
          checkedColor: "#fff",
          labelStyle: globalStyles.buttonSeg,
          style: {
            borderColor: theme.colors.secondaryContainer,
            borderWidth: 1,
          },
          onPress: () => obtenerCitasRealizadas(),
        },
        {
          value: "Canceladas",
          label: "Canceladas",
          checkedColor: "#fff",
          labelStyle: globalStyles.buttonSeg,
          style: {
            borderColor: theme.colors.secondaryContainer,
            borderWidth: 1,
          },
          onPress:() => obtenerCitasCanceladas(),
        },
      ]}
    />
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//   },
// });

export default BotonSegmentado;

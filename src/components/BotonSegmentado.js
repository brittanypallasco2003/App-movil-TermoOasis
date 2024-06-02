import React, { useContext } from "react";
import { SegmentedButtons, useTheme } from "react-native-paper";
import globalStyles from "../styles/global";
import { CitasContext } from "../context/CitasContext";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");
const isTablet = width >= 768;

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
      style={{
        marginHorizontal: moderateScale(25),
        marginVertical: verticalScale(20),
      }}
      onValueChange={setValue}
      buttons={[
        {
          value: "Pendientes",
          label: "Pendientes",
          checkedColor: "#fff",
          labelStyle: globalStyles.buttonSeg,
          //showSelectedCheck: true,
          style: {
            borderColor: theme.colors.secondaryContainer,
            borderWidth: moderateScale(1),
            paddingVertical: isTablet? moderateScale(5):moderateScale(2),

          },
          onPress: () => obtenerCitasPendientes(),
        },
        {
          value: "Realizadas",
          label: "Realizadas",
          checkedColor: "#fff",
          labelStyle: globalStyles.buttonSeg,
          //showSelectedCheck: true,
          style: {
            borderColor: theme.colors.secondaryContainer,
            borderWidth: moderateScale(1),
            paddingVertical: isTablet? moderateScale(5):moderateScale(2),
          },
          onPress: () => obtenerCitasRealizadas(),
        },
        {
          value: "Canceladas",
          label: "Canceladas",
          checkedColor: "#fff",
          //showSelectedCheck: true,
          labelStyle: globalStyles.buttonSeg,
          style: {
            borderColor: theme.colors.secondaryContainer,
            borderWidth: moderateScale(1),
            paddingVertical: isTablet? moderateScale(5):moderateScale(2),
          },
          onPress: () => obtenerCitasCanceladas(),
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

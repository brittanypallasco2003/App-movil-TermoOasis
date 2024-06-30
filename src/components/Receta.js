import { View, Text, Dimensions } from "react-native";
import React from "react";
import globalStyles from "../styles/global";
import { useTheme } from "react-native-paper";
import { moderateScale, scale } from "react-native-size-matters";
const { width } = Dimensions.get("window");
const isTablet = width >= 768;

const Receta = ({ item }) => {
  const { dosis, frecuencia, nombre } = item;
  const theme = useTheme();
  return (
    <View
      style={[
        globalStyles.contReceta,
        { borderColor: theme.colors.secondary },
      ]}
    >
      {/* <Text style={[globalStyles.titleDetalle, globalStyles.espacioDetalle]}>
        Receta
      </Text> */}
      <Text style={[globalStyles.labelDetalle, globalStyles.espacioDetalle]}>
        Medicamento Concentrado:{" "}<Text style={globalStyles.textoDetalle}>{nombre}</Text>
      </Text>
      <Text style={[globalStyles.labelDetalle, globalStyles.espacioDetalle]}>
        Frecuencia:{" "}
        <Text style={globalStyles.textoDetalle}>
          {frecuencia}
        </Text>
      </Text>

      <Text
        style={[
          globalStyles.labelDetalle,
          globalStyles.espacioDetalle,
        ]}
      >
        Dosis: <Text style={globalStyles.textoDetalle}>{dosis}</Text>
      </Text>
    </View>
  );
};

export default Receta;

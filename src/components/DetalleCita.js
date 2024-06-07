import { View, Text,Dimensions } from "react-native";
import React, { useContext } from "react";
import { Button, useTheme } from "react-native-paper";
import { formatearFecha, formatearFechaHora } from "../helpers";
import { AuthContext } from "../context/AuthContext";
import globalStyles from "../styles/global";
import { CitasContext } from "../context/CitasContext";
import AlertaCancelar from "./AlertaCancelar";
import { moderateScale } from "react-native-size-matters";
const { width } = Dimensions.get("window");
const isTablet = width >= 768;

const DetalleCita = ({ item }) => {
  const {
    apellidoDoctor,
    apellidoPaciente,
    emailPaciente,
    nombreDoctor,
    end,
    isCancel,
    nombrePaciente,
    start,
    idCita,
  } = item;
  const { infoUsuariObtenida } = useContext(AuthContext);
  const { setmostrarAlertaCancelar, setIdCitaCancelar } =
    useContext(CitasContext);

  const handleCancel = () => {
    setIdCitaCancelar(idCita);
    setmostrarAlertaCancelar(true);
  };

  const { isDoctor, isPaciente } = infoUsuariObtenida;
  const fechaHoy = new Date();
  const fechaCita = new Date(start);

  const theme = useTheme();
  return (
    <View
      style={[
        globalStyles.contDetalleCita,
        { borderColor: theme.colors.primaryContainer },
      ]}
    >
      <Text style={[globalStyles.titleDetalle, globalStyles.espacioDetalle]}>
        Información de la cita
      </Text>
      <Text style={[globalStyles.labelDetalle, globalStyles.espacioDetalle]}>
        Fecha:{" "}
        <Text style={globalStyles.textoDetalle}>{formatearFecha(start)}</Text>
      </Text>
      <Text style={[globalStyles.labelDetalle, globalStyles.espacioDetalle]}>
        Hora:{" "}
        <Text style={globalStyles.textoDetalle}>
          {`${formatearFechaHora(start)} - ${formatearFechaHora(end)}`}
        </Text>
      </Text>
      <View style={{width:isTablet?moderateScale(360):moderateScale(290)}}>
        <Text style={[globalStyles.labelDetalle, globalStyles.espacioDetalle]}>
          Lugar:{" "}
          <Text style={globalStyles.textoDetalle}>
            detrás del Estadio del Aucas, Apuela S28-180 Y, Quito 170606
          </Text>
        </Text>
      </View>
      {isPaciente && (
        <Text style={[globalStyles.labelDetalle, globalStyles.espacioDetalle]}>
          Doctor:{" "}
          <Text
            style={globalStyles.textoDetalle}
          >{`${nombreDoctor} ${apellidoDoctor}`}</Text>
        </Text>
      )}
      {isDoctor && (
        <Text style={[globalStyles.labelDetalle, globalStyles.espacioDetalle]}>
          Paciente:{" "}
          <Text
            style={globalStyles.textoDetalle}
          >{`${nombrePaciente} ${apellidoPaciente}`}</Text>
        </Text>
      )}
      {isDoctor && (
        <Text style={[globalStyles.labelDetalle, globalStyles.espacioDetalle]}>
          Correo electrónico:{" "}
          <Text style={globalStyles.textoDetalle}>{`${emailPaciente}`}</Text>
        </Text>
      )}
      {fechaCita > fechaHoy && isPaciente && isCancel === false && (
        <Button
          mode="elevated"
          contentStyle={globalStyles.contentBotonCancelar}
          labelStyle={globalStyles.LabelbotonCancelar}
          style={[globalStyles.botonCancelar]}
          buttonColor={theme.colors.primary}
          textColor="#fff"
          onPress={() => handleCancel()}
        >
          Cancelar Cita
        </Button>
      )}
      <AlertaCancelar />
    </View>
  );
};

export default DetalleCita;

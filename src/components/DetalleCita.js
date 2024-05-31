import { View, Text } from "react-native";
import React, { useContext } from "react";
import { Button, Card, Headline, useTheme } from "react-native-paper";
import { formatearFecha, formatearFechaHora } from "../helpers";
import { AuthContext } from "../context/AuthContext";
import globalStyles from "../styles/global";
import { CitasContext } from "../context/CitasContext";

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
  const {cancelarCita,loadBotonCancel} = useContext(CitasContext)

  
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
      <Headline
        style={[globalStyles.titleDetalle, globalStyles.espacioDetalle]}
      >
        Información de la cita
      </Headline>
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
      <Text style={[globalStyles.labelDetalle, globalStyles.espacioDetalle]}>
        Lugar:{" "}
        <Text style={globalStyles.textoDetalle}>
          detrás del Estadio del Aucas, Apuela S28-180 Y, Quito 170606
        </Text>
      </Text>
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
      {fechaCita > fechaHoy && isPaciente && isCancel===false && (
        <Button
          mode="contained"
          labelStyle={{ fontFamily: "Quicksand_600SemiBold", fontSize: 13 }}
          style={[globalStyles.botonCancelar]}
          onPress={() => cancelarCita(idCita)}
          loading={loadBotonCancel}
        >
          Cancelar Cita
        </Button>
      )}
    </View>
  );
};

export default DetalleCita;

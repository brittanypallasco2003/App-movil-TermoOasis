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
    nombrePaciente,
    start,
  } = item;
  const { infoUsuariObtenida } = useContext(AuthContext);

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
      <Headline style={globalStyles.titleDetalle}>
        Información de la cita
      </Headline>
      <Text style={globalStyles.labelDetalle}>
        Fecha:{" "}
        <Text style={globalStyles.textoDetalle}>{formatearFecha(start)}</Text>
      </Text>
      <Text style={globalStyles.labelDetalle}>
        Hora:{" "}
        <Text style={globalStyles.textoDetalle}>
          {formatearFechaHora(start)}
        </Text>
      </Text>
      <Text style={globalStyles.labelDetalle}>
        Lugar:{" "}
        <Text style={globalStyles.textoDetalle}>
          detrás del Estadio del Aucas, Apuela S28-180 Y, Quito 170606
        </Text>
      </Text>
      {isPaciente && (
        <Text style={globalStyles.labelDetalle}>
          Doctor:{" "}
          <Text
            style={globalStyles.textoDetalle}
          >{`${nombreDoctor} ${apellidoDoctor}`}</Text>
        </Text>
      )}
          {isDoctor && (
            <Text style={globalStyles.labelDetalle}>
              Correo electrónico
              <Text style={globalStyles.textoDetalle}>{`${emailPaciente}`}</Text>
            </Text>
          )}
      {isDoctor && (
        <Text style={globalStyles.labelDetalle}>
          Paciente:{" "}
          <Text
            style={globalStyles.textoDetalle}
          >{`${nombrePaciente} ${apellidoPaciente}`}</Text>
        </Text>
      )}
      {fechaCita > fechaHoy && isPaciente && (
        <Button
          mode="contained"
          labelStyle={{ fontFamily: "Quicksand_600SemiBold" }}
        >
          Cancelar Cita
        </Button>
      )}
    </View>
  );
};

export default DetalleCita;

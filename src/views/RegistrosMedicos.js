import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "../styles/global";
import { CitasContext } from "../context/CitasContext";
import { useRoute, useNavigation } from "@react-navigation/native";
import CargandoDatosComp from "../components/CargandoDatosComp";

const RegistrosMedicos = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { idCita, nombrePaciente, apellidoPaciente } = route.params;
  const { detalleRegistro, cargandoRegistro } = useContext(CitasContext);
  const { actividad, comments, cuidados, dieta, informacionMedica } =
    detalleRegistro;
  console.log("este esl detalle registro", detalleRegistro);

  return (
    <SafeAreaView>
      {cargandoRegistro ? (
        <CargandoDatosComp />
      ) : (
        <>
          <Text
            style={[globalStyles.labelDetalle, globalStyles.espacioDetalle]}
          >
            Nombre del Paciente:{" "}
            <Text
              style={globalStyles.textoDetalle}
            >{`${nombrePaciente} ${apellidoPaciente}`}</Text>
          </Text>
          <Text
            style={[globalStyles.labelDetalle, globalStyles.espacioDetalle]}
          >
            Actividad a realizar:{" "}
            <Text style={globalStyles.textoDetalle}>{actividad}</Text>
          </Text>
          <Text
            style={[globalStyles.labelDetalle, globalStyles.espacioDetalle]}
          >
            Comentarios:{" "}
            <Text style={globalStyles.textoDetalle}>{comments}</Text>
          </Text>
          <Text
            style={[globalStyles.labelDetalle, globalStyles.espacioDetalle]}
          >
            Cuidados: <Text style={globalStyles.textoDetalle}>{cuidados}</Text>
          </Text>
          <Text
            style={[globalStyles.labelDetalle, globalStyles.espacioDetalle]}
          >
            Dieta prescrita:{" "}
            <Text style={globalStyles.textoDetalle}>{dieta}</Text>
          </Text>
          <Text
            style={[globalStyles.labelDetalle, globalStyles.espacioDetalle]}
          >
            Información Medica:
          </Text>
          <Text
            style={[globalStyles.labelDetalle, globalStyles.espacioDetalle]}
          >
            Altura:{" "}
            <Text
              style={globalStyles.textoDetalle}
            >{`${informacionMedica?.altura} cm`}</Text>
          </Text>
          <Text
            style={[globalStyles.labelDetalle, globalStyles.espacioDetalle]}
          >
            Peso:{" "}
            <Text
              style={globalStyles.textoDetalle}
            >{`${informacionMedica?.peso} kg`}</Text>
          </Text>
          <Text
            style={[globalStyles.labelDetalle, globalStyles.espacioDetalle]}
          >
            Receta prescrita:
          </Text>
        </>
      )}
    </SafeAreaView>
  );
};

export default RegistrosMedicos;

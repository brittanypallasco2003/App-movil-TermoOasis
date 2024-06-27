import { View, Text, ScrollView, FlatList } from "react-native";
import React, { useContext, useDebugValue, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { RegistrosContext } from "../context/RegistrosContext";
import LoadCalendarioCitas from "../components/LoadCalendarioCitas";
import globalStyles from "../styles/global";
import ListadoPacientesRegistro from "../components/ListadoPacientesRegistro";
import { moderateScale } from "react-native-size-matters";

const RegistrosMedicos = () => {
  const {
    cargandoRegistros,
    pacientesconRegistro,
    mostrarPacientesconRegistros,
  } = useContext(RegistrosContext);

  useEffect(() => {
    mostrarPacientesconRegistros();
  }, []);

  return (
    <>
      <SafeAreaView>
        {cargandoRegistros ? (
          <LoadCalendarioCitas />
        ) : (
          <FlatList
            style={{marginHorizontal: moderateScale(25),}}
            data={pacientesconRegistro}
            renderItem={({ item }) => {
              return <ListadoPacientesRegistro item={item} />;
            }}
            keyExtractor={(item) => item.idPaciente}
            showsVerticalScrollIndicator={false}
          />
        )}
      </SafeAreaView>
    </>
  );
};

export default RegistrosMedicos;

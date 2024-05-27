import { View, Text, FlatList, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Headline, useTheme } from "react-native-paper";
import BotonSegmentado from "../components/BotonSegmentado";
import globalStyles from "../styles/global";
import Calendario from "../components/Calendario";
import { CitasContext } from "../context/CitasContext";
import LoadingCalendar from "../components/LoadingCalendar";
import Alerta from "../components/Alerta";
import DetalleCita from "../components/DetalleCita";
const CalendarioCitas = () => {
  const theme = useTheme();
  const {
    citasRealizadas,
    citasPendientes,
    citasCanceladas,
    markDates,
    tipoCita,
    detallesCitas,
  } = useContext(CitasContext);

  return (
    <SafeAreaView style={globalStyles.contenedorCitas}>
      <Headline style={globalStyles.tituloCitas}>Calendario de Citas</Headline>
      {Object.keys(markDates).length === 0 &&
        citasRealizadas.length === 0 &&
        citasPendientes.length === 0 &&
        citasCanceladas.length === 0 &&
        tipoCita === "" && (
          <Headline
            style={[globalStyles.msgUser, { color: theme.colors.primary }]}
          >
            Debes primero seleccionar el tipo de citas que quieras visualizar
          </Headline>
        )}

      {citasCanceladas.length === 0 &&
        Object.keys(markDates).length === 0 &&
        tipoCita === "Canceladas" && (
          <Headline
            style={[globalStyles.msgUser, { color: theme.colors.primary }]}
          >
            No existen citas Canceladas que mostrar
          </Headline>
        )}
      {citasRealizadas.length === 0 &&
        Object.keys(markDates).length === 0 &&
        tipoCita === "Realizadas" && (
          <Headline
            style={[globalStyles.msgUser, { color: theme.colors.primary }]}
          >
            No existen citas Realizadas que mostrar
          </Headline>
        )}
      {citasPendientes.length === 0 &&
        Object.keys(markDates).length === 0 &&
        tipoCita === "Pendientes" && (
          <Headline
            style={[globalStyles.msgUser, { color: theme.colors.primary }]}
          >
            No existen citas Pendientes que mostrar
          </Headline>
        )}

      <BotonSegmentado />
      <Calendario markedDates={markDates} />
      {detallesCitas.length == 0 && Object.keys(markDates).length > 0 && (
        <Headline style={globalStyles.msgUser}>
          Selecciona alguna de las fechas marcadas para ver tus citas
          programadas de ese día
        </Headline>
      )}
      <FlatList
        data={detallesCitas}
        keyExtractor={(item) => {
          item.idCita.toString();
        }}
        renderItem={({ item }) => {
          return (
            <ScrollView horizontal>
              <DetalleCita item={item} />
            </ScrollView>
          );
        }}
      />
      <Alerta />
    </SafeAreaView>
  );
};

export default CalendarioCitas;

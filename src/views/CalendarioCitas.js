import { View, Text, FlatList } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Headline } from "react-native-paper";
import BotonSegmentado from "../components/BotonSegmentado";
import globalStyles from "../styles/global";
import Calendario from "../components/Calendario";
import { CitasContext } from "../context/CitasContext";
import LoadingCalendar from "../components/LoadingCalendar";

const CalendarioCitas = () => {
  const { obtenerCitas, citasState } = useContext(CitasContext);

  return (
    <SafeAreaView style={globalStyles.contenedorCitas}>
      <Headline style={globalStyles.tituloCitas}>Calendario de Citas</Headline>
      <BotonSegmentado />
      <Calendario />
{/*  */}
    </SafeAreaView>
  );
};

export default CalendarioCitas;

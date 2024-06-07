import { FlatList, ScrollView, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import BotonSegmentado from "../components/BotonSegmentado";
import globalStyles from "../styles/global";
import Calendario from "../components/Calendario";
import { CitasContext } from "../context/CitasContext";
import LoadingCalendar from "../components/LoadingCalendar";
import Alerta from "../components/Alerta";
import DetalleCita from "../components/DetalleCita";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { useNavigation } from "@react-navigation/native";
import AppBarPBuscador from "../components/AppBarPBuscador";
import ListaPacientes from "../components/ListaPacientes";
import { verticalScale } from "react-native-size-matters";
import { AuthContext } from "../context/AuthContext";
const CalendarioCitas = () => {
  const theme = useTheme();
  const {
    citasRealizadas,
    citasPendientes,
    citasCanceladas,
    markDates,
    tipoCita,
    detallesCitas,
    loadDetalle,
    searchResults,
  } = useContext(CitasContext);
  const { infoUsuariObtenida } = useContext(AuthContext);
  const { isDoctor } = infoUsuariObtenida;

  // const navigation =useNavigation()
  // useEffect(() => {
  //   navigation.setOptions({
  //     headerLargeTitle:true,
  //     headerTitle:'Citas Paciente',
  //     headerTitleStyle:{fontFamily:'Quicksand_600SemiBold'},
  //     headerSearchBarOptions:{
  //       placeholder:'Paciente...'
  //     }

  //   })
  // }, [navigation])

  return (
    <>
      {isDoctor && <AppBarPBuscador />}
        {searchResults.length > 0 && (
          <FlatList
            style={globalStyles.flatlistPacientes}
            data={searchResults}
            renderItem={({ item }) => {
              return <ListaPacientes item={item} />;
            }}
            keyExtractor={(item) => item.idPaciente}
          />
        )}
      <SafeAreaView style={globalStyles.contenedorCitas}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: "flex-start" }}
        >
          <Text style={globalStyles.tituloCitas}>Calendario de Citas</Text>
          {Object.keys(markDates).length === 0 &&
            citasRealizadas.length === 0 &&
            citasPendientes.length === 0 &&
            citasCanceladas.length === 0 &&
            tipoCita === "" && (
              <Text
                style={[globalStyles.msgUser, { color: theme.colors.primary }]}
              >
                Debes primero seleccionar el tipo de citas que quieras
                visualizar
              </Text>
            )}

          {citasCanceladas.length === 0 &&
            Object.keys(markDates).length === 0 &&
            tipoCita === "Canceladas" && (
              <Text
                style={[globalStyles.msgUser, { color: theme.colors.primary }]}
              >
                No existen citas Canceladas que mostrar
              </Text>
            )}
          {citasRealizadas.length === 0 &&
            Object.keys(markDates).length === 0 &&
            tipoCita === "Realizadas" && (
              <Text
                style={[globalStyles.msgUser, { color: theme.colors.primary }]}
              >
                No existen citas Realizadas que mostrar
              </Text>
            )}
          {citasPendientes.length === 0 &&
            Object.keys(markDates).length === 0 &&
            tipoCita === "Pendientes" && (
              <Text
                style={[globalStyles.msgUser, { color: theme.colors.primary }]}
              >
                No existen citas Pendientes que mostrar
              </Text>
            )}

          <BotonSegmentado />
          <Calendario markedDates={markDates} />
          {loadDetalle ? (
            <LoadingCalendar />
          ) : (
            detallesCitas.length == 0 &&
            Object.keys(markDates).length > 0 && (
              <Text
                style={[globalStyles.msgUser, { marginTop: verticalScale(10) }]}
              >
                Selecciona alguna de las fechas marcadas para ver tus citas
                programadas de ese día
              </Text>
            )
          )}
          {/* 
          {/* <SwiperFlatList
          showPagination
          data={detallesCitas}
          keyExtractor={(item) => item.idCita.toString()}
          renderItem={({ item }) => (
            <View style={{ width: 350, paddingHorizontal: 10, flex:1, justifyContent:'center', alignItems:'center' }}>
              <DetalleCita item={item} />
            </View>
          )}
        /> */}
          <View style={{ alignItems: "center" }}>
            <SwiperFlatList
              showPagination
              paginationStyle={globalStyles.paginationStyle}
              paginationStyleItem={globalStyles.paginationDot}
              paginationActiveColor={
                globalStyles.paginationDotActive.backgroundColor
              }
              data={detallesCitas}
              keyExtractor={(item) => item.idCita.toString()}
              renderItem={({ item }) => <DetalleCita item={item} />}
            />
          </View>

          <Alerta />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default CalendarioCitas;

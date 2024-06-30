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
import AppBarPBuscador from "../components/AppBarPBuscador";
import ListaPacientes from "../components/ListaPacientes";
import { verticalScale } from "react-native-size-matters";
import { AuthContext } from "../context/AuthContext";
import CargandoDatosComp from "../components/CargandoDatosComp";

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
    loadingCalendar,
    searchResults,
    searchVisible
  } = useContext(CitasContext);
  const { infoUsuariObtenida } = useContext(AuthContext);
  const { isDoctor } = infoUsuariObtenida;


  return (
    <>
      {searchResults.length > 0 && (
        <View>
          <FlatList
            style={globalStyles.flatlistPacientes}
            data={searchResults}
            renderItem={({ item }) => {
              return <ListaPacientes item={item} />;
            }}
            keyExtractor={(item) => item.idPaciente}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
      {searchResults.length===0 && searchVisible && tipoCita.length>0 &&(
        <View style={globalStyles.resultado}>
        <Text style={globalStyles.resultadosTextos}>No se encontraron resultados</Text>
      </View>
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
            tipoCita === "" && loadingCalendar===false &&(
              <Text
                style={[globalStyles.msgUser, { color: theme.colors.primary, marginTop:verticalScale(10) }]}
              >
                Debes primero seleccionar el tipo de citas que quieras
                visualizar
              </Text>
            )}

          {citasCanceladas.length === 0 &&
            Object.keys(markDates).length === 0 &&
            tipoCita === "Canceladas" && loadingCalendar===false && (
              <Text
                style={[globalStyles.msgUser, { color: theme.colors.primary }]}
              >
                No existen citas Canceladas que mostrar
              </Text>
            )}
          {citasRealizadas.length === 0 &&
            Object.keys(markDates).length === 0 &&
            tipoCita === "Realizadas" && loadingCalendar===false &&(
              <Text
                style={[globalStyles.msgUser, { color: theme.colors.primary,marginTop:verticalScale(10) }]}
              >
                No existen citas Realizadas que mostrar
              </Text>
            )}
          {citasPendientes.length === 0 &&
            Object.keys(markDates).length === 0 &&
            tipoCita === "Pendientes" && loadingCalendar===false &&(
              <Text
                style={[globalStyles.msgUser, { color: theme.colors.primary, marginTop:verticalScale(10) }]}
              >
                No existen citas Pendientes que mostrar
              </Text>
            )}

          <BotonSegmentado />
          {loadingCalendar &&
            (<CargandoDatosComp/>)
          }
          <Calendario markedDates={markDates} />

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
          <View style={globalStyles.contPrincipalDetalle}>
            {loadDetalle ? (
              <LoadingCalendar />
            ) : (
              detallesCitas.length == 0 &&
              Object.keys(markDates).length > 0 && (
                <Text style={[globalStyles.msgUser]}>
                  Selecciona alguna de las fechas marcadas para ver tus citas
                  programadas de ese día
                </Text>
              )
            )}
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

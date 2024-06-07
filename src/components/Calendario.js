import React, { useState, useContext, useEffect } from "react";
import {
  scale,
  verticalScale
} from "react-native-size-matters";
import { Calendar, LocaleConfig } from "react-native-calendars";
import globalStyles from "../styles/global";
import { Icon, IconButton, useTheme } from "react-native-paper";
import { CitasContext } from "../context/CitasContext";
import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");
const isTablet = width >= 768;
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Quicksand_700Bold } from "@expo-google-fonts/quicksand";
LocaleConfig.locales["es"] = {
  monthNames: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  monthNamesShort: [
    "Ene.",
    "Feb.",
    "Mar.",
    "Abr.",
    "May.",
    "Jun.",
    "Jul.",
    "Ago.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dic.",
  ],
  dayNames: [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ],
  dayNamesShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
  today: "Hoy",
};

LocaleConfig.defaultLocale = "es";

const Calendario = ({ markedDates }) => {
  const { loadingCalendar, obtenerCitasFecha } = useContext(CitasContext);
  const [deshabilitarFlechaD, setdeshabilitarFlechaD] = useState(false);
  const [deshabilitarFlechaI, setdeshabilitarFlechaI] = useState(false);

  const ObtenerfechaInicio = () => {
    const fechahoy = new Date();
    return new Date(
      fechahoy.getFullYear(),
      fechahoy.getMonth() - 6,
      fechahoy.getDate()
    );
  };

  let fechaInicio = ObtenerfechaInicio();

  const ObtenerfechaFinal = () => {
    const fechahoy = new Date();
    return new Date(
      fechahoy.getFullYear(),
      fechahoy.getMonth() + 6,
      fechahoy.getDate()
    );
  };

  let fechaFinal = ObtenerfechaFinal();

  console.log("fechas marcadas jjj", markedDates);

  const theme = useTheme();

  return (
    <Calendar
      style={[
        globalStyles.calendarStyles,
        { borderColor: theme.colors.secondary },
      ]}
      minDate={fechaInicio.toISOString()}
      maxDate={fechaFinal.toISOString()}
      markingType={"multi-dot"}
      displayLoadingIndicator={loadingCalendar}
      markedDates={markedDates}
      renderArrow={(direction) => (
        <MaterialCommunityIcons
          name={direction === 'left' ? 'arrow-left-drop-circle' : 'arrow-right-drop-circle'}
          size={isTablet?scale(13):scale(18)} 
          color={theme.colors.secondary} 
        />
      )}
      theme={{
        backgroundColor: 'blue',
        monthTextColor: theme.colors.secondary,
        selectedDayBackgroundColor: theme.colors.secondary,
        arrowColor: theme.colors.secondary,
        textDayFontFamily: "Quicksand_600SemiBold",
        textMonthFontFamily: "Quicksand_600SemiBold",
        textDayHeaderFontFamily: "Quicksand_700Bold",
        textDayFontSize: isTablet? scale(9):scale(12),
        textMonthFontSize:isTablet? scale(10):scale(12),
        textDayHeaderFontSize: isTablet? scale(9):scale(12),
        todayTextColor: theme.colors.secondary,
      }}
      onDayPress={(day) => {
        obtenerCitasFecha(day.dateString);
      }}
      onMonthChange={(month) => {
        fechaInicio.toISOString().split("T")[0] === month.dateString
          ? setdeshabilitarFlechaI(true)
          : setdeshabilitarFlechaI(false);
        fechaFinal.toISOString().split("T")[0] === month.dateString
          ? setdeshabilitarFlechaD(true)
          : setdeshabilitarFlechaD(false);
      }}
      disableArrowLeft={deshabilitarFlechaI}
      disableArrowRight={deshabilitarFlechaD}
    />
  );
};

export default Calendario;

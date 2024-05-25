import React, { useState, useContext, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import globalStyles from "../styles/global";
import { useTheme } from "react-native-paper";
import { CitasContext } from "../context/CitasContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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

const Calendario = () => {
  const { loadingCalendar, citasState, markedDates, obtenerCitasFecha } =
    useContext(CitasContext);

  console.log("fechas marcadas", markedDates);

  const theme = useTheme();

  return (
    <Calendar
      style={[
        globalStyles.calendarStyles,
        { borderColor: theme.colors.secondary },
      ]}
      markingType={"multi-dot"}
      displayLoadingIndicator={loadingCalendar}
      markedDates={markedDates}
      enableSwipeMonths={true}
      theme={{
        monthTextColor: theme.colors.secondary,
        selectedDayBackgroundColor: theme.colors.secondary,
        arrowColor: theme.colors.secondary,
        textDayFontFamily: "Quicksand_600SemiBold",
        textMonthFontFamily: "Quicksand_600SemiBold",
        textDayHeaderFontFamily: "Quicksand_600SemiBold",
        textDayFontSize: 14,
        textMonthFontSize: 14,
        textDayHeaderFontSize: 14,
        todayTextColor: theme.colors.secondary,
      }}
      onDayPress={(day) => {
        obtenerCitasFecha(day.dateString);
      }}
    />
  );
};

export default Calendario;

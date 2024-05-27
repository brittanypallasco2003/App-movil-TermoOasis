import React, { useContext } from "react";
import { ActivityIndicator, useTheme } from "react-native-paper";
import { CitasContext } from "../context/CitasContext";

const LoadingCalendar = () => {
  return <ActivityIndicator animating={true} size={65} style={{marginTop:50}}/>;
};

export default LoadingCalendar;

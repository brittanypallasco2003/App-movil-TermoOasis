import React, { useContext } from "react";
import { ActivityIndicator, useTheme } from "react-native-paper";
import { CitasContext } from "../context/CitasContext";
import { scale } from "react-native-size-matters";

const LoadingCalendar = () => {
  return <ActivityIndicator animating={true} size={scale(60)} style={{marginTop:50}}/>;
};

export default LoadingCalendar;

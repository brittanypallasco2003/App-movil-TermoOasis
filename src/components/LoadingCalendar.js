import React, { useContext } from "react";
import { ActivityIndicator, useTheme } from "react-native-paper";
import { scale, verticalScale } from "react-native-size-matters";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

const LoadingCalendar = () => {
  const isTablet = width >= 768;
  return (
    <ActivityIndicator
      animating={true}
      size={isTablet ? scale(50) : scale(60)}
      style={{marginTop: isTablet? verticalScale(40):verticalScale(25)}}
    />
  );
};

export default LoadingCalendar;

import React from "react";
import { ActivityIndicator, useTheme } from "react-native-paper";
import { Image, View } from "react-native";
import globalStyles from "../styles/global";
import {
  scale,
} from "react-native-size-matters";
const ActivityIndicatorComp = () => {
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3F8483",
      }}
    >
      <Image
        style={globalStyles.imageLoader}
        source={require("../../assets/logoTermo.png")}
      />
      <ActivityIndicator animating={true} size={scale(60)} color="#F27F1B" />
    </View>
  );
};

export default ActivityIndicatorComp;

import React from "react";
import { ActivityIndicator, useTheme } from "react-native-paper";
import { Image, View } from "react-native";
import globalStyles from "../styles/global";

const ActivityIndicatorComp = () => {
  const theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.background,
      }}
    >
      <Image
        style={globalStyles.imageLoader}
        source={require("../../assets/logoTermo.png")}
      />
      <ActivityIndicator animating={true} size={65} />
    </View>
  );
};

export default ActivityIndicatorComp;

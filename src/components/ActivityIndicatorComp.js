import React from "react";
import { ActivityIndicator } from "react-native-paper";
import { Image, View } from "react-native";
import globalStyles from "../styles/global";
import { scale } from "react-native-size-matters";
import { SafeAreaView } from "react-native-safe-area-context";
const ActivityIndicatorComp = () => {
  return (
    <SafeAreaView style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#3F8483",
    }}>
      <View>
        <Image
          style={globalStyles.imageLoader}
          source={require("../../assets/logoTermo.png")}
        />
        <ActivityIndicator animating={true} size={scale(60)} color="#F27F1B" />
      </View>
    </SafeAreaView>
  );
};

export default ActivityIndicatorComp;

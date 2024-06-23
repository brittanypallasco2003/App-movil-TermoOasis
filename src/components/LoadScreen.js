import { View, Text, Image } from "react-native";
import React from "react";
import globalStyles from "../styles/global";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale } from "react-native-size-matters";


const LoadScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3F8483",
      }}
    >
      <View>
        <Image
          style={globalStyles.imageLoader}
          source={require("../../assets/logoTermo.png")}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoadScreen;

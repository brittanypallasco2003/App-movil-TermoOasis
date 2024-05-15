import React from "react";

import {
  PaperProvider,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";

import { AuthProvider } from "./src/context/AuthContext";
import AppNav from "./src/navigation/AppNav";

import {
  useFonts,
  Quicksand_400Regular,
  Quicksand_600SemiBold,
} from "@expo-google-fonts/quicksand";

import {
  LexendExa_600SemiBold,
  LexendExa_700Bold,
} from "@expo-google-fonts/lexend-exa";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#F27F1B",
    secondary: "#3B8C8C",
    background: "#3B8C8C",
  },
};

const App = () => {
  let [fontsLoaded, fontError] = useFonts({
    Quicksand_400Regular,
    Quicksand_600SemiBold,
    LexendExa_600SemiBold,
    LexendExa_700Bold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <>
      <AuthProvider>
          <PaperProvider theme={theme}>
            <AppNav />
          </PaperProvider>
      </AuthProvider>
    </>
  );
};

export default App;

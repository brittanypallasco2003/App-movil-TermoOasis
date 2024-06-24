import React, { useEffect, useState } from "react";

import {
  PaperProvider,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";

import { AuthProvider } from "./src/context/AuthContext";
import AppNav from "./src/navigation/AppNav";

import {
  useFonts,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from "@expo-google-fonts/quicksand";

import {
  LexendExa_600SemiBold,
  LexendExa_700Bold,
  LexendExa_500Medium,
} from "@expo-google-fonts/lexend-exa";
import { CitasProvider } from "./src/context/CitasContext";
import ActivityIndicatorComp from "./src/components/ActivityIndicatorComp";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import LoadScreen from "./src/components/LoadScreen";

SplashScreen.preventAutoHideAsync();
const theme = {
  colors: {
    ...DefaultTheme.colors,
    primary: "#F27F1B",
    secondary: "#3F8483",
    background: "#3F8483",
    primaryContainer: "#F89138",
    secondaryContainer: "#3F8483",
    elevation: {
      level2: "#3B8C8C",
    },
  },
};

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  let [fontsLoaded] = useFonts({
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
    LexendExa_600SemiBold,
    LexendExa_700Bold,
    LexendExa_500Medium,
  });

  useEffect(() => {
    async function prepare() {
      try {
        if (fontsLoaded) {
          await SplashScreen.hideAsync();
          setTimeout(() => {
            setAppIsReady(true);
          }, 2000);
        }
      } catch (error) {
        console.warn(error);
      }
    }

    prepare();
  }, [fontsLoaded, appIsReady]);

  if (!appIsReady) {
    return <LoadScreen />;
  }
  return (
    <>
      <StatusBar style="auto" />
      <AuthProvider>
        <CitasProvider>
          <PaperProvider theme={theme}>
            <AppNav />
          </PaperProvider>
        </CitasProvider>
      </AuthProvider>
    </>
  );
};

export default App;

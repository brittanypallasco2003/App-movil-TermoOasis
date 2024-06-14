import React, { useEffect, useState } from "react";

import {
  PaperProvider,
  MD3LightTheme as DefaultTheme,
  configureFonts,
} from "react-native-paper";

import { AuthProvider } from "./src/context/AuthContext";
import AppNav from "./src/navigation/AppNav";
//herramienta expo
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
import { useDevToolsPluginClient } from "expo/devtools";
import { CitasProvider } from "./src/context/CitasContext";
import * as SplashScreen from "expo-splash-screen";

const fontConfig = {
  ...DefaultTheme.fonts,
  regular: {
    fontFamily: "Quicksand_600SemiBold",
    fontWeight: "normal",
  },
  medium: {
    fontFamily: "Quicksand_700Bold",
    fontWeight: "normal",
  },
};

const theme = {
  ...DefaultTheme,
  fonts: configureFonts({
    default: fontConfig,
  }),
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
  const client = useDevToolsPluginClient("my-devtools-plugin");

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
    client?.addMessageListener("ping", (data) => {
      alert(`Received ping from ${data.from}`);
    });
    client?.sendMessage("ping", { from: "app" });

    async function prepare() {
      try {
        if (fontsLoaded) {
          setAppIsReady(true);
          await SplashScreen.hideAsync();
        }
      } catch (error) {
        console.warn(error);
      }
    }

    prepare();
  }, [fontsLoaded]);

  if (!appIsReady) {
    return null;
  }
  return (
    <>
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

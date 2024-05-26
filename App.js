import React, { useEffect } from "react";

import {
  PaperProvider,
  MD3LightTheme as DefaultTheme,
} from "react-native-paper";

import { AuthProvider } from "./src/context/AuthContext";
import AppNav from "./src/navigation/AppNav";
//herramienta expo
import {
  useFonts,
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

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#F27F1B",
    secondary: "#3B8C8C",
    background: "#3B8C8C",
    primaryContainer: "#3B8C8C",
    secondaryContainer: "#3B8C8C",
    elevation: {
      level2: "#3B8C8C",
    },
  },
};

const App = () => {
  const client = useDevToolsPluginClient("my-devtools-plugin");
  useEffect(() => {
    // receive messages
    client?.addMessageListener("ping", (data) => {
      alert(`Received ping from ${data.from}`);
    });
    // send messages
    client?.sendMessage("ping", { from: "app" });
  }, []);
  let [fontsLoaded, fontError] = useFonts({
    Quicksand_600SemiBold,
    Quicksand_700Bold,
    LexendExa_600SemiBold,
    LexendExa_700Bold,
    LexendExa_500Medium,
  });

  if (!fontsLoaded && !fontError) {
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

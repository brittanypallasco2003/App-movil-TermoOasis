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
  Quicksand_700Bold
} from "@expo-google-fonts/quicksand";

import {
  LexendExa_600SemiBold,
  LexendExa_700Bold,
} from "@expo-google-fonts/lexend-exa";
import { useDevToolsPluginClient } from "expo/devtools";
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

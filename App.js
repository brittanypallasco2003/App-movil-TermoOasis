import React from "react";

import { PaperProvider, MD3LightTheme as DefaultTheme } from "react-native-paper";

import { AuthProvider } from "./src/context/AuthContext";
import AppNav from "./src/navigation/AppNav";




const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#F27F1B',
    secondary: '#3B8C8C',
    background:'#3B8C8C',
  },
};

const App = () => {
  return (
    <>
      <AuthProvider>
        <PaperProvider theme={theme}>
        <AppNav/>
        </PaperProvider>
      </AuthProvider>
    </>
  );
};

export default App;

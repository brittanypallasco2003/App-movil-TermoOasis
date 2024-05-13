import React from "react";

import { PaperProvider } from "react-native-paper";

import { AuthProvider } from "./src/context/AuthContext";
import AppNav from "./src/navigation/AppNav";



const temaPersonalizado = {
  dark: true, // Establecer en true para el tema oscuro
  roundness: 4, // Aumentar la redondez de los elementos
  colors: {
    primary: "#F27F1B", // Cambiar el color primario
    accent: "#ffc107", // Cambiar el color secundario
    background: "#3B8C8C", // Cambiar el color de fondo para el tema oscuro
    // ...otras personalizaciones de color
  },
};

const App = () => {
  return (
    <>
      <AuthProvider>
        <PaperProvider theme={temaPersonalizado}>
        <AppNav/>
        </PaperProvider>
      </AuthProvider>
    </>
  );
};

export default App;

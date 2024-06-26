import React, { createContext, useState } from "react";

export const RegistrosContext = createContext();

export const RegistrosProvider = ({ children }) => {
  const [visibleBuscador, setvisibleBuscador] = useState(false);

  return (
    <RegistrosContext.Provider value={{ visibleBuscador, setvisibleBuscador }}>
      {children}
    </RegistrosContext.Provider>
  );
};

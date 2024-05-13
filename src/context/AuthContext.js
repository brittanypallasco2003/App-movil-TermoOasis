import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [cargando, setCargando] = useState(false);
  const [userToken, setUserToken] = useState(null);

  

  const iniciarSesion = () => {
    setCargando(true);
    setUserToken("jkfjd");
    AsyncStorage.setItem('userToken', 'jkfjd');
    setCargando(false)
  };

  const cerrarSesion = () => {
    setCargando(true);
    setUserToken(null);
    AsyncStorage.removeItem('userToken');
    setCargando(false);
  };

  //si inicio sesión y no la cerro, su token se almacenará en storage y por tanto, no se logueara de nuevo
  const sesionIniciada = async () => {
    try {
      setCargando(true);
      let token = await AsyncStorage.getItem('userToken');
      setUserToken(token);
      setCargando(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => { sesionIniciada() },[])
  return (
    <AuthContext.Provider
      value={{ iniciarSesion, cerrarSesion, userToken, cargando }}
    >
      {children}
    </AuthContext.Provider>
  );
};

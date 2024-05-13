import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [cargando, setCargando] = useState(false);
  const [userToken, setUserToken] = useState("");
  const [infoUsuariObtenida, obtenerInfoUsuario] = useState(null);
  const [mensajeError, guardarMensaje] = useState(null);

  useEffect(() => {
    sesionIniciada();
  }, []);

  const iniciarSesion = async (email, contraseña) => {
    setCargando(true);
    try {
      const response = await axios.post(
        `${process.env.EXPO_PUBLIC_API_URL}/login`,
        {
          email: email.toLocaleLowerCase(),
          contraseña,
        }
      );

      const userInfo = response.data;
      obtenerInfoUsuario(userInfo);
      const { token } = infoUsuariObtenida;
      //state del token
      setUserToken(token);
      //guardar en storage token e info
      await AsyncStorage.setItem("userToken", token);
      await AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
    } catch (error) {
      guardarMensaje(error.response.data.msg);
    }
    setCargando(false);
  };

  const cerrarSesion = () => {
    setCargando(true);
    setUserToken("");
    AsyncStorage.removeItem('userToken');
    AsyncStorage.removeItem('userInfo')
    setCargando(false);
  };

  //si inició sesión y no la cerró, su token se almacenará en storage y por tanto, no se logueara de nuevo
  const sesionIniciada = async () => {
    try {
      setCargando(true);
      let token = await AsyncStorage.getItem("userToken");
      let userdata= await AsyncStorage.getItem('userInfo')
      //convierte el storage en objeto
      userdata=JSON.parse(userdata)
      console.log('user: ',userdata)

    //si existe un usuario en storage, entonces también su token, permitimos que el token del storage se almacene en el estado para permitirle entrar directo al perfil
      if(userdata){
          setUserToken(token);
          obtenerInfoUsuario(userdata)
      }

      
      setCargando(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ iniciarSesion, cerrarSesion, userToken, cargando, infoUsuariObtenida,mensajeError,guardarMensaje }}
    >
      {children}
    </AuthContext.Provider>
  );
};

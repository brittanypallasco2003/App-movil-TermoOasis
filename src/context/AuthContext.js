import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";
import { user_login, user_restablecer } from "../api/api_user";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [cargando, setCargando] = useState(false);
  const [userToken, setUserToken] = useState("");
  const [infoUsuariObtenida, obtenerInfoUsuario] = useState({});
  const [mensajeError, guardarMensaje] = useState("");
  const [alerta, mostrarAlerta] = useState(false);
  const [passwordCambiado, mostrarMensajePassword] = useState(false);

  useEffect(() => {
    sesionIniciada();
  }, []);

  const verificarCorreoIngresado = (textoIngresado) => {
    let re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!re.test(textoIngresado)) {
      guardarMensaje("Formato de correo Inválido");
      mostrarAlerta(true);
      return true;
    }
  };

  const validarNombre = (name) => {
    var re = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s\u2000-\u200B]{3,}$/;
    if (!re.test(name)) {
      guardarMensaje("El dato ingresado no es un nombre");
      mostrarAlerta(true);
      return true;
    }
  };

  const validarApellido = (lastname) => {
    var re = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s\u2000-\u200B]{3,}$/;
    if (!re.test(lastname)) {
      guardarMensaje("El dato ingresado no es un apellido");
      mostrarAlerta(true);
      return true;
    }
  };

  const iniciarSesion = async (email, contraseña) => {
    // Validación - formato de correo
    if (email && contraseña) {
      let correoInvalido = verificarCorreoIngresado(email);
      if (correoInvalido) return;
    }
    setCargando(true);

    try {
      const response = await user_login(email, contraseña);
      if (response && response.data) {
        const userInfo = response.data;
        obtenerInfoUsuario(userInfo);
        console.log("info usuario token:", userInfo);
        const { token } = userInfo;
        setUserToken(token);
        await AsyncStorage.setItem("userToken", token);
        await AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
      } else {
        throw new Error("Respuesta inválida del servidor");
      }
    } catch (error) {
      guardarMensaje(
        error.response?.data?.msg || "Error desconocido al iniciar sesión"
      );
      mostrarAlerta(true);
    } finally {
      setCargando(false);
    }
  };

  const restablecerPassword = async (nombre, apellido, correoRest) => {
    if (nombre && apellido && correoRest) {
      let nombreInvalido = validarNombre(nombre);
      let apellidoInvalido = validarApellido(apellido);
      let correoInvalido = verificarCorreoIngresado(correoRest);
      if (apellidoInvalido || nombreInvalido || correoInvalido) return;
    }
    setCargando(true);
    try {
      const response = await user_restablecer(nombre, apellido, correoRest);
      if (response && response.data) {
        guardarMensaje(response.data.msg);
        mostrarMensajePassword(true);
        mostrarAlerta(true);
      } else {
        throw new Error("Respuesta Inválida del servidor");
      }
    } catch (error) {
      guardarMensaje(
        error.response.data.msg || "Error desconocido al recuperar cuenta"
      );
      mostrarMensajePassword(false);
      mostrarAlerta(true);
    } finally {
      setCargando(false);
    }
  };

  const cerrarSesion = async () => {
    try {
      setCargando(true);
      setUserToken("");
      obtenerInfoUsuario("");
      AsyncStorage.removeItem("userToken");
      AsyncStorage.removeItem("userInfo");
    } catch (error) {
      console.log(error);
    } finally {
      setCargando(false);
    }
  };

  const sesionIniciada = async () => {
    try {
      setCargando(true)
      let token = await AsyncStorage.getItem("userToken");
      let userdata = await AsyncStorage.getItem("userInfo");
      userdata = JSON.parse(userdata);
      console.log("user: ", userdata);
      if (userdata) {
        setUserToken(token);
        obtenerInfoUsuario(userdata);
      }
    } catch (error) {
      console.log(error);
    }finally{
      setCargando(false)
    }
  };

  return (
    <AuthContext.Provider
      value={{
        iniciarSesion,
        cerrarSesion,
        userToken,
        cargando,
        infoUsuariObtenida,
        mensajeError,
        alerta,
        mostrarAlerta,
        restablecerPassword,
        passwordCambiado,
        mostrarMensajePassword,
        guardarMensaje,
        isLoggedIn: !!userToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

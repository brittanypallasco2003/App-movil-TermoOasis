import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useState } from "react";
import { user_login, user_restablecer } from "../api/api_user";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [cargando, setCargando] = useState(false);
  const [userToken, setUserToken] = useState("");
  const [infoUsuariObtenida, obtenerInfoUsuario] = useState(null);
  const [mensajeError, guardarMensaje] = useState("");
  const [alerta, mostrarAlerta] = useState(false);
  const [passwordCambiado, mostrarMensajePassword]=useState(false)

  useEffect(() => {
    sesionIniciada();
  }, []);

  const verificarCorreoIngresado = (textoIngresado) => {
    let re = /\S+@\S+\.\S+/;
    //si el correo no cumple con el formato salta la alerta
    if (!re.test(textoIngresado)) {
      guardarMensaje("Formato de correo Inválido");
      mostrarAlerta(true);
      return true;
    }
  };

  const validarNombre = (name) => {
    var re = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s\u2000-\u200B]{3,}$/    ;
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
    //Validación - formato de correo
    if (email && contraseña) {
      let correoInvalido = verificarCorreoIngresado(email);
      if (correoInvalido) return;
    }
    try {
      setCargando(true);
      const response = await user_login(email, contraseña);
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
      mostrarAlerta(true);
    }
    setCargando(false);
  };

  const restablecerPassword = async (nombre, apellido) => {
    if (nombre && apellido) {
      let nombreInvalido = validarNombre(nombre);
      let apellidoInvalido = validarApellido(apellido);
      if (apellidoInvalido || nombreInvalido) return;
    }
    try {
      setCargando(true);
      const response = await user_restablecer(nombre, apellido);
      guardarMensaje(response.data.msg);
      (true)
      mostrarMensajePassword(true)
      mostrarAlerta(true);
    } catch (error) {
      guardarMensaje(error.response.data.msg);
      mostrarMensajePassword(false)
      mostrarAlerta(true);
    }
    setCargando(false);
  };

  const cerrarSesion = () => {
    setCargando(true);
    setUserToken("");
    AsyncStorage.removeItem("userToken");
    AsyncStorage.removeItem("userInfo");
    setCargando(false);
  };

  //si inició sesión y no la cerró, su token se almacenará en storage y por tanto, no se logueara de nuevo
  const sesionIniciada = async () => {
    try {
      setCargando(true);
      let token = await AsyncStorage.getItem("userToken");
      let userdata = await AsyncStorage.getItem("userInfo");
      //convierte el storage en objeto
      userdata = JSON.parse(userdata);
      console.log("user: ", userdata);

      //si existe un usuario en storage, entonces también su token, permitimos que el token del storage se almacene en el estado para permitirle entrar directo al perfil
      if (userdata) {
        setUserToken(token);
        obtenerInfoUsuario(userdata);
      }

      setCargando(false);
    } catch (error) {
      console.log(error);
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

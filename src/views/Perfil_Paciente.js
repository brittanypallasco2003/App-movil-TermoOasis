import React, { useContext } from "react";
import { Pressable, Text, View } from "react-native";
import { AuthContext } from "../context/AuthContext";
import globalStyles from "../styles/global";

const PerfilPaciente = () => {
  const { cerrarSesion,infoUsuariObtenida } = useContext(AuthContext);
  return (
    <View style={globalStyles.contenedor}>
      <Text>Perfil</Text>
      <Text>Hola {infoUsuariObtenida.nombre}</Text>
      <Pressable onPress={() => cerrarSesion()}>
        <Text>Cerrar Sesión</Text>
      </Pressable>
    </View>
  );
};

export default PerfilPaciente;

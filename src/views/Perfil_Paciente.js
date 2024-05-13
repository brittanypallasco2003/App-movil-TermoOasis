import React, { useContext } from "react";
import { Pressable, Text, View } from "react-native";
import { AuthContext } from "../context/AuthContext";

const PerfilPaciente = () => {
  const { cerrarSesion } = useContext(AuthContext);
  return (
    <View>
      <Text>Perfil</Text>
      <Pressable onPress={() => cerrarSesion()}>
        <Text>Cerrar Sesión</Text>
      </Pressable>
    </View>
  );
};

export default PerfilPaciente;

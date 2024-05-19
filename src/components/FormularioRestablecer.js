import React, { useContext, useState } from "react";
import {
  Card,
  Text,
  TextInput,
  useTheme,
} from "react-native-paper";
import { StyleSheet } from "react-native";
import globalStyles from "../styles/global";

const FormularioRestablecer = () => {
  const [nombreForm, setNombreForm] = useState("");
  const [apellidoForm, setApellidoForm] = useState("");
  const theme = useTheme();

  return (
    <Card mode='contained' contentStyle={globalStyles.contentenidoTarjeta}>
      <Card.Title
        title='Restablecer Contraseña'
        titleStyle={styles.title}
      />
      <Card.Content>
        <Text
          style={[styles.textoDescripcion, { color: theme.colors.secondary }]}
        >
          Ingresa tu correo electrónico para que puedas recuperar tu cuenta
        </Text>
        <TextInput
          label={"Nombre"}
          value={nombreForm}
          onChangeText={(texto) => setNombreForm(texto)}
          selectionColor={theme.colors.secondary}
          activeUnderlineColor={theme.colors.secondary}
          cursorColor={theme.colors.secondary}
          textColor={theme.colors.secondary}
          style={[globalStyles.inputRestablecer]}
          underlineStyle={{
            borderWidth: 0.8,
            borderColor: theme.colors.secondary,
          }}
        />
        <TextInput
          label={"Apellido"}
          value={apellidoForm}
          onChangeText={(texto) => setApellidoForm(texto)}
          selectionColor={theme.colors.secondary}
          activeUnderlineColor={theme.colors.secondary}
          cursorColor={theme.colors.secondary}
          textColor={theme.colors.secondary}
          style={[globalStyles.inputRestablecer]}
          underlineStyle={{
            borderWidth: 0.8,
            borderColor: theme.colors.secondary,
          }}
        />
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  textos: {
    fontFamily: "Quicksand_600SemiBold",
    fontSize: 13,
    color: "#fff",
    textAlign: "center",
  },
  title: {
    fontFamily: "LexendExa_600SemiBold",
    fontSize: 19,
    marginBottom: 15,
    marginLeft:'auto',
    marginRight:'auto'
  },
  textoNavInicio: {
    fontFamily: "Quicksand_600SemiBold",
    fontSize: 14,
    textAlign: "center",
  },
  textoDescripcion: {
    fontFamily: "Quicksand_600SemiBold",
    textAlign: "center",
    marginTop: 7,
    fontSize: 13.8,
  },
  ContenedorBotonInicio: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 17,
  },
});

export default FormularioRestablecer;

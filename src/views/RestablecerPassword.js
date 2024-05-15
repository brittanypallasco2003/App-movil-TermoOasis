import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Headline, TextInput, Button } from "react-native-paper";
import globalStyles from "../styles/global";
import { useTheme } from "react-native-paper";

import { SafeAreaView } from "react-native-safe-area-context";

const RestablecerPassword = ({ navigation }) => {
  const { navigate } = navigation;
  const theme = useTheme();

  return (
    <SafeAreaView
      style={[
        globalStyles.contenedorRestablecer,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <View style={globalStyles.contentenidoTarjeta}>
        <Headline style={[styles.title, { color: theme.colors.secondary }]}>
          Restablecer Contraseña
        </Headline>
        <Text
          style={{
            fontFamily: "Quicksand_600SemiBold",
            color: theme.colors.secondary,
            textAlign: "center",
            marginTop: 7,
          }}
        >
          Ingresa tu correo electrónico para que puedas recuperar tu cuenta
        </Text>
        <TextInput
          label={"Correo Electrónico"}
          style={[globalStyles.inputRestablecer, { marginTop: 20 }]}
          underlineStyle={{
            borderWidth: 1,
            borderColor: theme.colors.secondary,
          }}
        />
      </View>
      <Button mode="contained"
      labelStyle={{fontFamily:'Quicksand_600SemiBold'}}
      style={{ marginTop: 50 }}>
        Enviar correo electrónico
      </Button>

      <Text style={styles.textos}>
        ¿Ya recordaste?
        <Button
          mode="text"
          onPress={() => navigate("Login")}
          background="transparent"
          labelStyle={globalStyles.botonTexto}
        >
          Inicia Sesión
        </Button>
        </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textos: {
    fontFamily: "Quicksand_600SemiBold",
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
  },
  title: {
    fontFamily: "LexendExa_600SemiBold",
    fontSize: 19,
    marginBottom: 15,
  },
  textoNavInicio: {
    fontFamily: "Quicksand_600SemiBold",
    fontSize: 14,
    textAlign: "center",
  },
});

export default RestablecerPassword;

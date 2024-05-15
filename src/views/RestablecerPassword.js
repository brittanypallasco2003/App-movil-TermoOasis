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
      <View>
        <View style={globalStyles.contentenidoTarjeta}>
          <Headline style={[styles.title, { color: theme.colors.secondary }]}>
            Restablecer Contraseña
          </Headline>
          <Text
            style={[styles.textoDescripcion, { color: theme.colors.secondary }]}
          >
            Ingresa tu correo electrónico para que puedas recuperar tu cuenta
          </Text>
          <TextInput
            label={"Correo Electrónico"}
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
        </View>
        <Button
          mode="contained"
          labelStyle={{ fontFamily: "Quicksand_600SemiBold" }}
          style={{ marginTop: 50 }}
        >
          Enviar correo electrónico
        </Button>
        <View style={styles.ContenedorBotonInicio}>
          <Text style={styles.textos}>
            ¿Ya recordaste?
          </Text>
          <Button
              mode="text"
              onPress={() => navigate("Login")}
              background="transparent"
              labelStyle={[
                globalStyles.botonTexto,
                { textDecorationLine: "underline" },
              ]}
            >
              Inicia Sesión
            </Button>
        </View>
      </View>
    </SafeAreaView>
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
    textAlign: "center",
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
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop:17
  },
});

export default RestablecerPassword;

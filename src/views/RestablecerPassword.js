import React, { useState, useContext } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Headline, TextInput, Button } from "react-native-paper";
import globalStyles from "../styles/global";
import { useTheme } from "react-native-paper";
import { AuthContext } from "../context/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";

const RestablecerPassword = ({ navigation }) => {
  const [nombreForm, setNombreForm] = useState("");
  const [apellidoForm, setApellidoForm] = useState("");
  const [correoRestablecer, setCorreoRestablecer] = useState("");
  const { navigate } = navigation;
  const theme = useTheme();
  const { restablecerPassword } = useContext(AuthContext);

  return (
    <SafeAreaView
      style={[
        globalStyles.contenedorRestablecer,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <ScrollView
      contentContainerStyle={globalStyles.contentScroll}
      showsVerticalScrollIndicator={false}>
        <View style={[globalStyles.contentenidoTarjeta]}>
          <Headline
            style={[
              styles.title,
              { color: theme.colors.secondary, marginTop: 20 },
            ]}
          >
            Restablecer Contraseña
          </Headline>
          <Text
            style={[styles.textoDescripcion, { color: theme.colors.secondary }]}
          >
            Ingresa tu nombre, apellido y correo electrónico para que puedas recuperar de tu cuenta
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
            style={[globalStyles.inputRestablecer,]}
            underlineStyle={{
              borderWidth: 0.8,
              borderColor: theme.colors.secondary,
            }}
          />
          <TextInput
            label={"Correo electrónico"}
            value={correoRestablecer}
            keyboardType={"email-address"}
            onChangeText={(texto) => setCorreoRestablecer(texto)}
            selectionColor={theme.colors.secondary}
            activeUnderlineColor={theme.colors.secondary}
            cursorColor={theme.colors.secondary}
            textColor={theme.colors.secondary}
            style={[globalStyles.inputRestablecer, { marginBottom: 45 }]}
            underlineStyle={{
              borderWidth: 0.8,
              borderColor: theme.colors.secondary,
            }}
          />
        </View>
        <View style={{marginHorizontal:20}}>
          <Button
            mode="contained"
            labelStyle={{ fontFamily: "Quicksand_600SemiBold" }}
            style={{ marginTop: 35 }}
            onPress={() => restablecerPassword(nombreForm, apellidoForm,correoRestablecer.toLowerCase())}
          >
            Recuperar mi cuenta
          </Button>
          <View style={styles.ContenedorBotonInicio}>
            <Text style={styles.textos}>¿Ya recordaste?</Text>
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
      </ScrollView>
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
    lineHeight:21
  },
  ContenedorBotonInicio: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 17,
  },
});

export default RestablecerPassword;

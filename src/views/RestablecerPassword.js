import React, { useState, useContext } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Button } from "react-native-paper";
import globalStyles from "../styles/global";
import { useTheme } from "react-native-paper";
import { AuthContext } from "../context/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, verticalScale } from "react-native-size-matters";

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
        showsVerticalScrollIndicator={false}
      >
        <View style={[globalStyles.contentenidoTarjeta]}>
          <Text
            style={[
              globalStyles.titleRestablecer,
              { color: theme.colors.secondary },
            ]}
          >
            Restablecer Contraseña
          </Text>
          <Text
            style={[
              globalStyles.textoDescripcion,
              {
                color: theme.colors.secondary,
              },
            ]}
          >
            Ingresa tu nombre, apellido y correo electrónico para que puedas
            recuperar de tu cuenta
          </Text>
          {/* <TextInput
            label={"Correo electrónico"}
            value={correoRestablecer}
            keyboardType={"email-address"}
            onChangeText={(texto) => setCorreoRestablecer(texto)}
            selectionColor={theme.colors.secondary}
            activeUnderlineColor={theme.colors.secondary}
            cursorColor={theme.colors.secondary}
            textColor={theme.colors.secondary}
            style={[
              globalStyles.inputRestablecer,
              { marginBottom: verticalScale(25) },
              ]}
              underlineStyle={{
                borderWidth: moderateScale(0.8),
                borderColor: theme.colors.secondary,
                }}
                /> */}
          <View style={globalStyles.contenedorInputsRes}>
            <TextInput
              placeholder="Nombre"
              keyboardType="default"
              onChangeText={(texto) => setNombreForm(texto)}
              value={nombreForm}
              selectionColor={theme.colors.secondaryContainer}
              placeholderTextColor="#5D9896"
              cursorColor={theme.colors.secondary}
              style={globalStyles.inputRes}
            />
          </View>
          <View style={globalStyles.contenedorInputsRes}>
            <TextInput
              placeholder="Apellido"
              keyboardType="default"
              onChangeText={(texto) => setApellidoForm(texto)}
              value={apellidoForm}
              selectionColor={theme.colors.secondaryContainer}
              placeholderTextColor="#5D9896"
              cursorColor={theme.colors.secondary}
              style={globalStyles.inputRes}
            />
          </View>
          <View style={globalStyles.contenedorInputsRes}>
            <TextInput
              placeholder="Correo Electrónico"
              keyboardType="email-address"
              onChangeText={(texto) => setCorreoRestablecer(texto)}
              value={correoRestablecer}
              selectionColor={theme.colors.secondaryContainer}
              placeholderTextColor="#5D9896"
              cursorColor={theme.colors.secondary}
              style={globalStyles.inputRes}
            />
          </View>
        </View>
        <View style={{ marginHorizontal: moderateScale(25) }}>
          <Button
            mode="elevated"
            buttonColor={theme.colors.primary}
            textColor="#fff"
            labelStyle={globalStyles.LabelbotonContain}
            style={globalStyles.botonRecuperar}
            onPress={() =>
              restablecerPassword(
                nombreForm,
                apellidoForm,
                correoRestablecer.toLowerCase()
              )
            }
          >
            Recuperar mi cuenta
          </Button>
          <View style={globalStyles.ContenedorBotonInicio}>
            <Text style={globalStyles.textosRestablecer}>¿Ya recordaste?</Text>
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

export default RestablecerPassword;

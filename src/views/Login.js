import React, { useContext, useState } from "react";
import {
  Text,
  Image,
  ScrollView,
  Dimensions,
  View,
  TextInput,
} from "react-native";
import { Button, IconButton } from "react-native-paper";

import globalStyles from "../styles/global";
import { AuthContext } from "../context/AuthContext";

import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Alerta from "../components/Alerta";
import { moderateScale, scale } from "react-native-size-matters";

const Login = ({ navigation }) => {
  const theme = useTheme();
  //STATE SEE PASSWORD
  const [mostrarPassword, setmostrarPassword] = useState(false);

  //STATE FORM
  const [correoForm, setcorreoForm] = useState("");
  const [passwordForm, setpasswordForm] = useState("");

  //REACT NAVIGATION
  const { navigate } = navigation;

  //CONTEXT
  const { iniciarSesion } = useContext(AuthContext);
  const { width } = Dimensions.get("window");
  const isTablet = width >= 768;
  return (
    <SafeAreaView
      style={[
        globalStyles.contenedor,
        { backgroundColor: theme.colors.background },
      ]}
    >
      <ScrollView
        contentContainerStyle={[globalStyles.contentScroll]}
        showsVerticalScrollIndicator={false}
      >
        <Text
          style={[
            globalStyles.tituloBienvenida,
            { fontFamily: "Quicksand_600SemiBold" },
          ]}
        >
          Bienvenido a
        </Text>
        <Text style={globalStyles.contTI}>
          <Text
            style={[
              globalStyles.tituloInicio,
              { color: "#A8BF56", fontFamily: "LexendExa_700Bold" },
            ]}
          >
            Termo{" "}
          </Text>
          <Text
            style={[
              globalStyles.tituloInicio,
              { color: "#F27F1B", fontFamily: "LexendExa_700Bold" },
            ]}
          >
            Oasis
          </Text>
        </Text>
        <View style={globalStyles.logoContainer}>
          <Image
            style={globalStyles.logo}
            source={require("../../assets/logoTermo.png")}
          />
        </View>

        <Text style={[globalStyles.textos]}>
          Inicia Sesión con las credenciales enviadas a tu correo
        </Text>
        {/* <TextInput
          style={[globalStyles.inputInicio]}
          underlineStyle={{
            borderWidth: moderateScale(0.8),
            borderColor: theme.colors.primary,
          }}
          textColor="#fff"
          label={"Correo Electrónico"}
          keyboardType={"email-address"}
          value={correoForm}
          onChangeText={(texto) => setcorreoForm(texto)}
        /> */}
        <TextInput
          placeholder="Correo Electrónico"
          keyboardType="email-address"
          onChangeText={(texto) => setcorreoForm(texto)}
          value={correoForm}
          selectionColor={theme.colors.primary}
          placeholderTextColor='#fff'
          cursorColor={theme.colors.primary}
          style={globalStyles.inputInicio}
        />
        <View style={globalStyles.contenedorInputPass}>
          <TextInput
            secureTextEntry={!mostrarPassword}
            placeholder="Contraseña"
            placeholderTextColor='#fff'
            onChangeText={(texto) => setpasswordForm(texto)}
            value={passwordForm}
            cursorColor={theme.colors.primary}
            style={globalStyles.inputPass}
          />
          <IconButton
          icon={mostrarPassword? 'eye':'eye-off'}
          size={isTablet? scale(15):scale(18)}
          iconColor='#fff'
          onPress={() => setmostrarPassword(!mostrarPassword)}
          />
        </View>
        {/* <TextInput
          //mode="outlined"
          theme={{ fonts: { labelSmall: { fontSize: 13 } } }}
          style={[globalStyles.inputInicio]}
          underlineStyle={{
            borderColor: theme.colors.primary,
            borderWidth: moderateScale(0.8),
          }}
          contentStyle={globalStyles.contentInput}
          label="Contraseña"
          value={passwordForm}
          textColor="#fff"
          // se oculta cambiando a true
          secureTextEntry={!mostrarPassword}
          right={
            <TextInput.Icon
              icon={mostrarPassword ? "eye" : "eye-off"}
              color="#fff"
              size={isTablet ? scale(15) : scale(18)}
              //si aplasta el boton cambia a false, mostrando el password
              onPress={() => setmostrarPassword(!mostrarPassword)}
            />
          }
          onChangeText={(texto) => setpasswordForm(texto)}
        /> */}

        <Button
          mode="text"
          labelStyle={globalStyles.botonTextoLogin}
          background="transparent"
          textColor="#fff"
          onPress={() => navigate("RestablecerPassword")}
        >
          ¿Olvidaste tu contraseña?
        </Button>

        <Button
          mode="elevated"
          buttonColor={theme.colors.primary}
          textColor="#fff"
          labelStyle={globalStyles.LabelbotonContain}
          style={globalStyles.botonLogin}
          contentStyle={globalStyles.contentStyleLogin}
          onPress={() =>
            iniciarSesion(correoForm.toLocaleLowerCase(), passwordForm)
          }
        >
          Iniciar Sesión
        </Button>
        {/* muestra un mensaje solo si no es null */}
        <Alerta />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

import React, { useContext, useState } from "react";
import { Text, View, Image, StyleSheet, Pressable, Alert } from "react-native";
import { TextInput, Button, Headline } from "react-native-paper";

import globalStyles from "../styles/global";
import { AuthContext } from "../context/AuthContext";

import {
  useFonts,
  Quicksand_400Regular,
  Quicksand_600SemiBold,
} from "@expo-google-fonts/quicksand";

import {
  LexendExa_600SemiBold,
  LexendExa_700Bold,
} from '@expo-google-fonts/lexend-exa';

import { useTheme } from 'react-native-paper';
import { SafeAreaView } from "react-native-safe-area-context";



const Login = ({ navigation }) => {

  const theme=useTheme()
  //STATE SEE PASSWORD
  const [mostrarPassword, setmostrarPassword] = useState(false);

  //STATE FORM
  const [correoForm, setcorreoForm] = useState("");
  const [passwordForm, setpasswordForm] = useState("");
  const cambiarBoton = () => (mostrarPassword ? "eye-off" : "eye");

  //REACT NAVIGATION
  const { navigate } = navigation;

  //CONTEXT
  const { iniciarSesion, mensajeError, guardarMensaje } =
    useContext(AuthContext);

    let [fontsLoaded, fontError] = useFonts({
      Quicksand_400Regular,
      Quicksand_600SemiBold,
      LexendExa_600SemiBold,
      LexendExa_700Bold,
    });

    if (!fontsLoaded && !fontError) {
      return null;
    }

    
  const mostrarMensaje = () => {
    Alert.alert("Error", mensajeError, [
      {
        text: "Entendido",
        onPress: () => {
          guardarMensaje(null);
        },
      },
    ]);
  };

  // const verificarCorreoIngresado = textoIngresado => {
  //   let re = /\S+@\S+\.\S+/;
  //   //si el correo no cumple con el formato salta la alerta
  //   if (!re.test(textoIngresado)) {
  //     guardarMensaje('Formato de correo Inválido');
  //     return true;
  //   }
  // };

  //INICIAR SESIÓN
  // const iniciarSesion = async () => {
  //   //VALIDAR
  //   //todos los campos
  //   if (correoForm === '' || passwordForm === '') {
  //     guardarMensaje('Todos los campos son obligatorios');
  //     return;
  //   }
  //   //formato del correo
  //   if (correoForm.length > 0 && passwordForm.length > 0) {
  //     let correoInvalido=verificarCorreoIngresado(correoForm);
  //     if(correoInvalido) return

  //   }
  //   //AUTENTICAR USUARIO

  //   const usuarioLogueado = {
  //     email: correoForm.toLocaleLowerCase(),
  //     contraseña: passwordForm,
  //   };
  //   console.log(usuarioLogueado);
  //   try {
  //     const response = await axios.post(
  //       'https://backend-termo-oasis.vercel.app/api/login',
  //       usuarioLogueado,
  //     );
  //     console.log(response.data);
  //     //Colocar token en storage
  //     const {token} = response.data;
  //     await AsyncStorage.setItem('token', token);
  //     console.log(token);
  //     //REDIRECCIONAR
  //     navigate('PerfilPaciente');
  //   } catch (error) {
  //     guardarMensaje(error.response.data.msg);
  //   }
  // };

 

  return (
    <SafeAreaView style={[globalStyles.contenedor,{backgroundColor:theme.colors.background}]}>

    <View>
      <Headline
        style={[
          styles.tituloBienvenida,
          { fontFamily: "Quicksand_600SemiBold" },
        ]}
      >
        Bienvenido a:
      </Headline>
      <Headline style={globalStyles.tituloInicio}>
        <Text style={{ color: "#A8BF56",fontFamily:'LexendExa_700Bold' }}>Termo </Text>
        <Text style={{ color: "#F27F1B",fontFamily:'LexendExa_700Bold' }}>Oasis</Text>
      </Headline>

      <Image
        style={styles.logo}
        source={require("../../assets/logoTermo.png")}
      />

      <Text style={styles.textos}>Inicia Sesión con las credenciales enviadas a tu correo</Text>
      <TextInput
        style={globalStyles.input}
        underlineStyle={{borderWidth:1,borderColor:theme.colors.primary}}
        label={"Correo Electrónico"}
        keyboardType={"email-address"}
        value={correoForm}
        onChangeText={(texto) => setcorreoForm(texto)}
      />
      {}
      <TextInput
        style={[globalStyles.input,]}
        underlineStyle={{borderColor:theme.colors.primary,borderWidth:1}}
        label="Password"
        value={passwordForm}
        // se oculta cambiando a true
        secureTextEntry={!mostrarPassword}
        right={
          <TextInput.Icon
            icon={cambiarBoton(mostrarPassword)}
            //si aplasta el boton cambia a false, mostrando el password
            onPress={() => setmostrarPassword(!mostrarPassword)}
          />
        }
        onChangeText={(texto) => setpasswordForm(texto)}
      />

      <Pressable onPress={() => navigate("RestablecerPassword")}>
        <Text style={styles.textos}>¿Olvidaste tu contraseña?</Text>
      </Pressable>

      <Button
        mode="contained"
        style={{ marginTop: 50 }}
        onPress={() => iniciarSesion(correoForm, passwordForm)}
      >
        Iniciar Sesión
      </Button>
      {/* muestra un mensaje solo si no es null */}
      {mensajeError && mostrarMensaje()}
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tituloBienvenida: {
    textAlign: "left",
    fontSize: 25,
    color:'#fff',
    marginVertical:20
  },
  logo: {
    height: 220,
    aspectRatio: 1,
    marginLeft:'auto',
    marginRight:'auto',
    marginBottom:20
  },
  textos:{
    fontFamily: 'Quicksand_600SemiBold',
    fontSize:14,
    color:'#fff',
    textAlign:'center'
  }
});
export default Login;

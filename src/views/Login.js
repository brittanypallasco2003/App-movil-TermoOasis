import React, {useContext, useState} from 'react';
import {Text, View, Image, StyleSheet, Pressable, Alert} from 'react-native';
import {
  TextInput,
  Button,
  Headline,
  Paragraph,
  Dialog,
  Portal,
} from 'react-native-paper';

import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import globalStyles from '../styles/global';
import { AuthContext } from '../context/AuthContext';

const Login = ({navigation}) => {
  //STATE SEE PASSWORD
  const [mostrarPassword, setmostrarPassword] = useState(false);

  //STATE FORM
  const [correoForm, setcorreoForm] = useState('');
  const [passwordForm, setpasswordForm] = useState('');
  const cambiarBoton = () => (mostrarPassword ? 'eye-off' : 'eye');

  //REACT NAVIGATION
  const {navigate} = navigation;

  //STATE VALIDACIONES
  const [mensaje, guardarMensaje] = useState(null);

  const mostrarMensaje = () => {
    Alert.alert('Error', mensaje, [
      {
        text: 'Entendido',
        onPress: () => {
          guardarMensaje(null);
        },
      },
    ]);
  };

  const verificarCorreoIngresado = textoIngresado => {
    let re = /\S+@\S+\.\S+/;
    //si el correo no cumple con el formato salta la alerta
    if (!re.test(textoIngresado)) {
      guardarMensaje('Formato de correo Inválido');
      return true;
    }
  };

  //CONTEXT
  const {iniciarSesion}=useContext(AuthContext)

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
    <View style={[globalStyles.contenedor, {backgroundColor: '#3B8C8C'}]}>
      <View style={globalStyles.contenidoInicio}>
        <Headline>Bienvenido a:</Headline>
        <Headline style={globalStyles.tituloInicio}>
          <Text style={{color: '#A8BF56'}}>Termo </Text>
          <Text style={{color: '#F27F1B'}}>Oasis</Text>
        </Headline>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.logo}
            source={require('../../assets/logoTermo.png')}
          />
        </View>
        <Text>Inicia Sesión con las credenciales enviadas a tu correo</Text>
        <TextInput
          style={globalStyles.input}
          label={'Correo Electrónico'}
          keyboardType={'email-address'}
          value={correoForm}
          onChangeText={texto => setcorreoForm(texto)}
        />
        {}
        <TextInput
          style={globalStyles.input}
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
          onChangeText={texto => setpasswordForm(texto)}
        />

        <Pressable onPress={() => navigate('RestablecerPassword')}>
          <Text>¿Olvidaste tu contraseña?</Text>
        </Pressable>
        

        <Button
          mode="contained"
          style={{marginTop: 50}}
          onPress={() => iniciarSesion()}>
          Iniciar Sesión
        </Button>
        {/* muestra un mensaje solo si no es null */}
        {mensaje && mostrarMensaje()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 200,
    flex: 1,
  },
});
export default Login;

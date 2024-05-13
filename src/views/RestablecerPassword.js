import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {Card, Headline, TextInput, Button} from 'react-native-paper';
import globalStyles from '../styles/global';


const RestablecerPassword = ({navigation}) => {
    const {navigate}=navigation

  return (
    <View style={[globalStyles.contenedor, {backgroundColor: '#3B8C8C'}]}>
      <View style={globalStyles.contenidoRecuperar}>
        <View style={globalStyles.contentenidoTarjeta}>

        <Headline>Recuperar Contraseña</Headline>
        <Text>
          Ingresa tu correo electrónico para que puedas recuperar tu cuenta
        </Text>
        <TextInput label={'Correo Electrónico'} />
        </View>
        <Button mode="contained">Enviar correo electrónico</Button>
        
        <Text>¿Ya recordaste? 
        <Pressable onPress={() =>navigate('Login') }><Text> Inicia Sesión</Text></Pressable>
        </Text>
      </View>
    </View>
  );
};

export default RestablecerPassword;

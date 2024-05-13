import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {Headline, TextInput, Button} from 'react-native-paper';
import globalStyles from '../styles/global';
import { useTheme } from 'react-native-paper';
import {
  useFonts,
  LexendExa_600SemiBold,
  LexendExa_700Bold,
} from '@expo-google-fonts/lexend-exa';


const RestablecerPassword = ({navigation}) => {
    const {navigate}=navigation
    const theme=useTheme()

    let [fontsLoaded, fontError] = useFonts({
      LexendExa_600SemiBold,
      LexendExa_700Bold,
    });

    if (!fontsLoaded && !fontError) {
      return null;
    }

  return (
    <View style={[globalStyles.contenedor,{backgroundColor:theme.colors.background}]}>
      <View style={globalStyles.contenidoRecuperar}>
        <View style={globalStyles.contentenidoTarjeta}>

        <Headline style={[styles.title,{color:theme.colors.secondary,}]}>Restablecer Contraseña</Headline>
        <Text style={{fontFamily:'Quicksand_600SemiBold',color:theme.colors.secondary}}>
          Ingresa tu correo electrónico para que puedas recuperar tu cuenta
        </Text>
        <TextInput label={'Correo Electrónico'} style={globalStyles.input}
        underlineStyle={{borderWidth:1,borderColor:theme.colors.secondary}}/>
        </View>
        <Button mode="contained"
        style={{marginTop:50}}>Enviar correo electrónico</Button>
        
        <Text style={styles.textos}>¿Ya recordaste? 
        <Pressable onPress={() =>navigate('Login') }><Text> Inicia Sesión</Text></Pressable>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textos:{
    fontFamily: 'Quicksand_600SemiBold',
    fontSize:14,
    color:'#fff',
    textAlign:'center'
  },
  title:{
    fontFamily:'LexendExa_600SemiBold',
    fontSize:19,
    marginBottom:15
  }
});

export default RestablecerPassword;

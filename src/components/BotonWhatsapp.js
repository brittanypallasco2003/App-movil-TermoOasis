import React, { useContext } from "react";
import {
  Linking,
  Alert,
  Dimensions,
} from "react-native";
import { Button } from "react-native-paper";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import globalStyles from "../styles/global";
const { width } = Dimensions.get("window");
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { AuthContext } from "../context/AuthContext";
const isTablet = width >= 768;

const BotonWhatsapp = () => {
  const {guardarMensaje, mostrarAlerta} = useContext(AuthContext)
  const openWhatsApp = () => {
    const phoneNumber = "+593995129878";
    const message = "Hola 👋, quisiera agendar una cita con ustedes";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    Linking.openURL(url).catch((err) => {
      guardarMensaje("Error al intentar abrir WhatsApp")
      mostrarAlerta(true)
      console.error("Error al intentar abrir WhatsApp", err);
    });
  };

  return (
   <Button
   mode="elevated"
   onPress={openWhatsApp}
   labelStyle={globalStyles.botonWhatsapp}
   style={{borderRadius:moderateScale(15), marginVertical:verticalScale(8)}}
   icon={()=>( <MaterialCommunityIcons
   name='whatsapp'
   color='#000'
   size={isTablet?scale(10):scale(16)}
   />)}
   contentStyle={globalStyles.contentBotonWhatsapp}
   buttonColor='#B7D5CF'
   textColor="#000"
   >Agendar Cita</Button>
  );
};

export default BotonWhatsapp;

import { CurrentRenderContext } from '@react-navigation/native';
import {StyleSheet} from 'react-native';
const globalStyles = StyleSheet.create({
  contenedor: {
    //toma todo el espacio disponible en la pantalla
    flex: 1,
  },
  contenidoInicio: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: '2.5%',
    flex: 1,
  },
  input: {
    marginBottom: 30,
    backgroundColor: 'transparent',
  },
  tituloInicio:{
    textAlign:'center',
    marginBottom:20,
    fontSize:34,
    fontWeight:'bold'
  },
  contenidoRecuperar: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: '2.5%',
    flex: 1,
  },
  contentenidoTarjeta:{
    backgroundColor:'#fff'
  }
});

export default globalStyles;

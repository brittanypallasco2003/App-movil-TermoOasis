import {StyleSheet} from 'react-native';
const globalStyles = StyleSheet.create({
  contenedor: {
    //toma todo el espacio disponible en la pantalla
    flex: 1,
    flexDirection:'column',
    justifyContent:'flex-start',
    paddingHorizontal: 10,
    alignItems:'center'
  },
  input: {
    marginBottom: 30,
    backgroundColor: 'transparent',
  },
  tituloInicio:{
    textAlign:'center',
    marginVertical:13,
    fontSize:34,
    padding:5

  },
  contenidoRecuperar: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: '2.5%',
    flex: 1,
  },
  contentenidoTarjeta:{
    backgroundColor:'#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    padding:20
  }
});

export default globalStyles;

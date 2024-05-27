import { LexendExa_500Medium, LexendExa_600SemiBold, LexendExa_700Bold } from "@expo-google-fonts/lexend-exa";
import { StyleSheet } from "react-native";
const globalStyles = StyleSheet.create({
  contenedor: {
    //toma todo el espacio disponible en la pantalla
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  inputInicio: {
    marginBottom: 30,
    backgroundColor: "transparent",
    fontSize: 13,
  },
  tituloInicio: {
    textAlign: "center",
    marginVertical: 13,
    fontSize: 35,
    padding: 5,
  },
  contenedorRestablecer: {
    flex: 1,
  },
  contentScroll: {
    flexGrow: 1,
    justifyContent: "center",
  },
  contentenidoTarjeta: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginHorizontal: 20,
    paddingHorizontal: 22,
  },
  inputRestablecer: {
    backgroundColor: "transparent",
    fontSize: 13,
    marginTop: 20,
  },
  botonTexto: {
    fontFamily: "Quicksand_600SemiBold",
    fontSize: 13,
  },
  imageLoader: {
    height: 90,
    aspectRatio: 1,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 45,
  },
  cuadroAlerta: {
    backgroundColor: "#fff",
    borderRadius: 15,
    borderColor: "#fff",
  },
  contenedorCitas: {
    flex: 1,
    flexDirection:'column',
    justifyContent:'center',
  },
  calendarStyles: {
    borderRadius: 15,
    marginHorizontal:20,
    paddingVertical:13,
    borderWidth:1,
  },
  tituloCitas:{
    fontFamily:'LexendExa_700Bold',
    fontSize:22,
    textAlign:'center'
  },
  buttonSeg:{
    fontFamily:'Quicksand_600SemiBold',
    fontSize:13
  },
  msgUser:{
    fontFamily:'Quicksand_600SemiBold',
    fontSize:14,
    textAlign:'center',
    marginHorizontal:20,
    lineHeight:23,
    marginTop:15
  },
  contDetalleCita:{
    backgroundColor:'#fff',
    borderWidth:1,
    borderRadius:15,
    paddingHorizontal:20,
    paddingTop:20
  },
  titleDetalle:{
    fontFamily:'LexendExa_700Bold',
    textAlign:'center',
    fontSize:15
  },
  coleccionCitas:{
    marginHorizontal:20,
    marginTop:20,
    flexGrow:1
  },
  labelDetalle:{
    fontFamily:'LexendExa_700Bold',
    fontSize:12,
  },
  textoDetalle:{
    fontFamily:'LexendExa_500Medium',
    fontSize:12
  }

});

export default globalStyles;

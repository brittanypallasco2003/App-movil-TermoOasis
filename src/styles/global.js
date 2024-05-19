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
    fontSize:14,
  },
  tituloInicio: {
    textAlign: "center",
    marginVertical: 13,
    fontSize: 35,
    padding: 5,
  },
  contenedorRestablecer: {
    flex: 1,
    flexDirection: "column",
    justifyContent:'center',
    alignItems:'center'
  },
  contentenidoTarjeta: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginHorizontal:20,
    paddingHorizontal:20,
},
  inputRestablecer: {
    backgroundColor: "transparent",
    fontSize:14,
    marginTop:20
  },
  botonTexto:{
    fontFamily:'Quicksand_600SemiBold',
    fontSize:13
  },
  imageLoader:{
    height: 90,
    aspectRatio: 1,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 45,
  },
  cuadroAlerta:{
    backgroundColor:'#fff',
    borderRadius:15,
    borderColor:"#fff",
  }
});

export default globalStyles;

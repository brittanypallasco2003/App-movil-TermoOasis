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
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  contentenidoTarjeta: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    padding: 23,
    height: "38%",
  },
  inputRestablecer: {
    backgroundColor: "transparent",
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
    marginBottom: 50,
  }
});

export default globalStyles;

import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get("window");
const isTablet = width >= 768;
const globalStyles = StyleSheet.create({
  contenedor: {
    //toma todo el espacio disponible en la pantalla
    flex: 1,
  },
  tituloBienvenida: {
    textAlign: "center",
    fontSize: scale(22),
    color: "#fff",
    marginTop: verticalScale(10),
    //padding:moderateScale(13),
    marginBottom: moderateVerticalScale(15),
  },
  //inputs login
  inputInicio: {
    marginBottom: verticalScale(26),
    backgroundColor: "transparent",
    fontSize: scale(11),
    marginHorizontal: moderateScale(25),
  },
  tituloInicio: {
    fontSize: scale(32),
  },
  //contenedor Termo
  contTI: {
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    marginBottom: verticalScale(20),
  },
  logo: {
    height: verticalScale(170),
    aspectRatio: 1,
    flex:1,
  },
  logoContainer:{
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: verticalScale(25),
    // Propiedad para la sombra en Android
    elevation: moderateScale(10),
    borderRadius: moderateScale(90), // Ajusta según sea necesario
    overflow: 'hidden'
  },
  textos: {
    fontFamily: "Quicksand_600SemiBold",
    fontSize: scale(11.5),
    color: "#fff",
    marginHorizontal: moderateScale(20),
    textAlign: "center",
    marginBottom: verticalScale(27),
  },
  botonTextoLogin: {
    fontFamily: "Quicksand_600SemiBold",
    padding: moderateScale(5),
    fontSize: scale(11.5),
    marginBottom: verticalScale(27),
  },
  LabelbotonContain: {
    fontFamily: "Quicksand_600SemiBold",
    fontSize: scale(11.5),
    paddingVertical: isTablet ? verticalScale(7) : moderateScale(0.5),
  },
  botonLogin: {
    width: "85%",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: moderateScale(15),
    marginBottom: verticalScale(30),
  },

  //PANTALLA RESTABLECER
  contenedorRestablecer: {
    flex: 1,
  },
  textosRestablecer: {
    fontFamily: "Quicksand_600SemiBold",
    fontSize: scale(11.5),
    color: "#fff",
  },
  contentScroll: {
    flexGrow: 1,
    justifyContent: "center",
  },
  titleRestablecer: {
    fontFamily: "LexendExa_600SemiBold",
    fontSize: scale(17),
    marginBottom: verticalScale(15),
    //paddingVertical:verticalScale(10),
    textAlign: "center",
    marginTop: verticalScale(12),
  },
  textoDescripcion: {
    fontFamily: "Quicksand_600SemiBold",
    textAlign: "center",
    marginTop: verticalScale(5),
    fontSize: scale(11.5),
    lineHeight: scale(18),
  },
  contentenidoTarjeta: {
    backgroundColor: "#fff",
    borderRadius: moderateScale(15),
    marginHorizontal: moderateScale(25),
    paddingHorizontal: moderateScale(25),
    paddingVertical: moderateScale(15),
  },
  inputRestablecer: {
    backgroundColor: "transparent",
    fontSize: scale(11),
    marginTop: isTablet ? verticalScale(27) : verticalScale(13),
  },
  //Boton para ir al inicio de sesión
  botonTexto: {
    fontFamily: "Quicksand_600SemiBold",
    paddingTop: isTablet ? verticalScale(8) : verticalScale(0),
    fontSize: scale(11.5),
  },
  //boton recuperar
  botonRecuperar: {
    width: "85%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: verticalScale(40),
    borderRadius: moderateScale(15),
  },
  ContenedorBotonInicio: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: verticalScale(25),
  },
  imageLoader: {
    height: verticalScale(90),
    aspectRatio: 1,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: verticalScale(45),
  },
  cuadroAlerta: {
    backgroundColor: "#fff",
    borderRadius: moderateScale(15),
    borderColor: "#fff",
  },
  contenedorCitas: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  calendarStyles: {
    borderRadius: 15,
    marginHorizontal: 20,
    paddingVertical: 13,
    borderWidth: 1,
    marginBottom: 20,
  },
  tituloCitas: {
    fontFamily: "LexendExa_700Bold",
    fontSize: 22,
    textAlign: "center",
  },
  buttonSeg: {
    fontFamily: "Quicksand_600SemiBold",
    fontSize: 13,
  },
  msgUser: {
    fontFamily: "Quicksand_600SemiBold",
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 20,
    lineHeight: 23,
    marginTop: 15,
  },
  contDetalleCita: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingTop: 15,
    width: 370,
    justifyContent: "center",
    marginLeft: 20,
    paddingBottom: 20,
    marginBottom: 25,
    height: 255,
    marginRight: 15,
  },
  titleDetalle: {
    fontFamily: "LexendExa_700Bold",
    textAlign: "center",
    fontSize: 15,
  },
  // coleccionCitas: {
  //   marginLeft:20,
  //   marginBottom:20,

  // },
  labelDetalle: {
    fontFamily: "LexendExa_700Bold",
    fontSize: 12,
  },
  textoDetalle: {
    fontFamily: "LexendExa_500Medium",
    fontSize: 12,
    flexWrap: "wrap",
  },
  botonCancelar: {
    width: "60%",
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
  },
  espacioDetalle: {
    marginBottom: 10,
  },
  // swiperContainer: {
  //   width: '100%',
  //   flex:1, // Ajusta según sea necesario
  //   marginTop: 20,
  //   height:200,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // swiperSlide: {
  //   width: 350, // Ajusta según sea necesario
  //   paddingHorizontal: 10,
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  paginationStyle: {
    position: "absolute",
    bottom: -4,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
    backgroundColor: "#888",
  },
  paginationDotActive: {
    backgroundColor: "#F27F1B", // Color activo para la paginación
  },
});

export default globalStyles;

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
    flex: 1,
  },
  logoContainer: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: verticalScale(25),
    // Propiedad para la sombra en Android
    elevation: moderateScale(10),
    borderRadius: moderateScale(90), // Ajusta según sea necesario
    overflow: "hidden",
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
  //PANTALLA PERFIL
  contenedorPerfil: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  // ALERTAS
  cuadroAlerta: {
    backgroundColor: "#fff",
    borderRadius: moderateScale(15),
    borderColor: "#fff",
  },
  titleAlert:{
    textAlign:'center',
    fontSize:scale(17),
    fontFamily:'Quicksand_700Bold'
  },
  contentAlert:{
    fontSize:scale(11.5),
    fontFamily:'Quicksand_500Medium',
    lineHeight:scale(18)
  },
  botonAlert:{
    fontFamily:'Quicksand_600SemiBold'
  },
  //Pantalla citas calendario
  contenedorCitas: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  calendarStyles: {
    borderRadius: moderateScale(15),
    marginHorizontal: moderateScale(25),
    paddingVertical: isTablet ? moderateScale(30) : moderateScale(10),
    borderWidth: moderateScale(1),
    marginBottom: 20,
  },
  tituloCitas: {
    fontFamily: "LexendExa_700Bold",
    fontSize: scale(18),
    textAlign: "center",
  },
  buttonSeg: {
    fontFamily: "Quicksand_600SemiBold",
    fontSize: isTablet ? scale(10) : scale(11),
  },
  msgUser: {
    fontFamily: "Quicksand_600SemiBold",
    fontSize: scale(11.5),
    textAlign: "center",
    marginHorizontal: moderateScale(25),
    lineHeight: scale(19),
    marginTop: verticalScale(15),
  },
  contDetalleCita: {
    backgroundColor: "#fff",
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(15),
    paddingHorizontal: moderateScale(20),
    paddingTop: verticalScale(25),
    width:moderateScale(339),
    justifyContent: "center",
    marginLeft: 20,
    paddingBottom: verticalScale(25),
    marginBottom: verticalScale(25),
    height: verticalScale(200),
    marginRight: 15,
  },
  titleDetalle: {
    fontFamily: "LexendExa_700Bold",
    textAlign: "center",
    fontSize: isTablet? scale(11.5):scale(13),
  },
  // coleccionCitas: {
  //   marginLeft:20,
  //   marginBottom:20,

  // },
  labelDetalle: {
    fontFamily: "LexendExa_700Bold",
    fontSize: isTablet? scale(10):scale(11),
  },
  textoDetalle: {
    fontFamily: "LexendExa_500Medium",
    fontSize:isTablet? scale(9): scale(11),
    flexWrap: "wrap",
  },
  botonCancelar: {
    width: "60%",
    borderRadius:moderateScale(15),
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
  },
  espacioDetalle: {
    marginBottom: verticalScale(10),
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
    bottom: verticalScale(-10),
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  paginationDot: {
    width: moderateScale(8),
    height: moderateScale(8),
    borderRadius: moderateScale(4),
    marginHorizontal: moderateScale(2),
    backgroundColor: "#888",
  },
  paginationDotActive: {
    backgroundColor: "#F27F1B", // Color activo para la paginación
  },
});

export default globalStyles;

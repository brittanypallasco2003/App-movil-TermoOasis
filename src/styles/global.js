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
    fontFamily:'Quicksand_600SemiBold',
    marginHorizontal: moderateScale(25),
    paddingBottom:verticalScale(6),
    borderBottomWidth:moderateScale(1),
    borderBottomColor:'#F27F1B',
    color:'#fff'
  },
  tituloInicio: {
    fontSize: scale(32),
  },
  contenedorInputPass:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginHorizontal:moderateScale(25),
    marginBottom:verticalScale(26),
        borderBottomWidth:moderateScale(1),
    borderBottomColor:'#F27F1B'
  },
  inputPass:{
    fontSize:scale(11),
    fontFamily:'Quicksand_600SemiBold',
    flex:1,
    marginLeft:moderateScale(15)
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
    elevation: moderateScale(10),
    borderRadius: moderateScale(90),
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
    fontFamily:'Quicksand_600SemiBold',
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
    width: isTablet ? "70%" : "87%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  titleAlert: {
    textAlign: "center",
    fontSize: isTablet ? scale(12) : scale(17),
    fontFamily: "Quicksand_700Bold",
  },
  contentAlert: {
    fontSize: isTablet ? scale(9) : scale(11.5),
    fontFamily: "Quicksand_500Medium",
    lineHeight: isTablet ? scale(17) : scale(18),
    textAlign: "left",
  },

  botonAlert: {
    fontFamily: "Quicksand_600SemiBold",
    fontSize: isTablet ? scale(9) : scale(12),
    paddingVertical: isTablet ? moderateScale(5) : moderateScale(0),
  },
  //Pantalla citas calendario
  contenedorCitas: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  calendarStyles: {
    borderRadius: moderateScale(15),
    marginHorizontal: moderateScale(25),
    paddingBottom: isTablet ? verticalScale(20) : verticalScale(10),
    borderWidth: moderateScale(1),
    paddingTop: isTablet ? verticalScale(10) : verticalScale(8),
    marginBottom: verticalScale(20)
  },
  tituloCitas: {
    fontFamily: "LexendExa_700Bold",
    fontSize: isTablet ? scale(17) : scale(18),
    textAlign: "center",
    //marginBottom:verticalScale(20)
  },
  buttonSeg: {
    fontFamily: "Quicksand_600SemiBold",
    fontSize: isTablet ? scale(9) : scale(11),
  },
  msgUser: {
    fontFamily: "Quicksand_600SemiBold",
    fontSize: isTablet ? scale(10) : scale(11.5),
    textAlign: "center",
    marginHorizontal: moderateScale(23),
    lineHeight: scale(19),
    marginTop: verticalScale(15),
  },
  //DETALLE DE CITA
  contPrincipalDetalle: {
    flex:1,
    width: isTablet ? moderateScale(440) : moderateScale(360),
    marginLeft:'auto',
    marginRight:'auto',
    marginBottom:verticalScale(20),
    justifyContent:'center',
    alignItems:'center'
    
  },
  contDetalleCita: {
    flex:1,
    backgroundColor: "#fff",
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(15),
    paddingHorizontal: moderateScale(20),
    paddingTop: verticalScale(15),
    // width,
    width: isTablet ? moderateScale(410) : moderateScale(320),
    // width: isTablet ? moderateScale(340) : moderateScale(330),
    marginHorizontal: isTablet ? moderateScale(15) : moderateScale(20),
    justifyContent: "center",
    paddingBottom: verticalScale(15),
    marginBottom: verticalScale(25),
    // height: isTablet? verticalScale(210):verticalScale(260), NO DESCOMENTAR ESTO, la altura se ajusta sola
  },
  titleDetalle: {
    fontFamily: "LexendExa_700Bold",
    textAlign: "center",
    fontSize: isTablet ? scale(10) : scale(13),
  },
  labelDetalle: {
    fontFamily: "LexendExa_700Bold",
    fontSize: isTablet ? scale(9.5) : scale(11),
  },
  textoDetalle: {
    fontFamily: "LexendExa_500Medium",
    fontSize: isTablet ? scale(9) : scale(11),
    flexWrap: "wrap",
  },
  //BOTON CANCELAR
  botonCancelar: {
    width: isTablet? "45%":"60%",
    borderRadius: moderateScale(15),
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
  },
  LabelbotonCancelar:{
    fontFamily: "Quicksand_600SemiBold", fontSize: isTablet? scale(9):scale(11)
  },
  contentBotonCancelar:{
    paddingVertical: isTablet ? moderateScale(4) : moderateScale(0),
  },
  espacioDetalle: {
    marginBottom: verticalScale(10),
  },
  // swiperContainer: {
  //   width: '100%',
  //   flex:1,
  //   marginTop: 20,
  //   height:200,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // swiperSlide: {
  //   width: 350,
  //   paddingHorizontal: 10,
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  paginationStyle: {
    position: "absolute",
    bottom: verticalScale(-8),
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
    marginHorizontal: moderateScale(3),
    backgroundColor: "#888",
  },
  paginationDotActive: {
    backgroundColor: "#F27F1B",
  },
  flatlistPacientes: {
    height: isTablet ? verticalScale(55) : verticalScale(70),
    marginHorizontal:moderateScale(25),
    // marginVertical:isTablet?verticalScale(5):verticalScale(8)
  },
  logoAppbar: {
    height: isTablet ? verticalScale(30) : verticalScale(40),
    aspectRatio: 1,
    flex: 1,
  },
  logoContainerAppBar: {
    marginLeft: "auto",
    marginRight: "auto",
    elevation: moderateScale(10),
    borderRadius: moderateScale(90),
    overflow: "hidden",
    marginVertical: verticalScale(8),
  },
  botonWhatsapp: {
    fontFamily: isTablet ? "Quicksand_600SemiBold" : "Quicksand_700Bold",
    fontSize: isTablet ? scale(8.5) : scale(11),
    // paddingVertical: isTablet ? moderateScale(2) : moderateScale(0.5),
    // paddingHorizontal: isTablet?moderateScale(5):moderateScale(3),
    //marginHorizontal:moderateScale(10)
  },
  contentBotonWhatsapp: {
    paddingHorizontal: moderateScale(5),
    paddingVertical: isTablet ? moderateScale(3) : moderateScale(0),
  },
  //APPBAR DOCTOR
  appBarTitleDoctor:{
    fontFamily:'Quicksand_700Bold',
    color:'#B7D5CF',
    fontSize:isTablet?scale(14):scale(17),
    paddingVertical: isTablet?verticalScale(6):verticalScale(1)
  },
  searchbarInputSt:{
    fontFamily:'Quicksand_700Bold',color:'#fff',
    fontSize:isTablet?scale(11):scale(15),
  },
//RESULTADO DEL BUSCADOR
titleStyleListResult:{
  fontFamily:'Quicksand_600SemiBold',
  fontSize:isTablet?scale(10):scale(13)
},

titleStListItem:{
  fontFamily: isTablet?'Quicksand_500Medium':'Quicksand_600SemiBold',
  fontSize:isTablet?scale(9.5):scale(12.5)
},
descripListItem:{
  fontFamily: isTablet?'Quicksand_400Regular':'Quicksand_500Medium',
  fontSize:isTablet?scale(8):scale(11)
}

  
});

export default globalStyles;

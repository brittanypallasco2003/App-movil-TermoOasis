import React, { useState, useContext } from "react";
import { Searchbar, useTheme } from "react-native-paper";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { CitasContext } from "../context/CitasContext";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import globalStyles from "../styles/global";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");
const isTablet = width >= 768;

const SearchBarComp = () => {
  const { searchVisible, setSearchVisible,buscarPacientes } = useContext(CitasContext);
  const [nombrePaciente, setNombrePaciente] = useState("");
  const theme = useTheme();

  const buscandoPacienteInput = (busqueda) => {
    setNombrePaciente(busqueda)
    buscarPacientes(busqueda || "")
  }
  
  return (
    <Searchbar
      icon={() => (
        <MaterialCommunityIcons
          name="magnify"
          color="#fff"
          size={isTablet ? scale(13.5) : scale(18)}
        />
      )}
      clearIcon={nombrePaciente.length>0?() => (
        <MaterialCommunityIcons
          name="close"
          color="#fff"
          size={isTablet ? scale(13.5) : scale(18)}
        />
      ):null}
      traileringIcon={nombrePaciente.length===0?() => (
        <MaterialCommunityIcons
          name="close"
          color="#fff"
          size={isTablet ? scale(13.5) : scale(18)}
        />
      ):null}
      inputStyle={globalStyles.searchbarInputSt}
      style={{
        flex:1,
        paddingHorizontal: moderateScale(20),
        //borderColor: "#B7D5CF",
        backgroundColor: "#267373",
        //borderWidth: moderateScale(1),
        marginHorizontal:moderateScale(25),
        // // marginTop:verticalScale(10),
        // height:isTablet?verticalScale(30):verticalScale(40),
      }}
      placeholder="Paciente..."
      onTraileringIconPress={() => setSearchVisible(false)}
      onChangeText={(texto) => {buscandoPacienteInput(texto)
       }}
      value={nombrePaciente}
      onClearIconPress={() => {
        setSearchVisible(false);
        buscandoPacienteInput('')
      }}
    />
  );
};

export default SearchBarComp;

import React, { useState, useContext } from "react";
import { Searchbar, useTheme } from "react-native-paper";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { CitasContext } from "../context/CitasContext";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import globalStyles from "../styles/global";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");
const isTablet = width >= 768;

const SearchBarComp = ({ searchQuery, onChangeSearch }) => {
  const { searchVisible, setSearchVisible } = useContext(CitasContext);
  const theme = useTheme();
  return (
    <Searchbar
      icon={() => (
        <MaterialCommunityIcons
          name="magnify"
          color="#fff"
          size={isTablet ? scale(13.5) : scale(18)}
        />
      )}
      clearIcon={() => (
        <MaterialCommunityIcons
          name="close"
          color="#fff"
          size={isTablet ? scale(13.5) : scale(18)}
        />
      )}
      traileringIcon={() => (
        <MaterialCommunityIcons
          name="close"
          color="#fff"
          size={isTablet ? scale(13.5) : scale(18)}
        />
      )}
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
      onChangeText={onChangeSearch}
      value={searchQuery}
      onClearIconPress={() => {
        setSearchVisible(false);
        onChangeSearch("");
      }}
    />
  );
};

export default SearchBarComp;

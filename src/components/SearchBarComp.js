import React, { useState, useContext } from 'react';
import { Searchbar, useTheme } from 'react-native-paper';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { CitasContext } from '../context/CitasContext';

const SearchBarComp = ({ searchQuery, onChangeSearch }) => {
  const {searchVisible,setSearchVisible} = useContext (CitasContext)
  const theme = useTheme();
  return (
    <Searchbar
    icon={'magnify'}
    iconColor={'#fff'}
    rippleColor={theme.colors.primary}
    inputStyle={{fontFamily:'Quicksand_700Bold',color:theme.colors.primary, fontSize:scale(15)}}
    style={{paddingHorizontal:moderateScale(20), paddingVertical:verticalScale(4),}}
      placeholder="Paciente..."
      onChangeText={onChangeSearch}
      value={searchQuery}
      onClearIconPress={() => {setSearchVisible(false)
         onChangeSearch('')}}
    />
  );
};

export default SearchBarComp;

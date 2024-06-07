import { View, Text, Image } from 'react-native'
import React from 'react'
import globalStyles from '../styles/global'

const Logo = () => {
  return (
    <View style={globalStyles.logoContainerAppBar}>
    <Image
      style={globalStyles.logoAppbar}
      source={require("../../assets/logoTermo.png")}
    />
  </View>
  )
}

export default Logo
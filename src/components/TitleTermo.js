import { View, Text } from 'react-native'
import React from 'react'
import { Headline } from 'react-native-paper'
import globalStyles from '../styles/global'
import { scale } from "react-native-size-matters";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");
const isTablet = width >= 768;
const TitleTermo = () => {
  return (
    <Headline style={{fontSize:isTablet? scale(13):scale(18)}}>
    <Text style={{ color: "#A8BF56", fontFamily: "LexendExa_700Bold" }}>
      Termo{" "}
    </Text>
    <Text style={{ color: "#F27F1B", fontFamily: "LexendExa_700Bold" }}>
      Oasis
    </Text>
  </Headline>
  )
}

export default TitleTermo
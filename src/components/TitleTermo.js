import { View, Text } from 'react-native'
import React from 'react'
import { Headline } from 'react-native-paper'
import globalStyles from '../styles/global'

const TitleTermo = () => {
  return (
    <Headline style={{fontSize:20}}>
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
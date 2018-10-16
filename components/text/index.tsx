import React from 'react'
import { StyleSheet, Text as RNText } from 'react-native'
import varibles from '../style/themes/default'

export interface ITextProps {
  style?: any
  children?: any
}
const Text = ({ style, children, ...others }: ITextProps) => {
  const styleObj: any = StyleSheet.flatten(style)
  const fontSize = styleObj.fontSize || varibles.baseFontSize
  const lineHeight = styleObj.lineHeight || fontSize * varibles.baseLineHeight

  return (
    <RNText style={[style, { fontSize, lineHeight }]} {...others}>
      {children}
    </RNText>
  )
}

export default Text

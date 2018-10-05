import React from 'react'
import { StyleSheet, Text as RNText } from 'react-native'
import V from '../style/themes/weui'

export interface ITextProps {
  style?: any
  children?: any
}
const Text = ({ style, children, ...others }: ITextProps) => {
  const styleObj: any = StyleSheet.flatten(style)
  const fontSize = styleObj.fontSize || V.baseFontSize
  const lineHeight = styleObj.lineHeight || fontSize * V.baseLineHeight

  return (
    <RNText style={[style, { fontSize, lineHeight }]} {...others}>
      {children}
    </RNText>
  )
}

export default Text

import React from 'react'
import { StyleSheet, Text as RNText } from 'react-native'
import { themeStore } from '../theme-store';
const { themeVars } = themeStore;

export interface ITextProps {
  style?: any
  children?: any
}
const Text = ({ style, children, ...others }: ITextProps) => {
  const styleObj: any = StyleSheet.flatten(style)
  const fontSize = styleObj.fontSize || themeVars.baseFontSize
  const lineHeight = styleObj.lineHeight || fontSize * themeVars.baseLineHeight

  return (
    <RNText style={[style, { fontSize, lineHeight }]} {...others}>
      {children}
    </RNText>
  )
}

export default Text

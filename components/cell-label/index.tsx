import React from 'react'
import { StyleSheet, Text, TextProps, ViewStyle } from 'react-native'
import themeVars from '../style/themes/default'

const styles = StyleSheet.create({
  label: {
    width: themeVars.CellLabelWidth,
    fontSize: themeVars.CellFontSize,
    marginTop: (themeVars.CellLineHeight - themeVars.CellFontSize) / 2,
    marginBottom: (themeVars.CellLineHeight - themeVars.CellFontSize) / 2,
  },
})

export interface CellLabelProps extends TextProps {
  style?: ViewStyle
  children?: string
}

export interface CellLabelState {}

function CellLabel({ style, children, ...others }: CellLabelProps) {
  // 最大是4
  // const textLength = children!.length > 4 ?children!.length:4
  return (
    <Text style={[styles.label, style]} numberOfLines={1} {...others}>
      {children}
    </Text>
  )
}

export default CellLabel

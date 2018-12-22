import React from 'react'
import { StyleSheet, Text, TextProps, ViewStyle } from 'react-native'
import theme from '../style/themes/default'

const styles = StyleSheet.create({
  label: {
    width: theme.CellLabelWidth,
    fontSize: theme.CellFontSize,
    marginTop: (theme.CellLineHeight - theme.CellFontSize) / 2,
    marginBottom: (theme.CellLineHeight - theme.CellFontSize) / 2,
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
    <Text
      style={[styles.label, style]}
      numberOfLines={1} // numberOfLines 固定为 1
      {...others}
    >
      {children}
    </Text>
  )
}

export default CellLabel

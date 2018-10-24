import React from 'react'
import { StyleSheet, Text, ViewPropTypes, ViewStyle } from 'react-native'
import themeVars from '../style/themes/default'

const styles = StyleSheet.create({
  label: {
    width: themeVars.CellLabelWidth,
    fontSize: themeVars.CellFontSize,
    marginTop: (themeVars.CellLineHeight - themeVars.CellFontSize) / 2,
    marginBottom: (themeVars.CellLineHeight - themeVars.CellFontSize) / 2,
  },
})

export interface CellLabelProps {
  style?: ViewStyle
  children?: string
}

export interface CellLabelState {}

export default class CellLabel extends React.Component<
  CellLabelProps,
  CellLabelState
> {
  public render() {
    const { style, children, ...others } = this.props
    // 最小是4
    // const textLength = children!.length > 4 ?children!.length:4
    return (
      <Text style={[styles.label, style]} numberOfLines={1} {...others}>
        {children}
      </Text>
    )
  }
}

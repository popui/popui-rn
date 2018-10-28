// import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, TextProps, Text } from 'react-native'
import themeVars from '../style/themes/default'

export interface CellItemBodyTextPropsType extends TextProps {
  children?: any
  style?: any
  error?: boolean
}

const styles = StyleSheet.create({
  cellText: {
    fontSize: themeVars.CellFontSize,
    lineHeight: themeVars.CellFontSize * 1.4,
    textAlignVertical: 'center',
  },
  textError: {
    color: themeVars.ColorWarn,
  },
})

const CellItemText = ({
  children,
  style,
  error,
  ...others
}: CellItemBodyTextPropsType) => (
  <Text
    style={[styles.cellText, error ? styles.textError : null, style]}
    {...others}
  >
    {children}
  </Text>
)

export default CellItemText

// import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, TextProps, Text } from 'react-native'
import theme from '../style/themes/default'

export interface CellTextPropsType extends TextProps {
  children?: any
  style?: any
  numberOfLines?: number
}

const styles = StyleSheet.create({
  cellText: {
    fontSize: theme.CellFontSize,
    marginTop: (theme.CellLineHeight - theme.CellFontSize) / 2,
    marginBottom: (theme.CellLineHeight - theme.CellFontSize) / 2,
  },
})

const CellText = ({
  children,
  style,
  numberOfLines = 1, // 默认单行
  ...others
}: CellTextPropsType) => (
  <Text
    style={[styles.cellText, style]}
    numberOfLines={numberOfLines}
    {...others}
  >
    {children}
  </Text>
)

export default CellText

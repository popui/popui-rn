// import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet,TextProps,Text } from 'react-native'
import themeVars from '../style/themes/default'

export interface CellItemBodyTextPropsType extends TextProps {
  children?: any
  style?: any
}

const styles = StyleSheet.create({
  cellText: {
    fontSize: themeVars.CellFontSize,
    lineHeight:themeVars.CellFontSize*1.4,
    textAlignVertical: 'center',
  },
})

const CellItemText = ({
  children,
  style,
  ...others
}: CellItemBodyTextPropsType) => (
  <Text
    style={[styles.cellText, style]}
    {...others}
  >
    {children}
  </Text>
)

export default CellItemText

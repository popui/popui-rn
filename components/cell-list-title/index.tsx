// import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, Text, TextStyle } from 'react-native'
import themeVars from '../style/themes/default'

const defaultStyles = StyleSheet.create({
  cellsTitle: {
    marginTop:
      themeVars.CellTipsFontSize * 0.77 +
      (14 * themeVars.baseLineHeight - 14) * 0.5,
    marginBottom:
      themeVars.CellTipsFontSize * 0.3 +
      (14 * themeVars.baseLineHeight - 14) * 0.5,
    paddingHorizontal: themeVars.CellGapH,
    fontSize: themeVars.CellTipsFontSize,
    color: themeVars.TextColorGray,
  } as TextStyle,
})

const CellsTitle = ({
  children,
  style,
  styles: stylesInProps,
  numberOfLines = 1, // 默认单行
  ...others
}: CellsTitlePropsType) => {
  const styles = stylesInProps || defaultStyles
  return (
    <Text
      style={[styles.cellsTitle, style]}
      numberOfLines={numberOfLines}
      {...others}
    >
      {children}
    </Text>
  )
}
export interface CellsTitlePropsType {
  children?: any
  styles?: any
  style?: any
  numberOfLines?: number
}

export default CellsTitle

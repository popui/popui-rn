// import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, Text, TextStyle } from 'react-native'
import theme from '../style/themes/default'

const defaultStyles = StyleSheet.create({
  cellsTitle: {
    marginTop:
      theme.CellTipsFontSize * 0.77 +
      (14 * theme.baseLineHeight - 14) * 0.5,
    marginBottom:
      theme.CellTipsFontSize * 0.3 +
      (14 * theme.baseLineHeight - 14) * 0.5,
    paddingHorizontal: theme.CellGapH,
    fontSize: theme.CellTipsFontSize,
    color: theme.TextColorGray,
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

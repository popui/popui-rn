import React from 'react'
import { Text } from 'react-native'
import { create } from '../style/utils/StyleSheet'
import theme from '../style/themes/default'

const defaultStyles = create({
  cellsTips: {
    paddingHorizontal: theme.CellGapH,
    fontSize: theme.CellTipsFontSize,
    color: theme.TextColorGray,
    marginTop: theme.CellTipsFontSize * 0.3,
    lineHeight: theme.CellTipsFontSize * theme.baseLineHeight,
    android: {
      lineHeight: Math.round(
        theme.CellTipsFontSize * theme.baseLineHeight
      ),
    },
    // backgroundColor: theme.CellBg,
  },
})

const CellsTips = ({
  children,
  style,
  styles: stylesInProps,
  numberOfLines = 1, // 默认单行
  ...others
}: CellsTipsPropsType) => {
  const styles = stylesInProps || defaultStyles
  return (
    <Text
      style={[styles.cellsTips, style]}
      numberOfLines={numberOfLines}
      {...others}
    >
      {children}
    </Text>
  )
}

export interface CellsTipsPropsType {
  children?: any
  styles?: any
  style?: any
  numberOfLines?: number
}

export default CellsTips

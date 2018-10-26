import React from 'react'
import { Text } from 'react-native'
import { create } from '../style/utils/StyleSheet'
import themeVars from '../style/themes/default'

const defaultStyles = create({
  cellsTips: {
    paddingHorizontal: themeVars.CellGapH,
    fontSize: themeVars.CellTipsFontSize,
    color: themeVars.TextColorGray,
    marginTop: themeVars.CellTipsFontSize * 0.3,
    lineHeight: themeVars.CellTipsFontSize * themeVars.baseLineHeight,
    android: {
      lineHeight: Math.round(
        themeVars.CellTipsFontSize * themeVars.baseLineHeight
      ),
    },
    // backgroundColor: themeVars.CellBg,
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

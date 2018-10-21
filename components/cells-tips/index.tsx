import PropTypes from 'prop-types'
import React from 'react'
import { Text } from 'react-native'
import { create } from '../style/utils/StyleSheet'
import variables from '../style/themes/default'

const styles = create({
  cellsTips: {
    paddingLeft: themeVars.CellGapH,
    paddingRight: themeVars.CellGapH,
    fontSize: themeVars.CellTipsFontSize,
    color: themeVars.TextColorGray,
    marginTop: themeVars.CellTipsFontSize * 0.3,
    lineHeight: themeVars.CellTipsFontSize * themeVars.baseLineHeight,
    android: {
      lineHeight: Math.round(themeVars.CellTipsFontSize * themeVars.baseLineHeight)
    }
  }
})

const CellsTips = ({ children, style, ...others }) => (
  <Text style={[styles.cellsTips, style]} {...others}>
    {children}
  </Text>
)

CellsTips.propTypes = {
  children: PropTypes.node,
  style: Text.propTypes.style
}

export default CellsTips

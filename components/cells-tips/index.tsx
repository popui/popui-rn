import PropTypes from 'prop-types'
import React from 'react'
import { Text } from 'react-native'
import { create } from '../style/utils/StyleSheet'
import varibles from '../style/themes/default'

const styles = create({
  cellsTips: {
    paddingLeft: varibles.CellGapH,
    paddingRight: varibles.CellGapH,
    fontSize: varibles.CellTipsFontSize,
    color: varibles.TextColorGray,
    marginTop: varibles.CellTipsFontSize * 0.3,
    lineHeight: varibles.CellTipsFontSize * varibles.baseLineHeight,
    android: {
      lineHeight: Math.round(varibles.CellTipsFontSize * varibles.baseLineHeight)
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

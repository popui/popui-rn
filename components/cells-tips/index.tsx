import PropTypes from 'prop-types'
import React from 'react'
import { Text } from 'react-native'
import { create } from '../style/utils/StyleSheet'
import variables from '../style/themes/default'

const styles = create({
  cellsTips: {
    paddingLeft: variables.CellGapH,
    paddingRight: variables.CellGapH,
    fontSize: variables.CellTipsFontSize,
    color: variables.TextColorGray,
    marginTop: variables.CellTipsFontSize * 0.3,
    lineHeight: variables.CellTipsFontSize * variables.baseLineHeight,
    android: {
      lineHeight: Math.round(variables.CellTipsFontSize * variables.baseLineHeight)
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

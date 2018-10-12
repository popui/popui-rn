import PropTypes from 'prop-types'
import React from 'react'
import { Text } from 'react-native'
import { create } from '../style/utils/StyleSheet'
import V from '../style/themes/weui'

const styles = create({
  cellsTips: {
    paddingLeft: V.CellGapH,
    paddingRight: V.CellGapH,
    fontSize: V.CellTipsFontSize,
    color: V.TextColorGray,
    marginTop: V.CellTipsFontSize * 0.3,
    lineHeight: V.CellTipsFontSize * V.baseLineHeight,
    android: {
      lineHeight: Math.round(V.CellTipsFontSize * V.baseLineHeight)
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

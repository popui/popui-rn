import PropTypes from 'prop-types'
import React from 'react'
import { observer } from 'mobx-react';
import { Text } from 'react-native'
import { create } from '../style/utils/StyleSheet'
import { themeStore } from '../theme-store';
const { themeVars } = themeStore;

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

export default observer(CellsTips)

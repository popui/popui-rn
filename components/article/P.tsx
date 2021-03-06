import PropTypes from 'prop-types'
import React from 'react'
import { Text, ViewPropTypes } from 'react-native'
import { create } from '../style/utils/StyleSheet'
import themeVars from '../style/themes/default'

const styles = create({
  p: {
    fontSize: 15,
    marginBottom: 15 * 0.8,
    lineHeight: 15 * themeVars.baseLineHeight,
    android: {
      lineHeight: Math.round(15 * themeVars.baseLineHeight),
    },
  },
})

const P = ({ style, children }) => (
  <Text style={[styles.p, style]}>{children}</Text>
)

P.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node,
}

export default P

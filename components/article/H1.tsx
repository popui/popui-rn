import PropTypes from 'prop-types'
import React from 'react'
import { Text } from 'react-native'
import { create } from '../style/utils/StyleSheet'
import themeVars from '../style/themes/default'

const styles = create({
  h1: {
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 18 * 0.9,
    lineHeight: 18 * themeVars.baseLineHeight,
    android: {
      lineHeight: Math.round(18 * themeVars.baseLineHeight),
    },
  },
})

const H1 = ({ style, children }) => (
  <Text style={[styles.h1, style]}>{children}</Text>
)

H1.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node,
}

export default H1

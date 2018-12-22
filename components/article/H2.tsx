import PropTypes from 'prop-types'
import React from 'react'
import { Text, ViewPropTypes } from 'react-native'
import { create } from '../style/utils/StyleSheet'
import theme from '../style/themes/default'

const styles = create({
  h2: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 16 * 0.34,
    lineHeight: 16 * theme.baseLineHeight,
    android: {
      lineHeight: Math.round(16 * theme.baseLineHeight),
    },
  },
})

const H2 = ({ style, children }) => (
  <Text style={[styles.h2, style]}>{children}</Text>
)

H2.propTypes = {
  style: Text.propTypes.style,
  children: PropTypes.node,
}

export default H2

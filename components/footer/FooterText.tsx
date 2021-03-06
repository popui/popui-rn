import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, Text, ViewPropTypes } from 'react-native'
import themeVars from '../style/themes/default'

const TextFontSize = 12
const styles = StyleSheet.create({
  footerText: {
    color: themeVars.TextColorGray,
    marginLeft: 0.34 * TextFontSize,
    marginRight: 0.34 * TextFontSize,
    fontSize: TextFontSize,
  },
})

const FooterText = props => {
  const { children, style, ...others } = props
  return (
    <Text style={[styles.footerText, style]} {...others}>
      {children}
    </Text>
  )
}

FooterText.propTypes = {
  children: PropTypes.node,
  style: Text.propTypes.style,
  others: PropTypes.object,
}

export default FooterText

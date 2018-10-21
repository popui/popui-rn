import PropTypes from 'prop-types'
import React from 'react'
import { observer } from 'mobx-react';
import { StyleSheet, Text, ViewPropTypes } from 'react-native'
import { themeStore } from '../theme-store';
const { themeVars } = themeStore;

const styles = StyleSheet.create({
  badge: {
    color: '#FFFFFF',
    fontSize: 12,
    paddingLeft: 3.5,
    paddingRight: 3.5,
    lineHeight: 14,
    paddingTop: 1,
    textAlign: 'center',
    backgroundColor: themeVars.ColorWarn,
    borderWidth: 1.5,
    borderColor: 'transparent',
    borderRadius: 8.5,
    overflow: 'hidden'
  },
  default: {},
  header: {
    position: 'absolute',
    top: 0 - 12 * 0.4,
    right: 0 - 12 * 0.4
  },
  body: {
    marginLeft: 5
  },
  footer: {
    marginLeft: 5,
    marginRight: 5
  },
  dot: {
    borderRadius: 5, // 12 * 0.6 * 0.5
    width: 10, // 12 * 0.6
    height: 10 // 12 * 0.6
  }
})

function Badge({
  dot = false,
  preset = 'default',
  style,
  children,
  ...others
}) {
  const textStyle = [
    styles.badge,
    styles[preset],
    dot ? styles.dot : null,
    style
  ]
  return (
    <Text style={textStyle} {...others}>
      {children}
    </Text>
  )
}

Badge.propTypes = {
  dot: PropTypes.bool,
  preset: PropTypes.oneOf(['default', 'header', 'body', 'footer']),
  style: ViewPropTypes.style,
  children: PropTypes.node
}

export default Badge

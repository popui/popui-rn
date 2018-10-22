import React from 'react'
import { StyleSheet, Text } from 'react-native'
import varibles from '../style/themes/default'
import { CellBadgePropsTypes } from "./PropsType";

const styles = StyleSheet.create({
  badge: {
    color: '#FFFFFF',
    fontSize: 12,
    paddingLeft: 3.5,
    paddingRight: 3.5,
    lineHeight: 14,
    paddingTop: 1,
    textAlign: 'center',
    backgroundColor: varibles.ColorWarn,
    borderWidth: 1.5,
    borderColor: 'transparent',
    borderRadius: 8.5,
    overflow: 'hidden'
  },
  default: {},
  header: {
    position: 'absolute',
    top: -3, // 0 - 12 * 0.4,
    right: -3 // 0 - 12 * 0.4
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

function CellBadge({
  dot = false,
  preset = 'default',
  style,
  children,
  ...others
}:CellBadgePropsTypes) {
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

export default CellBadge

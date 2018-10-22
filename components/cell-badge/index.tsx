import React from 'react'
<<<<<<< HEAD:components/cell-badge/index.tsx
import { StyleSheet, Text } from 'react-native'
import varibles from '../style/themes/default'
import { CellBadgePropsTypes } from "./PropsType";
=======
import { observer } from 'mobx-react';
import { StyleSheet, Text, ViewPropTypes } from 'react-native'
import { themeStore } from '../theme-store';
const { themeVars } = themeStore;
>>>>>>> a49059816e8340e4289dc2e19fac76ed4a60edf2:components/badge2/index.tsx

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

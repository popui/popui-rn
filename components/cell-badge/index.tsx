import React from 'react'
import { CellBadgePropsTypes } from "./PropsType";
import { observer } from 'mobx-react';
import { StyleSheet, Text } from 'react-native'
import plainStyles from './style'
const styles = StyleSheet.create((plainStyles as any))

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

export default observer(CellBadge)

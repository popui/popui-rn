import React from 'react'
import { CellBadgePropsTypes } from "./PropsType";
;
import { StyleSheet, Text } from 'react-native'
import plainStyles from './style'
const styles = StyleSheet.create((plainStyles as any))
// debug
import { createDebug } from '../_util/debug'
const debug = createDebug('popui:CellBadge')

function CellBadge(props:CellBadgePropsTypes) {
  // debug("render",{props})
  const {
    dot = false,
    preset = 'default',
    style,
    children,
    ...others
  } = props
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

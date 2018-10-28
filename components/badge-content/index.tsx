import React from 'react'
import { BadgeContentPropsType } from './PropsType'
import { StyleSheet, Text } from 'react-native'
import plainStyles from './style'
const styles = StyleSheet.create(plainStyles as any)
// debug
// import { createDebug } from '../_util/debug'
// const debug = createDebug('popui:CellBadge')

function BadgeContent(props: BadgeContentPropsType) {
  // debug("render",{props})
  const { dot = false, header,ml,mr, style, children, ...others } = props
  const textStyle = [
    styles.badge,
    dot && styles.dot,
    header&& styles.header,
    ml&& styles.ml,
    mr&& styles.mr,
    style,
  ]
  return (
    <Text style={textStyle} {...others}>
      {children}
    </Text>
  )
}

export default BadgeContent

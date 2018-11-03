import * as React from 'react'
import { StyleSheet } from 'react-native'
import { ToggleIconCirclePropsType } from './PropsType'
import WeuiIcon from '../weui-icon'

const styles = StyleSheet.create({
  icon: {
    fontSize: 23,
  },
  disabled: {
    opacity: 0.5,
  },
})

function ToggleIconCircle({
  checked = false,
  disabled = false,
  style,
  size = 23,
}: ToggleIconCirclePropsType) {
  const iconName = checked ? 'success' : 'circle'
  const iconStyle = [disabled ? styles.disabled : null, style]
  return <WeuiIcon name={iconName} style={iconStyle} size={size} />
}

export default ToggleIconCircle

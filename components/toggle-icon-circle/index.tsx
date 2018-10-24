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

function ToggleIconCircle({ checked = false, disabled = false, style }: ToggleIconCirclePropsType) {
  const iconName = checked ? 'success' : 'circle'
  const iconStyle = [styles.icon, disabled ? styles.disabled : null, style]
  return <WeuiIcon name={iconName} style={iconStyle} />
}

export default ToggleIconCircle

import * as React from 'react'
import { StyleSheet } from 'react-native'
import { MultiSelectIconControlPropsType } from './PropsType'
import WeuiIcon from '../weui-icon'

const styles = StyleSheet.create({
  icon: {
    fontSize: 23,
  },
  disabled: {
    opacity: 0.5,
  },
})

function MultiSelectIconControl({ checked = false, disabled = false, style }: MultiSelectIconControlPropsType) {
  const iconName = checked ? 'success' : 'circle'
  const iconStyle = [styles.icon, disabled ? styles.disabled : null, style]
  return <WeuiIcon name={iconName} style={iconStyle} />
}

export default MultiSelectIconControl

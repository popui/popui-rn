import * as React from 'react'
import { StyleSheet } from 'react-native'
import { RadioPropsType } from './PropsType'
import WeuiIcon from '../weui-icon'

const styles = StyleSheet.create({
  checkbox: {
    fontSize: 23,
  },
  disabled: {
    opacity: 0.5,
  },
})

function Radio({ checked = false, disabled = false, style }: RadioPropsType) {
  const iconName = checked ? 'success' : 'circle'
  const iconStyle = [styles.checkbox, disabled ? styles.disabled : null, style]
  return <WeuiIcon name={iconName} style={iconStyle} />
}

export default Radio

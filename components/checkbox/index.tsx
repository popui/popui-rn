import React from 'react'
import {StyleSheet, View } from 'react-native'
import WeuiIcon from '../weui-icon'
import { CheckBoxPropsType } from './PropsType'
import CheckBoxStyle from './style/index'

const CheckBoxStyles = StyleSheet.create<any>(CheckBoxStyle)

 function CheckBox(props: CheckBoxPropsType) {
  const { disabled, styles = CheckBoxStyles, checked, style } = props
  const colorProps: any = {}
  if (disabled) {
    colorProps.color = '#ADADAD'
  }
  const wrapperStyle = [
    styles.wrapper,
    disabled ? styles.disabled : null,
    style,
  ]
  return (
    <View style={wrapperStyle}>
      {checked && (
        <WeuiIcon name="success_no_circle" size={13} {...colorProps} />
      )}
    </View>
  )
}

export default CheckBox

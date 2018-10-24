import React from 'react'
import {StyleSheet, View } from 'react-native'
import WeuiIcon from '../weui-icon'
import { ToggleIconCheckBoxPropsType } from './PropsType'
import ToggleIconCheckBoxStyle from './style/index'

const ToggleIconCheckBoxStyles = StyleSheet.create<any>(ToggleIconCheckBoxStyle)

 function ToggleIconCheckBox(props: ToggleIconCheckBoxPropsType) {
  const { disabled, styles = ToggleIconCheckBoxStyles, checked, style,size=16,color } = props
  const colorProps: any = {
    color
  }
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
        <WeuiIcon name="success_no_circle" size={size} {...colorProps} />
      )}
    </View>
  )
}

export default ToggleIconCheckBox

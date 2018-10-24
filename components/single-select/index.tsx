import React from 'react'
import {StyleSheet, View } from 'react-native'
import WeuiIcon from '../weui-icon'
import { SingleSelectPropsType } from './PropsType'
import SingleSelectStyle from './style/index'

const SingleSelectStyles = StyleSheet.create<any>(SingleSelectStyle)

export function SingleSelect(props: SingleSelectPropsType) {
  const { disabled, styles = SingleSelectStyles, checked, style } = props
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

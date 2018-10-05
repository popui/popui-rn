import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import WeuiIcon from '../weui-icon'
import V from '../style/themes/weui'

const styles = StyleSheet.create({
  toastWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  toast: {
    width: V.baseFontSize * 7.6,
    height: V.baseFontSize * 7.6,
    backgroundColor: 'rgba(40, 40, 40, 0.75)',
    borderRadius: 5
  },
  toastIcon: {
    marginTop: 22,
    color: '#fff',
    fontSize: 55,
    textAlign: 'center'
  },
  toastContent: {
    marginBottom: 15,
    color: '#fff',
    textAlign: 'center'
  },
  toastLoading: {
    marginTop: 30,
    marginBottom: 15
  }
})

export const Toast = (props: {
  icon: string
  style?: any
  textStyle?: any
  text?: string
  children?: any
}) => {
  const { icon = 'toast', style, textStyle, text, children } = props
  const iconView =
    icon === 'loading' ? (
      <ActivityIndicator
        color="#fff"
        size="large"
        style={styles.toastLoading}
      />
    ) : (
      <WeuiIcon name={icon} style={[styles.toastIcon]} />
    )
  const textView = text ? (
    <Text style={[styles.toastContent, textStyle]}>{text}</Text>
  ) : null
  return (
    <View style={[styles.toast, style]}>
      {iconView}
      {textView}
      {children}
    </View>
  )
}

export default Toast

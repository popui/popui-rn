import React from 'react'
import { ViewStyle, GestureResponderEvent } from 'react-native'

export interface MaskPropsType {
  transparent?: boolean
  style?: ViewStyle
  children?: React.ReactNode
  onPress?: (event: GestureResponderEvent) => void
}

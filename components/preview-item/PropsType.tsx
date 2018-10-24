import React from 'React'
import { ViewStyle } from 'react-native'
export interface PreviewItemPropsType {
  style?: ViewStyle
  children?: React.ReactNode
  preset?: 'header' | 'body'
}

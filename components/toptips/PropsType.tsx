import React from 'React';
import { observer } from 'mobx-react';
import {ViewStyle,TextStyle} from 'react-native';
export interface ToptipsPropsType {
  type?: 'primary' | 'warn' | 'info'
  visible?: boolean
  onShow?: Function
  onClose?: Function
  style?: ViewStyle
  textStyle?: TextStyle
  children?: React.ReactNode
}


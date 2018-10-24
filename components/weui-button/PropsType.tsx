// import React from 'react';

export interface ButtonPropsType {
  style: any
  children: any

  type?: string
  size?: string
  plain?: boolean
  disabled?: boolean
  onPress?: (any) => any
  onPressIn?: (any) => any
  onPressOut?: (any) => any
  onLongPress?: (any) => any
  mainColor?: string
  activeOpacity?: number
  renderWeuiButtonText?: (any) => any
}

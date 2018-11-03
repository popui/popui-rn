// export interface RadioPropsType {
//   defaultChecked?: boolean
//   checked?: boolean
//   disabled?: boolean
//   onChange?: (e: { target: { checked: boolean } }) => void
//   name?: string
//   wrapLabel?: boolean
// }

// export interface RadioItemPropsType extends RadioPropsType {
//   radioProps?: object
//   onClick?: () => any
// }
import React from 'react'

export type onChangeFunction = (params: OnChangeParams) => void
export interface OnChangeParams {
  target: {
    checked: boolean
  }
}
export interface ToggleRowPropsType {
  defaultChecked?: boolean
  checked?: boolean
  disabled?: boolean
  textStyle?: any
  onChange?: onChangeFunction
  styles?: any
  style?: any
  children: (args: ToggleRowChildrenParams) => JSX.Element
  renderIcon?: (renderIconParams: RenderIconParams) => React.ReactNode
}

export interface ToggleRowChildrenParams {
  defaultChecked?: boolean
  checked?: boolean
  disabled?: boolean
  textStyle?: any
  styles?: any
  style?: any
  renderChildren: (children: React.ReactNode) => React.ReactNode
  onPress: (event: any) => void
}

export interface RenderIconParams {
  checked?: boolean
  disabled?: boolean
  style?: any
}

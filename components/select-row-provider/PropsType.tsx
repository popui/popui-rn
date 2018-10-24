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

export type onChangeFunction = (params: OnChangeParams) => void
export interface OnChangeParams {
  target: {
    checked: boolean
  }
}
export interface SelectRowProviderPropsType {
  defaultChecked?: boolean
  checked?: boolean
  disabled?: boolean
  textStyle?: any
  onChange?: onChangeFunction
  styles?: any
  style?: any
  children:(args:SelectRowProviderChildrenParams) => JSX.Element
}

export interface SelectRowProviderChildrenParams {
  defaultChecked?: boolean
  checked?: boolean
  disabled?: boolean
  textStyle?: any
  styles?: any
  style?: any
  renderChildren:()=>any
  onPress:(event:any)=>void
}

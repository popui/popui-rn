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


export interface OnChangeParams {
  target: {
    checked: boolean
  }
}
export interface RadioPropsType {
  defaultChecked?: boolean
  checked?: boolean
  disabled?: boolean
  textStyle?: any
  onChange?: (params: OnChangeParams) => void
}

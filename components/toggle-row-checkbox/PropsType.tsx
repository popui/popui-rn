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
import {onChangeFunction} from '../select-row-provider/PropsType';

export interface SingleSelectPropsType {
  defaultChecked?: boolean
  checked?: boolean
  disabled?: boolean
  textStyle?: any
  onChange?: onChangeFunction
  styles?: any
  style?: any
  children?:React.ReactNode
}


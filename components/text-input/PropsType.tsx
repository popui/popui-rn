import { TextInputProperties, ViewStyle } from 'react-native'

export interface TextInputProps extends TextInputProperties {
  focused?: boolean
  styles?: any
  style?: any
  inputStyle?: any
  clear?: boolean
  onClearPress?: Function
}

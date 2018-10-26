import { ViewStyle } from 'react-native'

export interface CellProps {
  isFirst?: boolean
  access?: boolean
  vcode?: boolean
  error?: boolean
  disabled?: boolean
  children?: React.ReactNode
  style?: ViewStyle
}

export interface CellContentProps {
  access?: boolean
  error?: boolean
  children?: React.ReactNode
}

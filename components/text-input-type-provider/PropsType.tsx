export type InputEventHandler = (value?: string) => void
import { TextInputProperties } from 'react-native'

export interface ChildrenArgs extends TextInputProperties {}

export interface TextInputTypeProviderType {
  type?: 'text' | 'bankCard' | 'phone' | 'password' | 'number' | 'digit'
  value?: string
  maxLength?: number
  children: (args: ChildrenArgs) => React.ReactNode
}

import { CallbackOrActions } from '../dialog/PropsType'
import { IPromptStyle } from './style'

export interface PromotArgs {
  title: React.ReactNode
  message: React.ReactNode
  callbackOrActions: CallbackOrActions<any>
  type: string
  defaultValue: string
  placeholders: string[]
}

export interface PropmptContainerProps {
  title: React.ReactNode
  message?: React.ReactNode
  type?: 'default' | 'login-password' | 'secure-text'
  defaultValue?: string
  actions: CallbackOrActions<any>
  onAnimationEnd?: (visible: boolean) => void
  styles?: IPromptStyle
  placeholders?: string[]
}

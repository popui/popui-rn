import React from 'react'

import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
export interface TextAreaItemPropsType {
  title?: React.ReactNode
  maxLength?: number
  name?: string
  value?: string
  defaultValue?: string
  placeholder?: string
  clear?: boolean
  rows?: number
  count?: number
  error?: boolean
  onErrorPress?: () => void
  onClearPress?: () => void
  autoHeight?: boolean
  editable?: boolean
  disabled?: boolean
  labelNumber?: number
}

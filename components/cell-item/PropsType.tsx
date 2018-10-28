import React, { ReactNode } from 'react'

export interface CellListItemPropsType {
  align?: 'top' | 'middle' | 'bottom'
  disabled?: boolean
  multipleLine?: boolean
  children?: ReactNode
  header?: ReactNode
  body?: ReactNode
  extra?: ReactNode
  arrow?: 'horizontal' | 'down' | 'up' | 'empty' | ''
  wrap?: boolean
  activeStyle?: React.CSSProperties
  error?: boolean
  platform?: 'android' | 'ios'
  bodyStyle?: any
  isLast?: boolean
  footer?: any
}

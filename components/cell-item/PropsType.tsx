import React, { ReactNode } from 'react'

export interface CellListItemPropsType {
  align?: 'top' | 'middle' | 'bottom'
  disabled?: boolean
  multipleLine?: boolean
  children?: ReactNode
  header?: any
  body?: any
  extra?: any
  footer?: any
  arrow?: 'right' | 'down' | 'up' | 'empty' | ''
  wrap?: boolean
  activeStyle?: React.CSSProperties
  error?: boolean
  platform?: 'android' | 'ios'
  bodyStyle?: any
  isLast?: boolean
  renderLineView?: () => React.ReactNode
  renderIcons?: (params:any) => React.ReactNode
  lineViewStyle?: React.CSSProperties
}
export interface renderBodyParams {}

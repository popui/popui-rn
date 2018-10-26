import React, { ReactNode } from 'react'

export interface CellListItemPropsType {
  align?: 'top' | 'middle' | 'bottom'
  disabled?: boolean
  multipleLine?: boolean
  children?: ReactNode
  header?: ReactNode | null
  extra?: ReactNode
  arrow?: 'horizontal' | 'down' | 'up' | 'empty' | ''
  wrap?: boolean
  activeStyle?: React.CSSProperties
  error?: boolean
  platform?: 'android' | 'ios'
  bodyStyle?:any
}

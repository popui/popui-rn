import React from 'react'

export interface CellListPropsType {
  header?: (() => React.ReactType) | string | JSX.Element
  footer?: (() => React.ReactType) | string | JSX.Element
  renderBody?: (() => React.ReactType)
  children?: false | JSX.Element | JSX.Element[]
  styles?: any
  bodyStyles?: any
  style?: any
}

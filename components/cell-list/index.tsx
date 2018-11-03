import React from 'react'

import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import { CellListPropsType } from './PropsType'
import cellStyle from './style/index'
import CellsListTitle from '../cell-list-title'
import CellsListTips from '../cells-list-tips'

export interface CellsProps extends CellListPropsType {
  styles?: typeof cellStyle
  style?: StyleProp<ViewStyle>
}

const cellsStyles: any = StyleSheet.create<any>(cellStyle)

export default class CellList extends React.Component<CellsProps, any> {
  static defaultProps = {
    styles: cellsStyles,
  }
  renderHeader = () => {
    const { header } = this.props
    console.log('CellList renderHeader', {
      header,
    })
    if (typeof header === 'function') {
      return header()
    }
    if (typeof header === 'string') {
      return <CellsListTitle>{header}</CellsListTitle>
    }
    return null
  }
  renderFooter = () => {
    const { footer } = this.props
    if (typeof footer === 'function') {
      return footer()
    }
    if (typeof footer === 'string') {
      return <CellsListTips>{footer}</CellsListTips>
    }
    return null
  }
  renderChildrenItems = () => {
    const { children } = this.props
    if (!children) {
      return null
    }
    const childrenLen = React.Children.count(children)
    const lastIndex = childrenLen - 1
    const childrenWithProps = React.Children.map(
      children,
      (child: any, idx: number) => {
        if (idx === lastIndex) {
          return React.cloneElement(child, { isLast: true })
        }
        return child
      }
    )
    return childrenWithProps
  }
  renderBody = () => {
    const { styles, bodyStyles, renderBody } = this.props
    if (renderBody) {
      return renderBody()
    }
    return (
      <View name="CellListBody" style={[styles!.body, bodyStyles]}>
        {this.renderChildrenItems()}
      </View>
    )
  }
  render() {
    const {
      children,
      style,
      styles,
      header,
      footer,
      renderBody,
      ...restProps
    } = this.props
    // const containerStyle = [
    //   styles!.container,
    //   style,
    // ]
    return (
      <View name="CellListContianer" {...restProps} style={style}>
        {this.renderHeader()}
        {this.renderBody()}
        {this.renderFooter()}
      </View>
    )
  }
}

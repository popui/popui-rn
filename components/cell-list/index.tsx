import React from 'react'

import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import { CellListPropsType } from './PropsType'
import cellStyle from './style/index'
import CellsTitle from '../cells-title'
import CellsTips from '../cells-tips'

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
    if (typeof header === 'function') {
      return header()
    }
    if (typeof header === 'string') {
      return <CellsTitle>{header}</CellsTitle>
    }
    return null
  }
  renderFooter = () => {
    const { footer } = this.props
    if (typeof footer === 'function') {
      return footer()
    }
    if (typeof footer === 'string') {
      return <CellsTips>{footer}</CellsTips>
    }
    return null
  }
  renderChildrenItems = () => {
    const { children } = this.props
    if (!children) {
      return null
    }
    const childrenWithProps = React.Children.map(
      children,
      (child: any, idx: number) => {
        if (idx === 0) {
          return React.cloneElement(child, { isFirst: true })
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
      <View style={[styles!.body, bodyStyles]}>
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

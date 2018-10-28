/* tslint:disable:jsx-no-multiline-js */
import React from 'react'

import { Image, StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import { CellListItemPropsType } from './PropsType'
import listItemStyle from './style/index'
import TouchableWithFallback from '../touchable-with-fallback'
// import CellItemText from '../cell-item-text'
import CellItemHeader from '../cell-item-header'
import CellItemBody from '../cell-item-body'
import CellItemExtra from '../cell-item-extra'
import CellItemFooter from '../cell-item-footer'
import CellItemIcons from '../cell-item-icons'
import { noopFunc } from '../_util/noop'

export interface ListItemProps extends CellListItemPropsType {
  styles?: any
  onClick?: () => void
  style?: StyleProp<ViewStyle>
}

const listItemStyles: any = StyleSheet.create<any>(listItemStyle)

export default class CellItem extends React.Component<ListItemProps, any> {
  static defaultProps: Partial<ListItemProps> = {
    multipleLine: false,
    wrap: false,
    styles: listItemStyles,
    onClick: noopFunc,
  }
  private numberOfLinesProp: any
  // private underlayColorProp: any

  renderHeader = () => {
    const { header, error, multipleLine } = this.props
    if (!header) {
      return null
    }
    const renderParmas = {
      error,
      multipleLine,
    }
    if (typeof header === 'function') {
      return header(renderParmas)
    }
    return <CellItemHeader {...renderParmas}>{header}</CellItemHeader>
  }
  renderBody = () => {
    const { error, body } = this.props
    if (!body) {
      return null
    }
    const renderParmas = {
      error,
      numberOfLinesProp: this.numberOfLinesProp,
    }
    if (typeof body === 'function') {
      return body(renderParmas)
    }
    return <CellItemBody {...renderParmas}>{body}</CellItemBody>
  }
  renderExtra = () => {
    const { error, extra } = this.props
    if (!extra) {
      return null
    }
    const renderParmas = {
      error,
      numberOfLinesProp: this.numberOfLinesProp,
    }
    if (typeof extra === 'function') {
      return extra(renderParmas)
    }
    return <CellItemExtra {...renderParmas}>{extra}</CellItemExtra>
  }
  renderIcons = () => {
    const { arrow, error, renderIcons } = this.props
    const renderParmas = {
      arrow,
      error,
    }
    if (renderIcons) {
      return renderIcons(renderParmas)
    }
    return <CellItemIcons {...renderParmas} />
  }
  renderFooter = () => {
    const { footer, error } = this.props
    if (!footer) {
      return null
    }
    const renderParmas = {
      numberOfLinesProp: this.numberOfLinesProp,
      error,
    }
    if (typeof footer === 'function') {
      return footer()
    }
    return <CellItemFooter {...renderParmas}>{footer}</CellItemFooter>
  }
  renderLineView = () => {
    const {
      styles,
      multipleLine,
      align,
      isLast,
      renderLineView,
      lineViewStyle,
    } = this.props
    if (renderLineView) {
      return renderLineView()
    }
    const itemStyles = styles! // assert none-null none-undefined
    let alignStyle = {}

    if (align === 'top') {
      alignStyle = {
        alignItems: 'flex-start',
      }
    } else if (align === 'bottom') {
      alignStyle = {
        alignItems: 'flex-end',
      }
    }
    return (
      <View
        style={[
          itemStyles.cellLineView,
          multipleLine && itemStyles.multipleLine,
          multipleLine && alignStyle,
          isLast ? { borderBottomWidth: 0 } : null,
          lineViewStyle,
        ]}
      >
        {this.renderBody()}
        {this.renderExtra()}
        {this.renderIcons()}
        {this.renderFooter()}
      </View>
    )
  }

  buildProps = () => {
    let numberOfLinesProps = {} // 默认不设置 numberOfLines
    if (!this.props.wrap) {
      numberOfLinesProps = {
        numberOfLines: 1,
      }
    }
    this.numberOfLinesProp = numberOfLinesProps
  }
  render() {
    const {
      styles,
      children,
      multipleLine,
      header,
      extra,
      arrow,
      style,
      onClick,
      wrap,
      disabled,
      align,
      ...restProps
    } = this.props
    const itemStyles = styles! // assert none-null none-undefined
    this.buildProps()
    let _disabled = disabled
    if (!arrow) {
      _disabled = true // 不显示箭头就不响应点击
    }

    const cellItemStyle = [
      itemStyles.cellItem,
      disabled && itemStyles.cellItemDisabled,
      style,
    ]
    return (
      <TouchableWithFallback
        disabled={_disabled}
        onPress={onClick}
        {...restProps}
      >
        <View style={cellItemStyle}>
          {this.renderHeader()}
          {this.renderLineView()}
        </View>
      </TouchableWithFallback>
    )
  }
}

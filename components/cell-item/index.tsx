/* tslint:disable:jsx-no-multiline-js */
import React from 'react'

import { Image, StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import { CellListItemPropsType } from './PropsType'
import listItemStyle from './style/index'
import TouchableWithFallback from '../touchable-with-fallback'
import CellItemText from '../cell-item-text'
import CellItemFooter from '../cell-item-footer'
import {noopFunc} from '../_util/noop'

export interface ListItemProps extends CellListItemPropsType {
  styles?: {
    underlayColor: {}
    body: {}
    bodyText: {}
    column: {}
    extra: {}
    extraText: {}
    Arrow: {}
    arrowContainer: {}
    ArrowV: {}
    Item: {}
    Thumb: {}
    multipleThumb: {}
    Line: {}
    multipleLine: {}
  }
  onClick?: () => void
  onPressIn?: () => void
  onPressOut?: () => void
  style?: StyleProp<ViewStyle>
}

const listItemStyles: any = StyleSheet.create<any>(listItemStyle)

export default class CellItem extends React.Component<ListItemProps, any> {
  static defaultProps: Partial<ListItemProps> = {
    multipleLine: false,
    wrap: false,
    styles: listItemStyles,
    onClick:noopFunc
  }
  private numberOfLinesProp: any
  private underlayColorProp: any
  renderBody = () => {
    const { styles, children } = this.props
    const itemStyles = styles! // assert none-null none-undefined

    let contentDom
    if (Array.isArray(children)) {
      const tempContentDom: any[] = []
      children.forEach((el, index) => {
        if (React.isValidElement(el)) {
          tempContentDom.push(el)
        } else {
          tempContentDom.push(
            <CellItemText {...this.numberOfLinesProp} key={`${index}-children`}>
              {el}
            </CellItemText>
          )
        }
      })
      contentDom = (
        <View style={[itemStyles.body, itemStyles.column]}>
          {tempContentDom}
        </View>
      )
    } else {
      if (children && React.isValidElement(children)) {
        contentDom = (
          <View style={[itemStyles.body, itemStyles.column]}>{children}</View>
        )
      } else {
        contentDom = (
          <View style={[itemStyles.body, itemStyles.column]}>
            <CellItemText {...this.numberOfLinesProp}>{children}</CellItemText>
          </View>
        )
      }
    }
    return contentDom
  }
  renderExtra = () => {
    const { styles, extra } = this.props
    const itemStyles = styles! // assert none-null none-undefined
    let extraDom
    if (extra) {
      extraDom = (
        <View style={[itemStyles.extra, itemStyles.column]}>
          <CellItemText
            style={[itemStyles.extraText]}
            {...this.numberOfLinesProp}
          >
            {extra}
          </CellItemText>
        </View>
      )
      if (React.isValidElement(extra)) {
        const extraChildren = (extra.props as any).children
        if (Array.isArray(extraChildren)) {
          const tempExtraDom: any[] = []
          extraChildren.forEach((el, index) => {
            if (typeof el === 'string') {
              tempExtraDom.push(
                <CellItemText
                  style={[itemStyles.extraText]}
                  ƒ
                  {...this.numberOfLinesProp}
                  key={`${index}-children`}
                >
                  {el}
                </CellItemText>
              )
            } else {
              tempExtraDom.push(el)
            }
          })
          extraDom = (
            <View style={[itemStyles.extra, itemStyles.column]}>
              {tempExtraDom}
            </View>
          )
        } else {
          extraDom = extra
        }
      }
    }
    return extraDom
  }
  renderArrowView = () => {
    const { arrow } = this.props
    if (!arrow) {
      return null
    }
    const itemStyles = this.props.styles! // assert none-null none-undefined
    const arrEnum = {
      horizontal: (
        <Image
          source={require('../style/images/arrow.png')}
          style={itemStyles.Arrow}
        />
      ),
      down: (
        <Image
          source={require('../style/images/arrow-down.png')}
          style={itemStyles.ArrowV}
        />
      ),
      up: (
        <Image
          source={require('../style/images/arrow-up.png')}
          style={itemStyles.ArrowV}
        />
      ),
    }
    return <View style={itemStyles.arrowContainer}>{arrEnum[arrow]}</View>
  }
  renderItemHeader = () => {
    const { header, styles, multipleLine } = this.props
    const itemStyles = styles! // assert none-null none-undefined
    if (typeof header === 'string') {
      return (
        <Image
          source={{ uri: header }}
          style={[itemStyles.Thumb, multipleLine && itemStyles.multipleThumb]}
        />
      )
    }
    return header
  }
  renderItemFooter = () => {
    const { footer } = this.props
    return <CellItemFooter>{footer}</CellItemFooter>
  }
  renderItemLineView = () => {
    const { styles, multipleLine, align, isLast, bodyStyle } = this.props
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
          itemStyles.Line,
          multipleLine && itemStyles.multipleLine,
          multipleLine && alignStyle,
          isLast ? { borderBottomWidth: 0 } : null,
        ]}
      >
        {this.renderBody()}
        {this.renderExtra()}
        {this.renderArrowView()}
        {this.renderItemFooter()}
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
      onPressIn,
      onPressOut,
      wrap,
      disabled,
      align,
      ...restProps
    } = this.props
    const itemStyles = styles! // assert none-null none-undefined
    this.buildProps()
    let _disabled = disabled
    if(!arrow){
      _disabled = true // 不显示箭头就不响应点击
    }
    return (
      <TouchableWithFallback
        disabled={_disabled}
        onPress={onClick}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
      >
        <View {...restProps} style={[itemStyles.Item, style]}>
          {this.renderItemHeader()}
          {this.renderItemLineView()}
        </View>
      </TouchableWithFallback>
    )
  }
}

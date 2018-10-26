/* tslint:disable:jsx-no-multiline-js */
import React from 'react'

import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native'
import { CellListItemPropsType } from './PropsType'
import listItemStyle from './style/index'
import TouchableWithFallback from '../touchable-with-fallback'

export interface ListItemProps extends CellListItemPropsType {
  styles?: {
    underlayColor: {}
    Content: {}
    column: {}
    Extra: {}
    Arrow: {}
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
  }
  private numberOfLines: any
  renderContent = () => {
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
            <Text
              style={[itemStyles.Content]}
              {...this.numberOfLines}
              key={`${index}-children`}
            >
              {el}
            </Text>
          )
        }
      })
      contentDom = <View style={[itemStyles.column]}>{tempContentDom}</View>
    } else {
      if (children && React.isValidElement(children)) {
        contentDom = <View style={[itemStyles.column]}>{children}</View>
      } else {
        contentDom = (
          <View style={[itemStyles.column]}>
            <Text style={[itemStyles.Content]} {...this.numberOfLines}>
              {children}
            </Text>
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
        <View style={[itemStyles.column]}>
          <Text style={[itemStyles.Extra]} {...this.numberOfLines}>
            {extra}
          </Text>
        </View>
      )
      if (React.isValidElement(extra)) {
        const extraChildren = (extra.props as any).children
        if (Array.isArray(extraChildren)) {
          const tempExtraDom: any[] = []
          extraChildren.forEach((el, index) => {
            if (typeof el === 'string') {
              tempExtraDom.push(
                <Text
                  {...this.numberOfLines}
                  style={[itemStyles.Extra]}
                  key={`${index}-children`}
                >
                  {el}
                </Text>
              )
            } else {
              tempExtraDom.push(el)
            }
          })
          extraDom = <View style={[itemStyles.column]}>{tempExtraDom}</View>
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
    return (arrEnum as any)[arrow] || <View style={itemStyles.Arrow} />
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
  renderItemFooter = () => {}
  renderItemBody = () => {
    const { styles, multipleLine, align } = this.props
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
        ]}
      >
        {this.renderContent()}
        {this.renderExtra()}
        {this.renderArrowView()}
      </View>
    )
  }

  setnumberOfLines = () => {
    let numberOfLines = {}
    if (this.props.wrap === false) {
      numberOfLines = {
        numberOfLines: 1,
      }
    }
    this.numberOfLines = numberOfLines
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
    this.setnumberOfLines()

    let underlayColor = {}

    if (!disabled && onClick) {
      // 可以点击
      underlayColor = {
        underlayColor: StyleSheet.flatten(itemStyles.underlayColor)
          .backgroundColor,
        activeOpacity: 0.5,
      }
    } else {
      underlayColor = {
        activeOpacity: 1,
      }
    }

    return (
      <TouchableWithFallback
        disabled={disabled}
        {...underlayColor}
        onPress={onClick ? onClick : undefined}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
      >
        <View {...restProps} style={[itemStyles.Item, style]}>
          {this.renderItemHeader()}
          {this.renderItemBody()}
          {this.renderItemFooter()}
        </View>
      </TouchableWithFallback>
    )
  }
}

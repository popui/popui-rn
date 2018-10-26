import React from 'react'
import { Image, StyleSheet, Text, View, ViewStyle } from 'react-native'
import themeVars from '../style/themes/default'

// import WeuiIcon from '../weui-icon'
const styles = StyleSheet.create({
  cellFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  cellFooterText: {
    textAlign: 'center',
    color: themeVars.TextColorGray,
    fontSize: themeVars.CellFontSize,
  },
  vcode: {
    width: 100,
    height: 44,
  },
})

export interface CellFooterProps {
  error?: boolean
  access?: boolean
  children?: React.ReactNode
  style?: ViewStyle
}

export interface CellFooterState {}

export default class CellItemFooter extends React.Component<
  CellFooterProps,
  CellFooterState
> {
  private renderChildrenWithProps = () => {
    const { children, style, access, ...others } = this.props
    const childrenWithProps = React.Children.map(children, (child: any) => {
      if (!child.type) {
        return (
          <Text style={[styles.cellFooterText, style]} {...others}>
            {child}
          </Text>
        )
      }
      return child
    })
    return childrenWithProps
  }

  public render() {
    const { style } = this.props
    return (
      <View style={[styles.cellFooter, style]}>
        {this.renderChildrenWithProps()}
      </View>
    )
  }
}

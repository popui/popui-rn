import React from 'react'
import { StyleSheet, Text, ViewPropTypes, ViewStyle } from 'react-native'
import V from '../style/themes/default'

const styles = StyleSheet.create({
    label: {
        width: V.CellLabelWidth,
        fontSize: V.CellFontSize,
        marginTop: (V.CellLineHeight - V.CellFontSize) / 2,
        marginBottom: (V.CellLineHeight - V.CellFontSize) / 2,
    },
})


export interface CellLabelProps {
      style?: ViewStyle
    children?: string
}

export interface CellLabelState {
}

export default class CellLabel extends React.Component<CellLabelProps, CellLabelState> {
  public render() {
    const { style, children, ...others } = this.props
    // 最小是4
    // const textLength = children!.length > 4 ?children!.length:4
    return (
      <Text
        style={[styles.label, style]}
        numberOfLines={1}
        {...others}
    >
        {children}
    </Text>
    );
  }
}

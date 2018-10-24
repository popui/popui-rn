import React from 'react'

import { ViewStyle, StyleProp, StyleSheet, View } from 'react-native'
import WeuiIcon from '../weui-icon'
import { CheckboxPropsType } from './PropsType'
import CheckboxStyle from './style/index'

export interface ICheckboxNativeProps extends CheckboxPropsType {
  styles?: any
  style?: StyleProp<ViewStyle>
}

const CheckboxStyles = StyleSheet.create<any>(CheckboxStyle)

export default class Checkbox extends React.Component<
  ICheckboxNativeProps,
  any
> {
  static defaultProps = {
    styles: CheckboxStyles,
  }

  render(): JSX.Element {
    const { disabled, styles, checked, style } = this.props
    const colorProps: any = {}
    if (disabled) {
      colorProps.color = '#ADADAD'
    }
    const checkboxStyle = [
      styles.checkbox,
      disabled ? styles.disabled : null,
      style,
    ]
    return (
      <View style={checkboxStyle}>
        {checked && (
          <WeuiIcon name="success_no_circle" size={13} {...colorProps} />
        )}
      </View>
    )
  }
}

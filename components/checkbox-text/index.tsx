import React, { Children } from 'react'

import { StyleSheet, Text } from 'react-native'
import { CheckboxTextPropsType } from './PropsType'
import CheckboxTextStyle from './style/index'

const CheckboxTextStyles = StyleSheet.create<any>(CheckboxTextStyle)

export default class CheckboxText extends React.Component<
  CheckboxTextPropsType,
  any
> {
  static defaultProps = {
    styles: CheckboxTextStyles,
    disabled: false,
  }
  render(): JSX.Element {
    const { disabled, styles, children } = this.props
    const checkboxTextStyle = [
      styles.checkboxText,
      disabled ? styles.checkboxTextDisabled : null,
    ]
    return <Text style={checkboxTextStyle}>{children}</Text>
  }
}

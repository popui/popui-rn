import React from 'react'

import {
  ImageStyle,
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  // TouchableOpacity,
  View,
} from 'react-native'
import { CheckboxPropsType } from './PropsType'
import CheckboxStyle, { ICheckboxStyle } from './style/index'
import CheckboxText from '../checkbox-text'
import Checkbox from '../checkbox'
export interface ICheckboxNativeProps extends CheckboxPropsType {
  styles?: ICheckboxStyle
  style?: StyleProp<ImageStyle>
}

const CheckboxStyles = StyleSheet.create<any>(CheckboxStyle)

export default class CheckboxRow extends React.Component<
  ICheckboxNativeProps,
  any
> {
  static defaultProps = {
    styles: CheckboxStyles,
    disabled: false,
  }

  constructor(props: CheckboxPropsType, context: any) {
    super(props, context)

    this.state = {
      checked: props.checked || props.defaultChecked || false,
    }
  }

  static getDerivedStateFromProps(nextProps:ICheckboxNativeProps, prevState:any) {
    if (typeof nextProps.checked === 'boolean' && nextProps.checked!==prevState.checked) {
      return {
        checked: !!nextProps.checked,
      }
    }
    return null
  }

  handleClick = () => {
    const { disabled, onChange } = this.props
    const { checked } = this.state
    if (disabled) {
      return
    }
    if (typeof checked === 'boolean') {
      this.setState({
        checked: !checked,
      })
    }
    if (onChange) {
      onChange({ target: { checked } })
    }
  }
  renderChildren = () => {
    const { disabled, children, textStyle } = this.props
    if (typeof children === 'string') {
      return (
        <CheckboxText disabled={disabled} style={textStyle}>
          {children}
        </CheckboxText>
      )
    }
    return children
  }
  render(): JSX.Element {
    const { style, disabled } = this.props
    const styles = this.props.styles!
    const { checked } = this.state
    // const TouchableComp = disabled
    //   ? TouchableWithoutFeedback
    //   : TouchableOpacity;
    // const TouchableComp = TouchableWithoutFeedback;
    return (
      <TouchableWithoutFeedback onPress={this.handleClick}>
        <View style={[styles.wrapper, style]}>
          <Checkbox
            disabled={disabled}
            checked={checked}
            onChange={this.handleClick}
            style={styles.checkbox}
          />
          {this.renderChildren()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

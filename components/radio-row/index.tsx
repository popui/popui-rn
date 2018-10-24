import React from 'react'

import {
  ImageStyle,
  StyleProp,
  StyleSheet,
  TouchableWithoutFeedback,
  // TouchableOpacity,
  View,
} from 'react-native'
import { RadioPropsType } from './PropsType'
import RadioStyle, { IRadioStyle } from './style/index'
import RadioText from '../checkbox-text'
import Radio from '../checkbox'
export interface IRadioNativeProps extends RadioPropsType {
  styles?: IRadioStyle
  style?: StyleProp<ImageStyle>
}

const RadioStyles = StyleSheet.create<any>(RadioStyle)

export default class RadioRow extends React.Component<
  IRadioNativeProps,
  any
> {
  static defaultProps = {
    styles: RadioStyles,
    disabled: false,
  }

  constructor(props: RadioPropsType, context: any) {
    super(props, context)

    this.state = {
      checked: props.checked || props.defaultChecked || false,
    }
  }
  static getDerivedStateFromProps(nextProps:RadioPropsType, prevState:any) {
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
        <RadioText disabled={disabled} style={textStyle}>
          {children}
        </RadioText>
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
          <Radio
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

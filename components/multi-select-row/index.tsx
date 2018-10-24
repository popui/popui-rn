import React from 'react'
import {
  StyleSheet,
  TouchableWithoutFeedback,
  // TouchableOpacity,
  Text,
  View,
} from 'react-native'
import { MultiSelectPropsType } from './PropsType'
import RadioStyle from './style/index'
import MultiSelectIconControl from '../multi-select-icon-control'

const RadioStyles = StyleSheet.create<any>(RadioStyle)

export default class MultiSelectRow extends React.Component<MultiSelectPropsType, any> {
  static defaultProps = {
    styles: RadioStyles,
    disabled: false,
  }

  constructor(props: MultiSelectPropsType, context: any) {
    super(props, context)
    this.state = {
      checked: props.checked || props.defaultChecked || false,
    }
  }

  static getDerivedStateFromProps(nextProps: MultiSelectPropsType, prevState: any) {
    if (
      typeof nextProps.checked === 'boolean' &&
      nextProps.checked !== prevState.checked
    ) {
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
    if (typeof children !== 'string') {
      return children
    }
    const styles = this.props.styles!
    const style = [
      styles.rowText,
      disabled ? styles.rowTextDisabled : null,
      textStyle,
    ]
    return (
      <Text style={style}>
        {children}
      </Text>
    )
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
          <MultiSelectIconControl
            disabled={disabled}
            checked={checked}
            style={styles.icon}
          />
          {this.renderChildren()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

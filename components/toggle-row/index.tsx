import React from 'react'
import {
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'
import { ToggleRowPropsType } from './PropsType'
import ToggleRowStyle from './style/index'
// import MultiSelectIconControl from '../multi-select-icon-control'
import ToggleIconCheckBox from '../toggle-icon-check-box'
// import TouchableWithFallback from '../touchable-with-fallback'
const ToggleRowStyles = StyleSheet.create<any>(ToggleRowStyle)

export default class ToggleRow extends React.Component<
  ToggleRowPropsType,
  any
> {
  static defaultProps = {
    styles: ToggleRowStyles,
    disabled: false,
  }

  constructor(props: ToggleRowPropsType, context: any) {
    super(props, context)
    this.state = {
      checked: props.checked || props.defaultChecked || false,
    }
  }

  static getDerivedStateFromProps(
    nextProps: ToggleRowPropsType,
    prevState: any
  ) {
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

  onPress = () => {
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
    return <Text style={style}>{children}</Text>
  }
  renderIcon = () => {
    const { disabled, styles, renderIcon } = this.props
    const { checked } = this.state
    const props = {
      checked,
      disabled,
      style: styles.icon,
    }
    if (renderIcon) {
      return renderIcon(props)
    }
    return <ToggleIconCheckBox {...props} />
  }
  render(): JSX.Element {
    const { styles, disabled, style } = this.props
    // const TouchableComp = TouchableWithFallback
    return (
      <TouchableWithoutFeedback onPress={this.onPress} disabled={disabled}>
        <View style={[styles.wrapper, style]}>
          {this.renderIcon()}
          {this.renderChildren()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

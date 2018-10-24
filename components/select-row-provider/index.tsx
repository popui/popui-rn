import React from 'react'
import {
  StyleSheet,
  // TouchableWithoutFeedback,
  // TouchableOpacity,
  Text,
  // View,
} from 'react-native'
import { SelectRowProviderPropsType } from './PropsType'
import SelectRowProviderStyle from './style/index'
// import MultiSelectIconControl from '../multi-select-icon-control'

const SelectRowProviderStyles = StyleSheet.create<any>(SelectRowProviderStyle)

export default class SelectRowProvider extends React.Component<SelectRowProviderPropsType, any> {
  static defaultProps = {
    styles: SelectRowProviderStyles,
    disabled: false,
  }

  constructor(props: SelectRowProviderPropsType, context: any) {
    super(props, context)
    this.state = {
      checked: props.checked || props.defaultChecked || false,
    }
  }

  static getDerivedStateFromProps(nextProps: SelectRowProviderPropsType, prevState: any) {
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
    return (
      <Text style={style}>
        {children}
      </Text>
    )
  }

  render(): JSX.Element {
    const { checked: originChecked,children,onChange,...restProps } = this.props
    const { checked } = this.state
    return children({
      ...restProps,
      checked,
      renderChildren:this.renderChildren,
      onPress:this.onPress
    })
    // const TouchableComp = disabled
    //   ? TouchableWithoutFeedback
    //   : TouchableOpacity;
    // const TouchableComp = TouchableWithoutFeedback;
    // return (
    //   <TouchableWithoutFeedback onPress={this.handleClick}>
    //     <View style={[styles.wrapper, style]}>
    //       <MultiSelectIconControl
    //         disabled={disabled}
    //         checked={checked}
    //         style={styles.icon}
    //       />
    //       {this.renderChildren()}
    //     </View>
    //   </TouchableWithoutFeedback>
    // )
  }
}

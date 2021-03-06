/**
 * 根据平台和环境选择合适的 Touchable 组件
 * 优先级: TouchableNativeFeedback > TouchableHighlight > TouchableOpacity > TouchableWithoutFeedback
 * 参考: https://github.com/react-community/react-native-platform-touchable
 * 默认的 fallback 从 TouchableOpacity 改为 TouchableHighlight
 */
import React from 'react'
import {
  Platform,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native'
import themeVars from '../style/themes/default'

let TouchableComponent: any

if (Platform.OS === 'android') {
  TouchableComponent =
    // Platform.Version <= 20 ? TouchableOpacity : TouchableNativeFeedback
    Platform.Version <= 20 ? TouchableHighlight : TouchableNativeFeedback
} else {
  // TouchableComponent = TouchableOpacity
  TouchableComponent = TouchableHighlight
}

if (TouchableComponent !== TouchableNativeFeedback) {
  TouchableComponent.SelectableBackground = () => ({})
  TouchableComponent.SelectableBackgroundBorderless = () => ({})
  TouchableComponent.Ripple = () => ({})
  TouchableComponent.canUseNativeForeground = () => false
}

export default class TouchableWithFallback extends React.Component<any, any> {
  static SelectableBackground = TouchableComponent.SelectableBackground
  static SelectableBackgroundBorderless =
    TouchableComponent.SelectableBackgroundBorderless
  static Ripple = TouchableComponent.Ripple
  static canUseNativeForeground = TouchableComponent.canUseNativeForeground
  renderTouchableWithoutFeedback = () => {
    let {
      disabled,
      children,
      foreground,
      background,
      useForeground,
      activeOpacity = 0.5,
      underlayColor = themeVars.BgColorActive,
      ...restProps
    } = this.props
    return (
      <TouchableWithoutFeedback {...restProps}>
        {children}
      </TouchableWithoutFeedback>
    )
  }
  render() {
    let {
      disabled,
      children,
      foreground,
      background,
      useForeground,
      activeOpacity = 0.5,
      underlayColor = themeVars.BgColorActive,
      ...restProps
    } = this.props
    // 如果 disabled, 则不可点击
    if (disabled) {
      return this.renderTouchableWithoutFeedback()
    }
    // Even though it works for TouchableWithoutFeedback and
    // TouchableNativeFeedback with this component, we want
    // the API to be the same for all components so we require
    // exactly one direct child for every touchable type.
    children = React.Children.only(children)

    // Android 高版本,TouchableNativeFeedback
    if (TouchableComponent === TouchableNativeFeedback) {
      useForeground =
        foreground && TouchableNativeFeedback.canUseNativeForeground()

      if (foreground && background) {
        console.warn(
          'Specified foreground and background for Touchable, only one can be used at a time. Defaulted to foreground.'
        )
      }

      return (
        <TouchableNativeFeedback
          {...restProps}
          useForeground={useForeground}
          background={(useForeground && foreground) || background}
        >
          {children}
        </TouchableNativeFeedback>
      )
    }

    if (TouchableComponent === TouchableHighlight) {
      return (
        <TouchableHighlight
          {...restProps}
          underlayColor={underlayColor}
          activeOpacity={activeOpacity}
        >
          {children}
        </TouchableHighlight>
      )
    }

    if (TouchableComponent === TouchableOpacity) {
      return (
        <TouchableOpacity {...restProps} activeOpacity={activeOpacity}>
          {children}
        </TouchableOpacity>
      )
    }

    // 低版本 TouchableWithoutFeedback
    if (TouchableComponent === TouchableWithoutFeedback) {
      return this.renderTouchableWithoutFeedback()
    }

    // 其他其情况, FallBack
    const TouchableFallback = this.props.fallback || TouchableComponent
    return (
      <TouchableFallback
        {...restProps}
        underlayColor={underlayColor}
        activeOpacity={activeOpacity}
      >
        {children}
      </TouchableFallback>
    )
  }
}

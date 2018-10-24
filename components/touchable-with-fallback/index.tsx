/**
 * 根据平台和环境选择合适的 Touchable 组件
 * 优先级: TouchableNativeFeedback > TouchableHighlight > TouchableOpacity > TouchableWithoutFeedback
 * 参考: https://github.com/react-community/react-native-platform-touchable
 * 默认的 fallback 从 TouchableOpacity 改为 TouchableHighlight
 */
import React from 'react'
;
import {
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View
} from 'react-native'

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

  render() {
    let {
      children,
      style,
      foreground,
      background,
      useForeground,
      ...props
    } = this.props

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
        <TouchableComponent
          {...props}
          useForeground={useForeground}
          background={(useForeground && foreground) || background}
        >
          <View style={style}>{children}</View>
        </TouchableComponent>
      )
    }
    // 低版本 TouchableWithoutFeedback
    if (TouchableComponent === TouchableWithoutFeedback) {
      return (
        <TouchableWithoutFeedback {...props}>
          <View style={style}>{children}</View>
        </TouchableWithoutFeedback>
      )
    }

    // 其他其情况, FallBack
    const TouchableFallback = this.props.fallback || TouchableComponent
    return (
      <TouchableFallback {...props} style={style}>
        {children}
      </TouchableFallback>
    )
  }
}

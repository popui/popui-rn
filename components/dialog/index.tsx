import React from 'react'

import {
  LayoutChangeEvent,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  TextStyle,
} from 'react-native'
import themeVars from '../style/themes/default'
// import RCModal from "rmc-dialog/lib/Modal";
import { DialogPropsType, ActionPropsType } from './PropsType'
import modalStyle, { IModalStyle } from './style/index'
import { noopFunc } from '../_util/noop'
import TouchableWithFallback from '../touchable-with-fallback'
// debug
// import { createDebug } from "../_util/debug";
// const debug = createDebug("popui:modal/Modal");

export interface IModalNativeProps extends DialogPropsType<TextStyle> {
  styles?: IModalStyle
  style?: StyleProp<ViewStyle>
  bodyStyle?: StyleProp<ViewStyle>
}

const modalStyles = StyleSheet.create<any>(modalStyle)

class Dialog extends React.Component<IModalNativeProps, any> {
  private horizontalFlex: any
  static defaultProps = {
    title: '',
    showCloseButton: false,
    style: {},
    bodyStyle: {},
    onClose: noopFunc,
    actions: [],
    styles: modalStyles,
    actionsDirection: 'horizontal',
  }

  root: View | null

  onFooterLayout = (e: LayoutChangeEvent) => {
    const styles = this.props.styles!
    if (this.root) {
      const paddingBottom = e.nativeEvent.layout.height
      this.root.setNativeProps({
        style: [styles.dialogRoot, { paddingBottom }],
      })
    }
  }

  saveRootRef = (root: any) => {
    this.root = root
  }
  renderActionButton = (action: ActionPropsType<any>, index: number) => {
    const { onClose, renderActionButton } = this.props
    if (renderActionButton) {
      return renderActionButton(action, index)
    }
    const { text = `按钮${index}`, type, onPress, style } = action
    const actions = this.props.actions!
    const styles = this.props.styles!
    // 按钮数量多余1个
    const hasMoreThanOneButton = actions.length > 1
    // 当前渲染的是最后一个
    const isLastButton = index === actions.length - 1
    // type
    let defaultType = 'default'
    if (isLastButton) {
      defaultType = 'primary'
    }
    const buttonType = type || defaultType

    // 自定义按钮样式
    let buttonStyle = {}
    const isActionsVertical = this.isActionsVertical()
    if (isActionsVertical) {
      buttonStyle = styles.buttonTextOperation
    }
    if (style && typeof style !== 'string') {
      buttonStyle = style
      // 如果是字符串, 转换成对象
      // Todo: 去掉
      // if (typeof buttonStyle === "string") {
      //   const styleMap: {
      //     [key: string]: object;
      //   } = {
      //     cancel: {},
      //     default: {},
      //     destructive: { color: "red" }
      //   };
      //   buttonStyle = styleMap[buttonStyle] || {};
      // }
    }
    // 最后一个按钮右边无 border
    const noneBorder =
      actions && hasMoreThanOneButton && isLastButton
        ? { borderRightWidth: 0 }
        : {}
    // 点击
    const onPressFn = async () => {
      if (onPress) {
        await onPress()
      }
      if (onClose) {
        onClose()
      }
    }
    // 一个按钮使用 buttonWrapV, 多于 1个 水平排列
    const buttonWrapStyle =
      actions && hasMoreThanOneButton ? styles.buttonWrapH : styles.buttonWrapV
    const textStyle = [
      styles.buttonText,
      styles[`buttonText_${buttonType}`],
      buttonStyle,
    ]
    return (
      <TouchableWithFallback
        key={index}
        style={this.horizontalFlex}
        underlayColor={themeVars.DialogLinkActiveBc}
        onPress={onPressFn}
      >
        <View style={[buttonWrapStyle, noneBorder]}>
          <Text style={textStyle}>{text}</Text>
        </View>
      </TouchableWithFallback>
    )
  }
  isActionsVertical = () => {
    return this.props.actionsDirection === 'vertical'
  }
  renderActions = () => {
    const { actions, renderActions } = this.props
    const isActionsVertical = this.isActionsVertical()
    if (renderActions) {
      return renderActions()
    }
    if (!actions || actions.length === 0) {
      return null
    }
    const styles = this.props.styles!
    // 默认垂直排列
    let btnGroupStyle = styles.buttonGroupV
    if (actions.length > 1 && !isActionsVertical) {
      // 水平排列
      btnGroupStyle = styles.buttonGroupH
      this.horizontalFlex = { flex: 1 }
    } else {
      this.horizontalFlex = {}
    }
    const actionButtons = actions.map((button, i) =>
      this.renderActionButton(button, i)
    )
    return (
      <View
        style={[btnGroupStyle, styles.actions]}
        onLayout={this.onFooterLayout}
      >
        {actionButtons}
      </View>
    )
  }

  renderCloseButton = () => {
    const { onClose, renderCloseButton } = this.props
    if (renderCloseButton) {
      return renderCloseButton()
    }
    const styles = this.props.styles!
    return (
      <TouchableOpacity onPress={onClose} style={[styles.closeWrap]}>
        <Text style={[styles.close]}>×</Text>
      </TouchableOpacity>
    )
  }
  render() {
    const { title, showCloseButton, children, style, bodyStyle } = this.props

    const styles = this.props.styles!
    const actionsDom = this.renderActions()
    return (
      <View
        displayName="dialogRoot"
        style={[styles.dialogRoot, style]}
        ref={this.saveRootRef}
      >
        {title ? <Text style={[styles.header]}>{title}</Text> : null}
        <View displayName="dialogBody" style={[styles.body, bodyStyle]}>
          {children}
        </View>
        {actionsDom}
        {showCloseButton && this.renderCloseButton()}
      </View>
    )
  }
}

export default Dialog
